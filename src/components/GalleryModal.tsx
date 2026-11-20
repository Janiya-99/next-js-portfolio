import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import type { ProjectScreenshot } from "@/data/projects";
import { assetUrl } from "@/lib/assets";

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  screenshots: ProjectScreenshot[];
  projectTitle: string;
  initialIndex?: number;
}

export function GalleryModal({
  isOpen,
  onClose,
  screenshots,
  projectTitle,
  initialIndex = 0,
}: GalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : screenshots.length - 1));
      }
      if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => (prev < screenshots.length - 1 ? prev + 1 : 0));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, screenshots.length]);

  if (!isOpen || screenshots.length === 0) return null;

  const current = screenshots[currentIndex];

  return (
    <div
      className="gallery-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${projectTitle} screenshot gallery`}
    >
      <div
        className="gallery-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="gallery-modal-header">
          <div className="gallery-modal-title">
            <span className="mono">{projectTitle}</span>
            <span className="gallery-badge">{current.tag}</span>
            <span className="gallery-counter mono">
              {currentIndex + 1} / {screenshots.length}
            </span>
          </div>
          <button
            onClick={onClose}
            className="gallery-close-btn"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        <div className="gallery-modal-viewport">
          <img
            src={assetUrl(current.src)}
            alt={current.caption}
            className="gallery-modal-img"
          />

          {screenshots.length > 1 && (
            <>
              <button
                className="gallery-nav-btn prev"
                onClick={() =>
                  setCurrentIndex((prev) =>
                    prev > 0 ? prev - 1 : screenshots.length - 1,
                  )
                }
                aria-label="Previous screenshot"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                className="gallery-nav-btn next"
                onClick={() =>
                  setCurrentIndex((prev) =>
                    prev < screenshots.length - 1 ? prev + 1 : 0,
                  )
                }
                aria-label="Next screenshot"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>

        <div className="gallery-modal-footer">
          <p className="gallery-caption">{current.caption}</p>
          <div className="gallery-thumbnails">
            {screenshots.map((item, idx) => (
              <button
                key={item.src}
                className={`gallery-thumb ${idx === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`View slide ${idx + 1}`}
              >
                <img src={assetUrl(item.src)} alt="" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

