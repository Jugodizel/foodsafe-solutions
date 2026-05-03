// ===== TRANSLATIONS =====
const translations = {
  en: {
    nav_home: 'Home', nav_services: 'Services', nav_about: 'About', nav_contact: 'Contact',
    btn_book: 'Book a Consultation',
    hero_badge: 'Certified Food Safety Experts',
    hero_h1: 'Food Safety &amp;<br><em>Quality Consulting</em>',
    hero_sub: 'Helping food businesses meet regulatory standards, pass audits, and ensure product safety — from implementation to ongoing compliance.',
    hero_b1: 'HACCP & ISO 22000 implementation',
    hero_b2: 'Audit & inspection preparation',
    hero_b3: 'Quality control & problem solving',
    btn_consultation: 'Book a Consultation', btn_explore: 'Explore Services',
    stat1: 'Audits Supported', stat2: 'Years Experience', stat3: 'Clients Served',
    services_label: 'What We Do',
    services_title: 'Expert Services for Food Businesses',
    services_sub: 'End-to-end food safety consulting tailored to your operations, regulations, and market requirements.',
    s1_title: 'Consulting',
    s1_desc: 'Comprehensive food safety consulting from system design to ongoing compliance — adapted to your size, structure, and certification goals.',
    s2_title: 'Laboratory & Expertise',
    s2_desc: 'Scientific-backed support for microbiological risk assessment, product validation, shelf-life testing, and contamination investigations.',
    s3_title: 'Training',
    s3_desc: 'Practical, engaging training programs for staff at every level — from food handlers to management teams — building lasting food safety culture.',
    tag_ext_qa: 'External QA', tag_audit: 'Audit Readiness',
    tag_micro: 'Micro Risk', tag_product_safety: 'Product Safety', tag_validation: 'Validation', tag_shelf: 'Shelf-Life', tag_root: 'Root Cause',
    tag_haccp_train: 'HACCP Training', tag_hygiene: 'Hygiene & GMP', tag_staff: 'Staff Education', tag_mgmt: 'Management',
    problems_label: 'Challenges We Solve',
    problems_title: 'Do Any of These Sound Familiar?',
    problems_sub: 'We work with companies facing real, costly food safety challenges — and we turn them into resolved, documented, compliant systems.',
    p1_title: 'Failed Inspections', p1_desc: 'Repeated non-conformities and regulatory citations with no clear path to resolution.',
    p2_title: 'Product Contamination', p2_desc: 'Microbiological or chemical contamination events threatening product safety and brand reputation.',
    p3_title: 'Customer Complaints', p3_desc: 'Rising complaint rates, product returns, or retailer pressure without root cause clarity.',
    p4_title: 'No HACCP or ISO System', p4_desc: 'Operating without a formal food safety management system, blocking access to new markets.',
    p5_title: 'Inconsistent Quality', p5_desc: 'Batch-to-batch variation undermining customer trust, shelf life, and production efficiency.',
    ind_label: 'Who We Work With', ind_title: 'Industries We Serve',
    ind_sub: 'From factory floors to restaurant kitchens — we bring the same rigour and expertise to every client.',
    ind1_title: 'Food Manufacturers', ind1_desc: 'Production facilities seeking certification, market access, or quality system maturity.',
    ind2_title: 'HoReCa', ind2_desc: 'Hotels, restaurants, and catering operations building compliant hygiene and safety systems.',
    ind3_title: 'Distributors', ind3_desc: 'Cold chain and logistics operators managing supplier standards and traceability requirements.',
    ind4_title: 'Startups & SMEs', ind4_desc: 'Growing food businesses that need professional-grade systems without an in-house QA team.',
    about_label: 'About Us',
    about_title: 'Deep Expertise.<br>Real-World Results.',
    about_desc: 'FoodSafe Solutions was built on the belief that food safety should be practical, not bureaucratic. We combine rigorous technical knowledge with hands-on experience across food manufacturing, laboratory management, and international certification bodies.',
    cred1_title: '25+ Years in Food Safety Management', cred1_desc: 'Extensive hands-on experience across production environments, quality teams, and regulatory landscapes.',
    cred2_title: 'Laboratory Management Background', cred2_desc: 'Deep expertise in microbiological risk assessment, analytical method validation, and lab accreditation processes.',
    cred3_title: 'Certified Lead Auditor', cred3_desc: 'Qualified to conduct and prepare businesses for ISO 22000, HACCP, BRC, and IFS audits at all levels.',
    cred4_title: 'Large-Scale Production Experience', cred4_desc: 'Proven track record implementing robust quality systems in high-throughput facilities and complex supply chains.',
    about_btn: 'Work With Us',
    pkg_label: 'Service Packages', pkg_title: 'Choose the Right Level of Support',
    pkg_sub: 'Flexible engagement models designed to match your stage, complexity, and budget. All packages include direct access to a senior consultant.',
    pkg1_tier: 'Basic', pkg1_title: 'Foundation',
    pkg1_desc: 'For businesses just beginning their food safety journey. We assess your current state, identify gaps, and build a clear compliance roadmap.',
    pkg1_f1: 'Initial food safety gap analysis', pkg1_f2: 'HACCP prerequisite programme setup',
    pkg1_f3: 'Written compliance roadmap', pkg1_f4: '1 on-site visit', pkg1_f5: 'Email support (30 days)',
    pkg2_badge: 'Most Popular', pkg2_tier: 'Standard', pkg2_title: 'Compliance',
    pkg2_desc: 'Full HACCP or ISO 22000 system implementation with documentation, staff training, and pre-audit readiness support.',
    pkg2_f1: 'Complete HACCP / ISO 22000 system', pkg2_f2: 'Full documentation package',
    pkg2_f3: 'Staff training sessions (up to 3)', pkg2_f4: 'Internal audit support',
    pkg2_f5: 'Pre-certification mock audit', pkg2_f6: '3 months ongoing support',
    pkg3_tier: 'Premium', pkg3_title: 'Outsourced QA',
    pkg3_desc: 'Your dedicated external Quality Assurance partner — ongoing management, audits, complaint handling, and continuous improvement.',
    pkg3_f1: 'Monthly on-site QA presence', pkg3_f2: 'Supplier audit programme',
    pkg3_f3: 'Customer complaint management', pkg3_f4: 'Continuous improvement reviews',
    pkg3_f5: 'Regulatory change monitoring', pkg3_f6: 'Unlimited advisory support',
    pkg_btn_req: 'Request Offer',
    cta_label: 'Get Started Today',
    cta_title: 'Ready to Build a Safer,<br>More Compliant Operation?',
    cta_desc: "Whether you're facing an upcoming audit, launching a new product, or building your quality systems from scratch — we're ready to help. Let's start with a no-obligation consultation.",
    cta_btn: 'Book a Free Consultation',
    contact_label: 'Get in Touch', contact_title: "Let's Talk About Your Needs",
    contact_sub: "Fill in the form and we'll get back to you within one business day.",
    form_name_label: 'Full Name', form_name_placeholder: 'Jane Smith', form_name_error: 'Please enter your name.',
    form_company_label: 'Company', form_company_placeholder: 'Your Company Ltd.',
    form_email_label: 'Email Address', form_email_placeholder: 'jane@yourcompany.com', form_email_error: 'Please enter a valid email address.',
    form_service_label: 'Service of Interest', form_svc_default: 'Select a service…',
    form_svc_1: 'Consulting (HACCP / ISO)', form_svc_2: 'Laboratory & Expertise', form_svc_3: 'Training',
    form_svc_4: 'Service Package — Basic', form_svc_5: 'Service Package — Standard',
    form_svc_6: 'Service Package — Premium', form_svc_7: 'Not sure yet',
    form_message_label: 'Message', form_message_placeholder: "Tell us about your situation and what you're looking to achieve…",
    form_message_error: 'Please enter a message.', form_submit: 'Send Message',
    form_success_msg: "Thank you! We'll be in touch within one business day.",
    contact_details_label: 'Contact Details', contact_info_title: 'Direct Contact',
    contact_email_label: 'Email', contact_phone_label: 'Phone',
    contact_location_label: 'Location', contact_location_val: 'Available for on-site visits & remotely worldwide',
    contact_response_label: 'Response Time', contact_response_val: 'Within 1 business day',
    footer_desc: 'Expert food safety consulting, quality systems implementation, and laboratory expertise for food businesses worldwide.',
    footer_services_title: 'Services', footer_company_title: 'Company',
    footer_link_about: 'About Us', footer_contact_title: 'Get in Touch',
    footer_copyright: '© 2026 FoodSafe Solutions. All rights reserved.',
    footer_tagline: 'Food Safety & Quality Consulting',
  },
  sr: {
    nav_home: 'Početna', nav_services: 'Usluge', nav_about: 'O nama', nav_contact: 'Kontakt',
    btn_book: 'Zakažite konsultaciju',
    hero_badge: 'Sertifikovani stručnjaci za bezbednost hrane',
    hero_h1: 'Bezbednost hrane i<br><em>konsalting kvaliteta</em>',
    hero_sub: 'Pomažemo preduzećima u prehrambenoj industriji da ispune standarde, prođu audite i osiguraju bezbednost proizvoda — od implementacije do trajne usklađenosti.',
    hero_b1: 'Implementacija HACCP i ISO 22000',
    hero_b2: 'Priprema za audit i inspekciju',
    hero_b3: 'Kontrola kvaliteta i rešavanje problema',
    btn_consultation: 'Zakažite konsultaciju', btn_explore: 'Istražite usluge',
    stat1: 'Podržanih audita', stat2: 'Godina iskustva', stat3: 'Zadovoljnih klijenata',
    services_label: 'Šta radimo',
    services_title: 'Stručne usluge za prehrambena preduzeća',
    services_sub: 'Sveobuhvatan konsalting bezbednosti hrane prilagođen vašim poslovnim procesima, regulativnim zahtevima i tržišnim ciljevima.',
    s1_title: 'Konsalting',
    s1_desc: 'Sveobuhvatan konsalting bezbednosti hrane od dizajna sistema do trajne usklađenosti — prilagođen vašoj veličini, strukturi i sertifikacionim ciljevima.',
    s2_title: 'Laboratorija i stručnost',
    s2_desc: 'Naučno utemeljena podrška za procenu mikrobiološkog rizika, validaciju proizvoda, ispitivanje roka trajanja i istrage kontaminacije.',
    s3_title: 'Obuka',
    s3_desc: 'Praktični programi obuke za osoblje na svim nivoima — od radnika u proizvodnji do menadžmenta — koji grade trajnu kulturu bezbednosti hrane.',
    tag_ext_qa: 'Spoljni QA', tag_audit: 'Priprema za audit',
    tag_micro: 'Mikro rizik', tag_product_safety: 'Bezbednost proizvoda', tag_validation: 'Validacija', tag_shelf: 'Rok trajanja', tag_root: 'Uzrok problema',
    tag_haccp_train: 'HACCP obuka', tag_hygiene: 'Higijena i GMP', tag_staff: 'Edukacija osoblja', tag_mgmt: 'Menadžment',
    problems_label: 'Izazovi koje rešavamo',
    problems_title: 'Da li vam ovo zvuči poznato?',
    problems_sub: 'Radimo sa kompanijama koje se suočavaju sa stvarnim izazovima bezbednosti hrane — i pretvaramo ih u rešene, dokumentovane, usklađene sisteme.',
    p1_title: 'Neuspele inspekcije', p1_desc: 'Ponavljajuće neusklađenosti i regulatorna upozorenja bez jasnog puta do rešenja.',
    p2_title: 'Kontaminacija proizvoda', p2_desc: 'Mikrobiološka ili hemijska kontaminacija koja ugrožava bezbednost proizvoda i reputaciju brenda.',
    p3_title: 'Žalbe kupaca', p3_desc: 'Porast broja žalbi, povrat proizvoda ili pritisak trgovaca bez jasnog uzroka.',
    p4_title: 'Bez HACCP ili ISO sistema', p4_desc: 'Poslovanje bez formalnog sistema upravljanja bezbednošću hrane, što blokira pristup novim tržištima.',
    p5_title: 'Nedosledan kvalitet', p5_desc: 'Varijacije od serije do serije koje narušavaju poverenje kupaca, rok trajanja i efikasnost proizvodnje.',
    ind_label: 'Sa kime radimo', ind_title: 'Industrije kojima služimo',
    ind_sub: 'Od fabričkih podova do restoranskih kuhinja — svakom klijentu pristupamo sa istom rigoroznošću i stručnošću.',
    ind1_title: 'Proizvođači hrane', ind1_desc: 'Proizvodni pogoni koji traže sertifikaciju, pristup tržištu ili zrelost sistema kvaliteta.',
    ind2_title: 'HoReCa', ind2_desc: 'Hoteli, restorani i ketering koji grade usklađene sisteme higijene i bezbednosti hrane.',
    ind3_title: 'Distributeri', ind3_desc: 'Operateri hladnog lanca i logistike koji upravljaju standardima dobavljača i zahtevima sledljivosti.',
    ind4_title: 'Startupi i MSP', ind4_desc: 'Rastuća prehrambena preduzeća kojima su potrebni profesionalni sistemi bez sopstvenog QA tima.',
    about_label: 'O nama',
    about_title: 'Duboka stručnost.<br>Pravi rezultati.',
    about_desc: 'FoodSafe Solutions je osnovan na uverenju da bezbednost hrane treba da bude praktična, a ne birokratska. Kombinujemo rigorozno tehničko znanje sa praktičnim iskustvom u prehrambenoj industriji, upravljanju laboratorijama i međunarodnim sertifikacionim telima.',
    cred1_title: '25+ godina u upravljanju bezbednošću hrane', cred1_desc: 'Obimno praktično iskustvo u proizvodnim sredinama, timovima za kvalitet i regulatornim okvirima.',
    cred2_title: 'Iskustvo u upravljanju laboratorijom', cred2_desc: 'Duboko znanje u proceni mikrobiološkog rizika, validaciji analitičkih metoda i akreditacionim procesima.',
    cred3_title: 'Sertifikovani vodeći auditor', cred3_desc: 'Kvalifikovan za sprovođenje i pripremu preduzeća za ISO 22000, HACCP, BRC i IFS audite na svim nivoima.',
    cred4_title: 'Iskustvo u velikim proizvodnim sistemima', cred4_desc: 'Dokazano iskustvo u implementaciji robusnih sistema kvaliteta u visokoproduktivnim pogonima i složenim lancima snabdevanja.',
    about_btn: 'Radite sa nama',
    pkg_label: 'Paketi usluga', pkg_title: 'Izaberite pravi nivo podrške',
    pkg_sub: 'Fleksibilni modeli angažovanja prilagođeni vašoj fazi razvoja, složenosti i budžetu. Svi paketi uključuju direktan pristup senior konsultantu.',
    pkg1_tier: 'Osnovni', pkg1_title: 'Osnova',
    pkg1_desc: 'Za preduzeća koja tek počinju put bezbednosti hrane. Procenjujemo trenutno stanje, identifikujemo nedostatke i gradimo jasnu mapu puta usklađenosti.',
    pkg1_f1: 'Inicijalna analiza nedostataka bezbednosti hrane', pkg1_f2: 'Uspostavljanje preduslova HACCP programa',
    pkg1_f3: 'Pisana mapa puta usklađenosti', pkg1_f4: '1 poseta na terenu', pkg1_f5: 'Podrška putem e-pošte (30 dana)',
    pkg2_badge: 'Najpopularniji', pkg2_tier: 'Standardni', pkg2_title: 'Usklađenost',
    pkg2_desc: 'Potpuna implementacija HACCP ili ISO 22000 sistema sa dokumentacijom, obukom osoblja i podrškom za pripremu pre audita.',
    pkg2_f1: 'Kompletan HACCP / ISO 22000 sistem', pkg2_f2: 'Kompletna dokumentacija',
    pkg2_f3: 'Sesije obuke osoblja (do 3)', pkg2_f4: 'Podrška internom auditu',
    pkg2_f5: 'Simulovani audit pre sertifikacije', pkg2_f6: '3 meseca kontinuirane podrške',
    pkg3_tier: 'Premium', pkg3_title: 'Spoljno osiguranje kvaliteta',
    pkg3_desc: 'Vaš posvećeni eksterni partner za osiguranje kvaliteta — kontinuirano upravljanje, auditi, upravljanje žalbama i stalno unapređenje.',
    pkg3_f1: 'Mesečno prisustvo QA na terenu', pkg3_f2: 'Program audita dobavljača',
    pkg3_f3: 'Upravljanje žalbama kupaca', pkg3_f4: 'Pregledi kontinuiranog unapređenja',
    pkg3_f5: 'Praćenje regulatornih promena', pkg3_f6: 'Neograničena savetodavna podrška',
    pkg_btn_req: 'Zatražite ponudu',
    cta_label: 'Počnite danas',
    cta_title: 'Spremni da izgradite bezbedniji,<br>Usklađeniji poslovni sistem?',
    cta_desc: 'Bez obzira da li vas čeka predstojeći audit, lansiranje novog proizvoda ili izgradnja sistema kvaliteta od nule — mi smo tu da pomognemo. Počnimo sa konsultacijom bez obaveza.',
    cta_btn: 'Zakažite besplatnu konsultaciju',
    contact_label: 'Stupite u kontakt', contact_title: 'Razgovarajmo o vašim potrebama',
    contact_sub: 'Popunite obrazac i javićemo vam se u roku od jednog radnog dana.',
    form_name_label: 'Ime i prezime', form_name_placeholder: 'Marko Marković', form_name_error: 'Molimo unesite vaše ime.',
    form_company_label: 'Kompanija', form_company_placeholder: 'Vaša kompanija d.o.o.',
    form_email_label: 'Imejl adresa', form_email_placeholder: 'marko@vaskompanija.rs', form_email_error: 'Molimo unesite validnu imejl adresu.',
    form_service_label: 'Usluga od interesa', form_svc_default: 'Odaberite uslugu…',
    form_svc_1: 'Konsalting (HACCP / ISO)', form_svc_2: 'Laboratorija i stručnost', form_svc_3: 'Obuka',
    form_svc_4: 'Paket usluga — Osnovni', form_svc_5: 'Paket usluga — Standardni',
    form_svc_6: 'Paket usluga — Premium', form_svc_7: 'Nisam siguran/na još',
    form_message_label: 'Poruka', form_message_placeholder: 'Recite nam o vašoj situaciji i šta želite da postignete…',
    form_message_error: 'Molimo unesite poruku.', form_submit: 'Pošaljite poruku',
    form_success_msg: 'Hvala! Javićemo vam se u roku od jednog radnog dana.',
    contact_details_label: 'Kontakt detalji', contact_info_title: 'Direktan kontakt',
    contact_email_label: 'Imejl', contact_phone_label: 'Telefon',
    contact_location_label: 'Lokacija', contact_location_val: 'Dostupni za posete na terenu i online globalno',
    contact_response_label: 'Vreme odgovora', contact_response_val: 'U roku od 1 radnog dana',
    footer_desc: 'Stručni konsalting bezbednosti hrane, implementacija sistema kvaliteta i laboratorijska ekspertiza za prehrambena preduzeća širom sveta.',
    footer_services_title: 'Usluge', footer_company_title: 'Kompanija',
    footer_link_about: 'O nama', footer_contact_title: 'Kontakt',
    footer_copyright: '© 2026 FoodSafe Solutions. Sva prava zadržana.',
    footer_tagline: 'Konsalting bezbednosti i kvaliteta hrane',
  }
};

