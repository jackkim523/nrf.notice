'use client';

import React from 'react';

export default function ScrollIndicator() {
    const scrollToContent = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };

    return (
        <div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer group z-20"
            onClick={scrollToContent}
        >
            <span className="text-slate-700 text-[10px] font-bold mb-2 tracking-[0.2em] uppercase group-hover:text-blue-600 transition-colors drop-shadow-sm">
                Scroll
            </span>
            <div className="w-5 h-8 border-2 border-slate-400 rounded-full flex justify-center p-1 group-hover:border-blue-500 transition-colors bg-white/50 backdrop-blur-[2px] shadow-sm">
                <div className="w-1 h-1.5 bg-slate-600 rounded-full animate-bounce mt-0.5 group-hover:bg-blue-600"></div>
            </div>
            <div className="mt-1 animate-bounce flex flex-col items-center">
                <svg className="w-4 h-4 text-slate-400 group-hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </div>
    );
}
