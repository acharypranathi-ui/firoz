import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Calendar, 
  Send, 
  CheckCircle, 
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Building2
} from 'lucide-react';
import { HOSPITAL_INFO, TREATMENTS_DATA } from '../data/dentalData';
import './ContactPage.css';

export default function ContactPage({ openAppointmentModal }) {
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    email: '',
    treatment: 'General Consultation',
    message: ''
  });

  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.phone) return;
    setFormSent(true);
  };

  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="page-hero-banner">
        <div className="container">
          <div className="badge-tag">Get in Touch</div>
          <h1 className="page-hero-title">Contact & Clinic Location</h1>
          <p className="page-hero-subtitle">
            Visit Firoz Dental Hospital at Municipal Office Junction, Tirupati, or reach out to our front desk for appointment assistance.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="contact-main-grid">
            {/* Left Column: Verified Clinic Information & Timings */}
            <div className="contact-info-col">
              <span className="section-label">Verified Clinic Details</span>
              <h2 className="contact-subheading">We Welcome You to Our Hospital</h2>
              <p className="contact-desc">
                Located centrally in Tirupati for convenient access. Our hospital features a welcoming patient reception, clean consultation chambers, and sterile surgical operatory rooms.
              </p>

              <div className="info-cards-stack">
                <div className="contact-info-card card">
                  <div className="c-icon-badge">
                    <MapPin size={22} />
                  </div>
                  <div className="c-text">
                    <h4>Hospital Address</h4>
                    <p className="c-highlight">{HOSPITAL_INFO.location}</p>
                    <span className="c-landmark">
                      <strong>Landmark:</strong> 1st Floor, Directly Opposite Khazana Jewellery, Municipal Office Junction.
                    </span>
                  </div>
                </div>

                <div className="contact-info-card card">
                  <div className="c-icon-badge">
                    <Phone size={22} />
                  </div>
                  <div className="c-text">
                    <h4>Direct Phone & Enquiries</h4>
                    <p className="c-phone-link">
                      <a href={`tel:${HOSPITAL_INFO.phoneRaw}`}>
                        <strong>{HOSPITAL_INFO.phone}</strong>
                      </a>
                    </p>
                    <span className="c-sub">Doctor consultation & appointment booking line</span>
                  </div>
                </div>

                <div className="contact-info-card card">
                  <div className="c-icon-badge">
                    <Clock size={22} />
                  </div>
                  <div className="c-text">
                    <h4>Working Timings</h4>
                    <p><strong>Monday to Saturday:</strong> 10:00 AM – 8:30 PM</p>
                    <p><strong>Sunday:</strong> 10:00 AM – 1:30 PM</p>
                  </div>
                </div>

                <div className="contact-info-card card">
                  <div className="c-icon-badge">
                    <Mail size={22} />
                  </div>
                  <div className="c-text">
                    <h4>Email Inquiries</h4>
                    <p>{HOSPITAL_INFO.email}</p>
                  </div>
                </div>
              </div>

              {/* Direct Appointment CTA */}
              <div className="quick-apt-card card">
                <div className="quick-apt-inner">
                  <div>
                    <h4>Looking to Book an Appointment Quickly?</h4>
                    <p>Select your preferred slot directly with Dr. P. Firoz Babu.</p>
                  </div>
                  <button className="btn btn-primary" onClick={openAppointmentModal}>
                    <Calendar size={16} /> Book Appointment
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Contact & Appointment Enquiry Form */}
            <div className="contact-form-col">
              <div className="form-wrapper-card card">
                <div className="form-header">
                  <div className="form-header-badge">
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <h3 className="form-title">Send a Message or Booking Request</h3>
                    <p className="form-subtitle">Fill in your information and our reception team will contact you promptly.</p>
                  </div>
                </div>

                {!formSent ? (
                  <form onSubmit={handleSubmit} className="contact-actual-form">
                    <div className="form-group">
                      <label htmlFor="c-name">Full Name *</label>
                      <input
                        id="c-name"
                        type="text"
                        required
                        placeholder="Your full name"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="c-phone">Phone Number *</label>
                      <input
                        id="c-phone"
                        type="tel"
                        required
                        placeholder="+91 97045 82322"
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="c-email">Email Address (Optional)</label>
                      <input
                        id="c-email"
                        type="email"
                        placeholder="yourname@example.com"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="c-service">Inquiry / Treatment</label>
                      <select
                        id="c-service"
                        value={contactForm.treatment}
                        onChange={(e) => setContactForm({ ...contactForm, treatment: e.target.value })}
                      >
                        <option value="General Consultation">General Dental Consultation</option>
                        {TREATMENTS_DATA.map((t) => (
                          <option key={t.id} value={t.title}>
                            {t.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="c-message">Your Message / Symptoms</label>
                      <textarea
                        id="c-message"
                        rows={3}
                        placeholder="Tell us about your dental concern or any questions regarding braces, aligners, implants, etc."
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      />
                    </div>

                    <button type="submit" id="submit-contact-form-btn" className="btn btn-primary btn-lg w-full">
                      <Send size={16} /> Send Enquiry
                    </button>

                    <p className="privacy-note">
                      <ShieldCheck size={14} /> Your personal information is kept confidential and used solely for hospital communications.
                    </p>
                  </form>
                ) : (
                  <div className="form-success-box animate-fade-in">
                    <CheckCircle size={56} className="success-icon" />
                    <h4>Message Received Successfully!</h4>
                    <p>
                      Thank you, <strong>{contactForm.name}</strong>. Our receptionist at Firoz Dental Hospital will reach you at <strong>{contactForm.phone}</strong> to assist with your enquiry.
                    </p>
                    <button 
                      className="btn btn-secondary"
                      onClick={() => {
                        setFormSent(false);
                        setContactForm({ name: '', phone: '', email: '', treatment: 'General Consultation', message: '' });
                      }}
                    >
                      Send Another Message
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Interactive Google Map Embed Section */}
          <div className="map-embed-section card">
            <div className="map-header">
              <div className="map-header-text">
                <h3>Hospital Location Map</h3>
                <p>Municipal Office Junction, 1st Floor, Opp. Khazana Jewellery, Tirupati, Andhra Pradesh – 517501</p>
              </div>
              <a 
                href="https://maps.google.com/?q=Municipal+Office+Junction+Tirupati" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                <span>Open in Google Maps</span>
                <ExternalLink size={14} />
              </a>
            </div>

            <div className="map-frame-wrapper">
              <iframe
                title="Firoz Dental Hospital Location Map"
                src="https://maps.google.com/maps?q=Municipal%20Office%20Junction,%20Tirupati,%20Andhra%20Pradesh%20517501&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
