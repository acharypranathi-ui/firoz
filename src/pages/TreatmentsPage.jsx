import React, { useState } from 'react';
import { 
  Sparkles, 
  Calendar, 
  CheckCircle, 
  Phone, 
  Clock, 
  ArrowRight,
  Filter,
  Check
} from 'lucide-react';
import { TREATMENTS_DATA, HOSPITAL_INFO } from '../data/dentalData';
import './TreatmentsPage.css';

export default function TreatmentsPage({ openAppointmentModal }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Orthodontics', 'Implantology', 'Endodontics', 'Cosmetic Dentistry', 'Prosthodontics', 'Maxillofacial'];

  const filteredTreatments = selectedCategory === 'All' 
    ? TREATMENTS_DATA 
    : TREATMENTS_DATA.filter((t) => t.category === selectedCategory);

  return (
    <div className="treatments-page">
      {/* Page Header */}
      <section className="page-hero-banner">
        <div className="container">
          <div className="badge-tag">Evidence-Based Procedures</div>
          <h1 className="page-hero-title">Dental Treatments & Procedures</h1>
          <p className="page-hero-subtitle">
            All treatments are personally planned and supervised by <strong>{HOSPITAL_INFO.doctor.name}</strong> (Orthodontist & Implantologist with 14+ years clinical experience).
          </p>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="section-padding">
        <div className="container">
          {/* Category Filter Pills */}
          <div className="category-filter-bar">
            <span className="filter-label">
              <Filter size={16} /> Filter by Category:
            </span>
            <div className="filter-buttons">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Treatments Grid */}
          <div className="treatments-full-grid">
            {filteredTreatments.map((treatment) => (
              <div key={treatment.id} className="treatment-full-card card" id={`treatment-${treatment.id}`}>
                <div className="t-card-image-box">
                  <img src={treatment.image} alt={treatment.title} className="t-card-img" />
                  <span className="t-cat-tag">{treatment.category}</span>
                </div>

                <div className="t-card-body">
                  <h3 className="t-card-title">{treatment.title}</h3>
                  <p className="t-card-summary">{treatment.summary}</p>

                  <div className="t-details-box">
                    <h4 className="t-details-heading">Clinical Overview & Technique:</h4>
                    <p className="t-details-text">{treatment.details}</p>
                  </div>

                  <div className="t-suitable-box">
                    <span className="t-suitable-label">Recommended For:</span>
                    <p className="t-suitable-text">{treatment.suitableFor}</p>
                  </div>

                  <div className="t-card-action">
                    <button 
                      className="btn btn-primary w-full"
                      onClick={openAppointmentModal}
                    >
                      <Calendar size={16} /> Book Consultation for {treatment.title}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Transparent Notice */}
          <div className="treatment-guidance-box card">
            <div className="guidance-content">
              <h3>Need Clinical Guidance on Choosing the Right Treatment?</h3>
              <p>
                Every smile anatomy and bone density profile is unique. Dr. P. Firoz Babu conducts a thorough digital assessment (including intraoral scanning and radiovisiography) to chart out your optimal treatment route.
              </p>
            </div>
            <div className="guidance-btns">
              <button className="btn btn-primary btn-lg" onClick={openAppointmentModal}>
                Book Consultation
              </button>
              <a href={`tel:${HOSPITAL_INFO.phoneRaw}`} className="btn btn-secondary btn-lg">
                <Phone size={16} /> Call +91 97045 82322
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
