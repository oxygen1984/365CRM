!(function (t) {
  var e = {};
  function n(r) {
    if (e[r]) return e[r].exports;
    var o = (e[r] = { i: r, l: !1, exports: {} });
    return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function (t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
    }),
    (n.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var o in t)
          n.d(
            r,
            o,
            function (e) {
              return t[e];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return n.d(e, "a", e), e;
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ""),
    n((n.s = 253));
})([
  ,
  function (t, e, n) {
    var r = n(23)("wks"),
      o = n(20),
      i = n(2).Symbol,
      c = "function" == typeof i;
    (t.exports = function (t) {
      return r[t] || (r[t] = (c && i[t]) || (c ? i : o)("Symbol." + t));
    }).store = r;
  },
  function (t, e) {
    var n = (t.exports =
      "undefined" != typeof window && window.Math == Math
        ? window
        : "undefined" != typeof self && self.Math == Math
        ? self
        : Function("return this")());
    "number" == typeof __g && (__g = n);
  },
  function (t, e) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (t) {
      "object" == typeof window && (n = window);
    }
    t.exports = n;
  },
  ,
  function (t, e, n) {
    t.exports = !n(16)(function () {
      return (
        7 !=
        Object.defineProperty({}, "a", {
          get: function () {
            return 7;
          },
        }).a
      );
    });
  },
  ,
  ,
  ,
  function (t, e, n) {
    var r = n(14);
    t.exports = function (t) {
      if (!r(t)) throw TypeError(t + " is not an object!");
      return t;
    };
  },
  function (t, e, n) {
    var r = n(13),
      o = n(24);
    t.exports = n(5)
      ? function (t, e, n) {
          return r.f(t, e, o(1, n));
        }
      : function (t, e, n) {
          return (t[e] = n), t;
        };
  },
  ,
  ,
  function (t, e, n) {
    var r = n(9),
      o = n(47),
      i = n(36),
      c = Object.defineProperty;
    e.f = n(5)
      ? Object.defineProperty
      : function (t, e, n) {
          if ((r(t), (e = i(e, !0)), r(n), o))
            try {
              return c(t, e, n);
            } catch (t) {}
          if ("get" in n || "set" in n)
            throw TypeError("Accessors not supported!");
          return "value" in n && (t[e] = n.value), t;
        };
  },
  function (t, e) {
    t.exports = function (t) {
      return "object" == typeof t ? null !== t : "function" == typeof t;
    };
  },
  function (t, e) {
    var n = (t.exports = { version: "2.6.11" });
    "number" == typeof __e && (__e = n);
  },
  function (t, e) {
    t.exports = function (t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    };
  },
  function (t, e, n) {
    var r = n(2),
      o = n(10),
      i = n(18),
      c = n(20)("src"),
      a = n(57),
      u = "toString",
      s = ("" + a).split(u);
    (n(15).inspectSource = function (t) {
      return a.call(t);
    }),
      (t.exports = function (t, e, n, a) {
        var u = "function" == typeof n;
        u && (i(n, "name") || o(n, "name", e)),
          t[e] !== n &&
            (u && (i(n, c) || o(n, c, t[e] ? "" + t[e] : s.join(String(e)))),
            t === r
              ? (t[e] = n)
              : a
              ? t[e]
                ? (t[e] = n)
                : o(t, e, n)
              : (delete t[e], o(t, e, n)));
      })(Function.prototype, u, function () {
        return ("function" == typeof this && this[c]) || a.call(this);
      });
  },
  function (t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function (t, e) {
      return n.call(t, e);
    };
  },
  ,
  function (t, e) {
    var n = 0,
      r = Math.random();
    t.exports = function (t) {
      return "Symbol(".concat(
        void 0 === t ? "" : t,
        ")_",
        (++n + r).toString(36)
      );
    };
  },
  ,
  ,
  function (t, e, n) {
    var r = n(15),
      o = n(2),
      i = "__core-js_shared__",
      c = o[i] || (o[i] = {});
    (t.exports = function (t, e) {
      return c[t] || (c[t] = void 0 !== e ? e : {});
    })("versions", []).push({
      version: r.version,
      mode: n(29) ? "pure" : "global",
      copyright: "Â© 2019 Denis Pushkarev (zloirock.ru)",
    });
  },
  function (t, e) {
    t.exports = function (t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e,
      };
    };
  },
  ,
  function (t, e, n) {
    var r = n(214),
      o = n(27);
    t.exports = function (t) {
      return r(o(t));
    };
  },
  function (t, e) {
    t.exports = function (t) {
      if (null == t) throw TypeError("Can't call method on  " + t);
      return t;
    };
  },
  function (t, e) {
    var n = Math.ceil,
      r = Math.floor;
    t.exports = function (t) {
      return isNaN((t = +t)) ? 0 : (t > 0 ? r : n)(t);
    };
  },
  function (t, e) {
    t.exports = !1;
  },
  function (t, e, n) {
    var r = n(2),
      o = n(15),
      i = n(10),
      c = n(17),
      a = n(49),
      u = function (t, e, n) {
        var s,
          f,
          l,
          p,
          h = t & u.F,
          d = t & u.G,
          y = t & u.S,
          v = t & u.P,
          m = t & u.B,
          g = d ? r : y ? r[e] || (r[e] = {}) : (r[e] || {}).prototype,
          b = d ? o : o[e] || (o[e] = {}),
          S = b.prototype || (b.prototype = {});
        for (s in (d && (n = e), n))
          (l = ((f = !h && g && void 0 !== g[s]) ? g : n)[s]),
            (p =
              m && f
                ? a(l, r)
                : v && "function" == typeof l
                ? a(Function.call, l)
                : l),
            g && c(g, s, l, t & u.U),
            b[s] != l && i(b, s, p),
            v && S[s] != l && (S[s] = l);
      };
    (r.core = o),
      (u.F = 1),
      (u.G = 2),
      (u.S = 4),
      (u.P = 8),
      (u.B = 16),
      (u.W = 32),
      (u.U = 64),
      (u.R = 128),
      (t.exports = u);
  },
  ,
  ,
  ,
  function (t, e, n) {
    var r = n(27);
    t.exports = function (t) {
      return Object(r(t));
    };
  },
  function (t, e) {
    var n = {}.toString;
    t.exports = function (t) {
      return n.call(t).slice(8, -1);
    };
  },
  function (t, e, n) {
    var r = n(14);
    t.exports = function (t, e) {
      if (!r(t)) return t;
      var n, o;
      if (e && "function" == typeof (n = t.toString) && !r((o = n.call(t))))
        return o;
      if ("function" == typeof (n = t.valueOf) && !r((o = n.call(t)))) return o;
      if (!e && "function" == typeof (n = t.toString) && !r((o = n.call(t))))
        return o;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  ,
  ,
  ,
  ,
  function (t, e) {
    t.exports = {};
  },
  function (t, e, n) {
    var r = n(119),
      o = n(76);
    t.exports =
      Object.keys ||
      function (t) {
        return r(t, o);
      };
  },
  ,
  function (t, e, n) {
    var r = n(28),
      o = Math.min;
    t.exports = function (t) {
      return t > 0 ? o(r(t), 9007199254740991) : 0;
    };
  },
  function (t, e, n) {
    var r = n(35),
      o = n(1)("toStringTag"),
      i =
        "Arguments" ==
        r(
          (function () {
            return arguments;
          })()
        );
    t.exports = function (t) {
      var e, n, c;
      return void 0 === t
        ? "Undefined"
        : null === t
        ? "Null"
        : "string" ==
          typeof (n = (function (t, e) {
            try {
              return t[e];
            } catch (t) {}
          })((e = Object(t)), o))
        ? n
        : i
        ? r(e)
        : "Object" == (c = r(e)) && "function" == typeof e.callee
        ? "Arguments"
        : c;
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(9);
    t.exports = function () {
      var t = r(this),
        e = "";
      return (
        t.global && (e += "g"),
        t.ignoreCase && (e += "i"),
        t.multiline && (e += "m"),
        t.unicode && (e += "u"),
        t.sticky && (e += "y"),
        e
      );
    };
  },
  function (t, e, n) {
    t.exports =
      !n(5) &&
      !n(16)(function () {
        return (
          7 !=
          Object.defineProperty(n(48)("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      });
  },
  function (t, e, n) {
    var r = n(14),
      o = n(2).document,
      i = r(o) && r(o.createElement);
    t.exports = function (t) {
      return i ? o.createElement(t) : {};
    };
  },
  function (t, e, n) {
    var r = n(58);
    t.exports = function (t, e, n) {
      if ((r(t), void 0 === e)) return t;
      switch (n) {
        case 1:
          return function (n) {
            return t.call(e, n);
          };
        case 2:
          return function (n, r) {
            return t.call(e, n, r);
          };
        case 3:
          return function (n, r, o) {
            return t.call(e, n, r, o);
          };
      }
      return function () {
        return t.apply(e, arguments);
      };
    };
  },
  ,
  ,
  ,
  ,
  function (t, e) {
    e.f = {}.propertyIsEnumerable;
  },
  ,
  function (t, e) {
    var n,
      r,
      o = (t.exports = {});
    function i() {
      throw new Error("setTimeout has not been defined");
    }
    function c() {
      throw new Error("clearTimeout has not been defined");
    }
    function a(t) {
      if (n === setTimeout) return setTimeout(t, 0);
      if ((n === i || !n) && setTimeout)
        return (n = setTimeout), setTimeout(t, 0);
      try {
        return n(t, 0);
      } catch (e) {
        try {
          return n.call(null, t, 0);
        } catch (e) {
          return n.call(this, t, 0);
        }
      }
    }
    !(function () {
      try {
        n = "function" == typeof setTimeout ? setTimeout : i;
      } catch (t) {
        n = i;
      }
      try {
        r = "function" == typeof clearTimeout ? clearTimeout : c;
      } catch (t) {
        r = c;
      }
    })();
    var u,
      s = [],
      f = !1,
      l = -1;
    function p() {
      f &&
        u &&
        ((f = !1), u.length ? (s = u.concat(s)) : (l = -1), s.length && h());
    }
    function h() {
      if (!f) {
        var t = a(p);
        f = !0;
        for (var e = s.length; e; ) {
          for (u = s, s = []; ++l < e; ) u && u[l].run();
          (l = -1), (e = s.length);
        }
        (u = null),
          (f = !1),
          (function (t) {
            if (r === clearTimeout) return clearTimeout(t);
            if ((r === c || !r) && clearTimeout)
              return (r = clearTimeout), clearTimeout(t);
            try {
              r(t);
            } catch (e) {
              try {
                return r.call(null, t);
              } catch (e) {
                return r.call(this, t);
              }
            }
          })(t);
      }
    }
    function d(t, e) {
      (this.fun = t), (this.array = e);
    }
    function y() {}
    (o.nextTick = function (t) {
      var e = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
      s.push(new d(t, e)), 1 !== s.length || f || a(h);
    }),
      (d.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (o.title = "browser"),
      (o.browser = !0),
      (o.env = {}),
      (o.argv = []),
      (o.version = ""),
      (o.versions = {}),
      (o.on = y),
      (o.addListener = y),
      (o.once = y),
      (o.off = y),
      (o.removeListener = y),
      (o.removeAllListeners = y),
      (o.emit = y),
      (o.prependListener = y),
      (o.prependOnceListener = y),
      (o.listeners = function (t) {
        return [];
      }),
      (o.binding = function (t) {
        throw new Error("process.binding is not supported");
      }),
      (o.cwd = function () {
        return "/";
      }),
      (o.chdir = function (t) {
        throw new Error("process.chdir is not supported");
      }),
      (o.umask = function () {
        return 0;
      });
  },
  function (t, e, n) {
    t.exports = n(23)("native-function-to-string", Function.toString);
  },
  function (t, e) {
    t.exports = function (t) {
      if ("function" != typeof t) throw TypeError(t + " is not a function!");
      return t;
    };
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (t, e) {
    t.exports = function (t) {
      return (
        t.webpackPolyfill ||
          ((t.deprecate = function () {}),
          (t.paths = []),
          t.children || (t.children = []),
          Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function () {
              return t.l;
            },
          }),
          Object.defineProperty(t, "id", {
            enumerable: !0,
            get: function () {
              return t.i;
            },
          }),
          (t.webpackPolyfill = 1)),
        t
      );
    };
  },
  function (t, e, n) {
    var r = n(13).f,
      o = n(18),
      i = n(1)("toStringTag");
    t.exports = function (t, e, n) {
      t &&
        !o((t = n ? t : t.prototype), i) &&
        r(t, i, { configurable: !0, value: e });
    };
  },
  function (t, e, n) {
    var r = n(23)("keys"),
      o = n(20);
    t.exports = function (t) {
      return r[t] || (r[t] = o(t));
    };
  },
  function (t, e) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
      ","
    );
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (t, e, n) {
    var r = n(2),
      o = n(15),
      i = n(29),
      c = n(118),
      a = n(13).f;
    t.exports = function (t) {
      var e = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {});
      "_" == t.charAt(0) || t in e || a(e, t, { value: c.f(t) });
    };
  },
  function (t, e, n) {
    e.f = n(1);
  },
  function (t, e, n) {
    var r = n(18),
      o = n(26),
      i = n(215)(!1),
      c = n(75)("IE_PROTO");
    t.exports = function (t, e) {
      var n,
        a = o(t),
        u = 0,
        s = [];
      for (n in a) n != c && r(a, n) && s.push(n);
      for (; e.length > u; ) r(a, (n = e[u++])) && (~i(s, n) || s.push(n));
      return s;
    };
  },
  function (t, e) {
    e.f = Object.getOwnPropertySymbols;
  },
  function (t, e, n) {
    var r = n(9),
      o = n(218),
      i = n(76),
      c = n(75)("IE_PROTO"),
      a = function () {},
      u = function () {
        var t,
          e = n(48)("iframe"),
          r = i.length;
        for (
          e.style.display = "none",
            n(219).appendChild(e),
            e.src = "javascript:",
            (t = e.contentWindow.document).open(),
            t.write("<script>document.F=Object</script>"),
            t.close(),
            u = t.F;
          r--;

        )
          delete u.prototype[i[r]];
        return u();
      };
    t.exports =
      Object.create ||
      function (t, e) {
        var n;
        return (
          null !== t
            ? ((a.prototype = r(t)),
              (n = new a()),
              (a.prototype = null),
              (n[c] = t))
            : (n = u()),
          void 0 === e ? n : o(n, e)
        );
      };
  },
  function (t, e, n) {
    var r = n(119),
      o = n(76).concat("length", "prototype");
    e.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return r(t, o);
      };
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (t, e, n) {
    (function (t, e, n) {
      !(function (t) {
        "use strict";
        var r,
          o = /^[a-z]+:/,
          i = /[-a-z0-9]+(\.[-a-z0-9])*:\d+/i,
          c = /\/\/(.*?)(?::(.*?))?@/,
          a = /^win/i,
          u = /:$/,
          s = /^\?/,
          f = /^#/,
          l = /(.*\/)/,
          p = /^\/{2,}/,
          h = /(^\/?)/,
          d = /'/g,
          y = /%([ef][0-9a-f])%([89ab][0-9a-f])%([89ab][0-9a-f])/gi,
          v = /%([cd][0-9a-f])%([89ab][0-9a-f])/gi,
          m = /%([0-7][0-9a-f])/gi,
          g = /\+/g,
          b = /^\w:$/,
          S = /[^/#?]/,
          w = "undefined" == typeof window && void 0 !== e && !0,
          x =
            !w &&
            t.navigator &&
            t.navigator.userAgent &&
            ~t.navigator.userAgent.indexOf("MSIE"),
          O = w ? t.require : null,
          k = {
            protocol: "protocol",
            host: "hostname",
            port: "port",
            path: "pathname",
            query: "search",
            hash: "hash",
          },
          j = { ftp: 21, gopher: 70, http: 80, https: 443, ws: 80, wss: 443 };
        function L() {
          return w
            ? (r =
                r ||
                "file://" +
                  (n.platform.match(a) ? "/" : "") +
                  O("fs").realpathSync("."))
            : "about:srcdoc" === document.location.href
            ? self.parent.document.location.href
            : document.location.href;
        }
        function T(t) {
          return encodeURIComponent(t).replace(d, "%27");
        }
        function E(t) {
          return (t = (t = (t = t.replace(g, " ")).replace(
            y,
            function (t, e, n, r) {
              var o = parseInt(e, 16) - 224,
                i = parseInt(n, 16) - 128;
              if (0 == o && i < 32) return t;
              var c = (o << 12) + (i << 6) + (parseInt(r, 16) - 128);
              return 65535 < c ? t : String.fromCharCode(c);
            }
          )).replace(v, function (t, e, n) {
            var r = parseInt(e, 16) - 192;
            if (r < 2) return t;
            var o = parseInt(n, 16) - 128;
            return String.fromCharCode((r << 6) + o);
          })).replace(m, function (t, e) {
            return String.fromCharCode(parseInt(e, 16));
          });
        }
        function P(t) {
          for (var e = t.split("&"), n = 0, r = e.length; n < r; n++) {
            var o = e[n].split("="),
              i = decodeURIComponent(o[0].replace(g, " "));
            if (i) {
              var c = void 0 !== o[1] ? E(o[1]) : null;
              void 0 === this[i]
                ? (this[i] = c)
                : (this[i] instanceof Array || (this[i] = [this[i]]),
                  this[i].push(c));
            }
          }
        }
        function A(t, e) {
          !(function (t, e, n) {
            var r, a, d;
            (e = e || L()),
              w
                ? (r = O("url").parse(e))
                : ((r = document.createElement("a")).href = e);
            var y,
              v,
              m =
                ((v = { path: !0, query: !0, hash: !0 }),
                (y = e) &&
                  o.test(y) &&
                  ((v.protocol = !0),
                  (v.host = !0),
                  i.test(y) && (v.port = !0),
                  c.test(y) && ((v.user = !0), (v.pass = !0))),
                v);
            for (a in ((d = e.match(c) || []), k))
              m[a] ? (t[a] = r[k[a]] || "") : (t[a] = "");
            if (
              ((t.protocol = t.protocol.replace(u, "")),
              (t.query = t.query.replace(s, "")),
              (t.hash = E(t.hash.replace(f, ""))),
              (t.user = E(d[1] || "")),
              (t.pass = E(d[2] || "")),
              (t.port = j[t.protocol] == t.port || 0 == t.port ? "" : t.port),
              !m.protocol &&
                S.test(e.charAt(0)) &&
                (t.path = e.split("?")[0].split("#")[0]),
              !m.protocol && n)
            ) {
              var g = new A(L().match(l)[0]),
                b = g.path.split("/"),
                T = t.path.split("/"),
                _ = ["protocol", "user", "pass", "host", "port"],
                M = _.length;
              for (b.pop(), a = 0; a < M; a++) t[_[a]] = g[_[a]];
              for (; ".." === T[0]; ) b.pop(), T.shift();
              t.path =
                ("/" !== e.charAt(0) ? b.join("/") : "") + "/" + T.join("/");
            }
            (t.path = t.path.replace(p, "/")),
              x && (t.path = t.path.replace(h, "/")),
              t.paths(t.paths()),
              (t.query = new P(t.query));
          })(this, t, !e);
        }
        (P.prototype.toString = function () {
          var t,
            e,
            n = "",
            r = T;
          for (t in this) {
            var o = this[t];
            if (!(o instanceof Function || void 0 === o))
              if (o instanceof Array) {
                var i = o.length;
                if (!i) {
                  n += (n ? "&" : "") + r(t) + "=";
                  continue;
                }
                for (e = 0; e < i; e++) {
                  var c = o[e];
                  void 0 !== c &&
                    ((n += n ? "&" : ""),
                    (n += r(t) + (null === c ? "" : "=" + r(c))));
                }
              } else
                (n += n ? "&" : ""),
                  (n += r(t) + (null === o ? "" : "=" + r(o)));
          }
          return n;
        }),
          (A.prototype.clearQuery = function () {
            for (var t in this.query)
              this.query[t] instanceof Function || delete this.query[t];
            return this;
          }),
          (A.prototype.queryLength = function () {
            var t = 0;
            for (var e in this.query) this.query[e] instanceof Function || t++;
            return t;
          }),
          (A.prototype.isEmptyQuery = function () {
            return 0 === this.queryLength();
          }),
          (A.prototype.paths = function (t) {
            var e,
              n = "",
              r = 0;
            if (t && t.length && t + "" !== t) {
              for (this.isAbsolute() && (n = "/"), e = t.length; r < e; r++)
                t[r] = !r && b.test(t[r]) ? t[r] : T(t[r]);
              this.path = n + t.join("/");
            }
            for (
              r = 0,
                e = (t = ("/" === this.path.charAt(0)
                  ? this.path.slice(1)
                  : this.path
                ).split("/")).length;
              r < e;
              r++
            )
              t[r] = E(t[r]);
            return t;
          }),
          (A.prototype.encode = T),
          (A.prototype.decode = E),
          (A.prototype.isAbsolute = function () {
            return this.protocol || "/" === this.path.charAt(0);
          }),
          (A.prototype.toString = function () {
            return (
              (this.protocol && this.protocol + "://") +
              (this.user &&
                T(this.user) + (this.pass && ":" + T(this.pass)) + "@") +
              (this.host && this.host) +
              (this.port && ":" + this.port) +
              (this.path && this.path) +
              (this.query.toString() && "?" + this.query) +
              (this.hash && "#" + T(this.hash))
            );
          }),
          (t[t.exports ? "exports" : "Url"] = A);
      })(t.exports ? t : window);
    }.call(this, n(73)(t), n(3), n(56)));
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (t, e, n) {
    "use strict";
    var r = n(49),
      o = n(30),
      i = n(34),
      c = n(203),
      a = n(204),
      u = n(44),
      s = n(205),
      f = n(206);
    o(
      o.S +
        o.F *
          !n(207)(function (t) {
            Array.from(t);
          }),
      "Array",
      {
        from: function (t) {
          var e,
            n,
            o,
            l,
            p = i(t),
            h = "function" == typeof this ? this : Array,
            d = arguments.length,
            y = d > 1 ? arguments[1] : void 0,
            v = void 0 !== y,
            m = 0,
            g = f(p);
          if (
            (v && (y = r(y, d > 2 ? arguments[2] : void 0, 2)),
            null == g || (h == Array && a(g)))
          )
            for (n = new h((e = u(p.length))); e > m; m++)
              s(n, m, v ? y(p[m], m) : p[m]);
          else
            for (l = g.call(p), n = new h(); !(o = l.next()).done; m++)
              s(n, m, v ? c(l, y, [o.value, m], !0) : o.value);
          return (n.length = m), n;
        },
      }
    );
  },
  function (t, e, n) {
    var r = n(9);
    t.exports = function (t, e, n, o) {
      try {
        return o ? e(r(n)[0], n[1]) : e(n);
      } catch (e) {
        var i = t.return;
        throw (void 0 !== i && r(i.call(t)), e);
      }
    };
  },
  function (t, e, n) {
    var r = n(41),
      o = n(1)("iterator"),
      i = Array.prototype;
    t.exports = function (t) {
      return void 0 !== t && (r.Array === t || i[o] === t);
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(13),
      o = n(24);
    t.exports = function (t, e, n) {
      e in t ? r.f(t, e, o(0, n)) : (t[e] = n);
    };
  },
  function (t, e, n) {
    var r = n(45),
      o = n(1)("iterator"),
      i = n(41);
    t.exports = n(15).getIteratorMethod = function (t) {
      if (null != t) return t[o] || t["@@iterator"] || i[r(t)];
    };
  },
  function (t, e, n) {
    var r = n(1)("iterator"),
      o = !1;
    try {
      var i = [7][r]();
      (i.return = function () {
        o = !0;
      }),
        Array.from(i, function () {
          throw 2;
        });
    } catch (t) {}
    t.exports = function (t, e) {
      if (!e && !o) return !1;
      var n = !1;
      try {
        var i = [7],
          c = i[r]();
        (c.next = function () {
          return { done: (n = !0) };
        }),
          (i[r] = function () {
            return c;
          }),
          t(i);
      } catch (t) {}
      return n;
    };
  },
  function (t, e, n) {
    "use strict";
    n(209);
    var r = n(9),
      o = n(46),
      i = n(5),
      c = "toString",
      a = /./.toString,
      u = function (t) {
        n(17)(RegExp.prototype, c, t, !0);
      };
    n(16)(function () {
      return "/a/b" != a.call({ source: "a", flags: "b" });
    })
      ? u(function () {
          var t = r(this);
          return "/".concat(
            t.source,
            "/",
            "flags" in t
              ? t.flags
              : !i && t instanceof RegExp
              ? o.call(t)
              : void 0
          );
        })
      : a.name != c &&
        u(function () {
          return a.call(this);
        });
  },
  function (t, e, n) {
    n(5) &&
      "g" != /./g.flags &&
      n(13).f(RegExp.prototype, "flags", { configurable: !0, get: n(46) });
  },
  function (t, e, n) {
    n(117)("asyncIterator");
  },
  function (t, e, n) {
    "use strict";
    var r = n(2),
      o = n(18),
      i = n(5),
      c = n(30),
      a = n(17),
      u = n(212).KEY,
      s = n(16),
      f = n(23),
      l = n(74),
      p = n(20),
      h = n(1),
      d = n(118),
      y = n(117),
      v = n(213),
      m = n(217),
      g = n(9),
      b = n(14),
      S = n(34),
      w = n(26),
      x = n(36),
      O = n(24),
      k = n(121),
      j = n(220),
      L = n(221),
      T = n(120),
      E = n(13),
      P = n(42),
      A = L.f,
      _ = E.f,
      M = j.f,
      I = r.Symbol,
      C = r.JSON,
      F = C && C.stringify,
      q = h("_hidden"),
      D = h("toPrimitive"),
      N = {}.propertyIsEnumerable,
      R = f("symbol-registry"),
      z = f("symbols"),
      G = f("op-symbols"),
      U = Object.prototype,
      V = "function" == typeof I && !!T.f,
      B = r.QObject,
      H = !B || !B.prototype || !B.prototype.findChild,
      W =
        i &&
        s(function () {
          return (
            7 !=
            k(
              _({}, "a", {
                get: function () {
                  return _(this, "a", { value: 7 }).a;
                },
              })
            ).a
          );
        })
          ? function (t, e, n) {
              var r = A(U, e);
              r && delete U[e], _(t, e, n), r && t !== U && _(U, e, r);
            }
          : _,
      J = function (t) {
        var e = (z[t] = k(I.prototype));
        return (e._k = t), e;
      },
      K =
        V && "symbol" == typeof I.iterator
          ? function (t) {
              return "symbol" == typeof t;
            }
          : function (t) {
              return t instanceof I;
            },
      Q = function (t, e, n) {
        return (
          t === U && Q(G, e, n),
          g(t),
          (e = x(e, !0)),
          g(n),
          o(z, e)
            ? (n.enumerable
                ? (o(t, q) && t[q][e] && (t[q][e] = !1),
                  (n = k(n, { enumerable: O(0, !1) })))
                : (o(t, q) || _(t, q, O(1, {})), (t[q][e] = !0)),
              W(t, e, n))
            : _(t, e, n)
        );
      },
      $ = function (t, e) {
        g(t);
        for (var n, r = v((e = w(e))), o = 0, i = r.length; i > o; )
          Q(t, (n = r[o++]), e[n]);
        return t;
      },
      Y = function (t) {
        var e = N.call(this, (t = x(t, !0)));
        return (
          !(this === U && o(z, t) && !o(G, t)) &&
          (!(e || !o(this, t) || !o(z, t) || (o(this, q) && this[q][t])) || e)
        );
      },
      X = function (t, e) {
        if (((t = w(t)), (e = x(e, !0)), t !== U || !o(z, e) || o(G, e))) {
          var n = A(t, e);
          return (
            !n || !o(z, e) || (o(t, q) && t[q][e]) || (n.enumerable = !0), n
          );
        }
      },
      Z = function (t) {
        for (var e, n = M(w(t)), r = [], i = 0; n.length > i; )
          o(z, (e = n[i++])) || e == q || e == u || r.push(e);
        return r;
      },
      tt = function (t) {
        for (
          var e, n = t === U, r = M(n ? G : w(t)), i = [], c = 0;
          r.length > c;

        )
          !o(z, (e = r[c++])) || (n && !o(U, e)) || i.push(z[e]);
        return i;
      };
    V ||
      (a(
        (I = function () {
          if (this instanceof I)
            throw TypeError("Symbol is not a constructor!");
          var t = p(arguments.length > 0 ? arguments[0] : void 0),
            e = function (n) {
              this === U && e.call(G, n),
                o(this, q) && o(this[q], t) && (this[q][t] = !1),
                W(this, t, O(1, n));
            };
          return i && H && W(U, t, { configurable: !0, set: e }), J(t);
        }).prototype,
        "toString",
        function () {
          return this._k;
        }
      ),
      (L.f = X),
      (E.f = Q),
      (n(122).f = j.f = Z),
      (n(54).f = Y),
      (T.f = tt),
      i && !n(29) && a(U, "propertyIsEnumerable", Y, !0),
      (d.f = function (t) {
        return J(h(t));
      })),
      c(c.G + c.W + c.F * !V, { Symbol: I });
    for (
      var et = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(
          ","
        ),
        nt = 0;
      et.length > nt;

    )
      h(et[nt++]);
    for (var rt = P(h.store), ot = 0; rt.length > ot; ) y(rt[ot++]);
    c(c.S + c.F * !V, "Symbol", {
      for: function (t) {
        return o(R, (t += "")) ? R[t] : (R[t] = I(t));
      },
      keyFor: function (t) {
        if (!K(t)) throw TypeError(t + " is not a symbol!");
        for (var e in R) if (R[e] === t) return e;
      },
      useSetter: function () {
        H = !0;
      },
      useSimple: function () {
        H = !1;
      },
    }),
      c(c.S + c.F * !V, "Object", {
        create: function (t, e) {
          return void 0 === e ? k(t) : $(k(t), e);
        },
        defineProperty: Q,
        defineProperties: $,
        getOwnPropertyDescriptor: X,
        getOwnPropertyNames: Z,
        getOwnPropertySymbols: tt,
      });
    var it = s(function () {
      T.f(1);
    });
    c(c.S + c.F * it, "Object", {
      getOwnPropertySymbols: function (t) {
        return T.f(S(t));
      },
    }),
      C &&
        c(
          c.S +
            c.F *
              (!V ||
                s(function () {
                  var t = I();
                  return (
                    "[null]" != F([t]) ||
                    "{}" != F({ a: t }) ||
                    "{}" != F(Object(t))
                  );
                })),
          "JSON",
          {
            stringify: function (t) {
              for (var e, n, r = [t], o = 1; arguments.length > o; )
                r.push(arguments[o++]);
              if (((n = e = r[1]), (b(e) || void 0 !== t) && !K(t)))
                return (
                  m(e) ||
                    (e = function (t, e) {
                      if (
                        ("function" == typeof n && (e = n.call(this, t, e)),
                        !K(e))
                      )
                        return e;
                    }),
                  (r[1] = e),
                  F.apply(C, r)
                );
            },
          }
        ),
      I.prototype[D] || n(10)(I.prototype, D, I.prototype.valueOf),
      l(I, "Symbol"),
      l(Math, "Math", !0),
      l(r.JSON, "JSON", !0);
  },
  function (t, e, n) {
    var r = n(20)("meta"),
      o = n(14),
      i = n(18),
      c = n(13).f,
      a = 0,
      u =
        Object.isExtensible ||
        function () {
          return !0;
        },
      s = !n(16)(function () {
        return u(Object.preventExtensions({}));
      }),
      f = function (t) {
        c(t, r, { value: { i: "O" + ++a, w: {} } });
      },
      l = (t.exports = {
        KEY: r,
        NEED: !1,
        fastKey: function (t, e) {
          if (!o(t))
            return "symbol" == typeof t
              ? t
              : ("string" == typeof t ? "S" : "P") + t;
          if (!i(t, r)) {
            if (!u(t)) return "F";
            if (!e) return "E";
            f(t);
          }
          return t[r].i;
        },
        getWeak: function (t, e) {
          if (!i(t, r)) {
            if (!u(t)) return !0;
            if (!e) return !1;
            f(t);
          }
          return t[r].w;
        },
        onFreeze: function (t) {
          return s && l.NEED && u(t) && !i(t, r) && f(t), t;
        },
      });
  },
  function (t, e, n) {
    var r = n(42),
      o = n(120),
      i = n(54);
    t.exports = function (t) {
      var e = r(t),
        n = o.f;
      if (n)
        for (var c, a = n(t), u = i.f, s = 0; a.length > s; )
          u.call(t, (c = a[s++])) && e.push(c);
      return e;
    };
  },
  function (t, e, n) {
    var r = n(35);
    t.exports = Object("z").propertyIsEnumerable(0)
      ? Object
      : function (t) {
          return "String" == r(t) ? t.split("") : Object(t);
        };
  },
  function (t, e, n) {
    var r = n(26),
      o = n(44),
      i = n(216);
    t.exports = function (t) {
      return function (e, n, c) {
        var a,
          u = r(e),
          s = o(u.length),
          f = i(c, s);
        if (t && n != n) {
          for (; s > f; ) if ((a = u[f++]) != a) return !0;
        } else
          for (; s > f; f++)
            if ((t || f in u) && u[f] === n) return t || f || 0;
        return !t && -1;
      };
    };
  },
  function (t, e, n) {
    var r = n(28),
      o = Math.max,
      i = Math.min;
    t.exports = function (t, e) {
      return (t = r(t)) < 0 ? o(t + e, 0) : i(t, e);
    };
  },
  function (t, e, n) {
    var r = n(35);
    t.exports =
      Array.isArray ||
      function (t) {
        return "Array" == r(t);
      };
  },
  function (t, e, n) {
    var r = n(13),
      o = n(9),
      i = n(42);
    t.exports = n(5)
      ? Object.defineProperties
      : function (t, e) {
          o(t);
          for (var n, c = i(e), a = c.length, u = 0; a > u; )
            r.f(t, (n = c[u++]), e[n]);
          return t;
        };
  },
  function (t, e, n) {
    var r = n(2).document;
    t.exports = r && r.documentElement;
  },
  function (t, e, n) {
    var r = n(26),
      o = n(122).f,
      i = {}.toString,
      c =
        "object" == typeof window && window && Object.getOwnPropertyNames
          ? Object.getOwnPropertyNames(window)
          : [];
    t.exports.f = function (t) {
      return c && "[object Window]" == i.call(t)
        ? (function (t) {
            try {
              return o(t);
            } catch (t) {
              return c.slice();
            }
          })(t)
        : o(r(t));
    };
  },
  function (t, e, n) {
    var r = n(54),
      o = n(24),
      i = n(26),
      c = n(36),
      a = n(18),
      u = n(47),
      s = Object.getOwnPropertyDescriptor;
    e.f = n(5)
      ? s
      : function (t, e) {
          if (((t = i(t)), (e = c(e, !0)), u))
            try {
              return s(t, e);
            } catch (t) {}
          if (a(t, e)) return o(!r.f.call(t, e), t[e]);
        };
  },
  function (t, e, n) {
    var r = n(30),
      o = n(223)(!0);
    r(r.S, "Object", {
      entries: function (t) {
        return o(t);
      },
    });
  },
  function (t, e, n) {
    var r = n(5),
      o = n(42),
      i = n(26),
      c = n(54).f;
    t.exports = function (t) {
      return function (e) {
        for (var n, a = i(e), u = o(a), s = u.length, f = 0, l = []; s > f; )
          (n = u[f++]), (r && !c.call(a, n)) || l.push(t ? [n, a[n]] : a[n]);
        return l;
      };
    };
  },
  function (t, e, n) {
    for (
      var r = n(225),
        o = n(42),
        i = n(17),
        c = n(2),
        a = n(10),
        u = n(41),
        s = n(1),
        f = s("iterator"),
        l = s("toStringTag"),
        p = u.Array,
        h = {
          CSSRuleList: !0,
          CSSStyleDeclaration: !1,
          CSSValueList: !1,
          ClientRectList: !1,
          DOMRectList: !1,
          DOMStringList: !1,
          DOMTokenList: !0,
          DataTransferItemList: !1,
          FileList: !1,
          HTMLAllCollection: !1,
          HTMLCollection: !1,
          HTMLFormElement: !1,
          HTMLSelectElement: !1,
          MediaList: !0,
          MimeTypeArray: !1,
          NamedNodeMap: !1,
          NodeList: !0,
          PaintRequestList: !1,
          Plugin: !1,
          PluginArray: !1,
          SVGLengthList: !1,
          SVGNumberList: !1,
          SVGPathSegList: !1,
          SVGPointList: !1,
          SVGStringList: !1,
          SVGTransformList: !1,
          SourceBufferList: !1,
          StyleSheetList: !0,
          TextTrackCueList: !1,
          TextTrackList: !1,
          TouchList: !1,
        },
        d = o(h),
        y = 0;
      y < d.length;
      y++
    ) {
      var v,
        m = d[y],
        g = h[m],
        b = c[m],
        S = b && b.prototype;
      if (S && (S[f] || a(S, f, p), S[l] || a(S, l, m), (u[m] = p), g))
        for (v in r) S[v] || i(S, v, r[v], !0);
    }
  },
  function (t, e, n) {
    "use strict";
    var r = n(226),
      o = n(227),
      i = n(41),
      c = n(26);
    (t.exports = n(228)(
      Array,
      "Array",
      function (t, e) {
        (this._t = c(t)), (this._i = 0), (this._k = e);
      },
      function () {
        var t = this._t,
          e = this._k,
          n = this._i++;
        return !t || n >= t.length
          ? ((this._t = void 0), o(1))
          : o(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]]);
      },
      "values"
    )),
      (i.Arguments = i.Array),
      r("keys"),
      r("values"),
      r("entries");
  },
  function (t, e, n) {
    var r = n(1)("unscopables"),
      o = Array.prototype;
    null == o[r] && n(10)(o, r, {}),
      (t.exports = function (t) {
        o[r][t] = !0;
      });
  },
  function (t, e) {
    t.exports = function (t, e) {
      return { value: e, done: !!t };
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(29),
      o = n(30),
      i = n(17),
      c = n(10),
      a = n(41),
      u = n(229),
      s = n(74),
      f = n(230),
      l = n(1)("iterator"),
      p = !([].keys && "next" in [].keys()),
      h = "keys",
      d = "values",
      y = function () {
        return this;
      };
    t.exports = function (t, e, n, v, m, g, b) {
      u(n, e, v);
      var S,
        w,
        x,
        O = function (t) {
          if (!p && t in T) return T[t];
          switch (t) {
            case h:
            case d:
              return function () {
                return new n(this, t);
              };
          }
          return function () {
            return new n(this, t);
          };
        },
        k = e + " Iterator",
        j = m == d,
        L = !1,
        T = t.prototype,
        E = T[l] || T["@@iterator"] || (m && T[m]),
        P = E || O(m),
        A = m ? (j ? O("entries") : P) : void 0,
        _ = ("Array" == e && T.entries) || E;
      if (
        (_ &&
          (x = f(_.call(new t()))) !== Object.prototype &&
          x.next &&
          (s(x, k, !0), r || "function" == typeof x[l] || c(x, l, y)),
        j &&
          E &&
          E.name !== d &&
          ((L = !0),
          (P = function () {
            return E.call(this);
          })),
        (r && !b) || (!p && !L && T[l]) || c(T, l, P),
        (a[e] = P),
        (a[k] = y),
        m)
      )
        if (((S = { values: j ? P : O(d), keys: g ? P : O(h), entries: A }), b))
          for (w in S) w in T || i(T, w, S[w]);
        else o(o.P + o.F * (p || L), e, S);
      return S;
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(121),
      o = n(24),
      i = n(74),
      c = {};
    n(10)(c, n(1)("iterator"), function () {
      return this;
    }),
      (t.exports = function (t, e, n) {
        (t.prototype = r(c, { next: o(1, n) })), i(t, e + " Iterator");
      });
  },
  function (t, e, n) {
    var r = n(18),
      o = n(34),
      i = n(75)("IE_PROTO"),
      c = Object.prototype;
    t.exports =
      Object.getPrototypeOf ||
      function (t) {
        return (
          (t = o(t)),
          r(t, i)
            ? t[i]
            : "function" == typeof t.constructor && t instanceof t.constructor
            ? t.constructor.prototype
            : t instanceof Object
            ? c
            : null
        );
      };
  },
  function (t, e, n) {
    "use strict";
    var r = n(45),
      o = {};
    (o[n(1)("toStringTag")] = "z"),
      o + "" != "[object z]" &&
        n(17)(
          Object.prototype,
          "toString",
          function () {
            return "[object " + r(this) + "]";
          },
          !0
        );
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (t, e, n) {
    "use strict";
    n.r(e);
    n(202), n(208), n(210), n(211), n(222), n(224), n(231);
    var r = n(130);
    function o(t, e) {
      return (
        (function (t) {
          if (Array.isArray(t)) return t;
        })(t) ||
        (function (t, e) {
          if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t)))
            return;
          var n = [],
            r = !0,
            o = !1,
            i = void 0;
          try {
            for (
              var c, a = t[Symbol.iterator]();
              !(r = (c = a.next()).done) &&
              (n.push(c.value), !e || n.length !== e);
              r = !0
            );
          } catch (t) {
            (o = !0), (i = t);
          } finally {
            try {
              r || null == a.return || a.return();
            } finally {
              if (o) throw i;
            }
          }
          return n;
        })(t, e) ||
        (function (t, e) {
          if (!t) return;
          if ("string" == typeof t) return i(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          "Object" === n && t.constructor && (n = t.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(t);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return i(t, e);
        })(t, e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function i(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
      return r;
    }
    const c = new (n.n(r).a)(),
      a = "adminkit_config_",
      u = ".js-settings",
      s = { theme: "default", sidebar: "left", layout: "fluid" },
      f = {
        theme: ["default", "dark", "light"],
        layout: ["fluid", "boxed"],
        sidebar: ["left", "right"],
      },
      l = () => {
        document.body.appendChild(
          ((t) => {
            const e = document.createElement("template");
            return (e.innerHTML = t), e.content.firstChild;
          })(
            '<div class="settings js-settings">\n    <div class="settings-icons">\n      <div class="settings-icon js-settings-toggle" data-toggle="tooltip" data-placement="left" title="Settings & Demos">\n        <i class="align-middle" data-feather="settings"></i>\n      </div>\n      <a class="settings-icon" data-toggle="tooltip" data-placement="left" title="Documentation" href="https://adminkit.io/docs" target="_blank">\n        <i class="align-middle" data-feather="book-open"></i>\n      </a>\n    </div>\n\n    <div class="settings-panel">\n      <div class="settings-content">\n        <div class="settings-title">\n          <button type="button" class="btn-close btn-close-white float-right js-settings-toggle" aria-label="Close"></button>\n\n          <h4 class="text-white mb-0 d-inline-block">Settings</h4>\n          <span class="badge bg-light ml-2">Pro</span>\n        </div>\n\n        <div class="settings-options">\n\n          <div class="alert alert-warning" role="alert">\n            <div class="alert-message">\n              <strong>Customize</strong> sidebar position, color scheme and layout type.\n            </div>\n          </div>\n\n          <div class="mb-3">\n            <small class="d-block text-uppercase font-weight-bold text-muted mb-2">Color scheme</small>\n            <div class="form-check form-switch mb-1">\n              <input type="radio" class="form-check-input" name="theme" value="default" id="themeDefault" checked>\n              <label class="form-check-label" for="themeDefault">Default</label>\n            </div>\n            <div class="form-check form-switch mb-1">\n              <input type="radio" class="form-check-input" name="theme" value="dark" id="themeDark">\n              <label class="form-check-label" for="themeDark">Dark</label>\n            </div>\n            <div class="form-check form-switch mb-1">\n              <input type="radio" class="form-check-input" name="theme" value="light" id="themeLight">\n              <label class="form-check-label" for="themeLight">Light</label>\n            </div>\n          </div>\n          \n          <hr />\n\n          <div class="mb-3">\n            <small class="d-block text-uppercase font-weight-bold text-muted mb-2">Sidebar</small>\n            <div class="form-check form-switch mb-1">\n              <input type="radio" class="form-check-input" name="sidebar" value="left" id="sidebarLeft" checked>\n              <label class="form-check-label" for="sidebarLeft">Left</label>\n            </div>\n            <div class="form-check form-switch mb-1">\n              <input type="radio" class="form-check-input" name="sidebar" value="right" id="sidebarRight">\n              <label class="form-check-label" for="sidebarRight">Right</label>\n            </div>\n          </div>\n\n          <hr />\n          \n          <div class="mb-3">\n            <small class="d-block text-uppercase font-weight-bold text-muted mb-2">Layout</small>\n            <div class="form-check form-switch mb-1">\n              <input type="radio" class="form-check-input" name="layout" value="fluid" id="layoutFluid" checked>\n              <label class="form-check-label" for="layoutFluid">Fluid</label>\n            </div>\n            <div class="form-check form-switch mb-1">\n              <input type="radio" class="form-check-input" name="layout" value="boxed" id="layoutBoxed">\n              <label class="form-check-label" for="layoutBoxed">Boxed</label>\n            </div>\n          </div>\n\n          <div class="mb-3">\n            <a href="#" class="btn btn-outline-primary btn-lg btn-block mb-2 js-settings-reset">Reset to Default</a>\n            <a href="https://adminkit.io/pricing" target="_blank" class="btn btn-primary btn-lg btn-block">Purchase Now</a>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>'
          )
        ),
          p(),
          h(),
          d(),
          y(),
          v();
      },
      p = () => {
        const t = document.querySelector(u);
        document.querySelectorAll(".js-settings-toggle").forEach((e) => {
          e.onclick = (e) => {
            e.preventDefault(), t.classList.toggle("open");
          };
        }),
          (document.body.onclick = (e) => {
            t.contains(e.target) || t.classList.remove("open");
          });
      },
      h = () => {
        document
          .querySelector(u)
          .querySelectorAll("input[type=radio]")
          .forEach((t) => {
            t.addEventListener("change", (t) => {
              g(t.target.name, t.target.value),
                x(t.target.name, t.target.value);
            });
          });
      },
      d = () => {
        document
          .querySelector(".js-settings-reset")
          .addEventListener("click", () => {
            S(), y(), m();
          });
      },
      y = () => {
        for (var t = 0, e = Object.entries(b()); t < e.length; t++) {
          let n = o(e[t], 2),
            r = n[0],
            i = n[1];
          const c = i || s[r];
          document.querySelector(
            'input[name="'.concat(r, '"][value="').concat(c, '"]')
          ).checked = !0;
        }
      },
      v = () => {
        setTimeout(() => {
          if (!w("visited")) {
            document.querySelector(u).classList.toggle("open"),
              x("visited", !0);
          }
        }, 1e3);
      },
      m = () => {
        for (var t = 0, e = Object.entries(b()); t < e.length; t++) {
          let n = o(e[t], 2),
            r = n[0],
            i = n[1];
          g(r, i || s[r]);
        }
      },
      g = (t, e) => {
        document.body.dataset[t] = e;
      },
      b = () => ({
        theme: w("theme"),
        sidebar: w("sidebar"),
        layout: w("layout"),
      }),
      S = () => {
        O("theme"), O("sidebar"), O("layout");
      },
      w = (t) => localStorage.getItem("".concat(a).concat(t)),
      x = (t, e) => {
        localStorage.setItem("".concat(a).concat(t), e);
      },
      O = (t) => {
        localStorage.removeItem("".concat(a).concat(t));
      };
    document.addEventListener("DOMContentLoaded", () => l());
    const k = new MutationObserver(function () {
      document.body &&
        (Object.keys(c.query).length > 0
          ? (S(),
            Object.entries(c.query).forEach(([t, e]) => {
              f[t] && f[t].includes(e) && (g(t, e), x(t, e));
            }))
          : m(),
        k.disconnect());
    });
    k.observe(document.documentElement, { childList: !0 });
  },
]);
//# sourceMappingURL=settings.js.map
