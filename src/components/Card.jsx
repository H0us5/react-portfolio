import "./css/Card.css";

export default function Card({ src, alt, href, title, description }) {
  return (
    <div className="card">
      <div className="image__wrapper">
        <a href={href} target="_blank">
          <img src={src} alt={alt} className="card__img" />
        </a>
      </div>
      <div className="card__text">
        <h2 className="card__title">{title}</h2>
        <p className="card__description">{description}</p>
      </div>
    </div>
  );
}
