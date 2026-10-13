import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Calendar, 
  Clock, 
  Menu, 
  X, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { HOSPITAL_INFO } from '../data/dentalData';
import './Navbar.css';

export default function Navbar({ activePage, setActivePage, openAppointmentModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'doctors', label: 'Doctors' },
    { id: 'services', label: 'Services' },
    { id: 'treatments', label: 'Treatments' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="navbar-wrapper">
      {/* Top Notification Bar */}
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-left">
            <span className="topbar-item">
              <MapPin size={14} className="topbar-icon" />
              <span>Municipal Office Jnc, Opp. Khazana Jewellery, Tirupati</span>
            </span>
            <span className="topbar-item hide-mobile">
              <Clock size={14} className="topbar-icon" />
              <span>Mon-Sat: 10AM - 8:30PM | Sun: 10AM - 1:30PM</span>
            </span>
          </div>
          <div className="topbar-right">
            <a href={`tel:${HOSPITAL_INFO.phoneRaw}`} className="topbar-phone">
              <Phone size={14} />
              <span>Emergency & Booking: <strong>{HOSPITAL_INFO.phone}</strong></span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="main-navbar">
        <div className="container nav-content">
          <div className="brand" onClick={() => handleNavClick('home')}>
            <div className="brand-logo-icon">
              <Sparkles size={22} />
            </div>
            <div className="brand-text">
              <span className="brand-name">FIROZ DENTAL</span>
              <span className="brand-sub">HOSPITAL • TIRUPATI</span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <ul className="desktop-menu">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  id={`nav-link-${item.id}`}
                  className={`nav-link-btn ${activePage === item.id ? 'active' : ''}`}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Action Button & Mobile Hamburger */}
          <div className="nav-actions">
            <button 
              id="book-apt-header-btn" 
              className="btn btn-primary btn-sm book-nav-btn"
              onClick={openAppointmentModal}
            >
              <Calendar size={16} />
              <span>Book Appointment</span>
            </button>

            <button 
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer animate-fade-in">
          <ul className="mobile-nav-list">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  className={`mobile-nav-item ${activePage === item.id ? 'active' : ''}`}
                  onClick={() => handleNavClick(item.id)}
                >
                  <span>{item.label}</span>
                  <ChevronRight size={16} />
                </button>
              </li>
            ))}
          </ul>
          <div className="mobile-drawer-footer">
            <button 
              className="btn btn-primary w-full"
              onClick={() => {
                setMobileMenuOpen(false);
                openAppointmentModal();
              }}
            >
              <Calendar size={16} />
              <span>Book Appointment</span>
            </button>
            <div className="mobile-phone-link">
              <a href={`tel:${HOSPITAL_INFO.phoneRaw}`}>
                <Phone size={14} /> Call: {HOSPITAL_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
