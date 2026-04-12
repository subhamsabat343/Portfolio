"use client";

import { useEffect, useState } from "react";

/**
 * Track scroll position to show/hide elements (e.g., nav background)
 * Threshold is the amount of pixels scrolled before returning true.
 */
export function useScrolled(threshold = 20) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };
    
    // Check initial state
    handleScroll();
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return isScrolled;
}
