"use strict";
this.default_AccountsDomaincookiesCheckconnectionJs =
  this.default_AccountsDomaincookiesCheckconnectionJs || {};
(function (_) {
  var window = this;
  try {
    var n = function (a, b) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, n);
        else {
          var c = Error().stack;
          c && (this.stack = c);
        }
        a && (this.message = String(a));
        void 0 !== b && (this.X = b);
      },
      aa = function (a, b) {
        b = p(a, b);
        var c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c;
      },
      r = function (a) {
        return -1 != q.indexOf(a);
      },
      t = function () {
        return r("Trident") || r("MSIE");
      },
      u = function () {
        return r("Firefox") || r("FxiOS");
      },
      v = function () {
        return (r("Chrome") || r("CriOS")) && !r("Edge");
      },
      ba = function (a) {
        var b = {};
        a.forEach(function (c) {
          b[c[0]] = c[1];
        });
        return function (c) {
          return (
            b[
              c.find(function (d) {
                return d in b;
              })
            ] || ""
          );
        };
      },
      ca = function () {
        var a = q;
        if (t()) {
          var b = /rv: *([\d\.]*)/.exec(a);
          if (b && b[1]) a = b[1];
          else {
            b = "";
            var c = /MSIE +([\d\.]+)/.exec(a);
            if (c && c[1])
              if (((a = /Trident\/(\d.\d)/.exec(a)), "7.0" == c[1]))
                if (a && a[1])
                  switch (a[1]) {
                    case "4.0":
                      b = "8.0";
                      break;
                    case "5.0":
                      b = "9.0";
                      break;
                    case "6.0":
                      b = "10.0";
                      break;
                    case "7.0":
                      b = "11.0";
                  }
                else b = "7.0";
              else b = c[1];
            a = b;
          }
          return a;
        }
        c = RegExp("(\\w[\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g");
        b = [];
        for (var d; (d = c.exec(a)); ) b.push([d[1], d[2], d[3] || void 0]);
        a = ba(b);
        return r("Opera")
          ? a(["Version", "Opera"])
          : r("Edge")
          ? a(["Edge"])
          : r("Edg/")
          ? a(["Edg"])
          : v()
          ? a(["Chrome", "CriOS", "HeadlessChrome"])
          : ((a = b[2]) && a[1]) || "";
      },
      w = function (a) {
        return 0 <= da(ca(), a);
      },
      fa = function (a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
          d = arguments[e];
          for (c in d) a[c] = d[c];
          for (var f = 0; f < ea.length; f++)
            (c = ea[f]),
              Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
        }
      },
      ha = function (a) {
        x(a);
      },
      ka = function () {
        var a = {};
        a.location = document.location.toString();
        if (ia())
          try {
            a["top.location"] = top.location.toString();
          } catch (c) {
            a["top.location"] = "[external]";
          }
        else a["top.location"] = "[external]";
        for (var b in ja)
          try {
            a[b] = ja[b].call();
          } catch (c) {
            a[b] = "[error] " + c.message;
          }
        return a;
      },
      la = function (a, b) {
        -1 != b.message.indexOf("Error in protected function: ") ||
          (b.error && b.error.stack ? x(b.error) : a || x(b));
      },
      ma = function (a) {
        var b = 0;
        return function () {
          return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
        };
      },
      y = function (a) {
        var b =
          "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : { next: ma(a) };
      },
      na =
        "function" == typeof Object.create
          ? Object.create
          : function (a) {
              var b = function () {};
              b.prototype = a;
              return new b();
            },
      z =
        "function" == typeof Object.defineProperties
          ? Object.defineProperty
          : function (a, b, c) {
              if (a == Array.prototype || a == Object.prototype) return a;
              a[b] = c.value;
              return a;
            },
      oa = function (a) {
        a = [
          "object" == typeof globalThis && globalThis,
          a,
          "object" == typeof window && window,
          "object" == typeof self && self,
          "object" == typeof global && global,
        ];
        for (var b = 0; b < a.length; ++b) {
          var c = a[b];
          if (c && c.Math == Math) return c;
        }
        throw Error("a");
      },
      pa = oa(this),
      A = function (a, b) {
        if (b)
          a: {
            var c = pa;
            a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
              var e = a[d];
              if (!(e in c)) break a;
              c = c[e];
            }
            a = a[a.length - 1];
            d = c[a];
            b = b(d);
            b != d &&
              null != b &&
              z(c, a, { configurable: !0, writable: !0, value: b });
          }
      },
      qa;
    if ("function" == typeof Object.setPrototypeOf) qa = Object.setPrototypeOf;
    else {
      var ra;
      a: {
        var sa = { a: !0 },
          ta = {};
        try {
          ta.__proto__ = sa;
          ra = ta.a;
          break a;
        } catch (a) {}
        ra = !1;
      }
      qa = ra
        ? function (a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError("b`" + a);
            return a;
          }
        : null;
    }
    var ua = qa;
    A("Symbol", function (a) {
      if (a) return a;
      var b = function (f, h) {
        this.g = f;
        z(this, "description", { configurable: !0, writable: !0, value: h });
      };
      b.prototype.toString = function () {
        return this.g;
      };
      var c = "jscomp_symbol_" + ((1e9 * Math.random()) >>> 0) + "_",
        d = 0,
        e = function (f) {
          if (this instanceof e) throw new TypeError("c");
          return new b(c + (f || "") + "_" + d++, f);
        };
      return e;
    });
    A("Symbol.iterator", function (a) {
      if (a) return a;
      a = Symbol("d");
      for (
        var b =
            "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(
              " "
            ),
          c = 0;
        c < b.length;
        c++
      ) {
        var d = pa[b[c]];
        "function" === typeof d &&
          "function" != typeof d.prototype[a] &&
          z(d.prototype, a, {
            configurable: !0,
            writable: !0,
            value: function () {
              return va(ma(this));
            },
          });
      }
      return a;
    });
    var va = function (a) {
        a = { next: a };
        a[Symbol.iterator] = function () {
          return this;
        };
        return a;
      },
      B = function (a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
      };
    A("WeakMap", function (a) {
      function b() {}
      function c(k) {
        var l = typeof k;
        return ("object" === l && null !== k) || "function" === l;
      }
      function d(k) {
        if (!B(k, f)) {
          var l = new b();
          z(k, f, { value: l });
        }
      }
      function e(k) {
        var l = Object[k];
        l &&
          (Object[k] = function (m) {
            if (m instanceof b) return m;
            Object.isExtensible(m) && d(m);
            return l(m);
          });
      }
      if (
        (function () {
          if (!a || !Object.seal) return !1;
          try {
            var k = Object.seal({}),
              l = Object.seal({}),
              m = new a([
                [k, 2],
                [l, 3],
              ]);
            if (2 != m.get(k) || 3 != m.get(l)) return !1;
            m.delete(k);
            m.set(l, 4);
            return !m.has(k) && 4 == m.get(l);
          } catch (E) {
            return !1;
          }
        })()
      )
        return a;
      var f = "$jscomp_hidden_" + Math.random();
      e("freeze");
      e("preventExtensions");
      e("seal");
      var h = 0,
        g = function (k) {
          this.g = (h += Math.random() + 1).toString();
          if (k) {
            k = y(k);
            for (var l; !(l = k.next()).done; )
              (l = l.value), this.set(l[0], l[1]);
          }
        };
      g.prototype.set = function (k, l) {
        if (!c(k)) throw Error("e");
        d(k);
        if (!B(k, f)) throw Error("f`" + k);
        k[f][this.g] = l;
        return this;
      };
      g.prototype.get = function (k) {
        return c(k) && B(k, f) ? k[f][this.g] : void 0;
      };
      g.prototype.has = function (k) {
        return c(k) && B(k, f) && B(k[f], this.g);
      };
      g.prototype.delete = function (k) {
        return c(k) && B(k, f) && B(k[f], this.g) ? delete k[f][this.g] : !1;
      };
      return g;
    });
    A("Map", function (a) {
      if (
        (function () {
          if (
            !a ||
            "function" != typeof a ||
            !a.prototype.entries ||
            "function" != typeof Object.seal
          )
            return !1;
          try {
            var g = Object.seal({ x: 4 }),
              k = new a(y([[g, "s"]]));
            if (
              "s" != k.get(g) ||
              1 != k.size ||
              k.get({ x: 4 }) ||
              k.set({ x: 4 }, "t") != k ||
              2 != k.size
            )
              return !1;
            var l = k.entries(),
              m = l.next();
            if (m.done || m.value[0] != g || "s" != m.value[1]) return !1;
            m = l.next();
            return m.done ||
              4 != m.value[0].x ||
              "t" != m.value[1] ||
              !l.next().done
              ? !1
              : !0;
          } catch (E) {
            return !1;
          }
        })()
      )
        return a;
      var b = new WeakMap(),
        c = function (g) {
          this.h = {};
          this.g = f();
          this.size = 0;
          if (g) {
            g = y(g);
            for (var k; !(k = g.next()).done; )
              (k = k.value), this.set(k[0], k[1]);
          }
        };
      c.prototype.set = function (g, k) {
        g = 0 === g ? 0 : g;
        var l = d(this, g);
        l.list || (l.list = this.h[l.id] = []);
        l.j
          ? (l.j.value = k)
          : ((l.j = {
              next: this.g,
              o: this.g.o,
              head: this.g,
              key: g,
              value: k,
            }),
            l.list.push(l.j),
            (this.g.o.next = l.j),
            (this.g.o = l.j),
            this.size++);
        return this;
      };
      c.prototype.delete = function (g) {
        g = d(this, g);
        return g.j && g.list
          ? (g.list.splice(g.index, 1),
            g.list.length || delete this.h[g.id],
            (g.j.o.next = g.j.next),
            (g.j.next.o = g.j.o),
            (g.j.head = null),
            this.size--,
            !0)
          : !1;
      };
      c.prototype.clear = function () {
        this.h = {};
        this.g = this.g.o = f();
        this.size = 0;
      };
      c.prototype.has = function (g) {
        return !!d(this, g).j;
      };
      c.prototype.get = function (g) {
        return (g = d(this, g).j) && g.value;
      };
      c.prototype.entries = function () {
        return e(this, function (g) {
          return [g.key, g.value];
        });
      };
      c.prototype.keys = function () {
        return e(this, function (g) {
          return g.key;
        });
      };
      c.prototype.values = function () {
        return e(this, function (g) {
          return g.value;
        });
      };
      c.prototype.forEach = function (g, k) {
        for (var l = this.entries(), m; !(m = l.next()).done; )
          (m = m.value), g.call(k, m[1], m[0], this);
      };
      c.prototype[Symbol.iterator] = c.prototype.entries;
      var d = function (g, k) {
          var l = k && typeof k;
          "object" == l || "function" == l
            ? b.has(k)
              ? (l = b.get(k))
              : ((l = "" + ++h), b.set(k, l))
            : (l = "p_" + k);
          var m = g.h[l];
          if (m && B(g.h, l))
            for (g = 0; g < m.length; g++) {
              var E = m[g];
              if ((k !== k && E.key !== E.key) || k === E.key)
                return { id: l, list: m, index: g, j: E };
            }
          return { id: l, list: m, index: -1, j: void 0 };
        },
        e = function (g, k) {
          var l = g.g;
          return va(function () {
            if (l) {
              for (; l.head != g.g; ) l = l.o;
              for (; l.next != l.head; )
                return (l = l.next), { done: !1, value: k(l) };
              l = null;
            }
            return { done: !0, value: void 0 };
          });
        },
        f = function () {
          var g = {};
          return (g.o = g.next = g.head = g);
        },
        h = 0;
      return c;
    });
    A("Array.prototype.find", function (a) {
      return a
        ? a
        : function (b, c) {
            a: {
              var d = this;
              d instanceof String && (d = String(d));
              for (var e = d.length, f = 0; f < e; f++) {
                var h = d[f];
                if (b.call(c, h, f, d)) {
                  b = h;
                  break a;
                }
              }
              b = void 0;
            }
            return b;
          };
    });
    var wa = function (a, b) {
      a instanceof String && (a += "");
      var c = 0,
        d = !1,
        e = {
          next: function () {
            if (!d && c < a.length) {
              var f = c++;
              return { value: b(f, a[f]), done: !1 };
            }
            d = !0;
            return { done: !0, value: void 0 };
          },
        };
      e[Symbol.iterator] = function () {
        return e;
      };
      return e;
    };
    A("Array.prototype.keys", function (a) {
      return a
        ? a
        : function () {
            return wa(this, function (b) {
              return b;
            });
          };
    });
    A("Array.from", function (a) {
      return a
        ? a
        : function (b, c, d) {
            c =
              null != c
                ? c
                : function (g) {
                    return g;
                  };
            var e = [],
              f =
                "undefined" != typeof Symbol &&
                Symbol.iterator &&
                b[Symbol.iterator];
            if ("function" == typeof f) {
              b = f.call(b);
              for (var h = 0; !(f = b.next()).done; )
                e.push(c.call(d, f.value, h++));
            } else
              for (f = b.length, h = 0; h < f; h++) e.push(c.call(d, b[h], h));
            return e;
          };
    });
    /*
        
         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
    var xa = xa || {},
      C = this || self,
      ya = function () {},
      za = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
      Aa = 0,
      Ba = function (a, b, c) {
        return a.call.apply(a.bind, arguments);
      },
      Ca = function (a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
          var d = Array.prototype.slice.call(arguments, 2);
          return function () {
            var e = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(e, d);
            return a.apply(b, e);
          };
        }
        return function () {
          return a.apply(b, arguments);
        };
      },
      D = function (a, b, c) {
        Function.prototype.bind &&
        -1 != Function.prototype.bind.toString().indexOf("native code")
          ? (D = Ba)
          : (D = Ca);
        return D.apply(null, arguments);
      },
      Da = function (a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function () {
          var d = c.slice();
          d.push.apply(d, arguments);
          return a.apply(this, d);
        };
      },
      Ea = function (a) {
        (0, eval)(a);
      },
      Fa = function (a, b) {
        a = a.split(".");
        var c = C;
        a[0] in c ||
          "undefined" == typeof c.execScript ||
          c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift()); )
          a.length || void 0 === b
            ? c[d] && c[d] !== Object.prototype[d]
              ? (c = c[d])
              : (c = c[d] = {})
            : (c[d] = b);
      },
      F = function (a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.v = b.prototype;
        a.prototype = new c();
        a.prototype.constructor = a;
        a.Z = function (d, e, f) {
          for (
            var h = Array(arguments.length - 2), g = 2;
            g < arguments.length;
            g++
          )
            h[g - 2] = arguments[g];
          return b.prototype[e].apply(d, h);
        };
      };
    F(n, Error);
    n.prototype.name = "CustomError";
    var p = Array.prototype.indexOf
        ? function (a, b) {
            return Array.prototype.indexOf.call(a, b, void 0);
          }
        : function (a, b) {
            if ("string" === typeof a)
              return "string" !== typeof b || 1 != b.length
                ? -1
                : a.indexOf(b, 0);
            for (var c = 0; c < a.length; c++)
              if (c in a && a[c] === b) return c;
            return -1;
          },
      Ga = Array.prototype.forEach
        ? function (a, b, c) {
            Array.prototype.forEach.call(a, b, c);
          }
        : function (a, b, c) {
            for (
              var d = a.length,
                e = "string" === typeof a ? a.split("") : a,
                f = 0;
              f < d;
              f++
            )
              f in e && b.call(c, e[f], f, a);
          };
    var Ha = function (a, b, c) {
        c = c || C;
        var d = c.onerror,
          e = !!b;
        c.onerror = function (f, h, g, k, l) {
          d && d(f, h, g, k, l);
          a({
            message: f,
            fileName: h,
            line: g,
            lineNumber: g,
            $: k,
            error: l,
          });
          return e;
        };
      },
      Ka = function (a) {
        a: {
          var b = ["window", "location", "href"];
          var c = C;
          for (var d = 0; d < b.length; d++)
            if (((c = c[b[d]]), null == c)) {
              c = null;
              break a;
            }
        }
        null == a && (a = 'Unknown Error of type "null/undefined"');
        if ("string" === typeof a)
          return {
            message: a,
            name: "Unknown error",
            lineNumber: "Not available",
            fileName: c,
            stack: "Not available",
          };
        b = !1;
        try {
          var e = a.lineNumber || a.line || "Not available";
        } catch (h) {
          (e = "Not available"), (b = !0);
        }
        try {
          var f =
            a.fileName || a.filename || a.sourceURL || C.$googDebugFname || c;
        } catch (h) {
          (f = "Not available"), (b = !0);
        }
        c = Ia(a);
        if (
          !(!b && a.lineNumber && a.fileName && a.stack && a.message && a.name)
        )
          return (
            (b = a.message),
            null == b &&
              ((b =
                a.constructor && a.constructor instanceof Function
                  ? 'Unknown Error of type "' +
                    (a.constructor.name
                      ? a.constructor.name
                      : Ja(a.constructor)) +
                    '"'
                  : "Unknown Error of unknown type"),
              "function" === typeof a.toString &&
                Object.prototype.toString !== a.toString &&
                (b += ": " + a.toString())),
            {
              message: b,
              name: a.name || "UnknownError",
              lineNumber: e,
              fileName: f,
              stack: c || "Not available",
            }
          );
        a.stack = c;
        return {
          message: a.message,
          name: a.name,
          lineNumber: a.lineNumber,
          fileName: a.fileName,
          stack: a.stack,
        };
      },
      Ia = function (a, b) {
        b || (b = {});
        b[La(a)] = !0;
        var c = a.stack || "";
        (a = a.X) &&
          !b[La(a)] &&
          ((c += "\nCaused by: "),
          (a.stack && 0 == a.stack.indexOf(a.toString())) ||
            (c += "string" === typeof a ? a : a.message + "\n"),
          (c += Ia(a, b)));
        return c;
      },
      La = function (a) {
        var b = "";
        "function" === typeof a.toString && (b = "" + a);
        return b + a.stack;
      },
      Ma = function (a) {
        var b = Error();
        if (Error.captureStackTrace)
          Error.captureStackTrace(b, a || Ma), (b = String(b.stack));
        else {
          try {
            throw b;
          } catch (c) {
            b = c;
          }
          b = (b = b.stack) ? String(b) : null;
        }
        b || (b = Na(a || arguments.callee.caller, []));
        return b;
      },
      Na = function (a, b) {
        var c = [];
        if (0 <= p(b, a)) c.push("[...circular reference...]");
        else if (a && 50 > b.length) {
          c.push(Ja(a) + "(");
          for (var d = a.arguments, e = 0; d && e < d.length; e++) {
            0 < e && c.push(", ");
            var f = d[e];
            switch (typeof f) {
              case "object":
                f = f ? "object" : "null";
                break;
              case "string":
                break;
              case "number":
                f = String(f);
                break;
              case "boolean":
                f = f ? "true" : "false";
                break;
              case "function":
                f = (f = Ja(f)) ? f : "[fn]";
                break;
              default:
                f = typeof f;
            }
            40 < f.length && (f = f.substr(0, 40) + "...");
            c.push(f);
          }
          b.push(a);
          c.push(")\n");
          try {
            c.push(Na(a.caller, b));
          } catch (h) {
            c.push("[exception trying to get caller]\n");
          }
        } else a ? c.push("[...long stack...]") : c.push("[end]");
        return c.join("");
      },
      Ja = function (a) {
        if (G[a]) return G[a];
        a = String(a);
        if (!G[a]) {
          var b = /function\s+([^\(]+)/m.exec(a);
          G[a] = b ? b[1] : "[Anonymous]";
        }
        return G[a];
      },
      G = {};
    var H = function () {
      this.s = this.s;
      this.H = this.H;
    };
    H.prototype.s = !1;
    H.prototype.P = function () {
      this.s || ((this.s = !0), this.h());
    };
    H.prototype.h = function () {
      if (this.H) for (; this.H.length; ) this.H.shift()();
    };
    var Oa = String.prototype.trim
        ? function (a) {
            return a.trim();
          }
        : function (a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
          },
      da = function (a, b) {
        var c = 0;
        a = Oa(String(a)).split(".");
        b = Oa(String(b)).split(".");
        for (
          var d = Math.max(a.length, b.length), e = 0;
          0 == c && e < d;
          e++
        ) {
          var f = a[e] || "",
            h = b[e] || "";
          do {
            f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
            h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
            if (0 == f[0].length && 0 == h[0].length) break;
            c =
              Pa(
                0 == f[1].length ? 0 : parseInt(f[1], 10),
                0 == h[1].length ? 0 : parseInt(h[1], 10)
              ) ||
              Pa(0 == f[2].length, 0 == h[2].length) ||
              Pa(f[2], h[2]);
            f = f[3];
            h = h[3];
          } while (0 == c);
        }
        return c;
      },
      Pa = function (a, b) {
        return a < b ? -1 : a > b ? 1 : 0;
      };
    var q;
    a: {
      var Qa = C.navigator;
      if (Qa) {
        var Ra = Qa.userAgent;
        if (Ra) {
          q = Ra;
          break a;
        }
      }
      q = "";
    }
    var I = [],
      J = [],
      Sa = !1,
      Ta = function (a) {
        I[I.length] = a;
        if (Sa) for (var b = 0; b < J.length; b++) a(D(J[b].i, J[b]));
      },
      Ua = function (a) {
        Sa = !0;
        for (var b = D(a.i, a), c = 0; c < I.length; c++) I[c](b);
        J.push(a);
      };
    var Va = function (a) {
      Va[" "](a);
      return a;
    };
    Va[" "] = ya;
    var Xa = function (a, b) {
      var c = Wa;
      return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : (c[a] = b(a));
    };
    var Ya = r("Opera"),
      K = t(),
      Za = r("Edge"),
      $a =
        r("Gecko") &&
        !(-1 != q.toLowerCase().indexOf("webkit") && !r("Edge")) &&
        !(r("Trident") || r("MSIE")) &&
        !r("Edge"),
      ab = -1 != q.toLowerCase().indexOf("webkit") && !r("Edge"),
      bb;
    a: {
      var cb = "",
        db = (function () {
          var a = q;
          if ($a) return /rv:([^\);]+)(\)|;)/.exec(a);
          if (Za) return /Edge\/([\d\.]+)/.exec(a);
          if (K) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
          if (ab) return /WebKit\/(\S+)/.exec(a);
          if (Ya) return /(?:Version)[ \/]?(\S+)/.exec(a);
        })();
      db && (cb = db ? db[1] : "");
      if (K) {
        var L,
          eb = C.document;
        L = eb ? eb.documentMode : void 0;
        if (null != L && L > parseFloat(cb)) {
          bb = String(L);
          break a;
        }
      }
      bb = cb;
    }
    var fb = bb,
      Wa = {},
      gb = function (a) {
        return Xa(a, function () {
          return 0 <= da(fb, a);
        });
      };
    var ea =
      "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
        " "
      );
    Ta(function () {});
    /*
        
         Copyright 2005, 2007 Bob Ippolito. All Rights Reserved.
         Copyright The Closure Library Authors.
         SPDX-License-Identifier: MIT
        */
    var M = function () {
      H.call(this);
    };
    M.prototype = na(H.prototype);
    M.prototype.constructor = M;
    if (ua) ua(M, H);
    else
      for (var N in H)
        if ("prototype" != N)
          if (Object.defineProperties) {
            var hb = Object.getOwnPropertyDescriptor(H, N);
            hb && Object.defineProperty(M, N, hb);
          } else M[N] = H[N];
    M.v = H.prototype;
    var kb = function (a) {
        var b = ib;
        b.i = a;
        jb(b);
      },
      x = function (a) {
        var b = ib,
          c = null;
        if (b.m) {
          c = "Potentially sensitive message stripped for security reasons.";
          var d = Error("h");
          d.columnNumber = a.columnNumber;
          d.lineNumber = a.lineNumber;
          d.name = a.name;
          d.fileName = a.fileName;
          if ((v() && w(28)) || (u() && w(14))) d.stack = a.stack;
          a = d;
        }
        b.s ||
          (b.i ? lb(b.i, a, c) : b.g && 10 > b.g.length && b.g.push([c, a]));
      },
      jb = function (a) {
        a.g &&
          (Ga(
            a.g,
            function (b) {
              lb(this.i, b[1], b[0]);
            },
            a
          ),
          (a.g = null));
      },
      ib = new M();
    var mb = function () {},
      nb = function (a, b, c) {
        if (null == b) c.push("null");
        else {
          if ("object" == typeof b) {
            if (Array.isArray(b)) {
              var d = b;
              b = d.length;
              c.push("[");
              for (var e = "", f = 0; f < b; f++)
                c.push(e), nb(a, d[f], c), (e = ",");
              c.push("]");
              return;
            }
            if (
              b instanceof String ||
              b instanceof Number ||
              b instanceof Boolean
            )
              b = b.valueOf();
            else {
              c.push("{");
              e = "";
              for (d in b)
                Object.prototype.hasOwnProperty.call(b, d) &&
                  ((f = b[d]),
                  "function" != typeof f &&
                    (c.push(e), ob(d, c), c.push(":"), nb(a, f, c), (e = ",")));
              c.push("}");
              return;
            }
          }
          switch (typeof b) {
            case "string":
              ob(b, c);
              break;
            case "number":
              c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
              break;
            case "boolean":
              c.push(String(b));
              break;
            case "function":
              c.push("null");
              break;
            default:
              throw Error("i`" + typeof b);
          }
        }
      },
      pb = {
        '"': '\\"',
        "\\": "\\\\",
        "/": "\\/",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\x0B": "\\u000b",
      },
      qb = /\uffff/.test("\uffff")
        ? /[\\"\x00-\x1f\x7f-\uffff]/g
        : /[\\"\x00-\x1f\x7f-\xff]/g,
      ob = function (a, b) {
        b.push(
          '"',
          a.replace(qb, function (c) {
            var d = pb[c];
            d ||
              ((d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1)),
              (pb[c] = d));
            return d;
          }),
          '"'
        );
      };
    var ia = function () {
      var a = window;
      if (!a.location)
        try {
          nb(new mb(), a, []);
        } catch (c) {}
      var b = a.location && a.location.ancestorOrigins;
      if (void 0 !== b)
        return b && b.length ? b[b.length - 1] == a.location.origin : !0;
      try {
        return void 0 !== a.top.location.href;
      } catch (c) {
        return !1;
      }
    };
    var ja = {};
    var rb = function (a) {
        this.g = a;
        this.i = {};
        this.h = [];
      },
      lb = function (a, b, c) {
        var d = ka();
        c && (d.message = c);
        a: {
          c = Ma();
          d["call-stack"] = c;
          b = b instanceof Error ? b : b || "";
          for (c = 0; c < a.h.length; c++) if (!1 === a.h[c](b, d)) break a;
          c = "";
          if (b) {
            c = b.message || "unknown";
            for (var e = 0, f = 0; f < c.length; ++f)
              e = (31 * e + c.charCodeAt(f)) >>> 0;
            c = e;
          }
          e = "";
          for (h in d) e = e + h + ":" + d[h] + ":";
          var h = c + "::" + e;
          c = a.i[h];
          c || ((c = { time: 0, count: 0 }), (a.i[h] = c));
          1e4 > Date.now() - c.time
            ? (c.count++,
              1 == c.count &&
                ((d = ka()), (d.message = "Throttling: " + h), a.g.i(b, d)))
            : (c.count && (d["dropped-instances"] = c.count),
              (c.time = Date.now()),
              (c.count = 0),
              a.g.i(b, d));
        }
      };
    var O = function (a) {
      H.call(this);
      this.l = a;
      this.m = !0;
      this.g = !1;
    };
    F(O, H);
    O.prototype.i = function (a) {
      return sb(this, a);
    };
    var P = function (a, b) {
        a =
          (Object.prototype.hasOwnProperty.call(a, za) && a[za]) ||
          (a[za] = ++Aa);
        return (b ? "__wrapper_" : "__protected_") + a + "__";
      },
      sb = function (a, b) {
        var c = P(a, !0);
        b[c] || ((b[c] = tb(a, b))[P(a, !1)] = b);
        return b[c];
      },
      tb = function (a, b) {
        var c = function () {
          if (a.s) return b.apply(this, arguments);
          try {
            return b.apply(this, arguments);
          } catch (d) {
            ub(a, d);
          }
        };
        c[P(a, !1)] = b;
        return c;
      },
      ub = function (a, b) {
        if (
          !(
            (b &&
              "object" === typeof b &&
              "string" === typeof b.message &&
              0 == b.message.indexOf("Error in protected function: ")) ||
            ("string" === typeof b &&
              0 == b.indexOf("Error in protected function: "))
          )
        ) {
          a.l(b);
          if (!a.m)
            throw (
              (a.g &&
                ("object" === typeof b && b && "string" === typeof b.message
                  ? (b.message = "Error in protected function: " + b.message)
                  : (b = "Error in protected function: " + b)),
              b)
            );
          throw new vb(b);
        }
      },
      wb = function (a) {
        var b = b || C.window;
        "onunhandledrejection" in b &&
          (b.onunhandledrejection = function (c) {
            ub(a, c && c.reason ? c.reason : Error("j"));
          });
      },
      xb = function (a) {
        for (
          var b = C.window,
            c = [
              "requestAnimationFrame",
              "mozRequestAnimationFrame",
              "webkitAnimationFrame",
              "msRequestAnimationFrame",
            ],
            d = 0;
          d < c.length;
          d++
        ) {
          var e = c[d];
          c[d] in b && Q(a, e);
        }
      },
      Q = function (a, b) {
        var c = C.window,
          d = c[b];
        c[b] = function (e, f) {
          "string" === typeof e && (e = Da(Ea, e));
          arguments[0] = e = sb(a, e);
          if (d.apply) return d.apply(this, arguments);
          var h = e;
          if (2 < arguments.length) {
            var g = Array.prototype.slice.call(arguments, 2);
            h = function () {
              e.apply(this, g);
            };
          }
          return d(h, f);
        };
        c[b][P(a, !1)] = d;
      };
    O.prototype.h = function () {
      var a = C.window;
      var b = a.setTimeout;
      b = b[P(this, !1)] || b;
      a.setTimeout = b;
      b = a.setInterval;
      b = b[P(this, !1)] || b;
      a.setInterval = b;
      O.v.h.call(this);
    };
    var vb = function (a) {
      n.call(
        this,
        "Error in protected function: " +
          (a && a.message ? String(a.message) : String(a)),
        a
      );
      (a = a && a.stack) && "string" === typeof a && (this.stack = a);
    };
    F(vb, n);
    var R = function (a, b) {
      this.type = a;
      this.g = this.target = b;
      this.defaultPrevented = !1;
    };
    R.prototype.h = function () {
      this.defaultPrevented = !0;
    };
    var S = function (a, b) {
      R.call(this, a ? a.type : "");
      this.relatedTarget = this.g = this.target = null;
      this.button =
        this.screenY =
        this.screenX =
        this.clientY =
        this.clientX =
          0;
      this.key = "";
      this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
      this.state = null;
      this.pointerId = 0;
      this.pointerType = "";
      this.i = null;
      if (a) {
        var c = (this.type = a.type),
          d =
            a.changedTouches && a.changedTouches.length
              ? a.changedTouches[0]
              : null;
        this.target = a.target || a.srcElement;
        this.g = b;
        if ((b = a.relatedTarget)) {
          if ($a) {
            a: {
              try {
                Va(b.nodeName);
                var e = !0;
                break a;
              } catch (f) {}
              e = !1;
            }
            e || (b = null);
          }
        } else
          "mouseover" == c
            ? (b = a.fromElement)
            : "mouseout" == c && (b = a.toElement);
        this.relatedTarget = b;
        d
          ? ((this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX),
            (this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY),
            (this.screenX = d.screenX || 0),
            (this.screenY = d.screenY || 0))
          : ((this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX),
            (this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY),
            (this.screenX = a.screenX || 0),
            (this.screenY = a.screenY || 0));
        this.button = a.button;
        this.key = a.key || "";
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType =
          "string" === typeof a.pointerType
            ? a.pointerType
            : yb[a.pointerType] || "";
        this.state = a.state;
        this.i = a;
        a.defaultPrevented && S.v.h.call(this);
      }
    };
    F(S, R);
    var yb = { 2: "touch", 3: "pen", 4: "mouse" };
    S.prototype.h = function () {
      S.v.h.call(this);
      var a = this.i;
      a.preventDefault ? a.preventDefault() : (a.returnValue = !1);
    };
    var zb = "closure_listenable_" + ((1e6 * Math.random()) | 0);
    var Ab = 0;
    var Bb = function (a, b, c, d, e) {
        this.listener = a;
        this.proxy = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.G = e;
        this.key = ++Ab;
        this.D = this.F = !1;
      },
      T = function (a) {
        a.D = !0;
        a.listener = null;
        a.proxy = null;
        a.src = null;
        a.G = null;
      };
    var Cb = function (a) {
      this.src = a;
      this.g = {};
      this.h = 0;
    };
    Cb.prototype.add = function (a, b, c, d, e) {
      var f = a.toString();
      a = this.g[f];
      a || ((a = this.g[f] = []), this.h++);
      var h = Db(a, b, d, e);
      -1 < h
        ? ((b = a[h]), c || (b.F = !1))
        : ((b = new Bb(b, this.src, f, !!d, e)), (b.F = c), a.push(b));
      return b;
    };
    var Eb = function (a, b) {
        var c = b.type;
        c in a.g &&
          aa(a.g[c], b) &&
          (T(b), 0 == a.g[c].length && (delete a.g[c], a.h--));
      },
      Db = function (a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
          var f = a[e];
          if (!f.D && f.listener == b && f.capture == !!c && f.G == d) return e;
        }
        return -1;
      };
    var Fb = "closure_lm_" + ((1e6 * Math.random()) | 0),
      Gb = {},
      Hb = 0,
      Ib = function (a, b, c, d, e) {
        if (Array.isArray(b))
          for (var f = 0; f < b.length; f++) Ib(a, b[f], c, d, e);
        else
          ((f = typeof d),
          (d =
            ("object" == f && null != d) || "function" == f
              ? !!d.capture
              : !!d),
          (c = Jb(c)),
          a && a[zb])
            ? ((a = a.m),
              (b = String(b).toString()),
              b in a.g &&
                ((f = a.g[b]),
                (c = Db(f, c, d, e)),
                -1 < c &&
                  (T(f[c]),
                  Array.prototype.splice.call(f, c, 1),
                  0 == f.length && (delete a.g[b], a.h--))))
            : a &&
              (a = Kb(a)) &&
              ((b = a.g[b.toString()]),
              (a = -1),
              b && (a = Db(b, c, d, e)),
              (c = -1 < a ? b[a] : null) && Lb(c));
      },
      Lb = function (a) {
        if ("number" !== typeof a && a && !a.D) {
          var b = a.src;
          if (b && b[zb]) Eb(b.m, a);
          else {
            var c = a.type,
              d = a.proxy;
            b.removeEventListener
              ? b.removeEventListener(c, d, a.capture)
              : b.detachEvent
              ? b.detachEvent(c in Gb ? Gb[c] : (Gb[c] = "on" + c), d)
              : b.addListener && b.removeListener && b.removeListener(d);
            Hb--;
            (c = Kb(b))
              ? (Eb(c, a), 0 == c.h && ((c.src = null), (b[Fb] = null)))
              : T(a);
          }
        }
      },
      Mb = function (a, b) {
        if (a.D) a = !0;
        else {
          b = new S(b, this);
          var c = a.listener,
            d = a.G || a.src;
          a.F && Lb(a);
          a = c.call(d, b);
        }
        return a;
      },
      Kb = function (a) {
        a = a[Fb];
        return a instanceof Cb ? a : null;
      },
      Nb = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0),
      Jb = function (a) {
        if ("function" === typeof a) return a;
        a[Nb] ||
          (a[Nb] = function (b) {
            return a.handleEvent(b);
          });
        return a[Nb];
      };
    Ta(function (a) {
      Mb = a(Mb);
    });
    var U = function () {
      H.call(this);
      this.m = new Cb(this);
      this.V = this;
      this.M = null;
    };
    F(U, H);
    U.prototype[zb] = !0;
    U.prototype.removeEventListener = function (a, b, c, d) {
      Ib(this, a, b, c, d);
    };
    var W = function (a, b) {
      var c,
        d = a.M;
      if (d) for (c = []; d; d = d.M) c.push(d);
      a = a.V;
      d = b.type || b;
      if ("string" === typeof b) b = new R(b, a);
      else if (b instanceof R) b.target = b.target || a;
      else {
        var e = b;
        b = new R(d, a);
        fa(b, e);
      }
      e = !0;
      if (c)
        for (var f = c.length - 1; 0 <= f; f--) {
          var h = (b.g = c[f]);
          e = V(h, d, !0, b) && e;
        }
      h = b.g = a;
      e = V(h, d, !0, b) && e;
      e = V(h, d, !1, b) && e;
      if (c)
        for (f = 0; f < c.length; f++)
          (h = b.g = c[f]), (e = V(h, d, !1, b) && e);
    };
    U.prototype.h = function () {
      U.v.h.call(this);
      if (this.m) {
        var a = this.m,
          b = 0,
          c;
        for (c in a.g) {
          for (var d = a.g[c], e = 0; e < d.length; e++) ++b, T(d[e]);
          delete a.g[c];
          a.h--;
        }
      }
      this.M = null;
    };
    var V = function (a, b, c, d) {
      b = a.m.g[String(b)];
      if (!b) return !0;
      b = b.concat();
      for (var e = !0, f = 0; f < b.length; ++f) {
        var h = b[f];
        if (h && !h.D && h.capture == c) {
          var g = h.listener,
            k = h.G || h.src;
          h.F && Eb(a.m, h);
          e = !1 !== g.call(k, d) && e;
        }
      }
      return e && !d.defaultPrevented;
    };
    var Ob = function () {};
    Ob.prototype.g = null;
    var Qb = function (a) {
      var b;
      (b = a.g) ||
        ((b = {}), Pb(a) && ((b[0] = !0), (b[1] = !0)), (b = a.g = b));
      return b;
    };
    var Rb,
      Sb = function () {};
    F(Sb, Ob);
    var Tb = function (a) {
        return (a = Pb(a)) ? new ActiveXObject(a) : new XMLHttpRequest();
      },
      Pb = function (a) {
        if (
          !a.h &&
          "undefined" == typeof XMLHttpRequest &&
          "undefined" != typeof ActiveXObject
        ) {
          for (
            var b = [
                "MSXML2.XMLHTTP.6.0",
                "MSXML2.XMLHTTP.3.0",
                "MSXML2.XMLHTTP",
                "Microsoft.XMLHTTP",
              ],
              c = 0;
            c < b.length;
            c++
          ) {
            var d = b[c];
            try {
              return new ActiveXObject(d), (a.h = d);
            } catch (e) {}
          }
          throw Error("k");
        }
        return a.h;
      };
    Rb = new Sb();
    var Ub = function (a, b, c) {
      if ("function" === typeof a) c && (a = D(a, c));
      else if (a && "function" == typeof a.handleEvent) a = D(a.handleEvent, a);
      else throw Error("l");
      return 2147483647 < Number(b) ? -1 : C.setTimeout(a, b || 0);
    };
    var Vb = RegExp(
        "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"
      ),
      Wb = function (a, b) {
        if (!b) return a;
        var c = a.indexOf("#");
        0 > c && (c = a.length);
        var d = a.indexOf("?");
        if (0 > d || d > c) {
          d = c;
          var e = "";
        } else e = a.substring(d + 1, c);
        a = [a.substr(0, d), e, a.substr(c)];
        c = a[1];
        a[1] = b ? (c ? c + "&" + b : b) : c;
        return a[0] + (a[1] ? "?" + a[1] : "") + a[2];
      },
      Xb = function (a, b, c) {
        if (Array.isArray(b))
          for (var d = 0; d < b.length; d++) Xb(a, String(b[d]), c);
        else
          null != b &&
            c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))));
      },
      Yb = function (a, b) {
        var c = [];
        for (b = b || 0; b < a.length; b += 2) Xb(a[b], a[b + 1], c);
        return c.join("&");
      },
      Zb = function (a) {
        var b = [],
          c;
        for (c in a) Xb(c, a[c], b);
        return b.join("&");
      },
      $b = function (a, b) {
        var c = 2 == arguments.length ? Yb(arguments[1], 0) : Yb(arguments, 1);
        return Wb(a, c);
      };
    var X = function (a) {
      U.call(this);
      this.headers = new Map();
      this.C = a || null;
      this.i = !1;
      this.B = this.g = null;
      this.K = "";
      this.l = this.J = this.u = this.I = !1;
      this.N = 0;
      this.A = null;
      this.S = "";
      this.O = this.U = !1;
    };
    F(X, U);
    var ac = /^https?$/i,
      bc = ["POST", "PUT"],
      cc = [];
    X.prototype.W = function () {
      this.P();
      aa(cc, this);
    };
    var gc = function (a, b, c, d, e) {
        if (a.g) throw Error("m`" + a.K + "`" + b);
        c = c ? c.toUpperCase() : "GET";
        a.K = b;
        a.I = !1;
        a.i = !0;
        a.g = a.C ? Tb(a.C) : Tb(Rb);
        a.B = a.C ? Qb(a.C) : Qb(Rb);
        a.g.onreadystatechange = D(a.R, a);
        try {
          (a.J = !0), a.g.open(c, String(b), !0), (a.J = !1);
        } catch (g) {
          dc(a);
          return;
        }
        b = d || "";
        d = new Map(a.headers);
        if (e)
          if (Object.getPrototypeOf(e) === Object.prototype)
            for (var f in e) d.set(f, e[f]);
          else if (
            "function" === typeof e.keys &&
            "function" === typeof e.get
          ) {
            f = y(e.keys());
            for (var h = f.next(); !h.done; h = f.next())
              (h = h.value), d.set(h, e.get(h));
          } else throw Error("n`" + String(e));
        e = Array.from(d.keys()).find(function (g) {
          return "content-type" == g.toLowerCase();
        });
        f = C.FormData && b instanceof C.FormData;
        !(0 <= p(bc, c)) ||
          e ||
          f ||
          d.set(
            "Content-Type",
            "application/x-www-form-urlencoded;charset=utf-8"
          );
        c = y(d);
        for (e = c.next(); !e.done; e = c.next())
          (d = y(e.value)),
            (e = d.next().value),
            (d = d.next().value),
            a.g.setRequestHeader(e, d);
        a.S && (a.g.responseType = a.S);
        "withCredentials" in a.g &&
          a.g.withCredentials !== a.U &&
          (a.g.withCredentials = a.U);
        try {
          ec(a),
            0 < a.N &&
              ((a.O = fc(a.g)),
              a.O
                ? ((a.g.timeout = a.N), (a.g.ontimeout = D(a.T, a)))
                : (a.A = Ub(a.T, a.N, a))),
            (a.u = !0),
            a.g.send(b),
            (a.u = !1);
        } catch (g) {
          dc(a);
        }
      },
      fc = function (a) {
        return (
          K && gb(9) && "number" === typeof a.timeout && void 0 !== a.ontimeout
        );
      };
    X.prototype.T = function () {
      "undefined" != typeof xa && this.g && (W(this, "timeout"), this.abort(8));
    };
    var dc = function (a) {
        a.i = !1;
        a.g && ((a.l = !0), a.g.abort(), (a.l = !1));
        hc(a);
        Y(a);
      },
      hc = function (a) {
        a.I || ((a.I = !0), W(a, "complete"), W(a, "error"));
      };
    X.prototype.abort = function () {
      this.g &&
        this.i &&
        ((this.i = !1),
        (this.l = !0),
        this.g.abort(),
        (this.l = !1),
        W(this, "complete"),
        W(this, "abort"),
        Y(this));
    };
    X.prototype.h = function () {
      this.g &&
        (this.i &&
          ((this.i = !1), (this.l = !0), this.g.abort(), (this.l = !1)),
        Y(this, !0));
      X.v.h.call(this);
    };
    X.prototype.R = function () {
      this.s || (this.J || this.u || this.l ? ic(this) : this.L());
    };
    X.prototype.L = function () {
      ic(this);
    };
    var ic = function (a) {
        if (
          a.i &&
          "undefined" != typeof xa &&
          (!a.B[1] || 4 != (a.g ? a.g.readyState : 0) || 2 != jc(a))
        )
          if (a.u && 4 == (a.g ? a.g.readyState : 0)) Ub(a.R, 0, a);
          else if (
            (W(a, "readystatechange"), 4 == (a.g ? a.g.readyState : 0))
          ) {
            a.i = !1;
            try {
              var b = jc(a);
              a: switch (b) {
                case 200:
                case 201:
                case 202:
                case 204:
                case 206:
                case 304:
                case 1223:
                  var c = !0;
                  break a;
                default:
                  c = !1;
              }
              var d;
              if (!(d = c)) {
                var e;
                if ((e = 0 === b)) {
                  var f = String(a.K).match(Vb)[1] || null;
                  if (!f && C.self && C.self.location) {
                    var h = C.self.location.protocol;
                    f = h.substr(0, h.length - 1);
                  }
                  e = !ac.test(f ? f.toLowerCase() : "");
                }
                d = e;
              }
              d ? (W(a, "complete"), W(a, "success")) : hc(a);
            } finally {
              Y(a);
            }
          }
      },
      Y = function (a, b) {
        if (a.g) {
          ec(a);
          var c = a.g,
            d = a.B[0] ? ya : null;
          a.g = null;
          a.B = null;
          b || W(a, "ready");
          try {
            c.onreadystatechange = d;
          } catch (e) {}
        }
      },
      ec = function (a) {
        a.g && a.O && (a.g.ontimeout = null);
        a.A && (C.clearTimeout(a.A), (a.A = null));
      },
      jc = function (a) {
        try {
          return 2 < (a.g ? a.g.readyState : 0) ? a.g.status : -1;
        } catch (b) {
          return -1;
        }
      };
    Ta(function (a) {
      X.prototype.L = a(X.prototype.L);
    });
    var Z = function (a, b, c) {
      U.call(this);
      this.u = b || null;
      this.l = {};
      this.A = kc;
      this.B = a;
      c ||
        ((this.g = null),
        K && !gb("10")
          ? Ha(D(this.i, this), !1, null)
          : ((this.g = new O(D(this.i, this))),
            Q(this.g, "setTimeout"),
            Q(this.g, "setInterval"),
            xb(this.g),
            Ua(this.g)));
    };
    F(Z, U);
    var lc = function (a) {
      R.call(this, "a");
      this.error = a;
    };
    F(lc, R);
    var kc = function (a, b, c, d) {
      if (d instanceof Map) {
        var e = {};
        d = y(d);
        for (var f = d.next(); !f.done; f = d.next()) {
          var h = y(f.value);
          f = h.next().value;
          h = h.next().value;
          e[f] = h;
        }
      } else e = d;
      d = new X();
      cc.push(d);
      d.m.add("ready", d.W, !0, void 0, void 0);
      gc(d, a, b, c, e);
    };
    Z.prototype.i = function (a, b) {
      a = a.error || a;
      if (b) {
        var c = {};
        for (d in b) c[d] = b[d];
        b = c;
      } else b = {};
      a instanceof Error && fa(b, a.__closure__error__context__984382 || {});
      a = Ka(a);
      if (this.u)
        try {
          this.u(a, b);
        } catch (m) {}
      var d = a.message.substring(0, 1900);
      c = a.stack;
      try {
        var e = $b(
          this.B,
          "script",
          a.fileName,
          "error",
          d,
          "line",
          a.lineNumber
        );
        a: {
          for (var f in this.l) {
            var h = !1;
            break a;
          }
          h = !0;
        }
        if (!h) {
          h = e;
          var g = Zb(this.l);
          e = Wb(h, g);
        }
        g = {};
        g.trace = c;
        if (b) for (var k in b) g["context." + k] = b[k];
        var l = Zb(g);
        this.A(e, "POST", l, this.C);
      } catch (m) {}
      try {
        W(this, new lc(a, b));
      } catch (m) {}
    };
    Z.prototype.h = function () {
      var a = this.g;
      a && "function" == typeof a.P && a.P();
      Z.v.h.call(this);
    };
    var mc = function () {};
    mc.prototype.g = null;
    mc.prototype.h = null;
    var nc = new mc();
    var oc = function () {
      this.g = ("undefined" == typeof document ? null : document) || {
        cookie: "",
      };
    };
    oc.prototype.set = function (a, b, c) {
      var d = !1;
      if ("object" === typeof c) {
        var e = c.aa;
        d = c.ba || !1;
        var f = c.domain || void 0;
        var h = c.path || void 0;
        var g = c.Y;
      }
      if (/[;=\s]/.test(a)) throw Error("o`" + a);
      if (/[;\r\n]/.test(b)) throw Error("p`" + b);
      void 0 === g && (g = -1);
      this.g.cookie =
        a +
        "=" +
        b +
        (f ? ";domain=" + f : "") +
        (h ? ";path=" + h : "") +
        (0 > g
          ? ""
          : 0 == g
          ? ";expires=" + new Date(1970, 1, 1).toUTCString()
          : ";expires=" + new Date(Date.now() + 1e3 * g).toUTCString()) +
        (d ? ";secure" : "") +
        (null != e ? ";samesite=" + e : "");
    };
    oc.prototype.get = function (a, b) {
      for (
        var c = a + "=", d = (this.g.cookie || "").split(";"), e = 0, f;
        e < d.length;
        e++
      ) {
        f = Oa(d[e]);
        if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
        if (f == a) return "";
      }
      return b;
    };
    var pc = new oc();
    (function (a, b, c, d, e, f, h, g) {
      ib.g = [];
      c &&
        ((a = new Z(c, void 0, !0)),
        g && (a.l = g),
        e && (a.A = e),
        (e = new rb(a)),
        (nc.h = e),
        kb(e));
      var k = null;
      e = function (l) {
        C.$googDebugFname &&
          l &&
          l.message &&
          !l.fileName &&
          (l.message += " in " + C.$googDebugFname);
        k
          ? l && l.message && (l.message += " [Possibly caused by: " + k + "]")
          : (k = String(l));
        x(l);
      };
      Fa("_DumpException", e);
      Fa("_B_err", e);
      Ga([C].concat(d || []), Da(Ha, Da(la, !!f), !0));
      d =
        (v() && w(28)) ||
        (u() && w(14)) ||
        (t() && w(11)) ||
        (r("Safari") &&
          !(
            v() ||
            r("Coast") ||
            r("Opera") ||
            r("Edge") ||
            r("Edg/") ||
            r("OPR") ||
            u() ||
            r("Silk") ||
            r("Android")
          ) &&
          w(10));
      (h && d) ||
        (K && !gb(10)) ||
        ((h = new O(ha)),
        (h.m = !0),
        (h.g = !0),
        xb(h),
        Q(h, "setTimeout"),
        Q(h, "setInterval"),
        wb(h),
        Ua(h),
        (nc.g = h));
      return nc;
    })("", void 0, "/_/AccountsDomainCookiesCheckConnectionHttp/jserror");
    Fa("google.checkconnection.getMsgToSend", function (a, b) {
      if (!a) throw Error("q");
      !b || 0 >= b
        ? (b = 0)
        : ((b = new Date().getTime() - b), (b = !b || 0 > b ? 0 : b));
      var c =
        "CheckConnectionTempCookie" + String(Math.floor(1e3 * Math.random()));
      var d = String(Math.floor(1e6 * Math.random()));
      pc.set(c, d, { Y: 10 });
      c = pc.get(c) == d ? !0 : !1;
      return a + ":" + String(b) + ":" + (c ? "1" : "0");
    });
  } catch (e) {
    _._DumpException(e);
  }
}.call(this, this.default_AccountsDomaincookiesCheckconnectionJs));
// Google Inc.

//# sourceURL=/_/mss/boq-identity/_/js/k=boq-identity.AccountsDomaincookiesCheckconnectionJs.en_US.0-WsLqp5CaE.es5.O/d=1/rs=AOaEmlFnpmd7hRQJye34JcodcvjoHhtsEg/m=base
if (window.parent && window.parent.postMessage) {
  window.parent.postMessage(
    google.checkconnection.getMsgToSend("youtube", "1635136616805"),
    "https://accounts.google.com"
  );
}
