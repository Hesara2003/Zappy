import React, { useEffect, useState } from 'react';

interface PageTransitionProps {
    children: React.ReactNode;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Small timeout to ensure DOM is ready and trigger transition
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 50);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className={`transition-all duration-700 ease-out transform ${isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
        >
            {children}
        </div>
    );
};
