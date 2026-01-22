import React from 'react';

import { Footer } from '../components/Footer';
import { User, Settings, LogOut, CheckCircle, CreditCard, Bell, Shield, HelpCircle, ChevronRight, Camera, Star, List } from 'lucide-react';
import { RevealOnScroll } from '../components/ui/RevealOnScroll';

export const Profile: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#fafcff] flex flex-col relative">
            {/* Header removed */}
            <main className="flex-1 pt-32 px-6 max-w-[1000px] mx-auto w-full pb-20">



                {/* Profile Header */}
                <RevealOnScroll className="bg-white rounded-[32px] p-8 md:p-10 border border-gray-100 shadow-xl shadow-blue-900/5 mb-8 flex flex-col md:flex-row items-center md:items-start gap-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full opacity-50 pointer-events-none"></div>

                    <div className="relative z-10">
                        <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 p-[4px] shadow-lg">
                            <img src="https://i.pravatar.cc/150?img=32" className="w-full h-full rounded-full border-4 border-white object-cover" alt="Profile" />
                        </div>
                        <button className="absolute bottom-2 right-2 bg-white text-gray-700 p-2 rounded-full shadow-md hover:bg-gray-50 border border-gray-100 transition-all">
                            <Camera size={16} />
                        </button>
                    </div>

                    <div className="text-center md:text-left flex-1 relative z-10 pt-2">
                        <div className="flex flex-col md:flex-row items-center gap-3 mb-2 justify-center md:justify-start">
                            <h1 className="text-3xl md:text-4xl font-bold text-[#00053d]">Virginia Willis</h1>
                            <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider border border-blue-100">Pro Member</span>
                        </div>
                        <p className="text-gray-500 mb-6 font-medium">virginia.willis@example.com</p>

                        {/* Stats */}
                        <div className="flex gap-8 justify-center md:justify-start border-t border-gray-100 pt-6">
                            <div className="text-center md:text-left">
                                <div className="text-2xl font-bold text-[#00053d]">24</div>
                                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-1">Reviews</div>
                            </div>
                            <div className="text-center md:text-left">
                                <div className="text-2xl font-bold text-[#00053d]">12</div>
                                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-1">Photos</div>
                            </div>
                            <div className="text-center md:text-left">
                                <div className="text-2xl font-bold text-[#00053d]">5</div>
                                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-1">Lists</div>
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 flex flex-col gap-3 w-full md:w-auto">
                        <button className="px-6 py-3 bg-[#00053d] text-white rounded-xl font-bold hover:bg-blue-900 transition-colors shadow-lg">
                            Edit Profile
                        </button>
                    </div>
                </RevealOnScroll>

                {/* Menu Grid */}
                <RevealOnScroll delay={100}>
                    <h3 className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-6 ml-2">Account Settings</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { icon: User, color: 'text-blue-600', bg: 'bg-blue-50', title: 'Personal Information', desc: 'Update your personal details' },
                            { icon: CreditCard, color: 'text-purple-600', bg: 'bg-purple-50', title: 'Payment Methods', desc: 'Manage your saved cards' },
                            { icon: Bell, color: 'text-amber-600', bg: 'bg-amber-50', title: 'Notifications', desc: 'Customize your alert preferences' },
                            { icon: Shield, color: 'text-emerald-600', bg: 'bg-emerald-50', title: 'Privacy & Security', desc: 'Control your account security' },
                            { icon: HelpCircle, color: 'text-cyan-600', bg: 'bg-cyan-50', title: 'Help & Support', desc: 'Get help with your account' },
                            { icon: LogOut, color: 'text-red-600', bg: 'bg-red-50', title: 'Sign Out', desc: 'Log out of your account', isDestructive: true },
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all cursor-pointer group flex items-center gap-5">
                                <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center group-hover:scale-105 transition-transform`}>
                                    <item.icon className={item.color} size={24} />
                                </div>
                                <div className="flex-1">
                                    <h3 className={`font-bold text-lg mb-1 ${item.isDestructive ? 'text-red-600' : 'text-gray-900'}`}>{item.title}</h3>
                                    <p className="text-gray-500 text-sm">{item.desc}</p>
                                </div>
                                <ChevronRight className="text-gray-300 group-hover:text-gray-500 group-hover:translate-x-1 transition-all" size={20} />
                            </div>
                        ))}
                    </div>
                </RevealOnScroll>

            </main>
            <Footer />
        </div>
    );
};
