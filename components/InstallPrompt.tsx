"use client";

import { useEffect, useState } from "react";

export default function InstallPrompt() {
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOSDevice, setIsIOSDevice] = useState(false);
  const [promptEvent, setPromptEvent] = useState<any>(null);

  useEffect(() => {
    setIsInstalled(
      window.matchMedia("(display-mode: standalone)").matches ||
        (navigator as any).standalone === true
    );

    setIsIOSDevice(
      /iPhone|iPad|iPod/.test(navigator.userAgent) && !(window as any).MSStream
    );

    const handler = (e: any) => {
      e.preventDefault();
      setPromptEvent(e);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  if (isInstalled) return null;

  // Non-iOS: real install button
  if (promptEvent && !isIOSDevice) {
    return (
      <button
        onClick={async () => {
          promptEvent.prompt();
          await promptEvent.userChoice;
          setPromptEvent(null);
        }}
      >
        Install App
      </button>
    );
  }

  // iOS fallback
  if (isIOSDevice) {
    return (
      <div>
        <h3>Install App</h3>
        <p>Tap the Share button ⎋ and then “Add to Home Screen” ➕</p>
      </div>
    );
  }

  return null;
}
