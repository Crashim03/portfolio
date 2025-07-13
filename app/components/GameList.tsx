'use client'
import useEmblaCarousel from "embla-carousel-react";

type GameListProps = {
  games: {url: string, cover_url: string}[];
};

export default function GameList({ games }: GameListProps) {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className='embla' ref={emblaRef}>
      <div className="embla__container">
        {games.map((game: { url: string; cover_url: string; }, index: number) => (
          <div className='embla__slide' key={index}>
            <a href={game.url}><img src={game.cover_url} /></a>
          </div>
        ))}
      </div>
    </div>
  );
}