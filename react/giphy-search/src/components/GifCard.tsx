import type { GiphyGif } from '../types/giphy';
interface GifCardProps {
  gif: GiphyGif;
}
export const GifCard = ({ gif }: GifCardProps) => {
  const image = gif.images.fixed_width;
  return (
    <article className="gif-card">
      <img
        src={image.url}
        alt={gif.title}
        width={Number(image.width)}
        height={Number(image.height)}
        loading="lazy"
      />

      <div className="gif-overlay">{gif.title}</div>
    </article>
  );
};
