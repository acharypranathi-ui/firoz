import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import AppointmentModal from './components/AppointmentModal';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DoctorsPage from './pages/DoctorsPage';
import ServicesPage from './pages/ServicesPage';
import TreatmentsPage from './pages/TreatmentsPage';
import GalleryPage from './pages/GalleryPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState('');

  // Handle URL hash changes for direct deep linking (e.g. #doctors, #services)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const validPages = ['home', 'about', 'doctors', 'services', 'treatments', 'gallery', 'testimonials', 'contact'];
      if (validPages.includes(hash)) {
        setActivePage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update hash when activePage changes
  const handlePageChange = (pageId) => {
    setActivePage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenAppointmentModal = (treatmentName = '') => {
    setSelectedTreatment(treatmentName);
    setAppointmentModalOpen(true);
  };

  // Render separate page content strictly based on active page
  const renderCurrentPage = () => {
    switch (activePage) {
      case 'home':
        return (
          <HomePage 
            setActivePage={handlePageChange} 
            openAppointmentModal={() => handleOpenAppointmentModal()} 
          />
        );
      case 'about':
        return (
          <AboutPage 
            setActivePage={handlePageChange} 
            openAppointmentModal={() => handleOpenAppointmentModal()} 
          />
        );
      case 'doctors':
        return (
          <DoctorsPage 
            setActivePage={handlePageChange} 
            openAppointmentModal={() => handleOpenAppointmentModal()} 
          />
        );
      case 'services':
        return (
          <ServicesPage 
            setActivePage={handlePageChange} 
            openAppointmentModal={() => handleOpenAppointmentModal()} 
          />
        );
      case 'treatments':
        return (
          <TreatmentsPage 
            openAppointmentModal={() => handleOpenAppointmentModal()} 
          />
        );
      case 'gallery':
        return (
          <GalleryPage 
            openAppointmentModal={() => handleOpenAppointmentModal()} 
          />
        );
      case 'testimonials':
        return (
          <TestimonialsPage 
            openAppointmentModal={() => handleOpenAppointmentModal()} 
          />
        );
      case 'contact':
        return (
          <ContactPage 
            openAppointmentModal={() => handleOpenAppointmentModal()} 
          />
        );
      default:
        return (
          <HomePage 
            setActivePage={handlePageChange} 
            openAppointmentModal={() => handleOpenAppointmentModal()} 
          />
        );
    }
  };

  return (
    <div className="app-layout">
      {/* Persistent Navigation */}
      <Navbar 
        activePage={activePage} 
        setActivePage={handlePageChange} 
        openAppointmentModal={() => handleOpenAppointmentModal()} 
      />

      {/* Main Single Page View */}
      <main className="main-content">
        {renderCurrentPage()}
      </main>

      {/* Persistent Footer */}
      <Footer 
        setActivePage={handlePageChange} 
        openAppointmentModal={() => handleOpenAppointmentModal()} 
      />

      {/* Floating AI Chatbot Assistant on Every Page */}
      <Chatbot 
        openAppointmentModal={() => handleOpenAppointmentModal()} 
        setActivePage={handlePageChange} 
      />

      {/* Appointment Booking Modal */}
      <AppointmentModal 
        isOpen={appointmentModalOpen} 
        onClose={() => setAppointmentModalOpen(false)}
        preselectedTreatment={selectedTreatment}
      />
    </div>
  );
}
