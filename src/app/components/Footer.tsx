import { Facebook, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#e8eaf0] text-gray-700 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="pt-8 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © 2020 MASHOBANE. All rights reserved
          </p>
          <a href="#" className="text-gray-600 hover:text-[#5e50f9] transition-colors text-sm">
            Back to the top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
