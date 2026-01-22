import React from 'react';

interface SkeletonProps {
    className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({ className = '' }) => {
    return (
        <div
            className={`animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] rounded-lg ${className}`}
            style={{ animation: 'shimmer 1.5s infinite' }}
        />
    );
};

// Card skeleton matching MediaCard layout
export const CardSkeleton: React.FC<{ variant?: 'light' | 'dark' }> = ({ variant = 'light' }) => {
    const isDark = variant === 'dark';

    return (
        <div className={`rounded-3xl overflow-hidden h-full ${isDark ? 'bg-[#181b24]/40' : 'bg-white/60'} border ${isDark ? 'border-white/10' : 'border-white/40'}`}>
            {/* Image skeleton */}
            <div className={`h-64 ${isDark ? 'bg-gray-800' : 'bg-gray-200'} animate-pulse`} />

            {/* Content skeleton */}
            <div className="p-6 space-y-4">
                {/* Location */}
                <div className={`h-4 w-32 rounded ${isDark ? 'bg-gray-700' : 'bg-gray-200'} animate-pulse`} />

                {/* Title */}
                <div className={`h-6 w-3/4 rounded ${isDark ? 'bg-gray-700' : 'bg-gray-200'} animate-pulse`} />

                {/* Rating */}
                <div className="flex gap-2">
                    <div className={`h-4 w-24 rounded ${isDark ? 'bg-gray-700' : 'bg-gray-200'} animate-pulse`} />
                    <div className={`h-4 w-16 rounded ${isDark ? 'bg-gray-700' : 'bg-gray-200'} animate-pulse`} />
                </div>

                {/* Footer */}
                <div className={`h-px w-full ${isDark ? 'bg-gray-700' : 'bg-gray-200'} mt-6`} />
                <div className="flex justify-between items-center pt-2">
                    <div className={`h-4 w-20 rounded ${isDark ? 'bg-gray-700' : 'bg-gray-200'} animate-pulse`} />
                    <div className={`h-4 w-16 rounded ${isDark ? 'bg-gray-700' : 'bg-gray-200'} animate-pulse`} />
                </div>
            </div>
        </div>
    );
};

// Search result skeleton
export const SearchSkeleton: React.FC = () => (
    <div className="space-y-4">
        {[1, 2, 3].map((i) => (
            <div key={i} className="flex gap-4 p-4 bg-white rounded-xl border border-gray-100">
                <div className="w-20 h-20 rounded-lg bg-gray-200 animate-pulse flex-shrink-0" />
                <div className="flex-1 space-y-2">
                    <div className="h-5 w-3/4 bg-gray-200 rounded animate-pulse" />
                    <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse" />
                    <div className="h-4 w-1/4 bg-gray-200 rounded animate-pulse" />
                </div>
            </div>
        ))}
    </div>
);
