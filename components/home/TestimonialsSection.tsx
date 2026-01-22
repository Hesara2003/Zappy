import React, { useState } from 'react';
import { Star, ArrowRight } from 'lucide-react';

const CASE_STUDIES = [
  {
    id: 'mlb',
    company: 'Major League Baseball',
    title: 'Major League Baseball™ and Zoom expand the employee-fan experience',
    quote: '"Zoom has allowed us to continue a tradition of really being a technology-focused company and making sure that we\'re using cutting-edge technology..."',
    author: 'Noah Garden',
    role: 'Chief Revenue Officer',
    image: 'https://images.unsplash.com/photo-1516731537599-44d0395f1dd8?q=80&w=1600&h=900&auto=format&fit=crop',
    logo: (
      <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center shadow-lg">
          <div className="flex items-end gap-0.5">
              <div className="w-4 h-6 bg-[#002d72] rounded-tl-md"></div>
              <div className="w-4 h-6 bg-[#d50032] rounded-tr-md"></div>
          </div>
      </div>
    )
  },
  {
    id: 'cricut',
    company: 'Cricut',
    title: 'Empowering creativity and connection with Zoom',
    quote: '"Zoom helps us bring our community together, enabling creators to share their passion and learn from one another."',
    author: 'Robert Smith',
    role: 'VP of Community',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1600&h=900&auto=format&fit=crop', // Woman in blazer
    logo: (
       <div className="px-4 py-2 bg-white/90 backdrop-blur rounded-lg shadow-lg">
           <span className="text-[#188d65] font-extrabold text-xl tracking-tighter lowercase">cricut</span>
       </div>
    )
  },
  {
    id: 'capitalone',
    company: 'Capital One',
    title: 'Capital One redefines banking with digital-first collaboration',
    quote: '"We are using Zoom to transform how we work, ensuring our teams can innovate faster and serve customers better."',
    author: 'Sarah Johnson',
    role: 'Head of Tech',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&h=900&auto=format&fit=crop', // Dashboard
    logo: (
        <div className="px-4 py-2 bg-white/90 backdrop-blur rounded-lg shadow-lg">
             <span className="text-[#003a6f] font-bold text-lg italic">CapitalOne</span>
        </div>
    )
  }
];

