import { Header } from '@/app/components/Header';
import { Hero } from '@/app/components/Hero';
import { Services } from '@/app/components/Services';
import { Projects } from '@/app/components/Projects';
import { About } from '@/app/components/About';
import { CTA } from '@/app/components/CTA';
import { Footer } from '@/app/components/Footer';
import { FloatingContactButton } from '@/app/components/FloatingContactButton';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <Hero />
      <Services />
      <Projects />
      <About />
      <CTA />
      <Footer />
      <FloatingContactButton />
    </div>
  );
}
