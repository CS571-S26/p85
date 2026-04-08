export default function PortfolioItem({ img, onClick }) {
  return (
    <div className="portfolio-item" onClick={() => onClick(img.src)}>
      <img src={img.src} alt="portfolio" />
    </div>
  );
}
