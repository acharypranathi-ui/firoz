import React from 'react';
import { 
  Stethoscope, 
  Baby, 
  Smile, 
  ShieldCheck, 
  Sparkles, 
  Activity, 
  CheckCircle2, 
  Calendar, 
  ArrowRight 
} from 'lucide-react';
import { SERVICES_DATA, HOSPITAL_INFO } from '../data/dentalData';
import './ServicesPage.css';

export default function ServicesPage({ openAppointmentModal, setActivePage }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Stethoscope': return <Stethoscope size={28} />;
      case 'Baby': return <Baby size={28} />;
      case 'Smile': return <Smile size={28} />;
      case 'ShieldCheck': return <ShieldCheck size={28} />;
      case 'Sparkles': return <Sparkles size={28} />;
      case 'Activity': return <Activity size={28} />;
      default: return <Sparkles size={28} />;
    }
  };

  return (
    <div className="services-page">
      {/* Page Hero */}
      <section className="page-hero-banner">
        <div className="container">
          <div className="badge-tag">Clinical Departments</div>
          <h1 className="page-hero-title">Dental Services</h1>
          <p className="page-hero-subtitle">
            Comprehensive oral health solutions from preventative routine care and children's dentistry to specialized orthodontics, implants, and cosmetic dental treatments.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="services-main-grid">
            {SERVICES_DATA.map((service) => (
              <div key={service.id} className="service-detail-card card">
                <div className="service-top">
                  <div className="service-icon-box">
                    {getIcon(service.icon)}
                  </div>
                  <h2 className="service-card-title">{service.title}</h2>
                </div>

                <p className="service-card-desc">{service.description}</p>

                <div className="service-highlights-box">
                  <span className="hl-label">Key Clinical Highlights:</span>
                  <ul className="hl-list">
                    {service.highlights.map((item, idx) => (
                      <li key={idx} className="hl-item">
                        <CheckCircle2 size={16} className="text-primary flex-shrink" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="service-card-footer">
                  <button 
                    className="btn btn-primary btn-sm w-full"
                    onClick={openAppointmentModal}
                  >
                    <Calendar size={15} /> Book for This Service
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Treatments Cross-Link Callout */}
          <div className="services-cta-banner card">
            <div className="cta-left">
              <span className="badge-tag">Specialized Procedures</span>
              <h3>Looking for Specific Treatments?</h3>
              <p>Explore full details on Braces, Invisible Aligners, Root Canal Therapy, Dental Implants, Zygomatic Implants, and Jaw Fracture Management.</p>
            </div>
            <div className="cta-right">
              <button 
                className="btn btn-primary btn-lg"
                onClick={() => {
                  setActivePage('treatments');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <span>View Treatments Page</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
