const FILTERS = [
  { label: 'All',       value: 'all'       },
  { label: 'Portraits', value: 'portraits' },
  { label: 'Events',    value: 'events'    },
  { label: 'Travel',    value: 'travel'    },
];

export default function PortfolioFilter({ selectedCategory, setCategory }) {
  return (
    <div className="portfolio-filters">
      {FILTERS.map(f => (
        <button
          key={f.value}
          className={`pf-btn${selectedCategory === f.value ? ' active' : ''}`}
          onClick={() => setCategory(f.value)}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
