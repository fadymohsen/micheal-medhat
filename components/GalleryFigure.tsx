'use client';

import { useLightbox } from './Lightbox';
import { assetSrc } from '@/lib/data';

interface GalleryFigureProps {
  src: string;
  caption: string;
}

export default function GalleryFigure({ src, caption }: GalleryFigureProps) {
  const { open } = useLightbox();
  const resolved = assetSrc(src);

  return (
    <figure className="gallery-figure">
      <button
        type="button"
        aria-label="Enlarge project artwork"
        onClick={() => open(resolved, caption || 'Project artwork')}
      >
        <img
          src={resolved}
          alt={caption || 'Project artwork'}
          loading="lazy"
        />
      </button>
      <figcaption>{caption || 'ORIGINAL PROJECT IMAGE · EXTRACTED VISUAL ASSET'}</figcaption>
    </figure>
  );
}
