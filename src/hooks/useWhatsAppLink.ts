import { useState, useEffect } from 'react';

/**
 * Custom hook to generate a dynamic WhatsApp link.
 * Implements device-based detection with a debounced window resize listener
 * to optimize layout and links.
 */
export function useWhatsAppLink() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 768
  );

  useEffect(() => {
    // Initial check
    const checkDevice = () => {
      const userAgentMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
      const isSmallScreen = window.innerWidth < 1024;
      setIsMobile(userAgentMobile || isSmallScreen);
    };

    checkDevice();

    // Debounced window resize handler
    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setWindowWidth(window.innerWidth);
        checkDevice();
      }, 150); // Debounce duration: 150ms
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  /**
   * Generates a fully encoded WhatsApp link with the requested phone number: 919081005399
   * @param message Text to encode and append to the link
   */
  const getWhatsAppUrl = (message?: string): string => {
    const phoneNumber = "919081005399";
    const baseUrl = isMobile 
      ? "https://api.whatsapp.com/send" 
      : "https://web.whatsapp.com/send";
    
    const params = new URLSearchParams();
    params.append("phone", phoneNumber);
    if (message) {
      params.append("text", message);
    }
    
    return `${baseUrl}?${params.toString()}`;
  };

  return { isMobile, windowWidth, getWhatsAppUrl };
}
