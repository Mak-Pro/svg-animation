"use client";

import { useEffect, useRef } from "react";
import {
  gsap,
  DrawSVGPlugin,
  GSDevTools,
  ScrambleTextPlugin,
} from "../../app/(default)/animation/utils/gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Hook() {
  const container = useRef(null);
  const randomChars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()[]{}abcdefghijklmnopqrstuvwxyz";

  const sectionRef = useRef<HTMLElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout>();

  useGSAP(
    () => {
      const handleScramble = (
        element: string,
        duration: number,
        spanDelay: number
      ) => {
        gsap.set(element, { visibility: "visible" });

        gsap.fromTo(
          element,
          { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" },
          {
            clipPath: "polygon(0 0, 110% 0, 110% 100%, 0 100%)",
            duration: duration - 0.1,
          }
        );

        const nodes = Array.from(document.querySelector(element)!.childNodes);
        nodes.forEach((node, index) => {
          if (node.nodeType === Node.TEXT_NODE) {
            const textContent = node.textContent?.trim();
            if (textContent) {
              gsap.fromTo(
                node,
                {
                  scrambleText: {
                    text: textContent,
                    chars: randomChars,
                  },
                },
                {
                  scrambleText: { text: textContent },
                  duration,
                }
              );
            }
          } else if (
            node.nodeType === Node.ELEMENT_NODE &&
            (node as HTMLElement).tagName === "SPAN"
          ) {
            const spanText = (node as HTMLElement).textContent;
            if (spanText) {
              gsap.fromTo(
                node,
                { scrambleText: { text: spanText, chars: randomChars } },
                {
                  scrambleText: { text: spanText },
                  duration,
                  delay: spanDelay,
                }
              );
            }
          }
        });
      };

      const tl = gsap.timeline({ autoAlpha: 1 });
      tl.set(".invisible", {
        visibility: "visible",
        onComplete: () => {
          handleScramble(".armature-c-scramble", 1.25, 1);
        },
      })
        //armature C
        .fromTo(
          ".armature-c line",
          { drawSVG: "0%" },
          { drawSVG: "100%", duration: 1, ease: "power1.inOut" }
        )
        .from(".armature-c circle, .armature-c text", {
          scale: 0,
          duration: 0.3,
          transformOrigin: "50% 50%",
          ease: "back.out(7)",
        })
        .from(".armature-c path", {
          opacity: 0,
          duration: 0.3,
          onComplete: () => {
            handleScramble(".uncovered-leg-d-scramble", 1.75, 1.25);
          },
        })
        //armature D
        .fromTo(
          ".uncovered-leg-d .h",
          { drawSVG: "0%" },
          { drawSVG: "100%", duration: 0.5, ease: "power1.in" }
        )
        .fromTo(
          ".uncovered-leg-d .r",
          { drawSVG: "0%" },
          { drawSVG: "100%", duration: 0.25, ease: "none" }
        )
        .fromTo(
          ".uncovered-leg-d .v",
          { drawSVG: "0%" },
          { drawSVG: "100%", duration: 0.5, ease: "power1.out" }
        )
        .from(".uncovered-leg-d .e", {
          opacity: 0,
          duration: 0.3,
          ease: "none",
        })
        .from(".uncovered-leg-d text", {
          scale: 0,
          duration: 0.3,
          transformOrigin: "50% 50%",
          ease: "back.out(7)",
          onComplete: () => {
            handleScramble(".electro-magnet-b-scramble", 2.5, 1.5);
          },
        })
        // box B
        .fromTo(
          ".electro-magnet-b .border",
          { drawSVG: "0%" },
          { drawSVG: "100%", duration: 0.3, stagger: 0.3, ease: "power1.inOut" }
        )
        .fromTo(
          ".electro-magnet-b line:not(.border)",
          { drawSVG: "0%" },
          {
            drawSVG: "100%",
            duration: 0.05,
            stagger: 0.05,
            ease: "power1.inOut",
          }
        )
        .from(".electro-magnet-b text", {
          scale: 0,
          duration: 0.3,
          transformOrigin: "50% 50%",
          ease: "back.out(7)",
          onComplete: () => {
            handleScramble(".stretched-membrane-a-scramble", 3, 1.25);
          },
        })
        // dashed lines a
        .fromTo(
          ".stretched-membrane-a line",
          { strokeDasharray: 0, strokeWidth: 0 },
          {
            strokeDasharray: 3.3,
            strokeWidth: 1,
            duration: 3,
            ease: "power1.inOut",
          },
          "-=1.25"
        )
        .from(".stretched-membrane-a text", {
          scale: 0,
          duration: 0.3,
          transformOrigin: "50% 50%",
          ease: "back.out(7)",
          onComplete: () => {
            handleScramble(".sound-cone-a-scramble", 2.5, 0.3);
          },
        })
        // line A
        .fromTo(
          ".sound-cone-a path",
          { drawSVG: "0%" },
          { drawSVG: "100%", duration: 2, ease: "power1.inOut" }
        )
        .fromTo(
          ".sound-cone-a line",
          { drawSVG: "0%" },
          { drawSVG: "100%", duration: 1, stagger: 0.2, ease: "power1.inOut" },
          "-=1"
        )
        .from(
          ".sound-cone-a text",
          {
            scale: 0,
            duration: 0.3,
            transformOrigin: "50% 50%",
            ease: "back.out(7)",
            onComplete: () => {
              handleScramble(".circuit-scramble", 2, 0.5);
              setTimeout(() => {
                handleScramble(".circuit-scramble-2", 2, 0.5);
              }, 1750);
              setTimeout(() => {
                handleScramble(".circuit-scramble-3", 2, 0);
              }, 3500);
            },
          },
          "-=0.2"
        )
        // line E
        .fromTo(
          ".arc-between-electro-magnets path",
          { drawSVG: "0%" },
          { drawSVG: "100%", duration: 0.5, ease: "power1.out" }
        )
        .from(".arc-between-electro-magnets text", {
          scale: 0,
          duration: 0.3,
          transformOrigin: "50% 50%",
          ease: "back.out(7)",
        })
        // circuit E
        .fromTo(
          ".circuit-e path, .circuit-e line",
          { drawSVG: "0%" },
          { drawSVG: "100%", duration: 0.3, stagger: 0.3, ease: "power1.inOut" }
        )
        .from(".circuit-e text, .circuit-g text", {
          scale: 0,
          duration: 0.3,
          transformOrigin: "50% 50%",
          ease: "back.out(7)",
        })
        .fromTo(
          ".circuit-g path",
          { drawSVG: "0%" },
          { drawSVG: "100%", duration: 3.5, ease: "power1.inOut" },
          "-=4.7"
        )
        .fromTo(
          ".circuit-g line",
          { drawSVG: "0%" },
          {
            drawSVG: "100%",
            duration: 0.3,
            stagger: 0.3,
            ease: "power1.inOut",
            onComplete: () => {
              handleScramble(".electro-magnet-f-scramble", 2.5, 1.5);
            },
          },
          "-=1.5"
        )
        // box F
        .fromTo(
          ".electro-magnet-f .border",
          { drawSVG: "0%" },
          { drawSVG: "100%", duration: 0.3, stagger: 0.3, ease: "power1.inOut" }
        )
        .fromTo(
          ".electro-magnet-f line:not(.border)",
          { drawSVG: "0%" },
          {
            drawSVG: "100%",
            duration: 0.05,
            stagger: 0.05,
            ease: "power1.inOut",
          }
        )
        .from(".electro-magnet-f text", {
          scale: 0,
          duration: 0.3,
          transformOrigin: "50% 50%",
          ease: "back.out(7)",
          onComplete: () => {
            handleScramble(".second-armature-leg-scramble", 3.5, 2);
          },
        })
        //armature H
        .fromTo(
          ".armature-h line",
          { drawSVG: "0%" },
          { drawSVG: "100%", duration: 1, ease: "power1.inOut" }
        )
        .from(".armature-h circle, .armature-h text", {
          scale: 0,
          duration: 0.3,
          transformOrigin: "50% 50%",
          ease: "back.out(7)",
        })
        .from(".armature-h path", {
          opacity: 0,
          duration: 0.3,
        })
        //armature K
        .fromTo(
          ".uncovered-leg-k .h",
          { drawSVG: "0%" },
          { drawSVG: "100%", duration: 0.5, ease: "power1.in" }
        )
        .fromTo(
          ".uncovered-leg-k .r",
          { drawSVG: "0%" },
          { drawSVG: "100%", duration: 0.25, ease: "none" }
        )
        .fromTo(
          ".uncovered-leg-k .v",
          { drawSVG: "0%" },
          { drawSVG: "100%", duration: 0.5, ease: "power1.out" }
        )
        .from(".uncovered-leg-k .e", {
          opacity: 0,
          duration: 0.3,
          ease: "none",
        })
        .from(".uncovered-leg-k text", {
          scale: 0,
          duration: 0.3,
          transformOrigin: "50% 50%",
          ease: "back.out(7)",
          onComplete: () => {
            handleScramble(".second-sound-scramble", 3, 1.5);
          },
        })
        // dashed lines L
        .fromTo(
          ".stretched-membrane-i line",
          { strokeDasharray: 0, strokeWidth: 0 },
          {
            strokeDasharray: 3.3,
            strokeWidth: 1,
            duration: 1,
            ease: "power1.inOut",
          },
          "-=0.5"
        )
        .from(".stretched-membrane-i text", {
          scale: 0,
          duration: 0.3,
          transformOrigin: "50% 50%",
          ease: "back.out(7)",
        })
        // line L
        .fromTo(
          ".sound-cone-l path",
          { drawSVG: "0%" },
          { drawSVG: "100%", duration: 2, ease: "power1.inOut" }
        )
        .fromTo(
          ".sound-cone-l line",
          { drawSVG: "0%" },
          { drawSVG: "100%", duration: 1, stagger: 0.2, ease: "power1.inOut" },
          "-=1"
        )
        .from(
          ".sound-cone-l text",
          {
            scale: 0,
            duration: 0.3,
            transformOrigin: "50% 50%",
            ease: "back.out(7)",
          },
          "-=0.2"
        );

      //   GSDevTools.create({
      //     container: "#helper",
      //     animation: tl,
      //   });
    },
    { scope: container }
  );

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            document.documentElement.classList.remove("speed-up-animations");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(sectionRef.current);

    // Modified scroll handler with debounce
    const handleScroll = () => {
      // Clear any existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Set new timeout
      scrollTimeoutRef.current = setTimeout(() => {
        // After 500ms of continuous scrolling, speed up animations
        document.documentElement.classList.add("speed-up-animations");
      }, 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex-1 before:absolute before:inset-0 before:h-80 before:pointer-events-none bg-zinc-900 bg-gradient-to-t from-zinc-900 before:-z-10"
    >
      <div
        className="flex flex-col min-h-screen overflow-hidden bg-zinc-900 bg-gradient-to-t from-zinc-900 text-white/70"
        ref={container}
      >
        <div className="max-w-[800px] mx-auto w-full h-full box" id="helper">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450">
            {/* First component (original) - shifted right by 100 */}
            <g transform="translate(50, 0)">
              {/* Sound Cone A */}
              <g className="sound-cone-a">
                {/* Main outline */}
                <path
                  d="M 50 125 
                          L 175 150
                          L 175 250
                          L 50 275
                          Z"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.7)"
                  strokeWidth="1"
                  className="sound-cone-a-path invisible"
                />

                {/* Parallel lines */}
                <line
                  x1="55"
                  y1="132"
                  x2="140"
                  y2="150"
                  stroke="rgba(255, 255, 255, 0.7)"
                  strokeWidth="0.5"
                  className="invisible"
                />
                <line
                  x1="55"
                  y1="137"
                  x2="120"
                  y2="151"
                  stroke="rgba(255, 255, 255, 0.7)"
                  strokeWidth="0.5"
                  className="invisible"
                />
                <line
                  x1="55"
                  y1="144"
                  x2="90"
                  y2="151"
                  stroke="rgba(255, 255, 255, 0.7)"
                  strokeWidth="0.5"
                  className="invisible"
                />

                {/* Letter A */}
                <text
                  x="100"
                  y="185"
                  fontFamily="'Brush Script MT', cursive"
                  fontSize="22"
                  fill="rgba(255, 255, 255, 0.7)"
                  pointerEvents="none"
                  className="letter invisible"
                >
                  A
                </text>
              </g>

              {/* Stretched Membrane Group */}
              <g className="stretched-membrane-a invisible">
                {/* Dotted edges */}
                <line
                  x1="50"
                  y1="127"
                  x2="173"
                  y2="152"
                  stroke="hsla(150, 100%, 100%, 0.7)"
                  strokeWidth="1"
                  strokeDasharray="3,3"
                  className="invisible"
                />
                <line
                  x1="50"
                  y1="273"
                  x2="173"
                  y2="248"
                  stroke="hsla(150, 100%, 100%, 0.7)"
                  strokeWidth="1"
                  strokeDasharray="3,3"
                  className="invisible"
                />
                <line
                  x1="173"
                  y1="151"
                  x2="173"
                  y2="249"
                  stroke="hsla(150, 100%, 100%, 0.7)"
                  strokeWidth="1"
                  strokeDasharray="3,3"
                  className="invisible"
                />

                {/* Lowercase a */}
                <text
                  x="160"
                  y="210"
                  fontFamily="'Brush Script MT', cursive"
                  fontSize="20"
                  fill="rgba(255, 255, 255, 0.7)"
                  pointerEvents="none"
                >
                  a
                </text>
              </g>

              {/* Armature c */}
              <g className="armature-c invisible">
                {/* Bottom cylindrical leg */}
                <line
                  x1="175"
                  y1="197"
                  x2="186"
                  y2="197"
                  stroke="rgba(255, 255, 255, 0.7)"
                  strokeWidth="1"
                />
                <line
                  x1="175"
                  y1="200"
                  x2="187"
                  y2="200"
                  stroke="rgba(255, 255, 255, 0.7)"
                  strokeWidth="1.5"
                />

                {/* Hypotenuse cylindrical leg */}
                <line
                  x1="178"
                  y1="155"
                  x2="187"
                  y2="202"
                  stroke="rgba(255, 255, 255, 0.7)"
                  strokeWidth="0.75"
                />
                <line
                  x1="180"
                  y1="154"
                  x2="189"
                  y2="202"
                  stroke="rgba(255, 255, 255, 0.7)"
                  strokeWidth="0.75"
                />
                {/* Angled rounded end cap */}
                <path
                  d="M 187,202 
                            A 1,1 0 1 0 189,202"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.7)"
                  strokeWidth="0.75"
                  className="r"
                />

                {/* Letter c */}
                <text
                  x="186"
                  y="212"
                  fontFamily="'Brush Script MT', cursive"
                  fontSize="20"
                  fill="rgba(255, 255, 255, 0.7)"
                  pointerEvents="none"
                >
                  c
                </text>

                {/* Pin circle as a ring (two concentric circles) */}
                <circle
                  cx="178"
                  cy="152"
                  r="1.5"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.7)"
                  strokeWidth="0.75"
                />
                <circle
                  cx="178"
                  cy="152"
                  r="3"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.7)"
                  strokeWidth="0.75"
                />
              </g>

              {/* Uncovered leg d */}
              <g className="uncovered-leg-d invisible">
                {/* Letter d */}
                <text
                  x="185"
                  y="146"
                  fontFamily="'Brush Script MT', cursive"
                  fontSize="20"
                  fill="rgba(255, 255, 255, 0.7)"
                  pointerEvents="none"
                >
                  d
                </text>
                {/* Horizontal section */}
                <line
                  x1="178"
                  y1="149"
                  x2="235"
                  y2="149"
                  stroke="rgba(255, 255, 255, 0.7)"
                  strokeWidth="0.75"
                  className="h"
                />
                <line
                  x1="181"
                  y1="153"
                  x2="235"
                  y2="153"
                  stroke="rgba(255, 255, 255, 0.7)"
                  strokeWidth="1"
                  className="h"
                />

                {/* Rounded corner */}
                <path
                  d="M 235,149 
                            A 9.33,6.67 0 0 1 242,154
                            M 235,153
                            A 4,6.67 0 0 1 238,158"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.7)"
                  strokeWidth="0.75"
                  className="r"
                />

                {/* Vertical section */}
                <line
                  x1="238"
                  y1="158"
                  x2="238"
                  y2="192"
                  stroke="rgba(255, 255, 255, 0.7)"
                  strokeWidth="0.75"
                  className="v"
                />
                <line
                  x1="242"
                  y1="154"
                  x2="242"
                  y2="192"
                  stroke="rgba(255, 255, 255, 0.7)"
                  strokeWidth="0.75"
                  className="v"
                />
                {/* Flat end cap */}
                <line
                  x1="238"
                  y1="192"
                  x2="242"
                  y2="192"
                  stroke="rgba(255, 255, 255, 0.7)"
                  strokeWidth="0.75"
                  className="e"
                />
                {/* Protruding half-ellipse bulb */}
                <path
                  d="M 242,182 
                            A 2,4 0 0 1 242,189"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.7)"
                  strokeWidth="0.75"
                  className="e"
                />
              </g>

              {/* Electro-magnet b */}
              <g className="electro-magnet-b invisible">
                {/* Top horizontal line */}
                <line
                  x1="192"
                  y1="158"
                  x2="238"
                  y2="158"
                  stroke="rgba(255, 255, 255, 0.7)"
                  strokeWidth="0.75"
                  className="border"
                />
                {/* Right vertical line */}
                <line
                  x1="238"
                  y1="158"
                  x2="238"
                  y2="197"
                  stroke="rgba(255, 255, 255, 0.7)"
                  strokeWidth="1"
                  className="border"
                />
                {/* Weighted bottom line */}
                <line
                  x1="192"
                  y1="197"
                  x2="238"
                  y2="197"
                  stroke="rgba(255, 255, 255, 0.7)"
                  strokeWidth="1.5"
                  className="border"
                />
                {/* Left vertical line */}
                <line
                  x1="192"
                  y1="158"
                  x2="192"
                  y2="197"
                  stroke="rgba(255, 255, 255, 0.7)"
                  strokeWidth="0.75"
                  className="border"
                />

                {/* Parallel vertical lines */}
                <line
                  x1="194.3"
                  y1="158"
                  x2="194.3"
                  y2="197"
                  stroke="rgba(255, 255, 255, 0.7)"
                  strokeWidth="0.5"
                />
                <line
                  x1="196.6"
                  y1="158"
                  x2="196.6"
                  y2="197"
                  stroke="rgba(255, 255, 255, 0.7)"
                  strokeWidth="0.5"
                />
                <line
                  x1="198.9"
                  y1="158"
                  x2="198.9"
                  y2="197"
                  stroke="rgba(255, 255, 255, 0.7)"
                  strokeWidth="0.5"
                />
                <line
                  x1="201.2"
                  y1="158"
                  x2="201.2"
                  y2="197"
                  stroke="rgba(255, 255, 255, 0.7)"
                  strokeWidth="0.5"
                />
                <line
                  x1="203.5"
                  y1="158"
                  x2="203.5"
                  y2="197"
                  stroke="rgba(255, 255, 255, 0.7)"
                  strokeWidth="0.5"
                />
                <line
                  x1="205.8"
                  y1="158"
                  x2="205.8"
                  y2="197"
                  stroke="rgba(255, 255, 255, 0.7)"
                  strokeWidth="0.5"
                />
                <line
                  x1="208.1"
                  y1="158"
                  x2="208.1"
                  y2="197"
                  stroke="rgba(255, 255, 255, 0.7)"
                  strokeWidth="0.5"
                />
                <line
                  x1="210.4"
                  y1="158"
                  x2="210.4"
                  y2="197"
                  stroke="rgba(255, 255, 255, 0.7)"
                  strokeWidth="0.5"
                />
                <line
                  x1="212.7"
                  y1="158"
                  x2="212.7"
                  y2="197"
                  stroke="rgba(255, 255, 255, 0.7)"
                  strokeWidth="0.5"
                />
                <line
                  x1="215.0"
                  y1="158"
                  x2="215.0"
                  y2="197"
                  stroke="rgba(255, 255, 255, 0.7)"
                  strokeWidth="0.5"
                />
                <line
                  x1="217.3"
                  y1="158"
                  x2="217.3"
                  y2="197"
                  stroke="rgba(255, 255, 255, 0.7)"
                  strokeWidth="0.5"
                />
                <line
                  x1="219.6"
                  y1="158"
                  x2="219.6"
                  y2="197"
                  stroke="rgba(255, 255, 255, 0.7)"
                  strokeWidth="0.5"
                />
                <line
                  x1="221.9"
                  y1="158"
                  x2="221.9"
                  y2="197"
                  stroke="rgba(255, 255, 255, 0.7)"
                  strokeWidth="0.5"
                />
                <line
                  x1="224.2"
                  y1="158"
                  x2="224.2"
                  y2="197"
                  stroke="rgba(255, 255, 255, 0.7)"
                  strokeWidth="0.5"
                />
                <line
                  x1="226.5"
                  y1="158"
                  x2="226.5"
                  y2="197"
                  stroke="rgba(255, 255, 255, 0.7)"
                  strokeWidth="0.5"
                />
                <line
                  x1="228.8"
                  y1="158"
                  x2="228.8"
                  y2="197"
                  stroke="rgba(255, 255, 255, 0.7)"
                  strokeWidth="0.5"
                />
                <line
                  x1="231.1"
                  y1="158"
                  x2="231.1"
                  y2="197"
                  stroke="rgba(255, 255, 255, 0.7)"
                  strokeWidth="0.5"
                />
                <line
                  x1="233.4"
                  y1="158"
                  x2="233.4"
                  y2="197"
                  stroke="rgba(255, 255, 255, 0.7)"
                  strokeWidth="0.5"
                />
                <line
                  x1="235.7"
                  y1="158"
                  x2="235.7"
                  y2="197"
                  stroke="rgba(255, 255, 255, 0.7)"
                  strokeWidth="0.5"
                />
                <line
                  x1="238.0"
                  y1="158"
                  x2="238.0"
                  y2="197"
                  stroke="rgba(255, 255, 255, 0.7)"
                  strokeWidth="0.5"
                />

                {/* Protruding three-sided rectangle on left side */}
                <line
                  x1="189"
                  y1="174"
                  x2="192"
                  y2="174"
                  stroke="rgba(255, 255, 255, 0.7)"
                  strokeWidth="0.75"
                />
                <line
                  x1="189"
                  y1="174"
                  x2="189"
                  y2="181"
                  stroke="rgba(255, 255, 255, 0.7)"
                  strokeWidth="0.75"
                />
                <line
                  x1="189"
                  y1="181"
                  x2="192"
                  y2="181"
                  stroke="rgba(255, 255, 255, 0.7)"
                  strokeWidth="0.75"
                />

                {/* Letter b */}
                <text
                  x="203"
                  y="190"
                  fontFamily="'Brush Script MT', cursive"
                  fontSize="20"
                  fill="rgba(255, 255, 255, 0.7)"
                  pointerEvents="none"
                >
                  b
                </text>
              </g>
              {/* Circuit E */}
              <g className="circuit-e circuit-ebefg invisible">
                <path
                  d="M 218 197 
                          C 216 210, 220 225, 218 240"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.7)"
                  strokeWidth="0.5"
                />
                {/* Stack of alternating parallel lines */}
                <line
                  x1="214.25"
                  y1="240"
                  x2="221.75"
                  y2="240"
                  stroke="rgba(255, 255, 255, 0.7)"
                  strokeWidth="0.75"
                />
                <line
                  x1="209"
                  y1="243"
                  x2="227"
                  y2="243"
                  stroke="rgba(255, 255, 255, 0.7)"
                  strokeWidth="0.75"
                />
                <line
                  x1="214.25"
                  y1="246"
                  x2="221.75"
                  y2="246"
                  stroke="rgba(255, 255, 255, 0.7)"
                  strokeWidth="0.75"
                />
                <line
                  x1="209"
                  y1="249"
                  x2="227"
                  y2="249"
                  stroke="rgba(255, 255, 255, 0.7)"
                  strokeWidth="0.75"
                />
                <line
                  x1="214.25"
                  y1="252"
                  x2="221.75"
                  y2="252"
                  stroke="rgba(255, 255, 255, 0.7)"
                  strokeWidth="0.75"
                />
                <line
                  x1="209"
                  y1="255"
                  x2="227"
                  y2="255"
                  stroke="rgba(255, 255, 255, 0.7)"
                  strokeWidth="0.75"
                />
                <line
                  x1="214.25"
                  y1="258"
                  x2="221.75"
                  y2="258"
                  stroke="rgba(255, 255, 255, 0.7)"
                  strokeWidth="0.75"
                />
                <line
                  x1="209"
                  y1="261"
                  x2="227"
                  y2="261"
                  stroke="rgba(255, 255, 255, 0.7)"
                  strokeWidth="0.75"
                />
                {/* Second curved line with subtler opposite bow */}
                <path
                  d="M 218 261 
                          C 219 275, 217 285, 218 290"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.7)"
                  strokeWidth="0.5"
                  className="path-1"
                />
                {/* Rectangle as four lines at bottom of second curved line */}
                <line
                  x1="195"
                  y1="290"
                  x2="241"
                  y2="290"
                  stroke="rgba(255, 255, 255, 0.7)"
                  strokeWidth="0.75"
                  className="border"
                />{" "}
                {/* Top */}
                <line
                  x1="241"
                  y1="290"
                  x2="241"
                  y2="329"
                  stroke="rgba(255, 255, 255, 0.7)"
                  strokeWidth="1"
                  className="border"
                />{" "}
                {/* Right */}
                <line
                  x1="195"
                  y1="329"
                  x2="241"
                  y2="329"
                  stroke="rgba(255, 255, 255, 0.7)"
                  strokeWidth="1"
                  className="border"
                />{" "}
                {/* Bottom */}
                <line
                  x1="195"
                  y1="290"
                  x2="195"
                  y2="329"
                  stroke="rgba(255, 255, 255, 0.7)"
                  strokeWidth="0.75"
                  className="border"
                />{" "}
                {/* Left */}
                {/* Capital letter E */}
                <text
                  x="218"
                  y="315"
                  fontFamily="'Brush Script MT', cursive"
                  fontSize="22"
                  fill="rgba(255, 255, 255, 0.7)"
                  textAnchor="middle"
                  pointerEvents="none"
                >
                  E
                </text>
              </g>
            </g>
            <g
              className="arc-between-electro-magnets circuit-ebefg invisible"
              transform="translate(50, 0)"
            >
              {/* Arc between electro-magnet b and electro-magnet f */}
              <path
                d="M 223 175 
                        C 283 158.5, 363 158.5, 426 175"
                fill="none"
                stroke="rgba(255, 255, 255, 0.7)"
                strokeWidth="0.75"
              />
              {/* Lowercase e above arc */}
              <text
                x="324.5"
                y="160"
                fontFamily="'Brush Script MT', cursive"
                fontSize="20"
                fill="rgba(255, 255, 255, 0.7)"
                pointerEvents="none"
              >
                e
              </text>
            </g>
            {/* Second component - adjusted transform */}
            <g transform="translate(300, 0)">
              {/* Sound Cone L (narrowed and shortened) */}
              <g className="sound-cone-l second-sound-cone-group invisible">
                {/* Main outline - left side height reduced, right side narrowed */}
                <path
                  d="M 225 150 
                          L 400 195
                          L 400 205
                          L 225 250
                          Z"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.7)"
                  strokeWidth="1"
                />

                {/* Parallel lines - adjusted for new dimensions */}
                <line
                  x1="230"
                  y1="157"
                  x2="315"
                  y2="180"
                  stroke="rgba(255, 255, 255, 0.7)"
                  strokeWidth="0.5"
                />
                <line
                  x1="230"
                  y1="162"
                  x2="295"
                  y2="180"
                  stroke="rgba(255, 255, 255, 0.7)"
                  strokeWidth="0.5"
                />
                <line
                  x1="230"
                  y1="169"
                  x2="265"
                  y2="179"
                  stroke="rgba(255, 255, 255, 0.7)"
                  strokeWidth="0.5"
                />

                {/* Letter L - adjusted for new position */}
                <text
                  x="295"
                  y="205"
                  fontFamily="'Brush Script MT', cursive"
                  fontSize="22"
                  fill="rgba(255, 255, 255, 0.7)"
                  pointerEvents="none"
                  className="letter"
                >
                  L
                </text>
              </g>

              {/* Stretched Membrane i */}
              <g className="stretched-membrane-i second-sound-cone-group invisible">
                <line
                  x1="227"
                  y1="153"
                  x2="398"
                  y2="197"
                  stroke="hsla(150, 100%, 100%, 0.7)"
                  strokeWidth="1"
                  strokeDasharray="3,3"
                />
                <line
                  x1="227"
                  y1="247"
                  x2="398"
                  y2="203"
                  stroke="hsla(150, 100%, 100%, 0.7)"
                  strokeWidth="1"
                  strokeDasharray="3,3"
                />
                <line
                  x1="227"
                  y1="152"
                  x2="227"
                  y2="248"
                  stroke="hsla(150, 100%, 100%, 0.7)"
                  strokeWidth="1"
                  strokeDasharray="3,3"
                />

                {/* Letter i */}
                <text
                  x="230"
                  y="203"
                  fontFamily="'Brush Script MT', cursive"
                  fontSize="20"
                  fill="rgba(255, 255, 255, 0.7)"
                  pointerEvents="none"
                >
                  i
                </text>
              </g>
              {/* Reflected components */}
              <g transform="translate(400, 0) scale(-1, 1)">
                {/* Armature h */}
                <g className="armature-h second-armature-leg-group invisible">
                  {/* Bottom cylindrical leg */}
                  <line
                    x1="175"
                    y1="197"
                    x2="186"
                    y2="197"
                    stroke="rgba(255, 255, 255, 0.7)"
                    strokeWidth="1"
                  />
                  <line
                    x1="175"
                    y1="200"
                    x2="187"
                    y2="200"
                    stroke="rgba(255, 255, 255, 0.7)"
                    strokeWidth="1.5"
                  />

                  {/* Hypotenuse cylindrical leg */}
                  <line
                    x1="178"
                    y1="155"
                    x2="187"
                    y2="202"
                    stroke="rgba(255, 255, 255, 0.7)"
                    strokeWidth="0.75"
                  />
                  <line
                    x1="180"
                    y1="154"
                    x2="189"
                    y2="202"
                    stroke="rgba(255, 255, 255, 0.7)"
                    strokeWidth="0.75"
                  />
                  {/* Angled rounded end cap */}
                  <path
                    d="M 187,202 
                              A 1,1 0 1 0 189,202"
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.7)"
                    strokeWidth="0.75"
                  />

                  {/* Letter h */}
                  <text
                    x="-195"
                    y="218"
                    transform="scale(-1, 1)"
                    fontFamily="'Brush Script MT', cursive"
                    fontSize="20"
                    fill="rgba(255, 255, 255, 0.7)"
                    pointerEvents="none"
                  >
                    h
                  </text>

                  {/* Pin circle as a ring (two concentric circles) */}
                  <circle
                    cx="178"
                    cy="152"
                    r="1.5"
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.7)"
                    strokeWidth="0.75"
                  />
                  <circle
                    cx="178"
                    cy="152"
                    r="3"
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.7)"
                    strokeWidth="0.75"
                  />
                </g>
                {/* Uncovered leg k */}
                <g className="uncovered-leg-k second-armature-leg-group invisible">
                  {/* Letter k */}
                  <text
                    x="-180"
                    y="148"
                    transform="scale(-1, 1)"
                    fontFamily="'Brush Script MT', cursive"
                    fontSize="20"
                    fill="rgba(255, 255, 255, 0.7)"
                    pointerEvents="none"
                  >
                    k
                  </text>
                  {/* Horizontal section */}
                  <line
                    x1="178"
                    y1="149"
                    x2="235"
                    y2="149"
                    stroke="rgba(255, 255, 255, 0.7)"
                    strokeWidth="0.75"
                    className="h"
                  />
                  <line
                    x1="181"
                    y1="153"
                    x2="235"
                    y2="153"
                    stroke="rgba(255, 255, 255, 0.7)"
                    strokeWidth="1"
                    className="h"
                  />

                  {/* Rounded corner */}
                  <path
                    d="M 235,149 
                              A 9.33,6.67 0 0 1 242,154
                              M 235,153
                              A 4,6.67 0 0 1 238,158"
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.7)"
                    strokeWidth="0.75"
                    className="r"
                  />

                  {/* Vertical section */}
                  <line
                    x1="238"
                    y1="158"
                    x2="238"
                    y2="192"
                    stroke="rgba(255, 255, 255, 0.7)"
                    strokeWidth="0.75"
                    className="v"
                  />
                  <line
                    x1="242"
                    y1="154"
                    x2="242"
                    y2="192"
                    stroke="rgba(255, 255, 255, 0.7)"
                    strokeWidth="0.75"
                    className="v"
                  />
                  {/* Flat end cap */}
                  <line
                    x1="238"
                    y1="192"
                    x2="242"
                    y2="192"
                    stroke="rgba(255, 255, 255, 0.7)"
                    strokeWidth="0.75"
                    className="e"
                  />
                  {/* Protruding half-ellipse bulb */}
                  <path
                    d="M 242,182 
                              A 2,4 0 0 1 242,189"
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.7)"
                    strokeWidth="0.75"
                    className="e"
                  />
                </g>

                {/* Electro-magnet f */}
                <g className="electro-magnet-f circuit-ebefg invisible">
                  {/* Top horizontal line */}
                  <line
                    x1="192"
                    y1="158"
                    x2="238"
                    y2="158"
                    stroke="rgba(255, 255, 255, 0.7)"
                    strokeWidth="0.75"
                    className="border"
                  />
                  {/* Right vertical line */}
                  <line
                    x1="238"
                    y1="158"
                    x2="238"
                    y2="197"
                    stroke="rgba(255, 255, 255, 0.7)"
                    strokeWidth="1"
                    className="border"
                  />
                  {/* Weighted bottom line */}
                  <line
                    x1="192"
                    y1="197"
                    x2="238"
                    y2="197"
                    stroke="rgba(255, 255, 255, 0.7)"
                    strokeWidth="1.5"
                    className="border"
                  />
                  {/* Left vertical line */}
                  <line
                    x1="192"
                    y1="158"
                    x2="192"
                    y2="197"
                    stroke="rgba(255, 255, 255, 0.7)"
                    strokeWidth="0.75"
                    className="border"
                  />

                  {/* Parallel vertical lines */}
                  <line
                    x1="194.3"
                    y1="158"
                    x2="194.3"
                    y2="197"
                    stroke="rgba(255, 255, 255, 0.7)"
                    strokeWidth="0.5"
                  />
                  <line
                    x1="196.6"
                    y1="158"
                    x2="196.6"
                    y2="197"
                    stroke="rgba(255, 255, 255, 0.7)"
                    strokeWidth="0.5"
                  />
                  <line
                    x1="198.9"
                    y1="158"
                    x2="198.9"
                    y2="197"
                    stroke="rgba(255, 255, 255, 0.7)"
                    strokeWidth="0.5"
                  />
                  <line
                    x1="201.2"
                    y1="158"
                    x2="201.2"
                    y2="197"
                    stroke="rgba(255, 255, 255, 0.7)"
                    strokeWidth="0.5"
                  />
                  <line
                    x1="203.5"
                    y1="158"
                    x2="203.5"
                    y2="197"
                    stroke="rgba(255, 255, 255, 0.7)"
                    strokeWidth="0.5"
                  />
                  <line
                    x1="205.8"
                    y1="158"
                    x2="205.8"
                    y2="197"
                    stroke="rgba(255, 255, 255, 0.7)"
                    strokeWidth="0.5"
                  />
                  <line
                    x1="208.1"
                    y1="158"
                    x2="208.1"
                    y2="197"
                    stroke="rgba(255, 255, 255, 0.7)"
                    strokeWidth="0.5"
                  />
                  <line
                    x1="210.4"
                    y1="158"
                    x2="210.4"
                    y2="197"
                    stroke="rgba(255, 255, 255, 0.7)"
                    strokeWidth="0.5"
                  />
                  <line
                    x1="212.7"
                    y1="158"
                    x2="212.7"
                    y2="197"
                    stroke="rgba(255, 255, 255, 0.7)"
                    strokeWidth="0.5"
                  />
                  <line
                    x1="215.0"
                    y1="158"
                    x2="215.0"
                    y2="197"
                    stroke="rgba(255, 255, 255, 0.7)"
                    strokeWidth="0.5"
                  />
                  <line
                    x1="217.3"
                    y1="158"
                    x2="217.3"
                    y2="197"
                    stroke="rgba(255, 255, 255, 0.7)"
                    strokeWidth="0.5"
                  />
                  <line
                    x1="219.6"
                    y1="158"
                    x2="219.6"
                    y2="197"
                    stroke="rgba(255, 255, 255, 0.7)"
                    strokeWidth="0.5"
                  />
                  <line
                    x1="221.9"
                    y1="158"
                    x2="221.9"
                    y2="197"
                    stroke="rgba(255, 255, 255, 0.7)"
                    strokeWidth="0.5"
                  />
                  <line
                    x1="224.2"
                    y1="158"
                    x2="224.2"
                    y2="197"
                    stroke="rgba(255, 255, 255, 0.7)"
                    strokeWidth="0.5"
                  />
                  <line
                    x1="226.5"
                    y1="158"
                    x2="226.5"
                    y2="197"
                    stroke="rgba(255, 255, 255, 0.7)"
                    strokeWidth="0.5"
                  />
                  <line
                    x1="228.8"
                    y1="158"
                    x2="228.8"
                    y2="197"
                    stroke="rgba(255, 255, 255, 0.7)"
                    strokeWidth="0.5"
                  />
                  <line
                    x1="231.1"
                    y1="158"
                    x2="231.1"
                    y2="197"
                    stroke="rgba(255, 255, 255, 0.7)"
                    strokeWidth="0.5"
                  />
                  <line
                    x1="233.4"
                    y1="158"
                    x2="233.4"
                    y2="197"
                    stroke="rgba(255, 255, 255, 0.7)"
                    strokeWidth="0.5"
                  />
                  <line
                    x1="235.7"
                    y1="158"
                    x2="235.7"
                    y2="197"
                    stroke="rgba(255, 255, 255, 0.7)"
                    strokeWidth="0.5"
                  />
                  <line
                    x1="238.0"
                    y1="158"
                    x2="238.0"
                    y2="197"
                    stroke="rgba(255, 255, 255, 0.7)"
                    strokeWidth="0.5"
                  />

                  {/* Protruding three-sided rectangle on left side */}
                  <line
                    x1="189"
                    y1="174"
                    x2="192"
                    y2="174"
                    stroke="rgba(255, 255, 255, 0.7)"
                    strokeWidth="0.75"
                  />
                  <line
                    x1="189"
                    y1="174"
                    x2="189"
                    y2="181"
                    stroke="rgba(255, 255, 255, 0.7)"
                    strokeWidth="0.75"
                  />
                  <line
                    x1="189"
                    y1="181"
                    x2="192"
                    y2="181"
                    stroke="rgba(255, 255, 255, 0.7)"
                    strokeWidth="0.75"
                  />

                  {/* Letter f */}
                  <text
                    x="-215"
                    y="185"
                    transform="scale(-1, 1)"
                    fontFamily="'Brush Script MT', cursive"
                    fontSize="20"
                    fill="rgba(255, 255, 255, 0.7)"
                    pointerEvents="none"
                  >
                    f
                  </text>
                </g>
                {/* Circuit g */}
                <g className="circuit-g circuit-ebefg invisible">
                  <path
                    d="M 218 197 
                          C 210 240, 226 240, 218 290"
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.7)"
                    strokeWidth="0.5"
                  />
                  {/* Rectangle as four lines at bottom of second curved line */}
                  <line
                    x1="195"
                    y1="290"
                    x2="241"
                    y2="290"
                    stroke="rgba(255, 255, 255, 0.7)"
                    strokeWidth="0.75"
                  />{" "}
                  {/* Top */}
                  <line
                    x1="195"
                    y1="329"
                    x2="241"
                    y2="329"
                    stroke="rgba(255, 255, 255, 0.7)"
                    strokeWidth="1"
                  />{" "}
                  {/* Bottom */}
                  <line
                    x1="195"
                    y1="290"
                    x2="195"
                    y2="329"
                    stroke="rgba(255, 255, 255, 0.7)"
                    strokeWidth="0.75"
                  />{" "}
                  {/* Left */}
                  <line
                    x1="241"
                    y1="290"
                    x2="241"
                    y2="329"
                    stroke="rgba(255, 255, 255, 0.7)"
                    strokeWidth="1"
                  />{" "}
                  {/* Right */}
                  {/* Lowercase letter g */}
                  <text
                    x="-218"
                    y="315"
                    transform="scale(-1, 1)"
                    fontFamily="'Brush Script MT', cursive"
                    fontSize="20"
                    fill="rgba(255, 255, 255, 0.7)"
                    textAnchor="middle"
                    pointerEvents="none"
                  >
                    g
                  </text>
                </g>
              </g>
            </g>
          </svg>
          <div className="w-full max-w-[560px] mx-auto leading-5 flex flex-col items-start">
            <p
              className="armature-c-scramble whitespace-nowrap"
              style={{ visibility: "hidden" }}
            >
              The Armature
              <span className="font-bold italic text-white ml-[6px] text-[18px]">
                c
              </span>
            </p>
            <p
              className="uncovered-leg-d-scramble whitespace-nowrap"
              style={{ visibility: "hidden" }}
            >
              is fastened loosely to the uncovered leg
              <span className="font-bold italic text-white ml-[6px] text-[18px]">
                d
              </span>
            </p>
            <p
              className="electro-magnet-b-scramble whitespace-nowrap"
              style={{ visibility: "hidden" }}
            >
              of the electro magnet{" "}
              <span className="font-bold italic text-white ml-[3px] text-[18px]">
                b
              </span>
            </p>
            <p
              className="stretched-membrane-a-scramble whitespace-nowrap"
              style={{ visibility: "hidden" }}
            >
              and its other extremity is attached to the center of a stretched
              membrane,{" "}
              <span className="font-bold italic text-white ml-[1px] text-[18px]">
                a
              </span>
              .
            </p>
            <p
              className="sound-cone-a-scramble whitespace-nowrap"
              style={{ visibility: "hidden" }}
            >
              A cone,{" "}
              <span className="font-bold italic text-white ml-[1px] text-[18px]">
                A
              </span>{" "}
              , is used to converge Sound-vibrations upon the membrane.
            </p>
            <p
              className="circuit-scramble whitespace-nowrap"
              style={{ visibility: "hidden" }}
            >
              When a sound is uttered in the cone the membrane
              <span className="font-bold italic text-white ml-[3px] mr-[5px] text-[18px]">
                a
              </span>
              is set in vibration,
            </p>
            <p
              className="circuit-scramble-2 whitespace-nowrap"
              style={{ visibility: "hidden" }}
            >
              the armature{" "}
              <span className="font-bold italic text-white mx-[3px] text-[18px]">
                c
              </span>{" "}
              is forced to partake of the motion,
            </p>
            <p
              className="circuit-scramble-3 whitespace-nowrap"
              style={{ visibility: "hidden" }}
            >
              and thus electrical undulations are created upon the circuit{" "}
              <span className="font-bold italic text-white mx-[3px] text-[18px]">
                E b e f g
              </span>
              .
            </p>
            <p
              className="electro-magnet-f-scramble whitespace-nowrap"
              style={{ visibility: "hidden" }}
            >
              The undulatory current passing through the electro-magnet{" "}
              <span className="font-bold italic text-white mx-[3px] text-[18px]">
                f
              </span>
            </p>
            <p
              className="second-armature-leg-scramble whitespace-nowrap"
              style={{ visibility: "hidden" }}
            >
              influences its armature{" "}
              <span className="font-bold italic text-white mx-[3px] text-[18px]">
                h
              </span>{" "}
              to copy the motion of the armature{" "}
              <span className="font-bold italic text-white mx-[3px] text-[18px]">
                c
              </span>
              .
            </p>
            <p
              className="second-sound-scramble whitespace-nowrap"
              style={{ visibility: "hidden" }}
            >
              A similar sound to that uttered into{" "}
              <span className="font-bold italic text-white mx-[3px] text-[18px]">
                A
              </span>{" "}
              is then heard to proceed from{" "}
              <span className="font-bold italic text-white mx-[3px] text-[18px]">
                L
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
