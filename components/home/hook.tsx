"use client"

import { useEffect, useRef } from 'react'

export default function Hook() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            document.documentElement.classList.remove('speed-up-animations');
          }
        });
      },
      {
        threshold: 0.1
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
        document.documentElement.classList.add('speed-up-animations');
      }, 500);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative flex-1 before:absolute before:inset-0 before:h-80 before:pointer-events-none bg-zinc-900 bg-gradient-to-t from-zinc-900 before:-z-10">
      <div className="max-w-[800px] mx-auto h-full">
        <div className="svg-animation-wrapper h-full">
          <div className="h-[800px]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
              {/* Background for visibility */}
              <rect width="800" height="800" fill="none"/>
              <text className="armature-c-text" 
                    x="240" y="240" 
                    fill="rgba(255, 255, 255, 0.7)">
                    The armature <tspan className="font-bold italic text-white text-lg">c</tspan>
              </text>
              <text className="uncovered-leg-d-text"
                    x="300" y="210" 
                    fill="rgba(255, 255, 255, 0.7)">
                    is fastened loosely to the uncovered leg <tspan className="font-bold italic text-white text-lg">d</tspan>
              </text>
              <text className="electro-magnet-b-text"
                    x="290" y="210" 
                    fill="rgba(255, 255, 255, 0.7)">
                    of the electro magnet <tspan className="font-bold italic text-white text-lg">b</tspan>
              </text>
              <text className="stretched-membrane-a-text"
                    x="230" y="240" 
                    fill="rgba(255, 255, 255, 0.7)">
                    and its other extremity is attached to the center of a stretched membrane, <tspan className="font-bold italic text-white text-lg">a</tspan>.
              </text>
              <text className="sound-cone-a-text" 
                    x="100" y="300"       
                    fill="rgba(255, 255, 255, 0.7)">
                A cone, <tspan className="font-bold italic text-white text-lg">A</tspan>, is used to converge Sound-vibrations upon the membrane.
              </text>
              <g className="circuit-ebefg-text">
                <text className="circuit-ebefg-text-0"
                      x="218" y="350" 
                      fill="rgba(255, 255, 255, 0.7)">
                  When a sound is uttered in the cone the membrane <tspan className="font-bold italic text-white text-lg">a</tspan> is set in vibration,
                </text>
                <text className="circuit-ebefg-text-1"
                      x="218" y="370" 
                      fill="rgba(255, 255, 255, 0.7)">
                  the armature <tspan className="font-bold italic text-white text-lg">c</tspan> is forced to partake of the motion,
                </text>
                <text className="circuit-ebefg-text-2"
                      x="218" y="390" 
                      fill="rgba(255, 255, 255, 0.7)">
                  and thus electrical undulations are created upon the circuit <tspan className="font-bold italic text-white text-lg">E b e f g</tspan>.
                </text>
              </g>
              <text className="electro-magnet-f-text"
                    x="350" y="220" 
                    fill="rgba(255, 255, 255, 0.7)">
                The undulatory current passing through the electro-magnet <tspan className="font-bold italic text-white text-lg">f</tspan>
              </text>
              <text className="second-armature-leg-group-text"
                    x="300" y="240" 
                    fill="rgba(255, 255, 255, 0.7)">
                influences its armature <tspan className="font-bold italic text-white text-lg">h</tspan> to copy the motion of the armature <tspan className="font-bold italic text-white text-lg">c</tspan>.
              </text>
              <text className="second-sound-cone-group-text"
                    x="300" y="270" 
                    fill="rgba(255, 255, 255, 0.7)">
                A similar sound to that uttered into <tspan className="font-bold italic text-white text-lg">A</tspan> is then heard to proceed from <tspan className="font-bold italic text-white text-lg">L</tspan>.
              </text>
              {/* First component (original) - shifted right by 100 */}
              <g transform="translate(50, 0)">
                {/* Sound Cone A */}
                <g className="sound-cone-a">
                  {/* Main outline */}
                  <path d="M 50 125 
                          L 175 150
                          L 175 250
                          L 50 275
                          Z" 
                        fill="none" 
                        stroke="rgba(255, 255, 255, 0.7)" 
                        strokeWidth="1"/>

                  {/* Parallel lines */}
                  <line x1="55" y1="132" x2="140" y2="150"
                        stroke="rgba(255, 255, 255, 0.7)" 
                        strokeWidth="0.5"/>
                  <line x1="55" y1="137" x2="120" y2="151"
                        stroke="rgba(255, 255, 255, 0.7)" 
                        strokeWidth="0.5"/>
                  <line x1="55" y1="144" x2="90" y2="151"
                        stroke="rgba(255, 255, 255, 0.7)" 
                        strokeWidth="0.5"/>
                  
                  {/* Letter A */}
                  <text x="100" y="185" 
                        fontFamily="'Brush Script MT', cursive" 
                        fontSize="22"
                        fill="rgba(255, 255, 255, 0.7)"
                        pointerEvents="none">A</text>
                </g>
                
                {/* Stretched Membrane Group */}
                <g className="stretched-membrane-a">
                  {/* Dotted edges */}
                  <line x1="50" y1="127" x2="173" y2="152"
                        stroke="hsla(150, 100%, 100%, 0.7)" 
                        strokeWidth="1"
                        strokeDasharray="3,3"/>
                  <line x1="50" y1="273" x2="173" y2="248"
                        stroke="hsla(150, 100%, 100%, 0.7)" 
                        strokeWidth="1"
                        strokeDasharray="3,3"/>
                  <line x1="173" y1="151" x2="173" y2="249"
                        stroke="hsla(150, 100%, 100%, 0.7)" 
                        strokeWidth="1"
                        strokeDasharray="3,3"/>
                  
                  {/* Lowercase a */}
                  <text x="160" y="210" 
                        fontFamily="'Brush Script MT', cursive" 
                        fontSize="20"
                        fill="rgba(255, 255, 255, 0.7)"
                        pointerEvents="none">a</text>
                </g>
                
                {/* Armature c */}
                <g className="armature-c">
                  {/* Bottom cylindrical leg */}
                  <line x1="175" y1="197" x2="186" y2="197" 
                        stroke="rgba(255, 255, 255, 0.7)" 
                        strokeWidth="1"/>
                  <line x1="175" y1="200" x2="187" y2="200" 
                        stroke="rgba(255, 255, 255, 0.7)" 
                        strokeWidth="1.5"/>
                  
                  {/* Hypotenuse cylindrical leg */}
                  <line x1="178" y1="155" x2="187" y2="202" 
                        stroke="rgba(255, 255, 255, 0.7)" 
                        strokeWidth="0.75"/>
                  <line x1="180" y1="154" x2="189" y2="202" 
                        stroke="rgba(255, 255, 255, 0.7)" 
                        strokeWidth="0.75"/>
                  {/* Angled rounded end cap */}
                  <path d="M 187,202 
                            A 1,1 0 1 0 189,202"
                        fill="none"
                        stroke="rgba(255, 255, 255, 0.7)" 
                        strokeWidth="0.75"/>
                  
                  {/* Letter c */}
                  <text x="186" y="212"
                        fontFamily="'Brush Script MT', cursive" 
                        fontSize="20"
                        fill="rgba(255, 255, 255, 0.7)"
                        pointerEvents="none">c</text>
                  
                  {/* Pin circle as a ring (two concentric circles) */}
                  <circle cx="178" cy="152" r="1.5" 
                          fill="none"
                          stroke="rgba(255, 255, 255, 0.7)" 
                          strokeWidth="0.75"/>
                  <circle cx="178" cy="152" r="3" 
                          fill="none"
                          stroke="rgba(255, 255, 255, 0.7)" 
                          strokeWidth="0.75"/>
                </g>
                {/* Uncovered leg d */}
                <g className="uncovered-leg-d">
                  {/* Letter d */}
                  <text x="185" y="146" 
                        fontFamily="'Brush Script MT', cursive" 
                        fontSize="20"
                        fill="rgba(255, 255, 255, 0.7)"
                        pointerEvents="none">d</text>
                  {/* Horizontal section */}
                  <line x1="178" y1="149" x2="235" y2="149" 
                        stroke="rgba(255, 255, 255, 0.7)" 
                        strokeWidth="0.75"/>
                  <line x1="181" y1="153" x2="235" y2="153" 
                        stroke="rgba(255, 255, 255, 0.7)" 
                        strokeWidth="1"/>

                  {/* Rounded corner */}
                  <path d="M 235,149 
                            A 9.33,6.67 0 0 1 242,154
                            M 235,153
                            A 4,6.67 0 0 1 238,158"
                        fill="none"
                        stroke="rgba(255, 255, 255, 0.7)" 
                        strokeWidth="0.75"/>

                  {/* Vertical section */}
                  <line x1="238" y1="158" x2="238" y2="192" 
                        stroke="rgba(255, 255, 255, 0.7)" 
                        strokeWidth="0.75"/>
                  <line x1="242" y1="154" x2="242" y2="192" 
                        stroke="rgba(255, 255, 255, 0.7)" 
                        strokeWidth="0.75"/>
                  {/* Flat end cap */}
                  <line x1="238" y1="192" x2="242" y2="192"
                        stroke="rgba(255, 255, 255, 0.7)" 
                        strokeWidth="0.75"/>
                  {/* Protruding half-ellipse bulb */}
                  <path d="M 242,182 
                            A 2,4 0 0 1 242,189"
                        fill="none"
                        stroke="rgba(255, 255, 255, 0.7)" 
                        strokeWidth="0.75"/>
                </g>
                
                {/* Electro-magnet b */}
                <g className="electro-magnet-b">
                  {/* Top horizontal line */}
                  <line x1="192" y1="158" x2="238" y2="158"
                        stroke="rgba(255, 255, 255, 0.7)"
                        strokeWidth="0.75"/>
                  {/* Right vertical line */}
                  <line x1="238" y1="158" x2="238" y2="197"
                        stroke="rgba(255, 255, 255, 0.7)"
                        strokeWidth="1"/>
                  {/* Weighted bottom line */}
                  <line x1="192" y1="197" 
                        x2="238" y2="197"
                        stroke="rgba(255, 255, 255, 0.7)"
                        strokeWidth="1.5"/>
                  {/* Left vertical line */}
                  <line x1="192" y1="158" x2="192" y2="197" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="0.75"/>
                  
                  {/* Parallel vertical lines */}
                  <line x1="194.3" y1="158" x2="194.3" y2="197" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="0.5"/>
                  <line x1="196.6" y1="158" x2="196.6" y2="197" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="0.5"/>
                  <line x1="198.9" y1="158" x2="198.9" y2="197" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="0.5"/>
                  <line x1="201.2" y1="158" x2="201.2" y2="197" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="0.5"/>
                  <line x1="203.5" y1="158" x2="203.5" y2="197" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="0.5"/>
                  <line x1="205.8" y1="158" x2="205.8" y2="197" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="0.5"/>
                  <line x1="208.1" y1="158" x2="208.1" y2="197" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="0.5"/>
                  <line x1="210.4" y1="158" x2="210.4" y2="197" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="0.5"/>
                  <line x1="212.7" y1="158" x2="212.7" y2="197" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="0.5"/>
                  <line x1="215.0" y1="158" x2="215.0" y2="197" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="0.5"/>
                  <line x1="217.3" y1="158" x2="217.3" y2="197" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="0.5"/>
                  <line x1="219.6" y1="158" x2="219.6" y2="197" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="0.5"/>
                  <line x1="221.9" y1="158" x2="221.9" y2="197" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="0.5"/>
                  <line x1="224.2" y1="158" x2="224.2" y2="197" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="0.5"/>
                  <line x1="226.5" y1="158" x2="226.5" y2="197" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="0.5"/>
                  <line x1="228.8" y1="158" x2="228.8" y2="197" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="0.5"/>
                  <line x1="231.1" y1="158" x2="231.1" y2="197" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="0.5"/>
                  <line x1="233.4" y1="158" x2="233.4" y2="197" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="0.5"/>
                  <line x1="235.7" y1="158" x2="235.7" y2="197" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="0.5"/>
                  <line x1="238.0" y1="158" x2="238.0" y2="197" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="0.5"/>
                  
                  {/* Protruding three-sided rectangle on left side */}
                  <line x1="189" y1="174" x2="192" y2="174" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="0.75"/>
                  <line x1="189" y1="174" x2="189" y2="181" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="0.75"/>
                  <line x1="189" y1="181" x2="192" y2="181" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="0.75"/>

                  {/* Letter b */}
                  <text x="203" y="190" 
                        fontFamily="'Brush Script MT', cursive" 
                        fontSize="20"
                        fill="rgba(255, 255, 255, 0.7)"
                        pointerEvents="none">b</text>
                </g>
                {/* Circuit E */}
                <g className="circuit-e circuit-ebefg">
                  <path d="M 218 197 
                          C 216 210, 220 225, 218 240"
                        fill="none"
                        stroke="rgba(255, 255, 255, 0.7)"
                        strokeWidth="0.5"/>
                  
                  {/* Stack of alternating parallel lines */}
                  <line x1="214.25" y1="240" x2="221.75" y2="240" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="0.75"/>
                  <line x1="209" y1="243" x2="227" y2="243" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="0.75"/>
                  <line x1="214.25" y1="246" x2="221.75" y2="246" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="0.75"/>
                  <line x1="209" y1="249" x2="227" y2="249" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="0.75"/>
                  <line x1="214.25" y1="252" x2="221.75" y2="252" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="0.75"/>
                  <line x1="209" y1="255" x2="227" y2="255" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="0.75"/>
                  <line x1="214.25" y1="258" x2="221.75" y2="258" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="0.75"/>
                  <line x1="209" y1="261" x2="227" y2="261" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="0.75"/>
                  
                  {/* Second curved line with subtler opposite bow */}
                  <path d="M 218 261 
                          C 219 275, 217 285, 218 290"
                        fill="none"
                        stroke="rgba(255, 255, 255, 0.7)"
                        strokeWidth="0.5"/>
                          
                  {/* Rectangle as four lines at bottom of second curved line */}
                  <line x1="195" y1="290" x2="241" y2="290" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="0.75"/> {/* Top */}
                  <line x1="195" y1="329" x2="241" y2="329" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="1"/> {/* Bottom */}
                  <line x1="195" y1="290" x2="195" y2="329" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="0.75"/> {/* Left */}
                  <line x1="241" y1="290" x2="241" y2="329" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="1"/> {/* Right */}
                  
                  {/* Capital letter E */}
                  <text x="218" y="315" 
                        fontFamily="'Brush Script MT', cursive" 
                        fontSize="22"
                        fill="rgba(255, 255, 255, 0.7)" 
                        textAnchor="middle"
                        pointerEvents="none">E</text>
                </g>
              </g>
              <g className="arc-between-electro-magnets circuit-ebefg" transform="translate(50, 0)">
                {/* Arc between electro-magnet b and electro-magnet f */}
                <path d="M 223 175 
                        C 283 158.5, 363 158.5, 426 175"
                      fill="none"
                      stroke="rgba(255, 255, 255, 0.7)"
                      strokeWidth="0.75"/>
                {/* Lowercase e above arc */}
                <text x="324.5" y="160" 
                      fontFamily="'Brush Script MT', cursive" 
                      fontSize="20"
                      fill="rgba(255, 255, 255, 0.7)"
                      pointerEvents="none">e</text>
              </g>
              {/* Second component - adjusted transform */}
              <g transform="translate(300, 0)">
                {/* Sound Cone L (narrowed and shortened) */}
                <g className="sound-cone-l second-sound-cone-group">
                  {/* Main outline - left side height reduced, right side narrowed */}
                  <path d="M 225 150 
                          L 400 195
                          L 400 205
                          L 225 250
                          Z" 
                        fill="none" 
                        stroke="rgba(255, 255, 255, 0.7)" 
                        strokeWidth="1"/>

                  {/* Parallel lines - adjusted for new dimensions */}
                  <line x1="230" y1="157" x2="315" y2="180"
                        stroke="rgba(255, 255, 255, 0.7)" 
                        strokeWidth="0.5"/>
                  <line x1="230" y1="162" x2="295" y2="180"
                        stroke="rgba(255, 255, 255, 0.7)" 
                        strokeWidth="0.5"/>
                  <line x1="230" y1="169" x2="265" y2="179"
                        stroke="rgba(255, 255, 255, 0.7)" 
                        strokeWidth="0.5"/>
                  
                  {/* Letter L - adjusted for new position */}
                  <text x="295" y="205" 
                        fontFamily="'Brush Script MT', cursive" 
                        fontSize="22"
                        fill="rgba(255, 255, 255, 0.7)"
                        pointerEvents="none">L</text>
                </g>
                
                {/* Stretched Membrane i */}
                <g className="stretched-membrane-i second-sound-cone-group">
                  <line x1="227" y1="153" x2="398" y2="197"
                        stroke="hsla(150, 100%, 100%, 0.7)" 
                        strokeWidth="1"
                        strokeDasharray="3,3"/>
                  <line x1="227" y1="247" x2="398" y2="203"
                        stroke="hsla(150, 100%, 100%, 0.7)" 
                        strokeWidth="1"
                        strokeDasharray="3,3"/>
                  <line x1="227" y1="152" x2="227" y2="248"
                        stroke="hsla(150, 100%, 100%, 0.7)" 
                        strokeWidth="1"
                        strokeDasharray="3,3"/>
                  
                  {/* Letter i */}
                  <text x="230" y="203" 
                        fontFamily="'Brush Script MT', cursive" 
                        fontSize="20"
                        fill="rgba(255, 255, 255, 0.7)"
                        pointerEvents="none">i</text>
                </g>
                {/* Reflected components */}
                <g transform="translate(400, 0) scale(-1, 1)">
                  {/* Armature h */}
                  <g className="armature-h second-armature-leg-group">
                    {/* Bottom cylindrical leg */}
                    <line x1="175" y1="197" x2="186" y2="197" 
                          stroke="rgba(255, 255, 255, 0.7)" 
                          strokeWidth="1"/>
                    <line x1="175" y1="200" x2="187" y2="200" 
                          stroke="rgba(255, 255, 255, 0.7)" 
                          strokeWidth="1.5"/>
                    
                    {/* Hypotenuse cylindrical leg */}
                    <line x1="178" y1="155" x2="187" y2="202" 
                          stroke="rgba(255, 255, 255, 0.7)" 
                          strokeWidth="0.75"/>
                    <line x1="180" y1="154" x2="189" y2="202" 
                          stroke="rgba(255, 255, 255, 0.7)" 
                          strokeWidth="0.75"/>
                    {/* Angled rounded end cap */}
                    <path d="M 187,202 
                              A 1,1 0 1 0 189,202"
                          fill="none"
                          stroke="rgba(255, 255, 255, 0.7)" 
                          strokeWidth="0.75"/>
                    
                    {/* Letter h */}
                    <text x="-195" y="218"
                          transform="scale(-1, 1)"
                          fontFamily="'Brush Script MT', cursive" 
                          fontSize="20"
                          fill="rgba(255, 255, 255, 0.7)"
                          pointerEvents="none">h</text>
                    
                    {/* Pin circle as a ring (two concentric circles) */}
                    <circle cx="178" cy="152" r="1.5" 
                            fill="none"
                            stroke="rgba(255, 255, 255, 0.7)" 
                            strokeWidth="0.75"/>
                    <circle cx="178" cy="152" r="3" 
                            fill="none"
                            stroke="rgba(255, 255, 255, 0.7)" 
                            strokeWidth="0.75"/>
                  </g>
                  {/* Uncovered leg k */}
                  <g className="uncovered-leg-k second-armature-leg-group">
                    {/* Letter k */}
                    <text x="-180" y="148" 
                          transform="scale(-1, 1)"
                          fontFamily="'Brush Script MT', cursive" 
                          fontSize="20"
                          fill="rgba(255, 255, 255, 0.7)"
                          pointerEvents="none">k</text>
                    {/* Horizontal section */}
                    <line x1="178" y1="149" x2="235" y2="149" 
                          stroke="rgba(255, 255, 255, 0.7)" 
                          strokeWidth="0.75"/>
                    <line x1="181" y1="153" x2="235" y2="153" 
                          stroke="rgba(255, 255, 255, 0.7)" 
                          strokeWidth="1"/>

                    {/* Rounded corner */}
                    <path d="M 235,149 
                              A 9.33,6.67 0 0 1 242,154
                              M 235,153
                              A 4,6.67 0 0 1 238,158"
                          fill="none"
                          stroke="rgba(255, 255, 255, 0.7)" 
                          strokeWidth="0.75"/>

                    {/* Vertical section */}
                    <line x1="238" y1="158" x2="238" y2="192" 
                          stroke="rgba(255, 255, 255, 0.7)" 
                          strokeWidth="0.75"/>
                    <line x1="242" y1="154" x2="242" y2="192" 
                          stroke="rgba(255, 255, 255, 0.7)" 
                          strokeWidth="0.75"/>
                    {/* Flat end cap */}
                    <line x1="238" y1="192" x2="242" y2="192"
                          stroke="rgba(255, 255, 255, 0.7)" 
                          strokeWidth="0.75"/>
                    {/* Protruding half-ellipse bulb */}
                    <path d="M 242,182 
                              A 2,4 0 0 1 242,189"
                          fill="none"
                          stroke="rgba(255, 255, 255, 0.7)" 
                          strokeWidth="0.75"/>
                  </g>
                  
                  {/* Electro-magnet f */}
                  <g className="electro-magnet-f circuit-ebefg">
                    {/* Top horizontal line */}
                    <line x1="192" y1="158" x2="238" y2="158"
                          stroke="rgba(255, 255, 255, 0.7)"
                          strokeWidth="0.75"/>
                    {/* Right vertical line */}
                    <line x1="238" y1="158" x2="238" y2="197"
                          stroke="rgba(255, 255, 255, 0.7)"
                          strokeWidth="1"/>
                    {/* Weighted bottom line */}
                    <line x1="192" y1="197" 
                          x2="238" y2="197"
                          stroke="rgba(255, 255, 255, 0.7)"
                          strokeWidth="1.5"/>
                    {/* Left vertical line */}
                    <line x1="192" y1="158" x2="192" y2="197" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="0.75"/>
                    
                    {/* Parallel vertical lines */}
                    <line x1="194.3" y1="158" x2="194.3" y2="197" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="0.5"/>
                    <line x1="196.6" y1="158" x2="196.6" y2="197" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="0.5"/>
                    <line x1="198.9" y1="158" x2="198.9" y2="197" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="0.5"/>
                    <line x1="201.2" y1="158" x2="201.2" y2="197" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="0.5"/>
                    <line x1="203.5" y1="158" x2="203.5" y2="197" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="0.5"/>
                    <line x1="205.8" y1="158" x2="205.8" y2="197" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="0.5"/>
                    <line x1="208.1" y1="158" x2="208.1" y2="197" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="0.5"/>
                    <line x1="210.4" y1="158" x2="210.4" y2="197" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="0.5"/>
                    <line x1="212.7" y1="158" x2="212.7" y2="197" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="0.5"/>
                    <line x1="215.0" y1="158" x2="215.0" y2="197" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="0.5"/>
                    <line x1="217.3" y1="158" x2="217.3" y2="197" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="0.5"/>
                    <line x1="219.6" y1="158" x2="219.6" y2="197" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="0.5"/>
                    <line x1="221.9" y1="158" x2="221.9" y2="197" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="0.5"/>
                    <line x1="224.2" y1="158" x2="224.2" y2="197" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="0.5"/>
                    <line x1="226.5" y1="158" x2="226.5" y2="197" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="0.5"/>
                    <line x1="228.8" y1="158" x2="228.8" y2="197" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="0.5"/>
                    <line x1="231.1" y1="158" x2="231.1" y2="197" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="0.5"/>
                    <line x1="233.4" y1="158" x2="233.4" y2="197" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="0.5"/>
                    <line x1="235.7" y1="158" x2="235.7" y2="197" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="0.5"/>
                    <line x1="238.0" y1="158" x2="238.0" y2="197" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="0.5"/>
                    
                    {/* Protruding three-sided rectangle on left side */}
                    <line x1="189" y1="174" x2="192" y2="174" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="0.75"/>
                    <line x1="189" y1="174" x2="189" y2="181" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="0.75"/>
                    <line x1="189" y1="181" x2="192" y2="181" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="0.75"/>

                    {/* Letter f */}
                    <text x="-215" y="185" 
                          transform="scale(-1, 1)"
                          fontFamily="'Brush Script MT', cursive" 
                          fontSize="20"
                          fill="rgba(255, 255, 255, 0.7)"
                          pointerEvents="none">f</text>
                  </g>
                  {/* Circuit g */}
                  <g className="circuit-g circuit-ebefg">
                    <path d="M 218 197 
                          C 210 240, 226 240, 218 290"
                      fill="none"
                      stroke="rgba(255, 255, 255, 0.7)"
                      strokeWidth="0.5"/>
                          
                    {/* Rectangle as four lines at bottom of second curved line */}
                    <line x1="195" y1="290" x2="241" y2="290" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="0.75"/> {/* Top */}
                    <line x1="195" y1="329" x2="241" y2="329" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="1"/> {/* Bottom */}
                    <line x1="195" y1="290" x2="195" y2="329" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="0.75"/> {/* Left */}
                    <line x1="241" y1="290" x2="241" y2="329" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="1"/> {/* Right */}
                    
                    {/* Lowercase letter g */}
                    <text x="-218" y="315" 
                          transform="scale(-1, 1)"
                          fontFamily="'Brush Script MT', cursive" 
                          fontSize="20"
                          fill="rgba(255, 255, 255, 0.7)" 
                          textAnchor="middle"
                          pointerEvents="none">g</text>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          {/* Text descriptions */}
          {/* <div className="text-descriptions-container">
            <div className="relative">
              <p className="armature-c-text text-description">The armature c</p>
              <p className="uncovered-leg-d-text text-description">is fastened loosely to the uncovered leg d</p>
              <p className="electro-magnet-b-text text-description">of the electro magnet b</p>
              <p className="stretched-membrane-a-text text-description">and its other extremity is attached to the center of a stretched membrane, a</p>
              <p className="sound-cone-a-text text-description">A cone, A, is used to converge Sound-vibrations upon the membrane.</p>
              <p className="circuit-ebefg-text text-description">When a sound is uttered in the cone the membrane a is set in vibration, the armature c is forced to partake of the motion, and thus electrical undulations are created upon the circuit E b e f g</p>
              <p className="electro-magnet-f-text text-description">The undulatory current passing through the electro-magnet f</p>
              <p className="second-armature-leg-group-text text-description">influences its armature h to copy the motion of the armature c</p>
              <p className="second-sound-cone-group-text text-description">A similar sound to that uttered into A is then heard to proceed from L</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}