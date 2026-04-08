export default function Lightbox({ img, onClose }) {
  return (
    <div className="lightbox" onClick={onClose}>
      <span className="lightbox-close">&times;</span>
      <img src={img} alt="fullscreen" className="lightbox-img" />
    </div>
  );
}