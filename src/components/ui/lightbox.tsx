import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

interface LightboxProps {
  src: string;
  alt: string;
  type: 'image' | 'video';
  onClose: () => void;
}

export function Lightbox({ src, alt, type, onClose: parentOnClose }: LightboxProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Ensure the transition triggers after the component is mounted
    requestAnimationFrame(() => {
      setShow(true);
    });
  }, []);

  const startClose = () => {
    setShow(false); // Trigger fade-out
    setTimeout(() => {
      parentOnClose(); // Call parent's onClose after duration
    }, 300); // Must match transition duration
  };

  return (
    // Main overlay, handles backdrop click to close
    <div
      className={cn(
        "fixed inset-0 bg-black/80 flex items-center justify-center z-[100] p-4",
        "transition-opacity duration-300 ease-in-out",
        show ? "opacity-100" : "opacity-0"
      )}
      onClick={startClose}
    >
      {/* Media content wrapper - centers content, click propagation stopped by media elements themselves */}
      <div className="relative flex items-center justify-center w-full h-full">
        {type === 'image' ? (
          <img
            src={src}
            alt={alt}
            className="block object-contain rounded-lg shadow-xl max-w-[90vw] max-h-[90vh] mx-auto"
            onClick={(e) => e.stopPropagation()} // Prevent click on image from closing lightbox
          />
        ) : (
          <video
            src={src}
            controls
            autoPlay
            className="block object-contain rounded-lg shadow-xl max-w-[90vw] max-h-[90vh] mx-auto"
            onClick={(e) => e.stopPropagation()} // Prevent click on video from closing lightbox
          >
            Your browser does not support the video tag.
          </video>
        )}
      </div>
      {/* Close button - fixed position relative to viewport */}
      <button
        onClick={(e) => {
          e.stopPropagation(); // Prevent backdrop click when clicking button
          startClose();
        }}
        className="fixed top-6 right-6 z-[110] text-white bg-black/30 hover:bg-black/60 rounded-full p-2 text-3xl leading-none cursor-pointer"
        aria-label="Close lightbox"
      >
        &times;
      </button>
    </div>
  );
}
