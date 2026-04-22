export default function PortfolioItem({ img, onClick }) {
  return (
    <div className="portfolio-item" onClick={() => onClick(img)}>
      <img src={img.src} alt={img.caption || 'portfolio'} />
      <div className="pi-hover-info">
        {img.caption  && <span className="pi-caption">{img.caption}</span>}
        {img.location && <span className="pi-location">{img.location}</span>}
      </div>
    </div>
  );
}
