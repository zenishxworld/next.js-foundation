import React from 'react';

type SplashLoaderProps = {
  visible: boolean;
};

// Lightweight global splash loader overlay
// Uses inline styles as a fallback so it looks decent even before CSS loads
const SplashLoader: React.FC<SplashLoaderProps> = ({ visible }) => {
  if (!visible) return null;
  return (
    <div
      role="progressbar"
      aria-busy="true"
      aria-label="Loading"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        backgroundColor: '#ffffff',
      }}
      className="fixed inset-0 z-[1000] bg-white"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/40 to-indigo-50/40" />
      <div className="relative h-full w-full flex items-center justify-center">
        <div className="flex flex-col items-center">
          <img
            src="/lovable-uploads/ADlogo.png"
            alt="WRLDS Technologies"
            style={{ height: 64, width: 'auto' }}
            className="h-16 w-auto mb-4"
          />
          <div
            style={{
              height: 36,
              width: 36,
              borderRadius: '50%',
              border: '2px solid #e5e7eb', // gray-200
              borderTopColor: '#374151', // gray-700
              animation: 'spin 0.9s linear infinite',
            }}
            className="h-9 w-9 rounded-full border-2 border-gray-200 border-t-gray-700"
          />
          <p className="mt-3 text-sm text-gray-600">Preparing your experience…</p>
        </div>
      </div>

      {/* Fallback keyframes in case Tailwind isn't ready yet */}
      <style>
        {`
          @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        `}
      </style>
    </div>
  );
};

export default SplashLoader;