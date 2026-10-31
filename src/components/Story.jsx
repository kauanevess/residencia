import { useEffect, useRef } from "react";
import gsap from "gsap";
import { story } from "../content";

export default function Story() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = gsap.utils.toArray(".story-word");
      gsap.fromTo(words, { opacity: 0.14 }, {
        opacity: 1, stagger: 0.08, ease: "none",
        scrollTrigger: { trigger: ".story-text", start: "top 78%", end: "bottom 45%", scrub: 0.6 },
      });
      const path = root.current.querySelector(".pulse path");
      const len = path.getTotalLength();
      gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
      gsap.to(path, {
        strokeDashoffset: 0, ease: "none",
        scrollTrigger: { trigger: root.current, start: "top 60%", end: "bottom 55%", scrub: 0.8 },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section className="story" id="historia" ref={root}>
      <p className="story-text">
        {story.map((line, i) => (
          <span className="story-line" key={i}>
            {line.split(" ").map((w, j) => (
              <span className="story-word" key={j}>{w}{" "}</span>
            ))}
          </span>
        ))}
      </p>
      <svg className="pulse" viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 70 H430 L460 70 L490 18 L530 108 L565 40 L590 70 H1200" fill="none" vectorEffect="non-scaling-stroke" />
      </svg>
    </section>
  );
}
