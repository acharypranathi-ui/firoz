import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  FileText, 
  CheckCircle,
  MapPin,
  Sparkles
} from 'lucide-react';
import { HOSPITAL_INFO, TREATMENTS_DATA } from '../data/dentalData';
import './AppointmentModal.css';

export default function AppointmentModal({ isOpen, onClose, preselectedTreatment = '' }) {
  const [formData, setFormData] = useState({
    patientName: '',
    phone: '',
    email: '',
    preferredDate: '',
    preferredTime: '11:00 AM',
    treatment: preselectedTreatment || 'General Dental Consultation',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.patientName || !formData.phone) return;
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-backdrop animate-fade-in" onClick={resetAndClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={resetAndClose} aria-label="Close dialog">
          <X size={20} />
        </button>

        {!submitted ? (
          <div>
            <div className="modal-header">
              <div className="modal-icon-badge">
                <Calendar size={22} />
              </div>
              <div>
                <h3 className="modal-title">Book Dental Consultation</h3>
                <p className="modal-subtitle">
                  With <strong>{HOSPITAL_INFO.doctor.name}</strong> • Tirupati
                </p>
              </div>
            </div>

            <div className="modal-notice">
              <MapPin size={14} />
              <span>Municipal Office Jnc, Opp. Khazana Jewellery, Tirupati</span>
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-group">
                <label htmlFor="apt-name">Patient Full Name *</label>
                <div className="input-with-icon">
                  <User size={16} />
                  <input
                    id="apt-name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.patientName}
                    onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="apt-phone">Phone Number *</label>
                  <div className="input-with-icon">
                    <Phone size={16} />
                    <input
                      id="apt-phone"
                      type="tel"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="apt-treatment">Required Treatment</label>
                  <select
                    id="apt-treatment"
                    value={formData.treatment}
                    onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                  >
                    <option value="General Dental Consultation">General Dental Consultation</option>
                    {TREATMENTS_DATA.map((t) => (
                      <option key={t.id} value={t.title}>
                        {t.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="apt-date">Preferred Date</label>
                  <input
                    id="apt-date"
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="apt-time">Preferred Time Slot</label>
                  <select
                    id="apt-time"
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  >
                    <option value="10:00 AM - 12:00 PM">Morning (10:00 AM - 12:00 PM)</option>
                    <option value="12:00 PM - 02:00 PM">Afternoon (12:00 PM - 02:00 PM)</option>
                    <option value="04:00 PM - 06:30 PM">Evening (04:00 PM - 06:30 PM)</option>
                    <option value="06:30 PM - 08:30 PM">Late Evening (06:30 PM - 08:30 PM)</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="apt-notes">Dental Issue / Notes (Optional)</label>
                <textarea
                  id="apt-notes"
                  rows={2}
                  placeholder="e.g. Tooth ache, inquiring about clear aligners or implant consultation..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                />
              </div>

              <button type="submit" id="submit-appointment-btn" className="btn btn-primary btn-lg w-full">
                Confirm Appointment Request
              </button>

              <p className="modal-footnote">
                Need immediate appointment? Call directly: <strong>{HOSPITAL_INFO.phone}</strong>
              </p>
            </form>
          </div>
        ) : (
          <div className="modal-success animate-fade-in">
            <div className="success-icon-wrap">
              <CheckCircle size={52} className="success-check-icon" />
            </div>
            <h3 className="success-title">Appointment Request Submitted!</h3>
            <p className="success-desc">
              Thank you, <strong>{formData.patientName}</strong>. Your consultation request for <strong>{formData.treatment}</strong> has been logged.
            </p>
            <div className="success-summary-card">
              <p><strong>Doctor:</strong> {HOSPITAL_INFO.doctor.name}</p>
              <p><strong>Hospital:</strong> {HOSPITAL_INFO.name}</p>
              <p><strong>Preferred Time:</strong> {formData.preferredTime} {formData.preferredDate ? `on ${formData.preferredDate}` : ''}</p>
              <p><strong>Location:</strong> {HOSPITAL_INFO.shortAddress}</p>
            </div>
            <p className="success-contact-hint">
              Our clinic receptionist will confirm your slot via phone (<strong>{formData.phone}</strong>).
            </p>
            <button className="btn btn-primary w-full" onClick={resetAndClose}>
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
