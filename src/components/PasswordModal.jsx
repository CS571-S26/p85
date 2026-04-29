export default function PasswordModal({ client, password, error, onChange, onUnlock, onClose }) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') onUnlock()
  }

  return (
    <div className="pg-modal-bg" onClick={onClose}>
      <div className="pg-modal" onClick={e => e.stopPropagation()}>
        <h2>{client.name}</h2>
        <p className="pg-modal-sub">{client.date} · {client.photoCount} photographs</p>

        <label htmlFor="gallery-password">Gallery Password</label>
        <input
          id="gallery-password"
          type="password"
          className={error ? 'error' : ''}
          placeholder="Enter your password"
          value={password}
          onChange={e => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
        />
        <p className="pg-modal-error" role="alert">{error}</p>

        <div className="pg-modal-actions">
          <button className="pg-btn-ghost" onClick={onClose}>Cancel</button>
          <button className="pg-btn-primary" onClick={onUnlock}>View Gallery</button>
        </div>
      </div>
    </div>
  )
}