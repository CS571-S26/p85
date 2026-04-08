export default function PortfolioFilter({ setCategory }) {
  return (
    <div className="portfolio-filters">
      <button onClick={() => setCategory('all')}>All</button>
      <button onClick={() => setCategory('portraits')}>Portraits</button>
      <button onClick={() => setCategory('events')}>Events</button>
      <button onClick={() => setCategory('travel')}>Travel</button>
    </div>
  );
}