export const TestimonialsSection: React.FC = () => {
  const [activeId, setActiveId] = useState('mlb');

  return (
    <section className="py-24 bg-white text-[#00053d]">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* LOGO STRIP */}
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-x-12 gap-y-8 mb-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
           <div className="font-serif font-black text-2xl tracking-tighter">The New York Times</div>
           <div className="font-sans font-bold text-2xl tracking-tight text-[#0071ce]">Walmart <span className="text-yellow-400 text-3xl leading-none inline-block align-top">✱</span></div>
           <div className="font-sans font-black text-2xl uppercase tracking-tighter italic">WERNER</div>
           <div className="flex flex-col leading-none">
             <span className="font-serif font-bold text-sm tracking-widest uppercase text-gray-600">MOFFITT</span>
             <span className="font-sans text-[10px] font-bold tracking-wide text-gray-400 uppercase">CANCER CENTER</span>
           </div>
           <div className="font-sans font-extrabold text-2xl tracking-tighter text-red-600">Exxon<span className="text-blue-700">Mobil</span></div>
           <div className="font-sans font-bold text-2xl italic tracking-tighter text-[#003a6f]">CapitalOne</div>
        </div>

        {/* RATINGS GRID */}
        <div className="grid md:grid-cols-3 gap-12 mb-28 relative">
            <div className="hidden md:block absolute top-1/2 left-[33%] w-px h-24 bg-gray-200 -translate-y-1/2"></div>
            <div className="hidden md:block absolute top-1/2 right-[33%] w-px h-24 bg-gray-200 -translate-y-1/2"></div>

            <div className="flex flex-col items-center text-center group cursor-default">
                <div className="text-[40px] md:text-[48px] font-bold leading-none mb-3 group-hover:scale-110 transition-transform text-[#0b5cff]">4.5/5</div>
                <div className="flex gap-1 mb-2 text-[#00053d]">
                    {[1,2,3,4].map(i => <Star key={i} size={22} fill="currentColor" strokeWidth={0} />)}
                    <div className="relative">
                        <Star size={22} className="text-gray-200 fill-current" strokeWidth={0} />
                        <div className="absolute top-0 left-0 overflow-hidden w-1/2">
                             <Star size={22} className="text-[#00053d] fill-current" strokeWidth={0} />
                        </div>
                    </div>
                </div>
                <div className="text-xs text-gray-500 font-medium mb-3">out of 7.9k+ reviews</div>
                <div className="font-bold text-sm text-[#00053d]">Gartner Peer Insights</div>
            </div>

            <div className="flex flex-col items-center text-center group cursor-default">
                <div className="text-[40px] md:text-[48px] font-bold leading-none mb-3 group-hover:scale-110 transition-transform text-[#0b5cff]">4.5/5</div>
                <div className="flex gap-1 mb-2 text-[#00053d]">
                    {[1,2,3,4].map(i => <Star key={i} size={22} fill="currentColor" strokeWidth={0} />)}
                    <div className="relative">
                        <Star size={22} className="text-gray-200 fill-current" strokeWidth={0} />
                        <div className="absolute top-0 left-0 overflow-hidden w-1/2">
                             <Star size={22} className="text-[#00053d] fill-current" strokeWidth={0} />
                        </div>
                    </div>
                </div>
                <div className="text-xs text-gray-500 font-medium mb-3">out of 54.9k+ reviews</div>
                <div className="font-bold text-xl font-sans text-[#ff492c]">G<span className="text-[#00053d]">2</span></div>
            </div>

            <div className="flex flex-col items-center text-center group cursor-default">
                <div className="text-[40px] md:text-[48px] font-bold leading-none mb-3 group-hover:scale-110 transition-transform text-[#0b5cff]">8.3/10</div>
                <div className="flex gap-1 mb-2 text-[#00053d]">
                     {[1,2,3,4,5].map(i => (
                         <div key={i} className="relative">
                            <Star size={22} className={`${i === 5 ? 'text-gray-200' : 'text-[#00053d]'} fill-current`} strokeWidth={0} />
                            {i === 5 && (
                                <div className="absolute top-0 left-0 overflow-hidden w-[30%]">
                                    <Star size={22} className="text-[#00053d] fill-current" strokeWidth={0} />
                                </div>
                            )}
                         </div>
                     ))}
                </div>
                <div className="text-xs text-gray-500 font-medium mb-3">out of 5.8k+ reviews</div>
                <div className="font-bold text-lg text-[#00053d]">TrustRadius</div>
            </div>
        </div>

        {/* QUOTE SECTION */}
        <div className="max-w-5xl mx-auto text-center mb-36">
            <h3 className="text-2xl md:text-[40px] leading-[1.3] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00053d] to-[#0b5cff] mb-10 tracking-tight">
                "Zoom Workplace turns my brainwaves into polished gems. From meetings, I can create Clips, Notes, Docs, or even whiteboards faster than you can say, 'transcript.'"
            </h3>
            <div className="text-lg font-bold text-[#00053d]">Marquesa Pettway</div>
            <div className="text-gray-500 font-medium">Founder</div>
        </div>

        {/* CASE STUDIES HEADING */}
        <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                <a href="#" className="text-[#0b5cff] font-semibold hover:underline">Customer stories</a>
            </div>
            <h2 className="text-4xl md:text-[64px] font-bold leading-[1.05] tracking-tight text-[#00053d]">
                Companies are achieving more<br />with Zoom
            </h2>
        </div>

        {/* ACCORDION / BENTO GRID REPLACEMENT */}
        <div className="flex flex-col lg:flex-row h-auto lg:h-[600px] gap-4">
            {CASE_STUDIES.map((study) => {
                const isActive = activeId === study.id;
                
                return (
                    <div 
                        key={study.id}
                        onMouseEnter={() => setActiveId(study.id)}
                        className={`
                            relative overflow-hidden rounded-[32px] cursor-pointer
                            transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]
                            ${isActive ? 'lg:flex-[4] shadow-2xl scale-[1.01]' : 'lg:flex-[0.6] hover:lg:flex-[0.8]'}
                            h-[400px] lg:h-full w-full
                        `}
                    >
                        {/* Background Image - No Scale on Hover as requested */}
                        <img 
                            src={study.image} 
                            alt={study.company}
                            className="w-full h-full object-cover" 
                        />
                        
                        {/* Gradient Overlay */}
                        <div className={`
                            absolute inset-0 bg-gradient-to-t transition-colors duration-500
                            ${isActive ? 'from-black/90 via-black/20 to-transparent' : 'from-black/80 via-black/40 to-black/20'}
                        `}></div>

                        {/* Top Left Logo */}
                        <div className={`
                            absolute top-8 left-8 transition-all duration-500 z-20
                            ${isActive ? 'opacity-100 translate-y-0' : 'opacity-80 lg:left-1/2 lg:-translate-x-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:scale-90'}
                        `}>
                            {study.logo}
                        </div>

                        {/* Expanded Content - Fade In Animation */}
                        <div className={`
                            absolute bottom-0 left-0 p-8 md:p-12 w-full flex flex-col justify-end
                            transition-opacity duration-700 delay-200
                            ${isActive ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
                        `}>
                            <h3 className="text-2xl md:text-4xl font-bold text-white mb-8 leading-tight max-w-2xl drop-shadow-lg">
                                {study.title}
                            </h3>
                            <div className="hidden md:block border-l-4 border-[#0b5cff] pl-6 mb-8">
                                <p className="text-gray-200 text-base md:text-lg italic mb-3 font-medium leading-relaxed">
                                    {study.quote}
                                </p>
                                <p className="text-white text-sm font-bold tracking-wide">— {study.author}, {study.role}</p>
                            </div>
                            
                            <div className="flex items-center gap-2 text-white font-bold group hover:gap-4 transition-all">
                                <span>Read story</span>
                                <div className="w-8 h-8 rounded-full bg-[#0b5cff] flex items-center justify-center">
                                     <ArrowRight size={14} />
                                </div>
                            </div>
                        </div>

                        {/* Collapsed Visual Hint */}
                         {!isActive && (
                            <div className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-pulse transition-opacity duration-300">
                                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                            </div>
                         )}

                    </div>
                );
            })}
        </div>

      </div>
    </section>
  );
};