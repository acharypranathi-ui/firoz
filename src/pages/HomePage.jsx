import React from 'react';
import { 
  Sparkles, 
  Calendar, 
  Phone, 
  MapPin, 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Clock,
  Star,
  Users,
  Activity
} from 'lucide-react';
import { HOSPITAL_INFO, TREATMENTS_DATA } from '../data/dentalData';
import './HomePage.css';

export default function HomePage({ setActivePage, openAppointmentModal }) {
  // 6 Popular treatments for homepage showcase
  const popularTreatments = TREATMENTS_DATA.slice(0, 6);

  return (
    <div className="home-page-container">
      {/* Hero Welcome Banner */}
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="badge-tag">
              <Sparkles size={14} />
              <span>Verified Dental Center • Tirupati</span>
            </div>
            <h1 className="hero-title">
              Crafting Confident Smiles with Advanced Dental Excellence
            </h1>
            <p className="hero-subtitle">
              Welcome to <strong>{HOSPITAL_INFO.name}</strong>, led by <strong>{HOSPITAL_INFO.doctor.name}</strong> (Orthodontist & Implantologist with 14+ years of clinical experience). Specializing in invisible aligners, braces, dental implants, and gentle dental care.
            </p>

            <div className="hero-buttons">
              <button 
                id="hero-book-apt-btn"
                className="btn btn-primary btn-lg"
                onClick={openAppointmentModal}
              >
                <Calendar size={18} />
                <span>Book Appointment</span>
              </button>
              <button 
                className="btn btn-secondary btn-lg"
                onClick={() => {
                  setActivePage('treatments');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <span>Explore Treatments</span>
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Quick Clinic Info Pills */}
            <div className="hero-info-bar">
              <div className="info-bar-item">
                <MapPin size={18} className="info-bar-icon" />
                <div>
                  <strong>Municipal Office Junction</strong>
                  <span>Opp. Khazana Jewellery, Tirupati</span>
                </div>
              </div>
              <div className="info-bar-item">
                <Phone size={18} className="info-bar-icon" />
                <div>
                  <strong>+91 97045 82322</strong>
                  <span>Direct Doctor & Reception Line</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Doctor Feature Card */}
          <div className="hero-visual">
            <div className="doctor-hero-card">
              <div className="hero-img-wrapper">
                <img 
                  src={HOSPITAL_INFO.doctor.image} 
                  alt={HOSPITAL_INFO.doctor.name}
                  className="doctor-hero-photo"
                />
                <div className="experience-badge-float">
                  <Award size={20} />
                  <div>
                    <strong>14+ Years</strong>
                    <span>Clinical Experience</span>
                  </div>
                </div>
              </div>

              <div className="doctor-hero-details">
                <h3 className="hero-doc-name">{HOSPITAL_INFO.doctor.name}</h3>
                <p className="hero-doc-qual">{HOSPITAL_INFO.doctor.qualifications}</p>
                <div className="doc-specialties-tags">
                  <span className="spec-tag">Orthodontist</span>
                  <span className="spec-tag">Implantologist</span>
                </div>
                <div className="hero-trust-points">
                  <div className="trust-point">
                    <CheckCircle2 size={16} className="text-primary" />
                    <span>Specialist in Braces & Invisible Aligners</span>
                  </div>
                  <div className="trust-point">
                    <CheckCircle2 size={16} className="text-primary" />
                    <span>Single, Full-Mouth & Zygomatic Implants</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Bar */}
      <section className="stats-section">
        <div className="container stats-grid">
          {HOSPITAL_INFO.stats.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Dental Care Highlights */}
      <section className="section-padding bg-surface">
        <div className="container">
          <div className="section-header">
            <div className="badge-tag">Why Choose Us</div>
            <h2 className="section-title">Dental Care Highlights</h2>
            <p className="section-subtitle">
              We combine specialized clinical mastery with advanced technology and strict sterilization protocols to ensure your dental visit is comforting, predictable, and stress-free.
            </p>
          </div>

          <div className="highlights-grid">
            <div className="highlight-card card">
              <div className="highlight-icon-wrap">
                <Award size={26} />
              </div>
              <h3 className="highlight-title">14+ Years Specialist Mastery</h3>
              <p className="highlight-desc">
                Treatments are evaluated and overseen by Dr. P. Firoz Babu (MDS), a qualified Orthodontist and Implantologist trusted across Rayalaseema.
              </p>
            </div>

            <div className="highlight-card card">
              <div className="highlight-icon-wrap">
                <Sparkles size={26} />
              </div>
              <h3 className="highlight-title">Advanced Digital Technology</h3>
              <p className="highlight-desc">
                Digital 3D impressions, apex locators, computerized treatment planning, and surgical precision for invisible aligners and dental implants.
              </p>
            </div>

            <div className="highlight-card card">
              <div className="highlight-icon-wrap">
                <ShieldCheck size={26} />
              </div>
              <h3 className="highlight-title">Sterilization & Hospital Safety</h3>
              <p className="highlight-desc">
                Stringent multi-tier autoclave sterilization and bio-safe disinfection protocols safeguarding you and your family at every visit.
              </p>
            </div>

            <div className="highlight-card card">
              <div className="highlight-icon-wrap">
                <MapPin size={26} />
              </div>
              <h3 className="highlight-title">Centrally Located in Tirupati</h3>
              <p className="highlight-desc">
                Conveniently situated at Municipal Office Junction (opposite Khazana Jewellery) with easily accessible parking and public transit connections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Treatments Section */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <div className="badge-tag">Treatments</div>
            <h2 className="section-title">Popular Dental Treatments</h2>
            <p className="section-subtitle">
              From gentle teeth straightening and root canal therapy to permanent implant teeth replacement and smile makeovers.
            </p>
          </div>

          <div className="popular-treatments-grid">
            {popularTreatments.map((treatment) => (
              <div key={treatment.id} className="treatment-card card">
                <div className="treatment-thumb-box">
                  <img src={treatment.image} alt={treatment.title} className="treatment-thumb" />
                  <span className="treatment-category-badge">{treatment.category}</span>
                </div>
                <div className="treatment-card-content">
                  <h3 className="treatment-name">{treatment.title}</h3>
                  <p className="treatment-summary">{treatment.summary}</p>
                  <div className="treatment-card-actions">
                    <button 
                      className="treatment-learn-btn"
                      onClick={() => {
                        setActivePage('treatments');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                    >
                      <span>Treatment Details</span>
                      <ArrowRight size={14} />
                    </button>
                    <button 
                      className="btn btn-outline btn-sm"
                      onClick={openAppointmentModal}
                    >
                      Book
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="treatments-center-cta">
            <button 
              className="btn btn-primary btn-lg"
              onClick={() => {
                setActivePage('treatments');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <span>View All 10+ Verified Treatments</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Clinic Information & Banner Callout */}
      <section className="clinic-callout-section">
        <div className="container">
          <div className="callout-card">
            <div className="callout-text">
              <span className="callout-pill">Direct Doctor Consultation</span>
              <h2 className="callout-title">Ready for Your Healthier, Brighter Smile?</h2>
              <p className="callout-desc">
                Visit <strong>{HOSPITAL_INFO.name}</strong> at Municipal Office Junction, 1st Floor, opposite Khazana Jewellery, Tirupati. Consult directly with <strong>{HOSPITAL_INFO.doctor.name}</strong>.
              </p>
              <div className="callout-contacts">
                <span className="callout-contact-item">
                  <Phone size={16} /> Call: <strong>{HOSPITAL_INFO.phone}</strong>
                </span>
                <span className="callout-contact-item">
                  <Clock size={16} /> Mon-Sat: 10AM - 8:30PM | Sun: 10AM - 1:30PM
                </span>
              </div>
            </div>
            <div className="callout-actions">
              <button 
                className="btn btn-primary btn-lg"
                onClick={openAppointmentModal}
              >
                <Calendar size={18} />
                <span>Book Appointment</span>
              </button>
              <button 
                className="btn btn-secondary btn-lg"
                onClick={() => {
                  setActivePage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <span>View Hospital Map</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
