import { gsap } from "gsap";

let DrawSVGPlugin: any, GSDevTools: any, ScrambleTextPlugin: any;
if (typeof window !== "undefined") {
  DrawSVGPlugin = require("./DrawSVGPlugin").default;
  ScrambleTextPlugin = require("./ScrambleTextPlugin").default;
  GSDevTools = require("./GSDevTools").default;
  gsap.registerPlugin(DrawSVGPlugin, ScrambleTextPlugin, GSDevTools);
}

export { gsap, DrawSVGPlugin, ScrambleTextPlugin, GSDevTools };