// ===== LANGUAGE SWITCHER =====
let currentLang = localStorage.getItem('lang') || 'en';

function applyLanguage(lang) {
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key] !== undefined) el.placeholder = t[key];
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  document.documentElement.lang = lang;
  document.title = lang === 'sr'
    ? 'FoodSafe Solutions — Konsalting bezbednosti hrane'
    : 'FoodSafe Solutions — Food Safety & Quality Consulting';
  localStorage.setItem('lang', lang);
  currentLang = lang;
}

document.getElementById('lang-toggle').addEventListener('click', e => {
  const btn = e.target.closest('.lang-btn');
  if (btn && btn.dataset.lang !== currentLang) applyLanguage(btn.dataset.lang);
});

// ===== STICKY HEADER =====
const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

// ===== MOBILE MENU =====
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('main-nav');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  nav.classList.toggle('mobile-open');
});
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    nav.classList.remove('mobile-open');
  });
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 72;
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
  });
});

// ===== CONTACT FORM =====
const form = document.getElementById('contact-form');
if (form) {
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  function validateField(input) {
    const group = input.closest('.form-group');
    const empty = input.value.trim() === '';
    const badEmail = input.type === 'email' && !empty && !emailRe.test(input.value.trim());
    group.classList.toggle('has-error', empty || badEmail);
    input.classList.toggle('error', empty || badEmail);
    return !(empty || badEmail);
  }
  form.addEventListener('submit', e => {
    e.preventDefault();
    const fields = form.querySelectorAll('[required]');
    let valid = true;
    fields.forEach(f => { if (!validateField(f)) valid = false; });
    if (!valid) return;
    const btn = form.querySelector('button[type="submit"]');
    const origText = btn.textContent;
    btn.textContent = currentLang === 'sr' ? 'Slanje…' : 'Sending…';
    btn.disabled = true;
    setTimeout(() => {
      form.reset();
      btn.textContent = origText;
      btn.disabled = false;
      const success = document.getElementById('form-success');
      success.classList.add('visible');
      setTimeout(() => success.classList.remove('visible'), 5000);
    }, 900);
  });
  form.querySelectorAll('[required]').forEach(input => {
    input.addEventListener('input', () => {
      if (input.closest('.form-group').classList.contains('has-error')) validateField(input);
    });
  });
}

// ===== SCROLL ANIMATIONS =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ===== INIT =====
applyLanguage(currentLang);
