import { useState } from 'react'
import Lightbox from './Lightbox';

export default function UnlockedGallery({ client, onBack }) {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const photos = client.photos.map((src, i) => ({ src, caption: client.name, alt: `${client.name} photo ${i + 1}` }))

  const handlePhotoClick = (i) => setLightboxIndex(i)
  const handleClose = () => setLightboxIndex(null)
  const handleNext = (e) => { e.stopPropagation(); setLightboxIndex((i) => Math.min(i + 1, photos.length - 1)) }
  const handlePrev = (e) => { e.stopPropagation(); setLightboxIndex((i) => Math.max(i - 1, 0)) }

  return (
    <>
      <div className="pg-gallery-header">
        <button className="pg-back-btn" onClick={onBack}>← Back</button>
        <h2>{client.name}</h2>
        <span>{client.photoCount} photos</span>
      </div>

      <div className="pg-photos-masonry">
        {photos.map((photo, i) => (
          <div key={i} className="pg-photo-item" onClick={() => handlePhotoClick(i)}>
            <img src={photo.src} alt={`${client.name} photo ${i + 1}`} loading="lazy" />
          </div>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          img={photos[lightboxIndex]}
          currentIndex={lightboxIndex}
          total={photos.length}
          hasPrev={lightboxIndex > 0}
          hasNext={lightboxIndex < photos.length - 1}
          onClose={handleClose}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </>
  )
}