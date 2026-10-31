import { useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import "./styles/global.css";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Gallery from "./components/Gallery";
import FinalMessage from "./components/FinalMessage";
import { scroller } from "./lib/scroller";

gsap.registerPlugin(ScrollTrigger);
if ("scrollRestoration" in window.history) window.history.scrollRestoration = "manual";

export default function App() {
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, wheelMultiplier: 0.9 });
    scroller.lenis = lenis;
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (t) => lenis.raf(t * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    if (!window.__introDone) lenis.stop();
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    document.fonts?.ready.then(refresh);
    return () => {
      window.removeEventListener("load", refresh);
      gsap.ticker.remove(tick);
      lenis.destroy();
      scroller.lenis = null;
    };
  }, []);

  return (
    <main className="site">
      <Hero />
      <Story />
      <Gallery />
      <FinalMessage />
    </main>
  );
}
