import React, { useState } from 'react';
import Navbar from './components/common/Navbar';
import Hero from './components/sections/Hero';
import AiOperatorMethodology from './components/sections/AiOperatorMethodology';
import TechnicalPillars from './components/sections/TechnicalPillars';
import ProofOfWorkGallery from './components/sections/ProofOfWorkGallery';
import CareerTimeline from './components/sections/CareerTimeline';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/common/Footer';
import LightboxModal from './components/common/LightboxModal';
import ResumeModal from './components/common/ResumeModal';
import { GALLERY_ITEMS } from './data/galleryData';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxItem, setLightboxItem] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [activeGalleryList, setActiveGalleryList] = useState(GALLERY_ITEMS);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Category selection with smooth scroll to gallery
  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    const galleryEl = document.getElementById('gallery');
    if (galleryEl) {
      galleryEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Open Lightbox
  const handleOpenLightbox = (item, index, list) => {
    setLightboxItem(item);
    setLightboxIndex(index);
    setActiveGalleryList(list || GALLERY_ITEMS);
  };

  // Close Lightbox
  const handleCloseLightbox = () => {
    setLightboxItem(null);
  };

  // Lightbox Previous
  const handlePrevLightbox = () => {
    if (!activeGalleryList.length) return;
    const newIndex = (lightboxIndex - 1 + activeGalleryList.length) % activeGalleryList.length;
    setLightboxIndex(newIndex);
    setLightboxItem(activeGalleryList[newIndex]);
  };

  // Lightbox Next
  const handleNextLightbox = () => {
    if (!activeGalleryList.length) return;
    const newIndex = (lightboxIndex + 1) % activeGalleryList.length;
    setLightboxIndex(newIndex);
    setLightboxItem(activeGalleryList[newIndex]);
  };

  return (
    <div className="min-h-screen bg-[#09090B] text-zinc-100 flex flex-col font-sans selection:bg-zinc-800 selection:text-white">
      {/* Sticky Minimal Navbar */}
      <Navbar onOpenResumeModal={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Editorial Left-Aligned Hero Section */}
        <Hero onOpenResumeModal={() => setIsResumeOpen(true)} />

        {/* How I Work: The AI-First Operator (3-Step Callout Strip) */}
        <AiOperatorMethodology />

        {/* 4 Core Technical Capabilities (2x2 Hairline Grid) */}
        <TechnicalPillars onSelectCategory={handleSelectCategory} />

        {/* 25-Item Minimal Proof of Work Gallery */}
        <ProofOfWorkGallery
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* Career Timeline, Sideline Venture, Aviation Foundation & Active Upskilling */}
        <CareerTimeline />

        {/* Contact & Direct Inquiry Section */}
        <ContactSection onOpenResumeModal={() => setIsResumeOpen(true)} />
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Sleek Lightbox Modal */}
      <LightboxModal
        item={lightboxItem}
        isOpen={!!lightboxItem}
        onClose={handleCloseLightbox}
        onPrev={handlePrevLightbox}
        onNext={handleNextLightbox}
        currentIndex={lightboxIndex}
        totalCount={activeGalleryList.length}
      />

      {/* Executive Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
