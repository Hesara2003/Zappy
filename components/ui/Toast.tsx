import React from 'react';
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';
import { useToast } from './ToastContext';

export const ToastContainer: React.FC = () => {
    const { toasts, removeToast } = useToast();

    const getIcon = (type: 'success' | 'error' | 'info') => {
        switch (type) {
            case 'success':
                return <CheckCircle className="w-5 h-5 text-green-500" />;
            case 'error':
                return <AlertCircle className="w-5 h-5 text-red-500" />;
            case 'info':
                return <Info className="w-5 h-5 text-blue-500" />;
        }
    };

    const getBgColor = (type: 'success' | 'error' | 'info') => {
        switch (type) {
            case 'success':
                return 'bg-green-50 border-green-200';
            case 'error':
                return 'bg-red-50 border-red-200';
            case 'info':
                return 'bg-blue-50 border-blue-200';
        }
    };

    if (toasts.length === 0) return null;

    return (
        <div className="fixed bottom-24 md:bottom-8 right-4 md:right-8 z-[100] flex flex-col gap-2 max-w-sm">
            {toasts.map((toast) => (
                <div
                    key={toast.id}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl border shadow-lg backdrop-blur-sm animate-slide-in ${getBgColor(toast.type)}`}
                    role="alert"
                >
                    {getIcon(toast.type)}
                    <span className="text-sm font-medium text-gray-800 flex-1">{toast.message}</span>
                    <button
                        onClick={() => removeToast(toast.id)}
                        className="p-1 hover:bg-black/5 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                        aria-label="Dismiss notification"
                    >
                        <X size={14} className="text-gray-500" />
                    </button>
                </div>
            ))}
        </div>
    );
};
