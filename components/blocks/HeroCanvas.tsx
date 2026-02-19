/**
 * Gradient mesh background — pure CSS animated blobs.
 * 3 radial gradients at very low opacity, slow drift animation.
 * Respects prefers-reduced-motion (static when reduced).
 * Zero JS, zero canvas, zero dependencies.
 */

export function HeroCanvas() {
  return (
    <div className="hero-mesh absolute inset-0" aria-hidden="true">
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />
      <div className="hero-blob hero-blob-3" />
    </div>
  );
}
