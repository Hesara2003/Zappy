import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { User, Settings, LogOut, CheckCircle } from 'lucide-react';

export const Profile: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#fafcff] flex flex-col relative">
            <Header isLoggedIn={true} toggleLogin={() => { }} />
            <main className="flex-1 pt-32 px-6 max-w-[1000px] mx-auto w-full">

                {/* Profile Header */}
                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm mb-8 flex flex-col md:flex-row items-center gap-8">
                    <div className="relative">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 p-[3px]">
                            <img src="https://i.pravatar.cc/150?img=32" className="w-full h-full rounded-full border-4 border-white object-cover" alt="Profile" />
                        </div>
                        <div className="absolute bottom-0 right-0 bg-green-500 w-6 h-6 rounded-full border-4 border-white"></div>
                    </div>
                    <div className="text-center md:text-left flex-1">
                        <h1 className="text-3xl font-bold text-[#00053d] mb-1">Virginia Willis</h1>
                        <p className="text-gray-500 mb-4">virginia.willis@example.com</p>
                        <div className="flex gap-3 justify-center md:justify-start">
                            <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider">Pro Member</span>
                            <span className="px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-bold uppercase tracking-wider flex items-center gap-1"><CheckCircle size={12} /> Verified</span>
                        </div>
                    </div>
                    <button className="px-6 py-2.5 border border-gray-200 rounded-full font-bold text-gray-600 hover:bg-gray-50 transition-colors">
                        Edit Profile
                    </button>
                </div>

                {/* Menu Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                        <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Settings className="text-purple-600" />
                        </div>
                        <h3 className="font-bold text-lg mb-1">Account Settings</h3>
                        <p className="text-gray-500 text-sm">Manage your personal details and security.</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                        <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <LogOut className="text-red-600" />
                        </div>
                        <h3 className="font-bold text-lg mb-1 text-red-600">Sign Out</h3>
                        <p className="text-gray-500 text-sm">Log out of your account securely.</p>
                    </div>
                </div>

            </main>
            <Footer />
        </div>
    );
};
