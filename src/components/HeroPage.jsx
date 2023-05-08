import { useRef, useEffect } from "react";
import "./css/HeroPage.css";

export default function HeroPage() {
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const fancy = useRef(null);

  useEffect(() => {
    const word = fancy.current;
    if (word) {
      const enhance = (id) => {
        const element = document.getElementById(id),
          text = element.innerText.split("");

        element.innerText = "";

        text.forEach((value, index) => {
          const outer = document.createElement("span");

          outer.className = "outer";

          const inner = document.createElement("span");

          inner.className = "inner";

          inner.style.animationDelay = `${rand(-5000, 0)}ms`;

          const letter = document.createElement("span");

          letter.className = "letter";

          letter.innerText = value;

          letter.style.animationDelay = `${index * 1000}ms`;

          inner.appendChild(letter);

          outer.appendChild(inner);

          element.appendChild(outer);
        });
      };

      enhance("channel-link");
    }
  }, []);
  return (
    <section className="hero-page">
      <div id="text">
        <div className="hero-page__line line">
          <p className="hero-page__word word">Front</p>
          <p className="hero-page__word word">End</p>
        </div>

        <div className="hero-page__line line">
          <h2 className="word">Developer</h2>
        </div>

        <div className="hero-page__line line">
          <p className="hero-page__word word">Bohdan</p>
          <p className="hero-page__word word">Dovhal</p>
        </div>

        <div className="hero-page__line line">
          <a
            ref={fancy}
            id="channel-link"
            href="https://github.com/H0us5"
            target="_blank"
            className="hero-page__word word fancy"
          >
            portfolio
          </a>
        </div>
      </div>
    </section>
  );
}
