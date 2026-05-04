require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const cors = require('cors');
const { body, validationResult } = require('express-validator');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(cors({ origin: process.env.ALLOWED_ORIGIN || '*' }));
app.use(express.json());

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { error: 'Too many requests, please try again later.' }
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD
  }
});

app.post('/api/contact', contactLimiter, [
  body('name').trim().notEmpty().withMessage('Name is required').isLength({ max: 100 }),
  body('email').trim().isEmail().withMessage('Valid email is required').normalizeEmail(),
  body('message').trim().notEmpty().withMessage('Message is required').isLength({ max: 2000 }),
  body('company').trim().isLength({ max: 100 }).optional(),
  body('service').trim().isLength({ max: 100 }).optional()
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: 'Invalid input. Please check your details.' });
  }

  const { name, email, company, service, message } = req.body;

  const html = `
  <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
    <div style="background:#0D1F3C;padding:28px 32px;border-radius:10px 10px 0 0;">
      <h1 style="color:#10B981;margin:0;font-size:22px;font-weight:700;">New Enquiry</h1>
      <p style="color:rgba(255,255,255,0.6);margin:6px 0 0;font-size:13px;">FoodSafe Solutions — Contact Form</p>
    </div>
    <div style="background:#f4f7fb;padding:28px 32px;border-radius:0 0 10px 10px;border:1px solid #e2e8f0;border-top:none;">
      <table style="width:100%;border-collapse:collapse;">
        <tr>
          <td style="padding:10px 0;color:#64748b;font-size:13px;width:110px;vertical-align:top;">Name</td>
          <td style="padding:10px 0;font-weight:600;color:#1e293b;">${name}</td>
        </tr>
        <tr>
          <td style="padding:10px 0;color:#64748b;font-size:13px;vertical-align:top;">Email</td>
          <td style="padding:10px 0;"><a href="mailto:${email}" style="color:#10B981;text-decoration:none;">${email}</a></td>
        </tr>
        ${company ? `<tr><td style="padding:10px 0;color:#64748b;font-size:13px;vertical-align:top;">Company</td><td style="padding:10px 0;color:#1e293b;">${company}</td></tr>` : ''}
        ${service ? `<tr><td style="padding:10px 0;color:#64748b;font-size:13px;vertical-align:top;">Service</td><td style="padding:10px 0;color:#1e293b;">${service}</td></tr>` : ''}
      </table>
      <div style="border-top:1px solid #e2e8f0;margin:16px 0;"></div>
      <p style="color:#64748b;font-size:13px;margin:0 0 10px;">Message</p>
      <p style="color:#1e293b;line-height:1.7;margin:0;white-space:pre-wrap;">${message}</p>
      <div style="margin-top:28px;">
        <a href="mailto:${email}"
           style="display:inline-block;background:#10B981;color:#fff;padding:12px 24px;border-radius:50px;text-decoration:none;font-size:14px;font-weight:700;">
          Reply to ${name}
        </a>
      </div>
    </div>
  </div>`;

  try {
    await transporter.sendMail({
      from: `"FoodSafe Solutions Website" <${process.env.GMAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      replyTo: email,
      subject: `New enquiry from ${name}${company ? ` — ${company}` : ''}`,
      html
    });
    res.json({ success: true });
  } catch (err) {
    console.error('Mail error:', err.message);
    res.status(500).json({ error: 'Failed to send message. Please try again or contact us directly.' });
  }
});

app.get('/health', (_req, res) => res.json({ status: 'ok' }));

app.listen(PORT, () => console.log(`FoodSafe API running on port ${PORT}`));
