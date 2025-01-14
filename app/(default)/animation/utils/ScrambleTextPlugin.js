/*!
 * ScrambleTextPlugin 3.12.3
 */

!(function (D, u) {
  "object" == typeof exports && "undefined" != typeof module
    ? u(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], u)
    : u(((D = D || self).window = D.window || {}));
})(this, function (D) {
  "use strict";
  var r = /(?:^\s+|\s+$)/g;
  function getText(D) {
    var u = D.nodeType,
      F = "";
    if (1 === u || 9 === u || 11 === u) {
      if ("string" == typeof D.textContent) return D.textContent;
      for (D = D.firstChild; D; D = D.nextSibling) F += getText(D);
    } else if (3 === u || 4 === u) return D.nodeValue;
    return F;
  }
  function emojiSafeSplit(D, u, F, C) {
    if (
      ((D += ""),
      F && (D = D.trim ? D.trim() : D.replace(r, "")),
      u && "" !== u)
    )
      return D.replace(/>/g, "&gt;").replace(/</g, "&lt;").split(u);
    for (var e, E, t = [], n = D.length, i = 0; i < n; i++)
      ((55296 <= (E = D.charAt(i)).charCodeAt(0) && E.charCodeAt(0) <= 56319) ||
        (65024 <= D.charCodeAt(i + 1) && D.charCodeAt(i + 1) <= 65039)) &&
        ((e = ((D.substr(i, 12).split(o) || [])[1] || "").length || 2),
        (E = D.substr(i, e)),
        (i += e - (t.emoji = 1))),
        t.push(
          ">" === E
            ? "&gt;"
            : "<" === E
            ? "&lt;"
            : !C ||
              " " !== E ||
              (" " !== D.charAt(i - 1) && " " !== D.charAt(i + 1))
            ? E
            : "&nbsp;"
        );
    return t;
  }
  var a =
    ((CharSet.prototype.grow = function grow(D) {
      for (var u = 0; u < 20; u++)
        this.sets[u] += F(D - this.length, this.chars);
      this.length = D;
    }),
    CharSet);
  function CharSet(D) {
    (this.chars = emojiSafeSplit(D)), (this.sets = []), (this.length = 50);
    for (var u = 0; u < 20; u++) this.sets[u] = F(80, this.chars);
  }
  function i() {
    return (
      E ||
      ("undefined" != typeof window &&
        (E = window.gsap) &&
        E.registerPlugin &&
        E)
    );
  }
  function l() {
    return String.fromCharCode.apply(null, arguments);
  }
  function v() {
    s = E = i();
  }
  var E,
    s,
    t = "ScrambleTextPlugin",
    n = l(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109),
    B = l(103, 115, 97, 112, 46, 99, 111, 109),
    A = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}:?\d*$/,
    h = (function (D) {
      var u = "undefined" != typeof window,
        F =
          0 ===
            (u ? window.location.href : "").indexOf(
              l(102, 105, 108, 101, 58, 47, 47)
            ) ||
          -1 !== D.indexOf(l(108, 111, 99, 97, 108, 104, 111, 115, 116)) ||
          A.test(D),
        C = [
          n,
          B,
          l(99, 111, 100, 101, 112, 101, 110, 46, 105, 111),
          l(
            99,
            111,
            100,
            101,
            112,
            101,
            110,
            46,
            112,
            108,
            117,
            109,
            98,
            105,
            110,
            103
          ),
          l(99, 111, 100, 101, 112, 101, 110, 46, 100, 101, 118),
          l(99, 111, 100, 101, 112, 101, 110, 46, 97, 112, 112),
          l(
            99,
            111,
            100,
            101,
            112,
            101,
            110,
            46,
            119,
            101,
            98,
            115,
            105,
            116,
            101
          ),
          l(112, 101, 110, 115, 46, 99, 108, 111, 117, 100),
          l(99, 115, 115, 45, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109),
          l(99, 100, 112, 110, 46, 105, 111),
          l(112, 101, 110, 115, 46, 105, 111),
          l(103, 97, 110, 110, 111, 110, 46, 116, 118),
          l(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116),
          l(
            116,
            104,
            101,
            109,
            101,
            102,
            111,
            114,
            101,
            115,
            116,
            46,
            110,
            101,
            116
          ),
          l(99, 101, 114, 101, 98, 114, 97, 120, 46, 99, 111, 46, 117, 107),
          l(116, 121, 109, 112, 97, 110, 117, 115, 46, 110, 101, 116),
          l(116, 119, 101, 101, 110, 109, 97, 120, 46, 99, 111, 109),
          l(112, 108, 110, 107, 114, 46, 99, 111),
          l(104, 111, 116, 106, 97, 114, 46, 99, 111, 109),
          l(119, 101, 98, 112, 97, 99, 107, 98, 105, 110, 46, 99, 111, 109),
          l(97, 114, 99, 104, 105, 118, 101, 46, 111, 114, 103),
          l(99, 111, 100, 101, 115, 97, 110, 100, 98, 111, 120, 46, 105, 111),
          l(99, 115, 98, 46, 97, 112, 112),
          l(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 99, 111, 109),
          l(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 105, 111),
          l(99, 111, 100, 105, 101, 114, 46, 105, 111),
          l(
            109,
            111,
            116,
            105,
            111,
            110,
            116,
            114,
            105,
            99,
            107,
            115,
            46,
            99,
            111,
            109
          ),
          l(
            115,
            116,
            97,
            99,
            107,
            111,
            118,
            101,
            114,
            102,
            108,
            111,
            119,
            46,
            99,
            111,
            109
          ),
          l(
            115,
            116,
            97,
            99,
            107,
            101,
            120,
            99,
            104,
            97,
            110,
            103,
            101,
            46,
            99,
            111,
            109
          ),
          l(
            115,
            116,
            117,
            100,
            105,
            111,
            102,
            114,
            101,
            105,
            103,
            104,
            116,
            46,
            99,
            111,
            109
          ),
          l(
            119,
            101,
            98,
            99,
            111,
            110,
            116,
            97,
            105,
            110,
            101,
            114,
            46,
            105,
            111
          ),
          l(106, 115, 102, 105, 100, 100, 108, 101, 46, 110, 101, 116),
        ],
        e = C.length;
      return null;
    })("undefined" != typeof window ? window.location.host : ""),
    c = /\s+/g,
    F = function _scrambleText(D, u) {
      for (var F = u.length, C = ""; -1 < --D; ) C += u[~~(Math.random() * F)];
      return C;
    },
    u = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    C = u.toLowerCase(),
    f = {
      upperCase: new a(u),
      lowerCase: new a(C),
      upperAndLowerCase: new a(u + C),
    },
    e = {
      version: "3.12.3",
      name: "scrambleText",
      register: function register(D) {
        (E = D), v();
      },
      init: function init(D, u, F) {
        if (
          (s || v(),
          (this.prop =
            "innerHTML" in D
              ? "innerHTML"
              : "textContent" in D
              ? "textContent"
              : 0),
          this.prop)
        ) {
          (this.target = D), "object" != typeof u && (u = { text: u });
          var C,
            e,
            E,
            t,
            n = u.text || u.value || "",
            i = !1 !== u.trim,
            r = this;
          return (
            (r.delimiter = C = u.delimiter || ""),
            (r.original = emojiSafeSplit(
              getText(D).replace(c, " ").split("&nbsp;").join(""),
              C,
              i
            )),
            ("{original}" !== n && !0 !== n && null != n) ||
              (n = r.original.join(C)),
            (r.text = emojiSafeSplit((n || "").replace(c, " "), C, i)),
            (r.hasClass = !(!u.newClass && !u.oldClass)),
            (r.newClass = u.newClass),
            (r.oldClass = u.oldClass),
            (t = "" === C),
            (r.textHasEmoji = t && !!r.text.emoji),
            (r.charsHaveEmoji = !!u.chars && !!emojiSafeSplit(u.chars).emoji),
            (r.length = t ? r.original.length : r.original.join(C).length),
            (r.lengthDif =
              (t ? r.text.length : r.text.join(C).length) - r.length),
            (r.fillChar =
              u.fillChar || (u.chars && ~u.chars.indexOf(" ")) ? "&nbsp;" : ""),
            (r.charSet = E = f[u.chars || "upperCase"] || new a(u.chars)),
            (r.speed = 0.05 / (u.speed || 1)),
            (r.prevScrambleTime = 0),
            (r.setIndex = (20 * Math.random()) | 0),
            (e = r.length + Math.max(r.lengthDif, 0)) > E.length && E.grow(e),
            (r.chars = E.sets[r.setIndex]),
            (r.revealDelay = u.revealDelay || 0),
            (r.tweenLength = !1 !== u.tweenLength),
            (r.tween = F),
            (r.rightToLeft = !!u.rightToLeft),
            r._props.push("scrambleText", "text"),
            h
          );
        }
      },
      render: function render(D, u) {
        var F,
          C,
          e,
          E,
          t,
          n,
          i,
          r,
          l,
          o,
          a,
          s = u.target,
          B = u.prop,
          A = u.text,
          h = u.delimiter,
          c = u.tween,
          f = u.prevScrambleTime,
          d = u.revealDelay,
          p = u.setIndex,
          g = u.chars,
          m = u.charSet,
          w = u.length,
          x = u.textHasEmoji,
          S = u.charsHaveEmoji,
          j = u.lengthDif,
          v = u.tweenLength,
          b = u.oldClass,
          T = u.newClass,
          y = u.rightToLeft,
          _ = u.fillChar,
          L = u.speed,
          M = u.original,
          H = u.hasClass,
          O = A.length,
          W = c._time,
          P = W - f;
        d &&
          (c._from && (W = c._dur - W),
          (D =
            0 === W
              ? 0
              : W < d
              ? 1e-6
              : W === c._dur
              ? 1
              : c._ease((W - d) / (c._dur - d)))),
          D < 0 ? (D = 0) : 1 < D && (D = 1),
          y && (D = 1 - D),
          (F = ~~(D * O + 0.5)),
          (E = D
            ? ((L < P || P < -L) &&
                ((u.setIndex = p = (p + ((19 * Math.random()) | 0)) % 20),
                (u.chars = m.sets[p]),
                (u.prevScrambleTime += P)),
              g)
            : M.join(h)),
          (a = c._from ? D : 1 - D),
          (o = w + (v ? (c._from ? a * a * a : 1 - a * a * a) : 1) * j),
          (E = y
            ? 1 !== D || (!c._from && "isFromStart" !== c.data)
              ? ((i = A.slice(F).join(h)),
                (e = S
                  ? emojiSafeSplit(E)
                      .slice(
                        0,
                        (o - (x ? emojiSafeSplit(i) : i).length + 0.5) | 0
                      )
                      .join("")
                  : E.substr(
                      0,
                      (o - (x ? emojiSafeSplit(i) : i).length + 0.5) | 0
                    )),
                i)
              : ((e = ""), M.join(h))
            : ((e = A.slice(0, F).join(h)),
              (C = (x ? emojiSafeSplit(e) : e).length),
              S
                ? emojiSafeSplit(E)
                    .slice(C, (o + 0.5) | 0)
                    .join("")
                : E.substr(C, (o - C + 0.5) | 0))),
          (i = H
            ? ((t = (r = y ? b : T) && 0 != F)
                ? "<span class='" + r + "'>"
                : "") +
              e +
              (t ? "</span>" : "") +
              ((n = (l = y ? T : b) && F !== O)
                ? "<span class='" + l + "'>"
                : "") +
              h +
              E +
              (n ? "</span>" : "")
            : e + h + E),
          (s[B] =
            "&nbsp;" === _ && ~i.indexOf("  ")
              ? i.split("  ").join("&nbsp;&nbsp;")
              : i);
      },
    };
  (e.emojiSafeSplit = emojiSafeSplit),
    (e.getText = getText),
    i() && E.registerPlugin(e),
    (D.ScrambleTextPlugin = e),
    (D.default = e);
  if (typeof window === "undefined" || window !== D) {
    Object.defineProperty(D, "__esModule", { value: !0 });
  } else {
    delete D.default;
  }
});
