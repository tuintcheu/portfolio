import React, { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from '@/lib/theme';

/**
 * Écrit puis efface chaque mot en boucle. Le rendu serveur affiche le premier mot
 * complet (lisible sans JavaScript et par les moteurs de recherche).
 */
export default function Typewriter({ words, typeMs = 70, eraseMs = 35, holdMs = 1800 }) {
  const reduced = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(words[0]);
  const [erasing, setErasing] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), holdMs);
    return () => clearTimeout(t);
  }, [holdMs]);

  useEffect(() => {
    if (!started) return;

    if (reduced) {
      const t = setTimeout(() => {
        const next = (index + 1) % words.length;
        setIndex(next);
        setText(words[next]);
      }, holdMs + 1200);
      return () => clearTimeout(t);
    }

    const word = words[index];
    let delay = erasing ? eraseMs : typeMs;
    let step;

    if (!erasing && text === word) {
      delay = holdMs;
      step = () => setErasing(true);
    } else if (erasing && text === '') {
      step = () => {
        setErasing(false);
        setIndex((index + 1) % words.length);
      };
    } else {
      step = () => setText(erasing ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
    }

    const t = setTimeout(step, delay);
    return () => clearTimeout(t);
  }, [started, reduced, text, erasing, index, words, typeMs, eraseMs, holdMs]);

  return (
    <span aria-live="off">
      <span className="text-ink">{text}</span>
      <span className="ml-0.5 inline-block w-[2px] animate-blink bg-accent align-middle" style={{ height: '1em' }} />
    </span>
  );
}
