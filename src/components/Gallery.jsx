import { useEffect, useRef } from "react";
import gsap from "gsap";
import { scenes } from "../content";

export default function Gallery() {
  const root = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const panels = gsap.utils.toArray(".scene", root.current);
      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: { trigger: root.current, start: "top top", end: () => `+=${innerHeight * (panels.length - 1) * 1.1}`, pin: true, scrub: 0.7, anticipatePin: 1 },
      });
      gsap.set(panels.slice(1), { clipPath: "inset(100% 0% 0% 0%)" });
      panels.forEach((p, i) => {
        gsap.set(p.querySelector(".scene-photo"), { yPercent: 8 });
        if (i > 0) tl.to(p, { clipPath: "inset(0% 0% 0% 0%)", duration: 1, ease: "power2.inOut" }, i - 1);
        if (i > 0) tl.fromTo(panels[i - 1].querySelector(".scene-word"), { yPercent: 0 }, { yPercent: -30, duration: 1 }, i - 1);
        tl.fromTo(p.querySelector(".scene-photo"), { yPercent: 8 }, { yPercent: -8, duration: 1.4 }, Math.max(0, i - 1));
        tl.fromTo(p.querySelector(".scene-word"), { yPercent: i ? 30 : 0 }, { yPercent: 0, duration: 1 }, Math.max(0, i - 1));
      });
      tl.to(".scenes-count-inner", { yPercent: -100 * (1 - 1 / panels.length), duration: panels.length - 1 }, 0);
    }, root);
    return () => mm.revert();
  }, []);

  return (
    <section className="scenes" ref={root} aria-label="O que construiu a preparação">
      {scenes.map((s, i) => (
        <article className={`scene tone-${s.tone}`} key={s.word}>
          <h2 className="scene-word">{s.word}</h2>
          <div
            className="scene-photo"
            role="img"
            aria-label={s.photo.alt}
            style={{ backgroundImage: `url(${s.photo.src})`, "--z": `${s.photo.z}%`, "--x": `${s.photo.x}%`, "--y": `${s.photo.y}%` }}
          />
          <span className="scene-no">{String(i + 1).padStart(2, "0")}</span>
        </article>
      ))}
      <div className="scenes-count" aria-hidden="true">
        <div className="scenes-count-win"><div className="scenes-count-inner">
          {scenes.map((_, i) => <span key={i}>{String(i + 1).padStart(2, "0")}</span>)}
        </div></div>
        <i />
        <span>{String(scenes.length).padStart(2, "0")}</span>
      </div>
    </section>
  );
}
