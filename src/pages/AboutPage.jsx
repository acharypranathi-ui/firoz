import React from 'react';
import { 
  Building2, 
  Award, 
  Target, 
  ShieldCheck, 
  Heart, 
  Sparkles, 
  Cpu, 
  CheckCircle,
  Calendar,
  Users
} from 'lucide-react';
import { HOSPITAL_INFO } from '../data/dentalData';
import './AboutPage.css';

export default function AboutPage({ openAppointmentModal, setActivePage }) {
  return (
    <div className="about-page">
      {/* Page Header */}
      <section className="page-hero-banner">
        <div className="container">
          <div className="badge-tag">About Our Hospital</div>
          <h1 className="page-hero-title">About Firoz Dental Hospital</h1>
          <p className="page-hero-subtitle">
            A trusted center of clinical excellence in Tirupati dedicated to advanced orthodontics, implantology, and comprehensive dental wellness with 14+ years of patient trust.
          </p>
        </div>
      </section>

      {/* Hospital Introduction */}
      <section className="section-padding">
        <div className="container about-intro-grid">
          <div className="about-intro-text">
            <span className="section-label">Hospital Introduction</span>
            <h2 className="about-section-heading">
              Dedicated to Precision Dentistry & Lifelong Smiles
            </h2>
            <p className="about-para">
              Founded and led by <strong>{HOSPITAL_INFO.doctor.name}</strong>, Firoz Dental Hospital stands as one of Tirupati's most respected specialist dental centers. Situated prominently at Municipal Office Junction (opposite Khazana Jewellery), our clinic brings world-class dental solutions within easy reach of patients across Rayalaseema and neighboring districts.
            </p>
            <p className="about-para">
              Over the course of <strong>14+ years of clinical experience</strong>, our hospital has transformed thousands of smiles through contemporary orthodontics, precision dental implants, root canal therapy, and aesthetic smile rehabilitation. We take immense pride in maintaining an empathetic, patient-first approach where comfort, clarity, and safety guide every step.
            </p>

            <div className="about-key-highlights">
              <div className="key-item">
                <CheckCircle size={18} className="text-primary" />
                <span>14+ Years of specialized orthodontic and implant practice</span>
              </div>
              <div className="key-item">
                <CheckCircle size={18} className="text-primary" />
                <span>100% verified credentials with postgraduate MDS clinical leadership</span>
              </div>
              <div className="key-item">
                <CheckCircle size={18} className="text-primary" />
                <span>Modern computerized diagnostic and rotary endodontic technologies</span>
              </div>
              <div className="key-item">
                <CheckCircle size={18} className="text-primary" />
                <span>Hygienic, multi-barrier sterilization protocols</span>
              </div>
            </div>
          </div>

          <div className="about-intro-media">
            <div className="about-image-card">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80" 
                alt="Firoz Dental Hospital Clinical Operatory" 
                className="about-image"
              />
              <div className="about-stat-tag">
                <Award size={20} />
                <div>
                  <strong>14+ Years</strong>
                  <span>Serving Tirupati Smiles</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Patient-Centered Care */}
      <section className="section-padding bg-surface">
        <div className="container">
          <div className="section-header">
            <div className="badge-tag">Our Philosophy</div>
            <h2 className="section-title">Mission & Patient-Centred Care</h2>
            <p className="section-subtitle">
              Every smile is distinct. We believe in providing transparent treatment plans without unnecessary procedures, ensuring ethical clinical excellence at every step.
            </p>
          </div>

          <div className="mission-cards-grid">
            <div className="mission-card card">
              <div className="m-icon-box">
                <Target size={26} />
              </div>
              <h3 className="m-card-title">Our Clinical Mission</h3>
              <p className="m-card-desc">
                To deliver the highest standard of evidence-based orthodontics, implantology, and oral care in Tirupati. We aim to make advanced dental treatments—like invisible aligners and full-mouth rehabilitation—accessible, gentle, and enduring.
              </p>
            </div>

            <div className="mission-card card">
              <div className="m-icon-box">
                <Heart size={26} />
              </div>
              <h3 className="m-card-title">Patient-Centred Care</h3>
              <p className="m-card-desc">
                We prioritize your peace of mind and comfort. From clear step-by-step procedure counseling to gentle, minimally invasive techniques, our clinical team listens attentively to your needs and addresses dental anxiety with compassionate warmth.
              </p>
            </div>

            <div className="mission-card card">
              <div className="m-icon-box">
                <ShieldCheck size={26} />
              </div>
              <h3 className="m-card-title">Transparent & Ethical Practice</h3>
              <p className="m-card-desc">
                Honesty is the foundation of Firoz Dental Hospital. We only recommend treatments that are clinically necessary and beneficial for your long-term oral health, supported by transparent digital findings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Technology Section */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <div className="badge-tag">Clinical Equipment</div>
            <h2 className="section-title">Advanced Dental Technology</h2>
            <p className="section-subtitle">
              Modern dental science enables faster healing, greater procedural accuracy, and virtually pain-free experiences.
            </p>
          </div>

          <div className="tech-features-grid">
            <div className="tech-card card">
              <div className="tech-header">
                <Sparkles size={24} className="text-primary" />
                <h4>Intraoral Digital 3D Scanning</h4>
              </div>
              <p>Eliminates gooey traditional impressions, creating high-definition virtual 3D models for precision invisible aligner design and dental crowns.</p>
            </div>

            <div className="tech-card card">
              <div className="tech-header">
                <Cpu size={24} className="text-primary" />
                <h4>Rotary Endodontics & Apex Locators</h4>
              </div>
              <p>Computer-monitored micro-motors that clean root canals thoroughly in less time with pinpoint apical accuracy, preserving natural tooth structure.</p>
            </div>

            <div className="tech-card card">
              <div className="tech-header">
                <ShieldCheck size={24} className="text-primary" />
                <h4>Multi-Stage Class-B Autoclave Sterilization</h4>
              </div>
              <p>Hospital-grade vacuum sterilization protocols ensuring absolute hygiene and infection control for every instrument and operatory surface.</p>
            </div>

            <div className="tech-card card">
              <div className="tech-header">
                <Building2 size={24} className="text-primary" />
                <h4>Computer-Guided Implant Planning</h4>
              </div>
              <p>Precise 3D anatomical evaluation for ideal angulation and bone support during single, full-mouth, and complex zygomatic implant placements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Doctor CTA */}
      <section className="about-bottom-cta">
        <div className="container">
          <div className="cta-box card">
            <div className="cta-text">
              <h3>Meet Our Chief Specialist</h3>
              <p>Learn more about Dr. P. Firoz Babu's qualifications, clinical journey, and specialized orthodontic & implant achievements.</p>
            </div>
            <div className="cta-btns">
              <button 
                className="btn btn-primary"
                onClick={() => {
                  setActivePage('doctors');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                View Doctor Profile
              </button>
              <button 
                className="btn btn-secondary"
                onClick={openAppointmentModal}
              >
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
