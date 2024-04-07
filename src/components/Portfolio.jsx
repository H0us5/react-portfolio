import { useState } from "react";
import Card from "./Card";
import "./css/Portfolio.css";

export default function Portfolio() {
  const [color, setColor] = useState("rgb(255, 255, 255)");

  function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    setColor("rgb(" + color.join(", ") + ")");
  }

  return (
    <section className="portfolio" id="portfolio">
      <h1 className="portfolio__title">
        My{" "}
        <span
          onMouseOver={randomColor}
          onMouseOut={randomColor}
          className="portfolio__title--multicolor"
          style={{ color: color }}
        >
          projects
        </span>
      </h1>
      <div className="portfolio__cards">
        <Card
          src="./img/image1.webp"
          alt="Dragabble Portfolio Site"
          href="https://h0us5.github.io/portfolio-dragabble/"
          title="Dragabble Portfolio Site"
          description="An example of a portfolio for developers and creators"
        />
        <Card
          src="./img/image2.webp"
          alt="Interactive Map of Ukraine"
          href="https://h0us5.github.io/ukraine-interactive-map/"
          title="Interactive Map of Ukraine"
          description="Highlighted borders. Pop-up window with information about the area"
        />
        <Card
          src="./img/image3.webp"
          alt="Website for coffee production"
          href="https://h0us5.github.io/portfolio-responsive-layout-vanilla/"
          title="Responsive Web Design #1"
          description="Website for coffee production"
        />
        <Card
          src="./img/image4.webp"
          alt="Responsive Web Design with Bootstrap"
          href="https://h0us5.github.io/portfolio-responsive-layout-bootstrap/"
          title="Responsive Web Design with Bootstrap"
          description="Website for business and companies"
        />
        <Card
          src="./img/image5.webp"
          alt="Website for business and companies"
          href="https://h0us5.github.io/portfolio-responsive-layout-scss-2/"
          title="Responsive Web Design #2"
          description="Website for business and companies"
        />
        <Card
          src="./img/image6.webp"
          alt="Notes app"
          href="https://react-notes-h0us5.vercel.app/"
          title="Notes app"
          description="An application for notes with search, filter, likes and adding to favorites"
        />
        <Card
          src="./img/image7.webp"
          alt="Game of Matches"
          href="https://react-matches-game-ts.vercel.app/"
          title="Game of Matches"
          description="Game of Matches with AI"
        />
        <Card
          src="./img/image8.webp"
          alt="Cocktails Data Base"
          href="https://react-cocktail-db-seven.vercel.app/"
          title="Cocktail Database"
          description="Database about cocktails with search and recipe"
        />
        <Card
          src="./img/image9.webp"
          alt="Clock for programmers"
          href="https://react-clock-kappa.vercel.app/"
          title="JavaScript Clock"
          description="Clock for programmers"
        />
      </div>
    </section>
  );
}
