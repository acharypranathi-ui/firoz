import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Sparkles, 
  ChevronRight, 
  ShieldCheck, 
  Award,
  HeartHandshake
} from 'lucide-react';
import { HOSPITAL_INFO } from '../data/dentalData';
import './Footer.css';

export default function Footer({ setActivePage, openAppointmentModal }) {
  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'doctors', label: 'Doctors Profile' },
    { id: 'services', label: 'Dental Services' },
    { id: 'treatments', label: 'Treatments & Procedures' },
    { id: 'gallery', label: 'Clinic Gallery' },
    { id: 'testimonials', label: 'Verified Reviews' },
    { id: 'contact', label: 'Contact & Location' }
  ];

  const treatments = [
    'Braces & Orthodontics',
    'Invisible Aligners',
    'Lingual Orthodontics',
    'Dental Implants',
    'Full-Mouth Implants',
    'Zygomatic Implants',
    'Root Canal Treatment',
    'Tooth Whitening & Crowns'
  ];

  const handleNav = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper">
      <div className="container footer-main">
        {/* Hospital Branding & Verified Profile */}
        <div className="footer-col brand-col">
          <div className="footer-brand" onClick={() => handleNav('home')}>
            <div className="footer-logo-icon">
              <Sparkles size={22} />
            </div>
            <div>
              <h3 className="footer-brand-title">Firoz Dental Hospital</h3>
              <p className="footer-brand-sub">Tirupati • Andhra Pradesh</p>
            </div>
          </div>
          <p className="footer-desc">
            Led by <strong>Dr. P. Firoz Babu, MDS</strong> (Orthodontist & Implantologist with 14+ years of clinical experience). Delivering specialized orthodontic alignment, implant rehabilitation, and patient-centered dental care.
          </p>
          <div className="footer-badges">
            <span className="footer-badge">
              <Award size={14} /> 14+ Years Experience
            </span>
            <span className="footer-badge">
              <ShieldCheck size={14} /> MDS Orthodontist
            </span>
          </div>
        </div>

        {/* Quick Page Links */}
        <div className="footer-col">
          <h4 className="footer-heading">Quick Navigation</h4>
          <ul className="footer-links-list">
            {quickLinks.map((item) => (
              <li key={item.id}>
                <button 
                  className="footer-link-btn" 
                  onClick={() => handleNav(item.id)}
                >
                  <ChevronRight size={14} />
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Specialized Treatments */}
        <div className="footer-col">
          <h4 className="footer-heading">Specialized Treatments</h4>
          <ul className="footer-links-list">
            {treatments.map((t, idx) => (
              <li key={idx}>
                <button 
                  className="footer-link-btn"
                  onClick={() => handleNav('treatments')}
                >
                  <ChevronRight size={14} />
                  <span>{t}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Verified Contact Details */}
        <div className="footer-col contact-col">
          <h4 className="footer-heading">Verified Contact</h4>
          <div className="footer-contact-items">
            <div className="footer-contact-item">
              <MapPin size={18} className="footer-c-icon" />
              <span>{HOSPITAL_INFO.location}</span>
            </div>
            <div className="footer-contact-item">
              <Phone size={18} className="footer-c-icon" />
              <a href={`tel:${HOSPITAL_INFO.phoneRaw}`}>
                <strong>{HOSPITAL_INFO.phone}</strong>
              </a>
            </div>
            <div className="footer-contact-item">
              <Mail size={18} className="footer-c-icon" />
              <span>{HOSPITAL_INFO.email}</span>
            </div>
            <div className="footer-contact-item">
              <Clock size={18} className="footer-c-icon" />
              <span>{HOSPITAL_INFO.timing}</span>
            </div>
          </div>
          <button 
            className="btn btn-primary btn-sm footer-book-btn"
            onClick={openAppointmentModal}
          >
            Schedule Consultation
          </button>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {new Date().getFullYear()} {HOSPITAL_INFO.name}, Tirupati. All verified rights reserved.</p>
          <div className="footer-trust-notes">
            <span>Official Clinical Center</span>
            <span>•</span>
            <span>Dr. P. Firoz Babu, MDS</span>
            <span>•</span>
            <span>Municipal Office Junction</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
