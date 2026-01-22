import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
    light?: boolean;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, light = false }) => {
    return (
        <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm flex-wrap">
                <li>
                    <Link
                        to="/"
                        className={`flex items-center gap-1 hover:text-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded ${light ? 'text-white/70 hover:text-white' : 'text-gray-500'
                            }`}
                        aria-label="Home"
                    >
                        <Home size={14} />
                    </Link>
                </li>
                {items.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                        <ChevronRight size={14} className={light ? 'text-white/40' : 'text-gray-400'} aria-hidden="true" />
                        {item.href ? (
                            <Link
                                to={item.href}
                                className={`hover:text-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-1 ${light ? 'text-white/70 hover:text-white' : 'text-gray-500'
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ) : (
                            <span className={`font-medium ${light ? 'text-white' : 'text-gray-900'}`} aria-current="page">
                                {item.label}
                            </span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};
