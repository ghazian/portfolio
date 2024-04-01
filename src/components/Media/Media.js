import { useEffect, useRef } from "react";
import Webamp from "webamp";

const Media = ({ isOpen, onClose }) => {
  const containerRef = useRef(null);
  const webampRef = useRef(null);

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
              // eslint-disable-next-line no-undef
              url: `${process.env.PUBLIC_URL}/never-gonna-give-you-up.mp3`,
              duration: 213,
            },
          ],
        });

        webamp.onClose(() => {
          onClose();
        });

        webampRef.current = webamp;
      }

      webampRef.current.renderWhenReady(containerRef.current);
    } else {
      if (webampRef.current) {
        webampRef.current.dispose();
        webampRef.current = null;
      }
    }
  }, [isOpen, onClose]);

  return <div ref={containerRef} id="winamp-container" />;
};

export default Media;
