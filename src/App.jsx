import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/layout/Footer';
import { Navbar } from './components/layout/Navbar';

const Home = lazy(() => import('./pages/Home').then((module) => ({ default: module.Home })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then((module) => ({ default: module.ServicesPage })));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage').then((module) => ({ default: module.PortfolioPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then((module) => ({ default: module.AboutPage })));
const BlogPage = lazy(() => import('./pages/BlogPage').then((module) => ({ default: module.BlogPage })));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage').then((module) => ({ default: module.BlogPostPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then((module) => ({ default: module.ContactPage })));
const BookingPage = lazy(() => import('./pages/BookingPage').then((module) => ({ default: module.BookingPage })));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy').then((module) => ({ default: module.PrivacyPolicy })));
const Terms = lazy(() => import('./pages/Terms').then((module) => ({ default: module.Terms })));

export function App() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Navbar />
      <main id="main">
        <Suspense fallback={<div className="px-6 py-24 text-center font-bold text-deep">Loading Azaana Digital...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/book" element={<BookingPage />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
