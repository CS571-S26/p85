import PortfolioItem from './PortfolioItem';

export default function PortfolioGrid({ images, onClick }) {
  return (
    <div className="portfolio-grid">
      {images.map((img, index) => (
        <PortfolioItem key={index} img={img} onClick={onClick} />
      ))}
    </div>
  );
}