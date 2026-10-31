import { useEffect, useRef } from "react";
import gsap from "gsap";
import { meta } from "../content";
import { scroller } from "../lib/scroller";

export default function Hero() {
  const root = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      const done = () => { window.__introDone = true; scroller.lenis?.start(); };
      const letters = gsap.utils.toArray(".hero-letter");
      const tl = gsap.timeline({ delay: 0.5, defaults: { ease: "power3.inOut" }, onComplete: done });
      tl.timeScale(0.6);
      gsap.set(letters, { yPercent: 110 });
      tl.from(".hero-stamp", { opacity: 0, y: 10, duration: 0.7 })
        .from(".coin", { scale: 0, rotation: -140, duration: 1.1, ease: "back.out(1.4)" }, "-=0.2")
        .to(".coin", { rotationY: 720, duration: 1.3, ease: "power2.inOut" })
        .to(".coin", { yPercent: -40, scale: 0.2, opacity: 0, duration: 0.5, ease: "power2.in" }, "-=0.15")
        .to(letters, { yPercent: 0, duration: 1.15, stagger: 0.06, ease: "expo.out" }, "-=0.2")
        .from(".hero-rule", { scaleX: 0, duration: 1.2, ease: "expo.out" }, "-=0.9")
        .from(".hero-meta > *", { opacity: 0, y: 12, duration: 0.8, stagger: 0.1 }, "-=0.7");

      gsap.to(".hero-ring", { rotation: 360, duration: 60, repeat: -1, ease: "none" });
      gsap.to(".hero-inner", {
        yPercent: -14, opacity: 0.1, ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" ref={root} aria-label="Abertura">
      <div className="hero-ring" aria-hidden="true" />
      <div className="hero-inner">
        <p className="hero-top">
          <span>{meta.kicker}</span>
          <span className="hero-stamp">{meta.stamp}</span>
        </p>
        <div className="coin" aria-hidden="true"><span>G</span></div>
        <h1 className="hero-name" aria-label={meta.name}>
          {[...meta.name].map((c, i) => (
            <span className="hero-mask" key={i} aria-hidden="true"><span className="hero-letter">{c}</span></span>
          ))}
        </h1>
        <div className="hero-rule" />
        <p className="hero-meta">
          <span>{meta.caption}</span>
          <a href="#historia">Role para continuar</a>
        </p>
      </div>
    </section>
  );
}
