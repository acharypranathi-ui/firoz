import React, { useState } from 'react';
import { 
  Image, 
  Sparkles, 
  Eye, 
  X, 
  Building2, 
  Cpu, 
  UserCheck, 
  Activity,
  Calendar
} from 'lucide-react';
import { GALLERY_ITEMS } from '../data/dentalData';
import './GalleryPage.css';

export default function GalleryPage({ openAppointmentModal }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filters = ['All', 'Clinic', 'Equipment', 'Doctors', 'Treatments'];

  const filteredItems = activeFilter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <div className="gallery-page">
      {/* Page Header */}
      <section className="page-hero-banner">
        <div className="container">
          <div className="badge-tag">Visual Tour</div>
          <h1 className="page-hero-title">Hospital & Clinical Gallery</h1>
          <p className="page-hero-subtitle">
            Take an inside look at our modern operatory chairs, digital equipment, consultation suites, and sterile clinical facilities in Tirupati.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding">
        <div className="container">
          {/* Category Tabs */}
          <div className="gallery-filter-tabs">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`gallery-tab-btn ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Gallery Image Grid */}
          <div className="gallery-grid">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="gallery-card card"
                onClick={() => setSelectedImage(item)}
              >
                <div className="gallery-image-wrapper">
                  <img src={item.image} alt={item.title} className="gallery-img" />
                  <div className="gallery-overlay">
                    <span className="gallery-view-icon">
                      <Eye size={22} />
                    </span>
                    <span className="gallery-view-text">Click to Expand</span>
                  </div>
                  <span className="gallery-category-pill">{item.category}</span>
                </div>
                <div className="gallery-info">
                  <h3 className="gallery-title">{item.title}</h3>
                  <p className="gallery-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox Modal */}
          {selectedImage && (
            <div className="lightbox-backdrop animate-fade-in" onClick={() => setSelectedImage(null)}>
              <div className="lightbox-card" onClick={(e) => e.stopPropagation()}>
                <button 
                  className="lightbox-close-btn"
                  onClick={() => setSelectedImage(null)}
                  aria-label="Close image preview"
                >
                  <X size={20} />
                </button>
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.title} 
                  className="lightbox-main-img" 
                />
                <div className="lightbox-details">
                  <span className="lightbox-category-pill">{selectedImage.category}</span>
                  <h3>{selectedImage.title}</h3>
                  <p>{selectedImage.description}</p>
                </div>
              </div>
            </div>
          )}

          {/* Facility Assurance Card */}
          <div className="gallery-assurance-card card">
            <div className="assurance-text">
              <h3>Strict Hospital Hygiene & Operatory Standards</h3>
              <p>Every clinical operatory, dental instrument tray, and handpiece undergoes multi-cycle autoclave sterilization following stringent medical protocols before each patient.</p>
            </div>
            <button className="btn btn-primary" onClick={openAppointmentModal}>
              <Calendar size={16} /> Book Clinic Tour & Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
