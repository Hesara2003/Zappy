import React from 'react';
import { Facebook, Twitter, Linkedin, Youtube, Instagram, Globe, ChevronDown } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-400 py-20 text-[14px] border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Top Section: Socials & Links */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-16">
          
          {/* Brand & Socials */}
          <div className="lg:w-1/4">
             <a href="#" className="inline-block mb-8">
               <span className="text-3xl font-bold tracking-tight text-white">zappy</span>
             </a>
             <p className="mb-8 leading-relaxed text-gray-500">
               Connect, collaborate, and create with the platform designed for modern teams.
             </p>
             <div className="flex gap-3">
               {[Linkedin, Twitter, Facebook, Instagram, Youtube].map((Icon, idx) => (
                 <div key={idx} className="w-10 h-10 rounded-full bg-[#1a1f2e] flex items-center justify-center hover:bg-[#0b5cff] hover:text-white transition-all cursor-pointer group">
                   <Icon size={18} className="group-hover:scale-110 transition-transform" />
                 </div>
               ))}
             </div>
          </div>

          {/* Links Grid */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8 lg:pl-12">
             <div>
                <h4 className="font-bold text-white mb-6 text-[13px] uppercase tracking-wider">About</h4>
                <ul className="space-y-4">
                  {['Zoom Blog', 'Customers', 'Our Team', 'Careers', 'Integrations', 'Partners', 'Investors', 'Press'].map(item => (
                    <li key={item}><a href="#" className="hover:text-[#0b5cff] transition-colors">{item}</a></li>
                  ))}
                </ul>
             </div>

             <div>
                <h4 className="font-bold text-white mb-6 text-[13px] uppercase tracking-wider">Download</h4>
                <ul className="space-y-4">
                  {['Zoom Client', 'Zoom Rooms', 'Browser Extension', 'Outlook Plug-in', 'iPhone/iPad App', 'Android App'].map(item => (
                    <li key={item}><a href="#" className="hover:text-[#0b5cff] transition-colors">{item}</a></li>
                  ))}
                </ul>
             </div>

             <div>
                <h4 className="font-bold text-white mb-6 text-[13px] uppercase tracking-wider">Sales</h4>
                <ul className="space-y-4">
                  {['Contact Sales', 'Plans & Pricing', 'Request a Demo', 'Webinars and Events'].map(item => (
                    <li key={item}><a href="#" className="hover:text-[#0b5cff] transition-colors">{item}</a></li>
                  ))}
                </ul>
             </div>

             <div>
                <h4 className="font-bold text-white mb-6 text-[13px] uppercase tracking-wider">Support</h4>
                <ul className="space-y-4">
                  {['Test Zoom', 'Account', 'Support Center', 'Live Training', 'Feedback', 'Contact Us', 'Accessibility', 'Privacy, Security, Legal'].map(item => (
                    <li key={item}><a href="#" className="hover:text-[#0b5cff] transition-colors">{item}</a></li>
                  ))}
                </ul>
             </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-[#1a1f2e] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6">
           
           <div className="flex flex-col md:flex-row items-center gap-6 w-full md:w-auto">
              <button className="flex items-center gap-2 text-white bg-black/30 hover:bg-black/50 px-4 py-2 rounded-lg border border-white/10 transition-colors w-full md:w-auto justify-center">
                 <Globe size={16} />
                 <span>English</span>
                 <ChevronDown size={14} className="ml-1" />
              </button>
              
              <button className="flex items-center gap-2 text-white bg-black/30 hover:bg-black/50 px-4 py-2 rounded-lg border border-white/10 transition-colors w-full md:w-auto justify-center">
                 <span>US Dollar $</span>
                 <ChevronDown size={14} className="ml-1" />
              </button>
           </div>

           <div className="text-center md:text-right">
              <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2 mb-2 text-[13px]">
                 <a href="#" className="hover:text-white transition-colors">Privacy</a>
                 <a href="#" className="hover:text-white transition-colors">Terms</a>
                 <a href="#" className="hover:text-white transition-colors">Legal</a>
                 <a href="#" className="hover:text-white transition-colors">Compliance</a>
              </div>
              <p className="text-[12px] text-gray-600">
                 Copyright © 2024 Zappy Video Communications, Inc. All rights reserved.
              </p>
           </div>

        </div>

      </div>
    </footer>
  );
};