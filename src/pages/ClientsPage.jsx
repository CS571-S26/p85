import { useState } from 'react'
import ClientCard from '../components/ClientCard'
import PasswordModal from '../components/PasswordModal'
import UnlockedGallery from '../components/UnlockedGallery'


import kdx1 from '../assets/kdx1.jpg'
import kdx2 from '../assets/kdx2.jpg'
import kdx3 from '../assets/kdx3.jpg'
import kdx4 from '../assets/kdx4.jpg'
import kdx5 from '../assets/kdx5.jpg'
import kdx6 from '../assets/kdx6.jpg'
import kdxcover from '../assets/kdxcover.jpg'
import rachelCover from '../assets/rachelcover.jpg'
import sophistiqueCover from '../assets/sophistiquecover.jpg'
import riyaaCover from '../assets/riyaacover.jpg'
import jenniferCover from '../assets/jennifercover.jpg'
import MMCover from '../assets/p13.jpg'

const clients = [
  {
    id: 1,
    name: 'KΔX',
    date: 'April 2024',
    coverColor: '#c9b8a8',
    password: 'kdx2024',
    photoCount: 7,
    photos: [kdxcover,  kdx2, kdx3, kdx4, kdx5, kdx6],
  },
  {
    id: 2,
    name: 'Rachel',
    date: 'April 2022',
    coverColor: '#a8bbc9',
    password: 'rachel2022',
    photoCount: 5,
    photos: Array(5).fill(rachelCover),
  },
  {
    id: 3,
    name: 'Sophistique',
    date: 'October 2024',
    coverColor: '#b8c9a8',
    password: 'sophistique2024',
    photoCount: 5,
    photos: Array(5).fill(sophistiqueCover),
  },
  {
    id: 4,
    name: 'Jennifer',
    date: 'June 2024',
    coverColor: '#c9c3a8',
    password: 'jennifer2024',
    photoCount: 5,
    photos: Array(5).fill(jenniferCover),
  },
  {
    id: 5,
    name: 'Riya',
    date: 'July 2024',
    coverColor: '#c9a8b8',
    password: 'riya2024',
    photoCount: 5,
    photos: Array(5).fill(riyaaCover),
  },
  {
    id: 6,
    name: 'M&M Baby Shower',
    date: 'July 2021',
    coverColor: '#a8c9c4',
    password: 'mm2021',
    photoCount: 5,
    photos: Array(5).fill(MMCover),
  },
]

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400;500&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  .pg-root {
    min-height: 100vh;
    background: #f7f4f0;
    font-family: 'Jost', sans-serif;
    color: #2a2520;
  }

  .pg-header {
    text-align: center;
    padding: 4rem 2rem 2rem;
    border-bottom: 1px solid #e0dbd5;
  }

  .pg-header h1 {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 300;
    font-size: 3rem;
    letter-spacing: 0.05em;
    color: #2a2520;
  }

  .pg-header p {
    font-size: 0.8rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #8a8078;
    margin-top: 0.5rem;
  }

  .pg-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2px;
    padding: 2px;
    max-width: 1200px;
    margin: 3rem auto;
  }

  .pg-card {
    position: relative;
    aspect-ratio: 3/4;
    overflow: hidden;
    cursor: pointer;
    background: #ddd;
  }

  .pg-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .pg-card:hover img { transform: scale(1.04); }

  .pg-card-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(20,16,12,0.75) 0%, rgba(20,16,12,0.1) 50%, transparent 100%);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 1.75rem;
    transition: background 0.3s ease;
  }

  .pg-card:hover .pg-card-overlay {
    background: linear-gradient(to top, rgba(20,16,12,0.85) 0%, rgba(20,16,12,0.2) 60%, transparent 100%);
  }

  .pg-card-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.6rem;
    font-weight: 300;
    color: #f7f4f0;
    line-height: 1.2;
  }

  .pg-card-date {
    font-size: 0.72rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: rgba(247,244,240,0.65);
    margin-top: 0.4rem;
  }

  .pg-card-count {
    font-size: 0.72rem;
    letter-spacing: 0.1em;
    color: rgba(247,244,240,0.5);
    margin-top: 0.25rem;
  }

  .pg-card-lock {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: rgba(247,244,240,0.15);
    border: 1px solid rgba(247,244,240,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(4px);
    color: rgba(247,244,240,0.8);
    font-size: 14px;
  }

  .pg-modal-bg {
    position: fixed;
    inset: 0;
    background: rgba(20,16,12,0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    padding: 1rem;
    backdrop-filter: blur(6px);
    animation: fadeIn 0.2s ease;
  }

  @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
  @keyframes slideUp { from { opacity: 0; transform: translateY(20px) } to { opacity: 1; transform: translateY(0) } }

  .pg-modal {
    background: #f7f4f0;
    width: 100%;
    max-width: 420px;
    padding: 2.5rem;
    animation: slideUp 0.25s ease;
  }

  .pg-modal h2 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.8rem;
    font-weight: 300;
    color: #2a2520;
    margin-bottom: 0.25rem;
  }

  .pg-modal-sub {
    font-size: 0.75rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #8a8078;
    margin-bottom: 2rem;
  }

  .pg-modal label {
    display: block;
    font-size: 0.72rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #8a8078;
    margin-bottom: 0.5rem;
  }

  .pg-modal input {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid #d5cfc8;
    background: white;
    font-family: 'Jost', sans-serif;
    font-size: 0.95rem;
    color: #2a2520;
    outline: none;
    transition: border-color 0.2s;
    margin-bottom: 0.5rem;
  }

  .pg-modal input:focus { border-color: #8a8078; }
  .pg-modal input.error { border-color: #c0745a; }

  .pg-modal-error {
    font-size: 0.78rem;
    color: #c0745a;
    margin-bottom: 1.25rem;
    min-height: 1.1em;
  }

  .pg-modal-actions {
    display: flex;
    gap: 0.75rem;
    margin-top: 1.5rem;
  }

  .pg-btn-primary {
    flex: 1;
    padding: 0.75rem;
    background: #2a2520;
    color: #f7f4f0;
    border: none;
    font-family: 'Jost', sans-serif;
    font-size: 0.78rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    cursor: pointer;
    transition: background 0.2s;
  }

  .pg-btn-primary:hover { background: #3d3730; }

  .pg-btn-ghost {
    padding: 0.75rem 1.25rem;
    background: transparent;
    color: #8a8078;
    border: 1px solid #d5cfc8;
    font-family: 'Jost', sans-serif;
    font-size: 0.78rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.2s;
  }

  .pg-btn-ghost:hover { border-color: #8a8078; color: #2a2520; }

  .pg-gallery-header {
 background: #f7f4f0;  
    color: #2a2520; 
    padding: 1.25rem 2rem;
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .pg-gallery-header h2 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.6rem;
    font-weight: 300;
    flex: 1;
  }
.pg-gallery-header span {
    font-size: 0.72rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #000000; /* changed */
  }

  .pg-back-btn {
    background: none;
    border: 1px solid #d5cfc8;          /* changed */
    color: #2a2520;                      /* changed */
    font-family: 'Jost', sans-serif;
    font-size: 0.72rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: all 0.2s;
  }

  .pg-back-btn:hover {
    background: #f0ece6;                 /* changed */
    border-color: #8a8078;              /* changed */
  }

  .pg-photos-masonry {
    columns: 3;
    column-gap: 4px;
    padding: 4px;
    background: #fff7f2;
  }

  @media (max-width: 900px) { .pg-photos-masonry { columns: 2; } }
  @media (max-width: 500px) { .pg-photos-masonry { columns: 1; } }

  .pg-photo-item {
    break-inside: avoid;
    margin-bottom: 4px;
    overflow: hidden;
    cursor: zoom-in;
    background: #3d3730;
  }

  .pg-photo-item img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.4s ease, opacity 0.3s ease;
  }

  .pg-photo-item:hover img {
    transform: scale(1.04);
    opacity: 0.85;
  }
`

export default function ClientsPage() {
  const [selected, setSelected] = useState(null)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [unlockedClient, setUnlockedClient] = useState(null)

  const handleCardClick = (client) => {
    setSelected(client)
    setPassword('')
    setError('')
  }

  const handleUnlock = () => {
    if (password === selected.password) {
      setUnlockedClient(selected)
      setSelected(null)
    } else {
      setError('Incorrect password. Please try again.')
    }
  }

  return (
    <>
      <style>{styles}</style>
      <div className="pg-root">

        {unlockedClient ? (
          <UnlockedGallery
            client={unlockedClient}
            onBack={() => setUnlockedClient(null)}
          />
        ) : (
          <>
            <div className="pg-header">
              <h1>Client Galleries</h1>
              <p>Select a gallery to view your photos</p>
            </div>
            <div className="pg-grid">
              {clients.map((client) => (
                <ClientCard key={client.id} client={client} onClick={handleCardClick} />
              ))}
            </div>
          </>
        )}

        {selected && (
          <PasswordModal
            client={selected}
            password={password}
            error={error}
            onChange={(val) => { setPassword(val); setError('') }}
            onUnlock={handleUnlock}
            onClose={() => setSelected(null)}
          />
        )}

      </div>
    </>
  )
}