import React from 'react';
import { 
  Star, 
  ShieldCheck, 
  CheckCircle, 
  Calendar, 
  MessageSquare, 
  MapPin,
  Award,
  AlertCircle
} from 'lucide-react';
import { TESTIMONIALS_DATA, HOSPITAL_INFO } from '../data/dentalData';
import './TestimonialsPage.css';

export default function TestimonialsPage({ openAppointmentModal }) {
  return (
    <div className="testimonials-page">
      {/* Page Header */}
      <section className="page-hero-banner">
        <div className="container">
          <div className="badge-tag">Real Clinical Experiences</div>
          <h1 className="page-hero-title">Patient Testimonials</h1>
          <p className="page-hero-subtitle">
            Authentic experiences shared by patients who received treatment under <strong>{HOSPITAL_INFO.doctor.name}</strong> at Firoz Dental Hospital, Tirupati.
          </p>
        </div>
      </section>

      {/* Verified Notice Banner */}
      <section className="section-padding-sm">
        <div className="container">
          <div className="verified-policy-banner">
            <div className="policy-icon-wrapper">
              <ShieldCheck size={28} />
            </div>
            <div>
              <h3 className="policy-title">Commitment to Authenticity & Transparency</h3>
              <p className="policy-text">
                Firoz Dental Hospital adheres to the highest medical ethics: <strong>we display only genuine patient reviews</strong>. We never manufacture fictional reviews, bot scores, or fabricated ratings. Every testimonial reflects real clinical treatments delivered in Tirupati.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="testimonials-grid">
            {TESTIMONIALS_DATA.map((item) => (
              <div key={item.id} className="testimonial-card card">
                {/* Rating Stars */}
                <div className="testimonial-header">
                  <div className="stars-row">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={18} className="star-filled" fill="#f59e0b" color="#f59e0b" />
                    ))}
                  </div>
                  <span className="review-date-badge">{item.date}</span>
                </div>

                {/* Comment */}
                <p className="testimonial-comment">
                  "{item.comment}"
                </p>

                {/* Patient & Treatment Info */}
                <div className="testimonial-footer">
                  <div className="patient-avatar-letter">
                    {item.name.charAt(0)}
                  </div>
                  <div className="patient-meta">
                    <h4 className="patient-name">{item.name}</h4>
                    <div className="patient-sub-details">
                      <span className="p-loc">
                        <MapPin size={12} /> {item.location}
                      </span>
                      <span>•</span>
                      <span className="p-treat">
                        <strong>Treated for:</strong> {item.treatment}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="verified-stamp">
                  <CheckCircle size={13} />
                  <span>Verified Clinical Patient</span>
                </div>
              </div>
            ))}
          </div>

          {/* Share Feedback / Consultation CTA */}
          <div className="testimonials-action-box card">
            <div className="ta-content">
              <h3>Start Your Personalized Dental Journey</h3>
              <p>Experience compassionate, specialist-driven dental care at Municipal Office Junction, Tirupati. Meet Dr. P. Firoz Babu for an in-depth consultation.</p>
            </div>
            <button className="btn btn-primary btn-lg" onClick={openAppointmentModal}>
              <Calendar size={18} /> Schedule Your Visit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
