export default function ClientCard({ client, onClick }) {
  return (
    <div className="pg-card" onClick={() => onClick(client)}>
      <img src={client.photos[0]} alt={client.name} loading="lazy" />
      <div className="pg-card-overlay">
        <div className="pg-card-name">{client.name}</div>
        <div className="pg-card-date">{client.date}</div>
        <div className="pg-card-count">{client.photoCount} photographs</div>
      </div>
      <div className="pg-card-lock">🔒</div>
    </div>
  )
}
