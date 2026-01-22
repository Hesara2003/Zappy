import React from 'react';
import { FeatureCardData } from '../types';
import { MessageCircle, Smile, Mic, Video, Users, Search, Plus, Home, Phone, Hash, MoreHorizontal } from 'lucide-react';

interface FeatureCardProps {
    data: FeatureCardData;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ data }) => {
    const Icon = data.icon;

    return (
        <div
            className={`group relative min-w-[300px] w-[300px] md:min-w-[360px] md:w-[360px] h-[520px] rounded-[32px] overflow-hidden flex-shrink-0 cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 shadow-xl transform-gpu ${data.bgGradient ? data.bgGradient : 'bg-black'}`}
        >

            {/* Header */}
            <div className="absolute top-0 left-0 w-full p-6 z-30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Icon className="text-white/90 fill-current" size={20} strokeWidth={0} />
                    <span className="text-white font-semibold text-lg tracking-wide">{data.category}</span>
                </div>
                {data.hasNotification && (
                    <div className="w-3 h-3 bg-red-500 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.6)]"></div>
                )}
            </div>

            {/* Background Image (conditionally rendered) */}
            {data.image && (
                <img
                    src={data.image}
                    alt={data.category}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
            )}

            {/* Internal Content Container */}
            <div className="absolute inset-0 z-20 overflow-hidden">

                {/* --- CLIPS OVERLAY --- */}
                {data.overlayType === 'clips' && (
                    <div className="w-full h-full relative">
                        {/* Viewfinder Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative w-[240px] h-[240px] pointer-events-none">
                                {/* Top Left */}
                                <div className="absolute top-0 left-0 w-10 h-10 border-t-[5px] border-l-[5px] border-white rounded-tl-2xl shadow-sm"></div>
                                {/* Top Right */}
                                <div className="absolute top-0 right-0 w-10 h-10 border-t-[5px] border-r-[5px] border-white rounded-tr-2xl shadow-sm"></div>
                                {/* Bottom Left */}
                                <div className="absolute bottom-0 left-0 w-10 h-10 border-b-[5px] border-l-[5px] border-white rounded-bl-2xl shadow-sm"></div>
                                {/* Bottom Right */}
                                <div className="absolute bottom-0 right-0 w-10 h-10 border-b-[5px] border-r-[5px] border-white rounded-br-2xl shadow-sm"></div>
                            </div>
                        </div>

                        {/* Blue Bubble Icon */}
                        <div className="absolute top-[45%] right-8 bg-[#0b5cff] p-3.5 rounded-full shadow-lg animate-bounce-slow">
                            <MessageCircle className="text-white fill-white" size={28} />
                        </div>
                    </div>
                )}

                {/* --- CONTACT CENTER OVERLAY --- */}
                {data.overlayType === 'contact_center' && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>
                )}

                {/* --- MEETINGS OVERLAY --- */}
                {data.overlayType === 'meetings' && (
                    <div className="flex flex-col h-full pt-20 px-5 pb-8 justify-center">

                        {/* Main Speaker View */}
                        <div className="relative rounded-2xl overflow-hidden border-4 border-[#00e098] shadow-2xl mb-4 bg-[#23262b] aspect-video">
                            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover" alt="Speaker" />
                            <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-white text-xs font-medium">Sydney Ren</div>

                            {/* Floating Reactions */}
                            <div className="absolute top-4 left-6 text-4xl animate-float-slow">😊</div>
                            <div className="absolute center right-4 top-1/2 text-4xl animate-float-delayed">👋</div>
                            <div className="absolute bottom-8 right-12 text-4xl animate-float-fast">😄</div>
                        </div>

                        {/* Grid View Below */}
                        <div className="grid grid-cols-2 gap-3">
                            <div className="relative rounded-xl overflow-hidden bg-[#393b40] aspect-video group-hover:scale-[1.02] transition-transform">
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover" alt="Participant" />
                                <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-sm px-1.5 py-0.5 rounded text-[10px] text-white">Brian Ayers</div>
                            </div>
                            <div className="relative rounded-xl overflow-hidden bg-[#393b40] aspect-video group-hover:scale-[1.02] transition-transform">
                                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover" alt="Participant" />
                                <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-sm px-1.5 py-0.5 rounded text-[10px] text-white">Jane Harper</div>
                            </div>
                        </div>

                        {/* Meeting Controls Mockup */}
                        <div className="mt-6 flex justify-between px-6 text-white/80">
                            <div className="flex flex-col items-center gap-1"><Mic size={16} /><span className="text-[10px]">Audio</span></div>
                            <div className="flex flex-col items-center gap-1"><Video size={16} /><span className="text-[10px]">Video</span></div>
                            <div className="flex flex-col items-center gap-1"><Users size={16} /><span className="text-[10px]">Participants</span></div>
                            <div className="flex flex-col items-center gap-1"><MessageCircle size={16} /><span className="text-[10px]">Chat</span></div>
                        </div>
                    </div>
                )}

                {/* --- AI COMPANION OVERLAY --- */}
                {data.overlayType === 'ai_companion' && (
                    <div className="h-full flex flex-col justify-center items-center p-6 relative">
                        {/* Glow effect */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-500/20 rounded-full blur-[60px] pointer-events-none"></div>

                        {/* Glass Card */}
                        <div className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
                            {/* Top pill */}
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/5 text-white/70 text-xs font-medium mb-6">
                                <div className="w-3 h-3 rounded-[2px] border border-white/50"></div>
                                Daily Standup
                                <span className="ml-2 opacity-50">✕</span>
                            </div>

                            {/* Text Content - using design token colors for gradient if possible, else matching visually */}
                            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#006be5] to-[#4ab5ff] mb-2 leading-tight">
                                List my action items from this meeting
                            </h3>

                            {/* Bottom Input Mock */}
                            <div
                                className="mt-8 flex items-center justify-between text-white/40"
                                style={{ boxShadow: 'var(--panel-shadow)' }}
                            >
                                <div className="flex gap-4">
                                    <Plus size={18} />
                                </div>
                                <div className="flex gap-4 text-xs font-medium">
                                    <span className="flex items-center gap-1"><span className="w-3 h-3 border border-current rounded-full flex items-center justify-center text-[8px]">Y</span> All sources</span>
                                    <span className="flex items-center gap-1">Mode</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* --- TEAM CHAT OVERLAY --- */}
                {data.overlayType === 'team_chat' && (
                    <div className="h-full pt-20 px-4 pb-0 flex flex-col justify-end">
                        <div className="bg-[#1a2333] w-full h-[360px] rounded-t-2xl shadow-2xl flex flex-col overflow-hidden border border-white/5">

                            {/* App Header */}
                            <div className="bg-[#0b5cff] p-3 flex items-center justify-between">
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                                </div>
                                <div className="text-white text-xs font-semibold">Zoom Workplace</div>
                                <Search size={12} className="text-white/70" />
                            </div>

                            <div className="flex flex-1 overflow-hidden">
                                {/* Sidebar */}
                                <div className="w-16 bg-[#13161c] flex flex-col items-center py-4 gap-6 border-r border-white/5">
                                    <Home className="text-gray-500" size={18} />
                                    <div className="bg-[#0b5cff] p-1.5 rounded-lg"><MessageCircle className="text-white" size={18} /></div>
                                    <Phone className="text-gray-500" size={18} />
                                    <div className="w-6 h-6 rounded bg-gray-700 mt-auto"></div>
                                </div>

                                {/* Chat List Area */}
                                <div className="flex-1 bg-[#1e232e] p-3 flex flex-col gap-3">
                                    {/* Header */}
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-white text-sm font-semibold">Team Chat</span>
                                        <MoreHorizontal size={14} className="text-gray-400" />
                                    </div>

                                    {/* Icons Row */}
                                    <div className="flex gap-2 mb-2">
                                        <div className="w-8 h-8 rounded-full bg-[#0b5cff] text-white flex items-center justify-center text-[10px]">All</div>
                                        <div className="w-8 h-8 rounded-full bg-gray-700 text-white flex items-center justify-center text-[10px] relative">@
                                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full text-[8px] flex items-center justify-center">4</div>
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-gray-700 text-white flex items-center justify-center text-[10px]">#</div>
                                    </div>

                                    {/* List Items */}
                                    <div className="space-y-4 px-1">
                                        <div className="flex gap-2 items-center text-gray-400 text-xs">
                                            <span className="text-white">★ Starred</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <img src="https://picsum.photos/20/20" className="rounded w-5 h-5" alt="" />
                                            <span className="text-white text-xs">Virginia Willis (You)</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Hash size={12} className="text-gray-400" />
                                            <span className="text-gray-300 text-xs">Design team</span>
                                        </div>
                                        <div className="flex items-center gap-2 bg-[#0b5cff]/20 p-1.5 -mx-1.5 rounded">
                                            <Hash size={12} className="text-[#0b5cff]" />
                                            <span className="text-white text-xs font-medium">Creative</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* --- PHONE OVERLAY --- */}
                {data.overlayType === 'phone' && (
                    <div className="absolute inset-0 z-20 flex flex-col justify-end pb-8 items-center pointer-events-none">
                        {/* Floating Call Card */}
                        <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl w-[85%] animate-fade-in-up">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20">
                                    <img src={data.image} className="w-full h-full object-cover" alt="Caller" />
                                </div>
                                <div className="text-white flex-1">
                                    <div className="text-sm font-semibold">Sarah Connor</div>
                                    <div className="text-xs text-green-400 flex items-center gap-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
                                        04:23
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between px-2">
                                <div className="flex gap-3">
                                    <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer pointer-events-auto"><Mic size={16} className="text-white" /></div>
                                    <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer pointer-events-auto"><MoreHorizontal size={16} className="text-white" /></div>
                                </div>
                                <div className="w-9 h-9 rounded-full bg-red-500 flex items-center justify-center hover:bg-red-600 transition-colors shadow-lg cursor-pointer pointer-events-auto"><Phone size={16} className="text-white fill-white rotate-[135deg]" /></div>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};