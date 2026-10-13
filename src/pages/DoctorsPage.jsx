import React from 'react';
import { 
  Award, 
  GraduationCap, 
  Calendar, 
  Phone, 
  MapPin, 
  CheckCircle, 
  ShieldCheck, 
  Sparkles,
  ArrowRight,
  Clock,
  HeartHandshake
} from 'lucide-react';
import { HOSPITAL_INFO, TREATMENTS_DATA } from '../data/dentalData';
import './DoctorsPage.css';

export default function DoctorsPage({ openAppointmentModal, setActivePage }) {
  const doc = HOSPITAL_INFO.doctor;

  return (
    <div className="doctors-page">
      {/* Page Header */}
      <section className="page-hero-banner">
        <div className="container">
          <div className="badge-tag">Verified Medical Leadership</div>
          <h1 className="page-hero-title">Meet Our Doctor</h1>
          <p className="page-hero-subtitle">
            Consult with <strong>{doc.name}</strong>, Tirupati's verified Orthodontist & Implantologist with over 14 years of clinical excellence.
          </p>
        </div>
      </section>

      {/* Main Doctor Profile Section */}
      <section className="section-padding">
        <div className="container">
          <div className="doctor-full-profile-card card">
            <div className="doc-profile-grid">
              {/* Doctor Photo & Badges */}
              <div className="doc-photo-col">
                <div className="doc-photo-wrap">
                  <img src={doc.image} alt={doc.name} className="doc-photo" />
                  <div className="doc-exp-stamp">
                    <Award size={22} />
                    <div>
                      <strong>14+ Years</strong>
                      <span>Clinical Experience</span>
                    </div>
                  </div>
                </div>

                <div className="doc-consult-quickbox">
                  <h4>Consultation Timings</h4>
                  <div className="time-row">
                    <Clock size={16} />
                    <span>Mon - Sat: 10:00 AM - 8:30 PM</span>
                  </div>
                  <div className="time-row">
                    <Clock size={16} />
                    <span>Sunday: 10:00 AM - 1:30 PM</span>
                  </div>
                  <button 
                    className="btn btn-primary w-full doc-book-btn"
                    onClick={openAppointmentModal}
                  >
                    <Calendar size={16} /> Book Consultation
                  </button>
                  <a href={`tel:${HOSPITAL_INFO.phoneRaw}`} className="doc-call-link">
                    <Phone size={14} /> Call: {HOSPITAL_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Doctor Details */}
              <div className="doc-info-col">
                <div className="doc-header-block">
                  <div className="doc-status-badge">
                    <ShieldCheck size={14} /> Verified Doctor Profile
                  </div>
                  <h2 className="doctor-name-heading">{doc.name}</h2>
                  <p className="doctor-designation">{doc.title}</p>
                </div>

                {/* Qualifications & Specializations */}
                <div className="doc-credentials-grid">
                  <div className="cred-box">
                    <div className="cred-icon">
                      <GraduationCap size={20} />
                    </div>
                    <div>
                      <span className="cred-label">Educational Qualification</span>
                      <strong className="cred-value">{doc.qualifications}</strong>
                      <span className="cred-sub">Postgraduate Master of Dental Surgery</span>
                    </div>
                  </div>

                  <div className="cred-box">
                    <div className="cred-icon">
                      <Award size={20} />
                    </div>
                    <div>
                      <span className="cred-label">Verified Specializations</span>
                      <strong className="cred-value">Orthodontist & Implantologist</strong>
                      <span className="cred-sub">Advanced Craniofacial & Dental Implants</span>
                    </div>
                  </div>
                </div>

                {/* Biography */}
                <div className="doc-bio-section">
                  <h3 className="subhead-title">Professional Background</h3>
                  <p className="bio-para">{doc.description}</p>
                  <p className="bio-para">
                    Known for his patient, gentle demeanor and precise clinical diagnostic skills, Dr. Firoz Babu emphasizes predictable, long-lasting outcomes. He personally oversees all patient consultations, comprehensive smile analyses, invisible aligner tracking, and dental implant surgeries.
                  </p>
                </div>

                {/* Key Clinical Focus Areas */}
                <div className="doc-focus-areas">
                  <h3 className="subhead-title">Clinical Focus & Procedures</h3>
                  <div className="focus-pills-wrap">
                    <div className="focus-pill">
                      <CheckCircle size={15} />
                      <span>Orthodontic Braces (Metal & Ceramic)</span>
                    </div>
                    <div className="focus-pill">
                      <CheckCircle size={15} />
                      <span>Invisible Clear Aligners</span>
                    </div>
                    <div className="focus-pill">
                      <CheckCircle size={15} />
                      <span>Lingual Orthodontics (Hidden Braces)</span>
                    </div>
                    <div className="focus-pill">
                      <CheckCircle size={15} />
                      <span>Single & Multiple Dental Implants</span>
                    </div>
                    <div className="focus-pill">
                      <CheckCircle size={15} />
                      <span>Full-Mouth Rehabilitation (All-on-4 / All-on-6)</span>
                    </div>
                    <div className="focus-pill">
                      <CheckCircle size={15} />
                      <span>Zygomatic Implants (Cheekbone Anchorage)</span>
                    </div>
                    <div className="focus-pill">
                      <CheckCircle size={15} />
                      <span>Painless Rotary Root Canal Treatments</span>
                    </div>
                    <div className="focus-pill">
                      <CheckCircle size={15} />
                      <span>Jaw Bone Trauma & Fracture Treatment</span>
                    </div>
                  </div>
                </div>

                {/* Action Row */}
                <div className="doc-action-bar">
                  <button 
                    className="btn btn-primary btn-lg"
                    onClick={openAppointmentModal}
                  >
                    <Calendar size={18} />
                    <span>Book Appointment with Dr. Firoz</span>
                  </button>
                  <button 
                    className="btn btn-secondary btn-lg"
                    onClick={() => {
                      setActivePage('treatments');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    <span>View Treatments</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Transparency Statement */}
      <section className="section-padding bg-surface">
        <div className="container">
          <div className="trust-policy-card card">
            <div className="policy-icon">
              <ShieldCheck size={36} />
            </div>
            <div>
              <h3>Authentic & Verified Information Guarantee</h3>
              <p>
                At Firoz Dental Hospital, we display only verified medical doctors, real credentials, and authenticated clinical experience. <strong>Dr. P. Firoz Babu, MDS</strong> is our certified chief consultant. We do not invent fictional staff or inflated credentials.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
