import { useEffect, useRef } from "react";
import Webamp from "webamp";

interface MediaProps {
  isOpen: boolean;
  onClose: () => void;
}

const Media = ({ isOpen, onClose }: MediaProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const webampRef = useRef<Webamp | null>(null);

  useEffect(() => {
    if (isOpen && Webamp.browserIsSupported()) {
      if (!webampRef.current) {
        const webamp = new Webamp({
          initialTracks: [
            {
              metaData: {
                artist: "Rick Astley",
                title: "Never Gonna Give You Up",
              },
              url: `${import.meta.env.BASE_URL}never-gonna-give-you-up.mp3`,
              duration: 213,
            },
          ],
        });

        webamp.onClose(() => {
          onClose();
        });

        webampRef.current = webamp;
        webampRef.current.renderWhenReady(containerRef.current!);
      }
    } else {
      if (webampRef.current) {
        webampRef.current.dispose();
        webampRef.current = null;
      }
    }

    return () => {
      if (webampRef.current) {
        webampRef.current.dispose();
        webampRef.current = null;
      }
    };
  }, [isOpen, onClose]);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "11.5%",
        left: "0",
        transform: "translate(10px, -100px)",
        zIndex: 9999,
      }}
    >
      <div ref={containerRef} id="winamp-container" />
    </div>
  );
};

export default Media;
