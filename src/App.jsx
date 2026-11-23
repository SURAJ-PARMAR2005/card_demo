import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { wedding as w } from "./data/wedding";
import { Hero, Program, Story, Entourage, Details, Venues, Gallery, Rsvp } from "./components/Section.jsx";
import ActionBar from "./components/actionBar.jsx";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const cardRef = useRef(null);

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const context = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
      intro
        .from(".hero .kicker", { autoAlpha: 0, y: 18, duration: 0.6 })
        .from(".hero .names", { autoAlpha: 0, y: 28, duration: 0.8 }, "-=0.25")
        .from(".heroPhoto", { autoAlpha: 0, y: 24, scale: 0.98, duration: 0.9 }, "-=0.3")
        .from(".heroPhoto .mono", { autoAlpha: 0, y: 16, duration: 0.55 }, "-=0.2");

      gsap.utils.toArray(".card > section, .card > .blue, .card > .deep").forEach((section) => {
        gsap.from(section, {
          autoAlpha: 0,
          y: 30,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: { trigger: section, start: "top 86%", once: true },
        });
      });

      gsap.from(".progRow", {
        autoAlpha: 0,
        x: -18,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: { trigger: ".oval", start: "top 82%", once: true },
      });

      gsap.from(".venue", {
        autoAlpha: 0,
        y: 24,
        duration: 0.65,
        stagger: 0.16,
        ease: "power2.out",
        scrollTrigger: { trigger: ".venue", start: "top 84%", once: true },
      });

      gsap.from(".gal > div", {
        autoAlpha: 0,
        scale: 0.94,
        y: 16,
        duration: 0.55,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: { trigger: ".gal", start: "top 82%", once: true },
      });

      gsap.to(".heroPhoto img", {
        scale: 1.08,
        ease: "none",
        scrollTrigger: {
          trigger: ".heroPhoto",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, cardRef);

    return () => context.revert();
  }, []);

  return (
    <main ref={cardRef} className="card" style={w.theme}>
      <Hero w={w} />
      <Program w={w} />
      <Story w={w} />
      <Entourage w={w} />
      <Details w={w} />
      <Venues w={w} />
      <Gallery w={w} />
      <Rsvp w={w} />
      <ActionBar w={w} />
    </main>
  );
}