export default function Lightbox({ img, onClose, onNext, onPrev, hasPrev, hasNext, currentIndex, total }) {
  return (
    <div className="lightbox" onClick={onClose}>

      <button className="lightbox-close" onClick={onClose} aria-label="Close">✕</button>

      <button
        className="lb-nav lb-prev"
        onClick={onPrev}
        disabled={!hasPrev}
        aria-label="Previous"
      >
        ‹
      </button>

      <div className="lightbox-inner" onClick={e => e.stopPropagation()}>
        <img src={img.src} alt={img.alt} className="lightbox-img" />
        <div className="lightbox-meta">
          {img.caption  && <span className="lb-caption">{img.caption}</span>}
          {img.location && <span className="lb-location">{img.location}</span>}
          <span className="lb-counter">{currentIndex + 1} / {total}</span>
        </div>
      </div>

      <button
        className="lb-nav lb-next"
        onClick={onNext}
        disabled={!hasNext}
        aria-label="Next"
      >
        ›
      </button>

    </div>
  );
}
