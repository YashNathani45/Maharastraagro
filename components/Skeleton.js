'use client';

export default function Skeleton({ className = '' }) {
    return (
        <div className={`relative overflow-hidden rounded-md bg-gray-200 ${className}`}>
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.2s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
            <style jsx>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
        </div>
    );
}



