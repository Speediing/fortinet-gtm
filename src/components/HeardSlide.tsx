import type { SlideCard } from "@/data/types";

export function HeardSlide({
  slides,
  size = "lg",
}: {
  slides: SlideCard[];
  size?: "sm" | "lg";
}) {
  return (
    <div className={`leave leave-heard size-${size}`}>
      <div className={`deck-slides size-${size}`}>
        {slides.map((slide) => (
          <article
            key={`${slide.n}-${slide.title}`}
            className={`deck-tile voice-${slide.voice || "us"}`}
          >
            <header className="deck-tile-bar">
              <span className="deck-kicker">
                {slide.kicker || "Seller review"}
              </span>
              <span className="deck-n">{String(slide.n).padStart(2, "0")}</span>
            </header>
            <h3 className="deck-tile-title">{slide.title}</h3>
            <p className="deck-map">{slide.body}</p>
            <footer className="deck-tile-foot">
              <span>Grok Bot draft</span>
              <span>Not sent</span>
            </footer>
          </article>
        ))}
      </div>
    </div>
  );
}
