import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ending, meta } from "../content";

export default function FinalMessage() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ scrollTrigger: { trigger: root.current, start: "top 55%" } });
      tl.from(".end-letter", { yPercent: 110, duration: 1.2, stagger: 0.03, ease: "expo.out" })
        .from(".end-text, .end-sign", { opacity: 0, y: 16, duration: 1, stagger: 0.25, ease: "power2.out" }, "-=0.6");
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section className="ending" ref={root}>
      <h2 className="end-title" aria-label={ending.title.join(" ")}>
        {ending.title.map((line, li) => (
          <span className="end-line" key={li} aria-hidden="true">
            {[...line].map((c, i) => (
              <span className="end-mask" key={i}><span className="end-letter">{c === " " ? "\u00A0" : c}</span></span>
            ))}
          </span>
        ))}
      </h2>
      <p className="end-text">{ending.text}</p>
      <p className="end-sign">{ending.sign}</p>
      <p className="end-foot"><span>{meta.name}</span><span>{meta.stamp}</span></p>
    </section>
  );
}
