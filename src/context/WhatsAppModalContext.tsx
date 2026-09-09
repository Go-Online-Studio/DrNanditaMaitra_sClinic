import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

export interface WhatsAppModalOptions {
  reason?: string;
  message?: string;
}

interface WhatsAppModalContextType {
  isOpen: boolean;
  modalOptions: WhatsAppModalOptions;
  openWhatsAppModal: (options?: WhatsAppModalOptions | string) => void;
  closeWhatsAppModal: () => void;
}

const WhatsAppModalContext = createContext<WhatsAppModalContextType | undefined>(undefined);

export function WhatsAppModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalOptions, setModalOptions] = useState<WhatsAppModalOptions>({});

  const openWhatsAppModal = useCallback((options?: WhatsAppModalOptions | string) => {
    if (typeof options === 'string') {
      setModalOptions({ reason: options });
    } else if (options) {
      setModalOptions(options);
    } else {
      setModalOptions({});
    }
    setIsOpen(true);
  }, []);

  const closeWhatsAppModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <WhatsAppModalContext.Provider
      value={{ isOpen, modalOptions, openWhatsAppModal, closeWhatsAppModal }}
    >
      {children}
    </WhatsAppModalContext.Provider>
  );
}

export function useWhatsAppModal() {
  const context = useContext(WhatsAppModalContext);
  if (!context) {
    throw new Error('useWhatsAppModal must be used within a WhatsAppModalProvider');
  }
  return context;
}
