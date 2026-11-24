'use client';

import { createContext, useContext, useEffect, useState } from 'react';

interface LightboxState {
  src: string;
  alt: string;
}

interface LightboxContextValue {
  open: (src: string, alt: string) => void;
}

const LightboxContext = createContext<LightboxContextValue>({ open: () => {} });

export function useLightbox() {
  return useContext(LightboxContext);
}

export function LightboxProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<LightboxState | null>(null);

  function openLightbox(src: string, alt: string) {
    setState({ src, alt });
  }

  function close() {
    setState(null);
  }

  useEffect(() => {
    if (!state) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') close();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [state]);

  return (
    <LightboxContext.Provider value={{ open: openLightbox }}>
      {children}
      <div
        className="lightbox"
        role="dialog"
        aria-label="Project visual preview"
        aria-hidden={state ? 'false' : 'true'}
        onClick={(e) => { if (e.target === e.currentTarget) close(); }}
      >
        <button type="button" aria-label="Close image" onClick={close}>×</button>
        {state && <img src={state.src} alt={state.alt} />}
        <small>{state?.alt ?? ''}</small>
      </div>
    </LightboxContext.Provider>
  );
}
