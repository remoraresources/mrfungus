(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    8679: function (e, t, n) {
      "use strict";
      var r = n(9864),
        o = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        i = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        a = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        s = {};
      function u(e) {
        return r.isMemo(e) ? a : s[e.$$typeof] || o;
      }
      (s[r.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
        (s[r.Memo] = a);
      var c = Object.defineProperty,
        l = Object.getOwnPropertyNames,
        f = Object.getOwnPropertySymbols,
        p = Object.getOwnPropertyDescriptor,
        d = Object.getPrototypeOf,
        h = Object.prototype;
      e.exports = function e(t, n, r) {
        if ("string" !== typeof n) {
          if (h) {
            var o = d(n);
            o && o !== h && e(t, o, r);
          }
          var a = l(n);
          f && (a = a.concat(f(n)));
          for (var s = u(t), g = u(n), v = 0; v < a.length; ++v) {
            var y = a[v];
            if (!i[y] && (!r || !r[y]) && (!g || !g[y]) && (!s || !s[y])) {
              var m = p(n, y);
              try {
                c(t, y, m);
              } catch (b) {}
            }
          }
        }
        return t;
      };
    },
    9548: function (e, t, n) {
      "use strict";
      var r = n(4836);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.BroadcastChannel = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "nextauth.message";
          return {
            receive: function (t) {
              var n = function (n) {
                var r;
                if (n.key === e) {
                  var o = JSON.parse(
                    null !== (r = n.newValue) && void 0 !== r ? r : "{}"
                  );
                  "session" ===
                    (null === o || void 0 === o ? void 0 : o.event) &&
                    null !== o &&
                    void 0 !== o &&
                    o.data &&
                    t(o);
                }
              };
              return (
                window.addEventListener("storage", n),
                function () {
                  return window.removeEventListener("storage", n);
                }
              );
            },
            post: function (t) {
              "undefined" !== typeof window &&
                localStorage.setItem(
                  e,
                  JSON.stringify(u(u({}, t), {}, { timestamp: f() }))
                );
            },
          };
        }),
        (t.apiBaseUrl = l),
        (t.fetchData = function (e, t, n) {
          return c.apply(this, arguments);
        }),
        (t.now = f);
      var o = r(n(4687)),
        i = r(n(8416)),
        a = r(n(7156));
      function s(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                (0, i.default)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function c() {
        return (
          (c = (0, a.default)(
            o.default.mark(function e(t, n, r) {
              var i,
                a,
                s,
                c,
                f,
                p,
                d,
                h = arguments;
              return o.default.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (i = h.length > 3 && void 0 !== h[3] ? h[3] : {}),
                          (a = i.ctx),
                          (s = i.req),
                          (c =
                            void 0 === s
                              ? null === a || void 0 === a
                                ? void 0
                                : a.req
                              : s),
                          (e.prev = 1),
                          (f =
                            null !== c && void 0 !== c && c.headers.cookie
                              ? { headers: { cookie: c.headers.cookie } }
                              : {}),
                          (e.next = 5),
                          fetch("".concat(l(n), "/").concat(t), f)
                        );
                      case 5:
                        return (p = e.sent), (e.next = 8), p.json();
                      case 8:
                        if (((d = e.sent), p.ok)) {
                          e.next = 11;
                          break;
                        }
                        throw d;
                      case 11:
                        return e.abrupt(
                          "return",
                          Object.keys(d).length > 0 ? d : null
                        );
                      case 14:
                        return (
                          (e.prev = 14),
                          (e.t0 = e.catch(1)),
                          r.error(
                            "CLIENT_FETCH_ERROR",
                            u(
                              { error: e.t0, path: t },
                              c ? { header: c.headers } : {}
                            )
                          ),
                          e.abrupt("return", null)
                        );
                      case 18:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 14]]
              );
            })
          )),
          c.apply(this, arguments)
        );
      }
      function l(e) {
        return "undefined" === typeof window
          ? "".concat(e.baseUrlServer).concat(e.basePathServer)
          : e.basePath;
      }
      function f() {
        return Math.floor(Date.now() / 1e3);
      }
    },
    6925: function (e, t, n) {
      "use strict";
      var r = n(4836);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.UnsupportedStrategy =
          t.UnknownError =
          t.OAuthCallbackError =
          t.MissingSecret =
          t.MissingAuthorize =
          t.MissingAdapter =
          t.MissingAPIRoute =
          t.AccountNotLinkedError =
            void 0),
        (t.adapterErrorHandler = function (e, t) {
          if (!e) return;
          return Object.keys(e).reduce(function (n, r) {
            return (
              (n[r] = (0, i.default)(
                o.default.mark(function n() {
                  var i,
                    a,
                    s,
                    u,
                    c,
                    l = arguments;
                  return o.default.wrap(
                    function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            for (
                              n.prev = 0, i = l.length, a = new Array(i), s = 0;
                              s < i;
                              s++
                            )
                              a[s] = l[s];
                            return (
                              t.debug("adapter_".concat(r), { args: a }),
                              (u = e[r]),
                              (n.next = 6),
                              u.apply(void 0, a)
                            );
                          case 6:
                            return n.abrupt("return", n.sent);
                          case 9:
                            throw (
                              ((n.prev = 9),
                              (n.t0 = n.catch(0)),
                              t.error("adapter_error_".concat(r), n.t0),
                              ((c = new h(n.t0)).name = "".concat(
                                S(r),
                                "Error"
                              )),
                              c)
                            );
                          case 15:
                          case "end":
                            return n.stop();
                        }
                    },
                    n,
                    null,
                    [[0, 9]]
                  );
                })
              )),
              n
            );
          }, {});
        }),
        (t.capitalize = S),
        (t.eventsErrorHandler = function (e, t) {
          return Object.keys(e).reduce(function (n, r) {
            return (
              (n[r] = (0, i.default)(
                o.default.mark(function n() {
                  var i,
                    a = arguments;
                  return o.default.wrap(
                    function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (n.prev = 0),
                              (i = e[r]),
                              (n.next = 4),
                              i.apply(void 0, a)
                            );
                          case 4:
                            return n.abrupt("return", n.sent);
                          case 7:
                            (n.prev = 7),
                              (n.t0 = n.catch(0)),
                              t.error("".concat(x(r), "_EVENT_ERROR"), n.t0);
                          case 10:
                          case "end":
                            return n.stop();
                        }
                    },
                    n,
                    null,
                    [[0, 7]]
                  );
                })
              )),
              n
            );
          }, {});
        }),
        (t.upperSnake = x);
      var o = r(n(4687)),
        i = r(n(7156)),
        a = r(n(6115)),
        s = r(n(8416)),
        u = r(n(6690)),
        c = r(n(9728)),
        l = r(n(1655)),
        f = r(n(4993)),
        p = r(n(3808));
      function d(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = (0, p.default)(e);
          if (t) {
            var o = (0, p.default)(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return (0, f.default)(this, n);
        };
      }
      var h = (function (e) {
        (0, l.default)(n, e);
        var t = d(n);
        function n(e) {
          var r, o;
          return (
            (0, u.default)(this, n),
            ((o = t.call(
              this,
              null !== (r = null === e || void 0 === e ? void 0 : e.message) &&
                void 0 !== r
                ? r
                : e
            )).name = "UnknownError"),
            (o.code = e.code),
            e instanceof Error && (o.stack = e.stack),
            o
          );
        }
        return (
          (0, c.default)(n, [
            {
              key: "toJSON",
              value: function () {
                return {
                  name: this.name,
                  message: this.message,
                  stack: this.stack,
                };
              },
            },
          ]),
          n
        );
      })((0, r(n(3496)).default)(Error));
      t.UnknownError = h;
      var g = (function (e) {
        (0, l.default)(n, e);
        var t = d(n);
        function n() {
          var e;
          (0, u.default)(this, n);
          for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
          return (
            (e = t.call.apply(t, [this].concat(o))),
            (0, s.default)((0, a.default)(e), "name", "OAuthCallbackError"),
            e
          );
        }
        return (0, c.default)(n);
      })(h);
      t.OAuthCallbackError = g;
      var v = (function (e) {
        (0, l.default)(n, e);
        var t = d(n);
        function n() {
          var e;
          (0, u.default)(this, n);
          for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
          return (
            (e = t.call.apply(t, [this].concat(o))),
            (0, s.default)((0, a.default)(e), "name", "AccountNotLinkedError"),
            e
          );
        }
        return (0, c.default)(n);
      })(h);
      t.AccountNotLinkedError = v;
      var y = (function (e) {
        (0, l.default)(n, e);
        var t = d(n);
        function n() {
          var e;
          (0, u.default)(this, n);
          for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
          return (
            (e = t.call.apply(t, [this].concat(o))),
            (0, s.default)((0, a.default)(e), "name", "MissingAPIRouteError"),
            (0, s.default)(
              (0, a.default)(e),
              "code",
              "MISSING_NEXTAUTH_API_ROUTE_ERROR"
            ),
            e
          );
        }
        return (0, c.default)(n);
      })(h);
      t.MissingAPIRoute = y;
      var m = (function (e) {
        (0, l.default)(n, e);
        var t = d(n);
        function n() {
          var e;
          (0, u.default)(this, n);
          for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
          return (
            (e = t.call.apply(t, [this].concat(o))),
            (0, s.default)((0, a.default)(e), "name", "MissingSecretError"),
            (0, s.default)((0, a.default)(e), "code", "NO_SECRET"),
            e
          );
        }
        return (0, c.default)(n);
      })(h);
      t.MissingSecret = m;
      var b = (function (e) {
        (0, l.default)(n, e);
        var t = d(n);
        function n() {
          var e;
          (0, u.default)(this, n);
          for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
          return (
            (e = t.call.apply(t, [this].concat(o))),
            (0, s.default)((0, a.default)(e), "name", "MissingAuthorizeError"),
            (0, s.default)(
              (0, a.default)(e),
              "code",
              "CALLBACK_CREDENTIALS_HANDLER_ERROR"
            ),
            e
          );
        }
        return (0, c.default)(n);
      })(h);
      t.MissingAuthorize = b;
      var O = (function (e) {
        (0, l.default)(n, e);
        var t = d(n);
        function n() {
          var e;
          (0, u.default)(this, n);
          for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
          return (
            (e = t.call.apply(t, [this].concat(o))),
            (0, s.default)((0, a.default)(e), "name", "MissingAdapterError"),
            (0, s.default)(
              (0, a.default)(e),
              "code",
              "EMAIL_REQUIRES_ADAPTER_ERROR"
            ),
            e
          );
        }
        return (0, c.default)(n);
      })(h);
      t.MissingAdapter = O;
      var w = (function (e) {
        (0, l.default)(n, e);
        var t = d(n);
        function n() {
          var e;
          (0, u.default)(this, n);
          for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
          return (
            (e = t.call.apply(t, [this].concat(o))),
            (0, s.default)(
              (0, a.default)(e),
              "name",
              "UnsupportedStrategyError"
            ),
            (0, s.default)(
              (0, a.default)(e),
              "code",
              "CALLBACK_CREDENTIALS_JWT_ERROR"
            ),
            e
          );
        }
        return (0, c.default)(n);
      })(h);
      function x(e) {
        return e.replace(/([A-Z])/g, "_$1").toUpperCase();
      }
      function S(e) {
        return "".concat(e[0].toUpperCase()).concat(e.slice(1));
      }
      t.UnsupportedStrategy = w;
    },
    9498: function (e, t, n) {
      "use strict";
      var r = n(4836);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0),
        (t.proxyLogger = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : c,
            t = arguments.length > 1 ? arguments[1] : void 0;
          try {
            if ("undefined" === typeof window) return e;
            var n = {},
              r = function (e) {
                n[e] = function (n, r) {
                  c[e](n, r), "error" === e && (r = u(r)), (r.client = !0);
                  var o = "".concat(t, "/_log"),
                    i = new URLSearchParams(s({ level: e, code: n }, r));
                  return navigator.sendBeacon
                    ? navigator.sendBeacon(o, i)
                    : fetch(o, { method: "POST", body: i, keepalive: !0 });
                };
              };
            for (var o in e) r(o);
            return n;
          } catch (i) {
            return c;
          }
        }),
        (t.setLogger = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
          t || (c.debug = function () {});
          e.error && (c.error = e.error);
          e.warn && (c.warn = e.warn);
          e.debug && (c.debug = e.debug);
        });
      var o = r(n(8416)),
        i = n(6925);
      function a(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(n), !0).forEach(function (t) {
                (0, o.default)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : a(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function u(e) {
        if (e instanceof Error && !(e instanceof i.UnknownError))
          return { message: e.message, stack: e.stack, name: e.name };
        var t, n;
        null !== (n = e) &&
          void 0 !== n &&
          n.error &&
          ((e.error = u(e.error)),
          (e.message =
            null !== (t = e.message) && void 0 !== t ? t : e.error.message));
        return e;
      }
      var c = {
        error: function (e, t) {
          (t = u(t)),
            console.error(
              "[next-auth][error][".concat(e, "]"),
              "\nhttps://next-auth.js.org/errors#".concat(e.toLowerCase()),
              t.message,
              t
            );
        },
        warn: function (e) {
          console.warn(
            "[next-auth][warn][".concat(e, "]"),
            "\nhttps://next-auth.js.org/warnings#".concat(e.toLowerCase())
          );
        },
        debug: function (e, t) {
          console.log("[next-auth][debug][".concat(e, "]"), t);
        },
      };
      var l = c;
      t.default = l;
    },
    8341: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          var t;
          const n = new URL("http://localhost:3000/api/auth");
          e && !e.startsWith("http") && (e = `https://${e}`);
          const r = new URL(null !== (t = e) && void 0 !== t ? t : n),
            o = ("/" === r.pathname ? n.pathname : r.pathname).replace(
              /\/$/,
              ""
            ),
            i = `${r.origin}${o}`;
          return {
            origin: r.origin,
            host: r.host,
            path: o,
            base: i,
            toString: () => i,
          };
        });
    },
    3299: function (e, t, n) {
      "use strict";
      var r = n(3454),
        o = n(4836),
        i = n(8698);
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        useSession: !0,
        getSession: !0,
        getCsrfToken: !0,
        getProviders: !0,
        signIn: !0,
        signOut: !0,
        SessionProvider: !0,
      };
      (t.SessionProvider = function (e) {
        var t = e.children,
          n = e.basePath;
        n && (P.basePath = n);
        var r = void 0 !== e.session;
        P._lastSync = r ? (0, m.now)() : 0;
        var o = g.useState(function () {
            return r && (P._session = e.session), e.session;
          }),
          i = (0, d.default)(o, 2),
          a = i[0],
          s = i[1],
          u = g.useState(!r),
          c = (0, d.default)(u, 2),
          l = c[0],
          p = c[1];
        g.useEffect(function () {
          return (
            (P._getSession = (0, h.default)(
              f.default.mark(function e() {
                var t,
                  n,
                  r,
                  o = arguments;
                return f.default.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((t = o.length > 0 && void 0 !== o[0] ? o[0] : {}),
                            (n = t.event),
                            (e.prev = 1),
                            !(r = "storage" === n) && void 0 !== P._session)
                          ) {
                            e.next = 10;
                            break;
                          }
                          return (
                            (P._lastSync = (0, m.now)()),
                            (e.next = 7),
                            C({ broadcast: !r })
                          );
                        case 7:
                          return (
                            (P._session = e.sent),
                            s(P._session),
                            e.abrupt("return")
                          );
                        case 10:
                          if (
                            n &&
                            null !== P._session &&
                            !((0, m.now)() < P._lastSync)
                          ) {
                            e.next = 12;
                            break;
                          }
                          return e.abrupt("return");
                        case 12:
                          return (
                            (P._lastSync = (0, m.now)()), (e.next = 15), C()
                          );
                        case 15:
                          (P._session = e.sent), s(P._session), (e.next = 22);
                          break;
                        case 19:
                          (e.prev = 19),
                            (e.t0 = e.catch(1)),
                            E.error("CLIENT_SESSION_ERROR", e.t0);
                        case 22:
                          return (e.prev = 22), p(!1), e.finish(22);
                        case 25:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 19, 22, 25]]
                );
              })
            )),
            P._getSession(),
            function () {
              (P._lastSync = 0),
                (P._session = void 0),
                (P._getSession = function () {});
            }
          );
        }, []),
          g.useEffect(function () {
            var e = j.receive(function () {
              return P._getSession({ event: "storage" });
            });
            return function () {
              return e();
            };
          }, []),
          g.useEffect(
            function () {
              var t = e.refetchOnWindowFocus,
                n = void 0 === t || t,
                r = function () {
                  n &&
                    "visible" === document.visibilityState &&
                    P._getSession({ event: "visibilitychange" });
                };
              return (
                document.addEventListener("visibilitychange", r, !1),
                function () {
                  return document.removeEventListener(
                    "visibilitychange",
                    r,
                    !1
                  );
                }
              );
            },
            [e.refetchOnWindowFocus]
          ),
          g.useEffect(
            function () {
              var t = e.refetchInterval;
              if (t) {
                var n = setInterval(function () {
                  P._session && P._getSession({ event: "poll" });
                }, 1e3 * t);
                return function () {
                  return clearInterval(n);
                };
              }
            },
            [e.refetchInterval]
          );
        var v = g.useMemo(
          function () {
            return {
              data: a,
              status: l ? "loading" : a ? "authenticated" : "unauthenticated",
            };
          },
          [a, l]
        );
        return (0, b.jsx)(L.Provider, { value: v, children: t });
      }),
        (t.getCsrfToken = _),
        (t.getProviders = T),
        (t.getSession = C),
        (t.signIn = function (e, t, n) {
          return D.apply(this, arguments);
        }),
        (t.signOut = function (e) {
          return M.apply(this, arguments);
        }),
        (t.useSession = function (e) {
          var t = g.useContext(L);
          0;
          var n = null !== e && void 0 !== e ? e : {},
            r = n.required,
            o = n.onUnauthenticated,
            i = r && "unauthenticated" === t.status;
          if (
            (g.useEffect(
              function () {
                if (i) {
                  var e = "/api/auth/signin?".concat(
                    new URLSearchParams({
                      error: "SessionRequired",
                      callbackUrl: window.location.href,
                    })
                  );
                  o ? o() : (window.location.href = e);
                }
              },
              [i, o]
            ),
            i)
          )
            return { data: t.data, status: "loading" };
          return t;
        });
      var s,
        u,
        c,
        l,
        f = o(n(4687)),
        p = o(n(8416)),
        d = o(n(7424)),
        h = o(n(7156)),
        g = x(n(7294)),
        v = x(n(9498)),
        y = o(n(8341)),
        m = n(9548),
        b = n(5893),
        O = n(527);
      function w(e) {
        if ("function" !== typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (w = function (e) {
          return e ? n : t;
        })(e);
      }
      function x(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" !== i(e) && "function" !== typeof e))
          return { default: e };
        var n = w(t);
        if (n && n.has(e)) return n.get(e);
        var r = {},
          o = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var a in e)
          if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
            var s = o ? Object.getOwnPropertyDescriptor(e, a) : null;
            s && (s.get || s.set)
              ? Object.defineProperty(r, a, s)
              : (r[a] = e[a]);
          }
        return (r.default = e), n && n.set(e, r), r;
      }
      function S(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function k(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? S(Object(n), !0).forEach(function (t) {
                (0, p.default)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : S(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      Object.keys(O).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(a, e) ||
            (e in t && t[e] === O[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return O[e];
              },
            }));
      });
      var P = {
          baseUrl: (0, y.default)(
            null !== (s = r.env.NEXTAUTH_URL) && void 0 !== s
              ? s
              : r.env.VERCEL_URL
          ).origin,
          basePath: (0, y.default)(r.env.NEXTAUTH_URL).path,
          baseUrlServer: (0, y.default)(
            null !==
              (u =
                null !== (c = r.env.NEXTAUTH_URL_INTERNAL) && void 0 !== c
                  ? c
                  : r.env.NEXTAUTH_URL) && void 0 !== u
              ? u
              : r.env.VERCEL_URL
          ).origin,
          basePathServer: (0, y.default)(
            null !== (l = r.env.NEXTAUTH_URL_INTERNAL) && void 0 !== l
              ? l
              : r.env.NEXTAUTH_URL
          ).path,
          _lastSync: 0,
          _session: void 0,
          _getSession: function () {},
        },
        j = (0, m.BroadcastChannel)(),
        E = (0, v.proxyLogger)(v.default, P.basePath),
        L = g.createContext(void 0);
      function C(e) {
        return R.apply(this, arguments);
      }
      function R() {
        return (R = (0, h.default)(
          f.default.mark(function e(t) {
            var n, r;
            return f.default.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), (0, m.fetchData)("session", P, E, t);
                  case 2:
                    return (
                      (r = e.sent),
                      (null ===
                        (n =
                          null === t || void 0 === t ? void 0 : t.broadcast) ||
                        void 0 === n ||
                        n) &&
                        j.post({
                          event: "session",
                          data: { trigger: "getSession" },
                        }),
                      e.abrupt("return", r)
                    );
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function _(e) {
        return N.apply(this, arguments);
      }
      function N() {
        return (N = (0, h.default)(
          f.default.mark(function e(t) {
            var n;
            return f.default.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), (0, m.fetchData)("csrf", P, E, t);
                  case 2:
                    return (
                      (n = e.sent),
                      e.abrupt(
                        "return",
                        null === n || void 0 === n ? void 0 : n.csrfToken
                      )
                    );
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function T() {
        return A.apply(this, arguments);
      }
      function A() {
        return (A = (0, h.default)(
          f.default.mark(function e() {
            return f.default.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), (0, m.fetchData)("providers", P, E);
                  case 2:
                    return e.abrupt("return", e.sent);
                  case 3:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function D() {
        return (D = (0, h.default)(
          f.default.mark(function e(t, n, r) {
            var o, i, a, s, u, c, l, p, d, h, g, v, y, b, O, w, x;
            return f.default.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (i = (o = null !== n && void 0 !== n ? n : {})
                        .callbackUrl),
                      (a = void 0 === i ? window.location.href : i),
                      (s = o.redirect),
                      (u = void 0 === s || s),
                      (c = (0, m.apiBaseUrl)(P)),
                      (e.next = 4),
                      T()
                    );
                  case 4:
                    if ((l = e.sent)) {
                      e.next = 8;
                      break;
                    }
                    return (
                      (window.location.href = "".concat(c, "/error")),
                      e.abrupt("return")
                    );
                  case 8:
                    if (t && t in l) {
                      e.next = 11;
                      break;
                    }
                    return (
                      (window.location.href = ""
                        .concat(c, "/signin?")
                        .concat(new URLSearchParams({ callbackUrl: a }))),
                      e.abrupt("return")
                    );
                  case 11:
                    return (
                      (p = "credentials" === l[t].type),
                      (d = "email" === l[t].type),
                      (h = p || d),
                      (g = ""
                        .concat(c, "/")
                        .concat(p ? "callback" : "signin", "/")
                        .concat(t)),
                      (v = "".concat(g, "?").concat(new URLSearchParams(r))),
                      (e.t0 = fetch),
                      (e.t1 = v),
                      (e.t2 = {
                        "Content-Type": "application/x-www-form-urlencoded",
                      }),
                      (e.t3 = URLSearchParams),
                      (e.t4 = k),
                      (e.t5 = k({}, n)),
                      (e.t6 = {}),
                      (e.next = 25),
                      _()
                    );
                  case 25:
                    return (
                      (e.t7 = e.sent),
                      (e.t8 = a),
                      (e.t9 = { csrfToken: e.t7, callbackUrl: e.t8, json: !0 }),
                      (e.t10 = (0, e.t4)(e.t5, e.t6, e.t9)),
                      (e.t11 = new e.t3(e.t10)),
                      (e.t12 = { method: "post", headers: e.t2, body: e.t11 }),
                      (e.next = 33),
                      (0, e.t0)(e.t1, e.t12)
                    );
                  case 33:
                    return (y = e.sent), (e.next = 36), y.json();
                  case 36:
                    if (((b = e.sent), !u && h)) {
                      e.next = 42;
                      break;
                    }
                    return (
                      (w = null !== (O = b.url) && void 0 !== O ? O : a),
                      (window.location.href = w),
                      w.includes("#") && window.location.reload(),
                      e.abrupt("return")
                    );
                  case 42:
                    if (
                      ((x = new URL(b.url).searchParams.get("error")), !y.ok)
                    ) {
                      e.next = 46;
                      break;
                    }
                    return (e.next = 46), P._getSession({ event: "storage" });
                  case 46:
                    return e.abrupt("return", {
                      error: x,
                      status: y.status,
                      ok: y.ok,
                      url: x ? null : b.url,
                    });
                  case 47:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function M() {
        return (M = (0, h.default)(
          f.default.mark(function e(t) {
            var n, r, o, i, a, s, u, c, l;
            return f.default.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (r = (null !== t && void 0 !== t ? t : {}).callbackUrl),
                      (o = void 0 === r ? window.location.href : r),
                      (i = (0, m.apiBaseUrl)(P)),
                      (e.t0 = {
                        "Content-Type": "application/x-www-form-urlencoded",
                      }),
                      (e.t1 = URLSearchParams),
                      (e.next = 6),
                      _()
                    );
                  case 6:
                    return (
                      (e.t2 = e.sent),
                      (e.t3 = o),
                      (e.t4 = { csrfToken: e.t2, callbackUrl: e.t3, json: !0 }),
                      (e.t5 = new e.t1(e.t4)),
                      (a = { method: "post", headers: e.t0, body: e.t5 }),
                      (e.next = 13),
                      fetch("".concat(i, "/signout"), a)
                    );
                  case 13:
                    return (s = e.sent), (e.next = 16), s.json();
                  case 16:
                    if (
                      ((u = e.sent),
                      j.post({
                        event: "session",
                        data: { trigger: "signout" },
                      }),
                      null !==
                        (n =
                          null === t || void 0 === t ? void 0 : t.redirect) &&
                        void 0 !== n &&
                        !n)
                    ) {
                      e.next = 23;
                      break;
                    }
                    return (
                      (l = null !== (c = u.url) && void 0 !== c ? c : o),
                      (window.location.href = l),
                      l.includes("#") && window.location.reload(),
                      e.abrupt("return")
                    );
                  case 23:
                    return (e.next = 25), P._getSession({ event: "storage" });
                  case 25:
                    return e.abrupt("return", u);
                  case 26:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
    },
    527: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    7561: function (e, t, n) {
      "use strict";
      n.d(t, {
        Jc: function () {
          return ut;
        },
        $G: function () {
          return T;
        },
      });
      var r = n(7294);
      n(1739);
      Object.create(null);
      function o() {
        if (console && console.warn) {
          for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          "string" === typeof n[0] && (n[0] = "react-i18next:: ".concat(n[0])),
            (e = console).warn.apply(e, n);
        }
      }
      var i = {};
      function a() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        ("string" === typeof t[0] && i[t[0]]) ||
          ("string" === typeof t[0] && (i[t[0]] = new Date()),
          o.apply(void 0, t));
      }
      function s(e, t, n) {
        e.loadNamespaces(t, function () {
          if (e.isInitialized) n();
          else {
            e.on("initialized", function t() {
              setTimeout(function () {
                e.off("initialized", t);
              }, 0),
                n();
            });
          }
        });
      }
      function u(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = t.languages[0],
          o = !!t.options && t.options.fallbackLng,
          i = t.languages[t.languages.length - 1];
        if ("cimode" === r.toLowerCase()) return !0;
        var a = function (e, n) {
          var r =
            t.services.backendConnector.state["".concat(e, "|").concat(n)];
          return -1 === r || 2 === r;
        };
        return (
          !(
            n.bindI18n &&
            n.bindI18n.indexOf("languageChanging") > -1 &&
            t.services.backendConnector.backend &&
            t.isLanguageChangingTo &&
            !a(t.isLanguageChangingTo, e)
          ) &&
          (!!t.hasResourceBundle(r, e) ||
            !(
              t.services.backendConnector.backend &&
              (!t.options.resources || t.options.partialBundledLanguages)
            ) ||
            !(!a(r, e) || (o && !a(i, e))))
        );
      }
      function c(e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (!t.languages || !t.languages.length)
          return a("i18n.languages were undefined or empty", t.languages), !0;
        var r = void 0 !== t.options.ignoreJSONStructure;
        return r
          ? t.hasLoadedNamespace(e, {
              precheck: function (t, r) {
                if (
                  n.bindI18n &&
                  n.bindI18n.indexOf("languageChanging") > -1 &&
                  t.services.backendConnector.backend &&
                  t.isLanguageChangingTo &&
                  !r(t.isLanguageChangingTo, e)
                )
                  return !1;
              },
            })
          : u(e, t, n);
      }
      function l(e) {
        return (
          (l =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          l(e)
        );
      }
      function f(e) {
        var t = (function (e, t) {
          if ("object" !== l(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== l(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === l(t) ? t : String(t);
      }
      function p(e, t, n) {
        return (
          (t = f(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var d =
          /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
        h = {
          "&amp;": "&",
          "&#38;": "&",
          "&lt;": "<",
          "&#60;": "<",
          "&gt;": ">",
          "&#62;": ">",
          "&apos;": "'",
          "&#39;": "'",
          "&quot;": '"',
          "&#34;": '"',
          "&nbsp;": " ",
          "&#160;": " ",
          "&copy;": "\xa9",
          "&#169;": "\xa9",
          "&reg;": "\xae",
          "&#174;": "\xae",
          "&hellip;": "\u2026",
          "&#8230;": "\u2026",
          "&#x2F;": "/",
          "&#47;": "/",
        },
        g = function (e) {
          return h[e];
        };
      var v = {
        bindI18n: "languageChanged",
        bindI18nStore: "",
        transEmptyNodeValue: "",
        transSupportBasicHtmlNodes: !0,
        transWrapTextNodes: "",
        transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
        useSuspense: !0,
        unescape: function (e) {
          return e.replace(d, g);
        },
      };
      function y() {
        return v;
      }
      var m;
      function b(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function O(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, f(r.key), r);
        }
      }
      function w(e, t, n) {
        return (
          t && O(e.prototype, t),
          n && O(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function x() {
        return m;
      }
      var S = (0, r.createContext)(),
        k = (function () {
          function e() {
            b(this, e), (this.usedNamespaces = {});
          }
          return (
            w(e, [
              {
                key: "addUsedNamespaces",
                value: function (e) {
                  var t = this;
                  e.forEach(function (e) {
                    t.usedNamespaces[e] || (t.usedNamespaces[e] = !0);
                  });
                },
              },
              {
                key: "getUsedNamespaces",
                value: function () {
                  return Object.keys(this.usedNamespaces);
                },
              },
            ]),
            e
          );
        })();
      function P(e) {
        if (Array.isArray(e)) return e;
      }
      function j(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function E(e, t) {
        if (e) {
          if ("string" === typeof e) return j(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? j(e, t)
              : void 0
          );
        }
      }
      function L() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      function C(e, t) {
        return (
          P(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                o,
                i,
                a,
                s = [],
                u = !0,
                c = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (r = i.call(n)).done) &&
                    (s.push(r.value), s.length !== t);
                    u = !0
                  );
              } catch (l) {
                (c = !0), (o = l);
              } finally {
                try {
                  if (
                    !u &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (c) throw o;
                }
              }
              return s;
            }
          })(e, t) ||
          E(e, t) ||
          L()
        );
      }
      function R(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function _(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? R(Object(n), !0).forEach(function (t) {
                p(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : R(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var N = function (e, t) {
        var n = (0, r.useRef)();
        return (
          (0, r.useEffect)(
            function () {
              n.current = t ? n.current : e;
            },
            [e, t]
          ),
          n.current
        );
      };
      function T(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = t.i18n,
          o = (0, r.useContext)(S) || {},
          i = o.i18n,
          u = o.defaultNS,
          l = n || i || x();
        if ((l && !l.reportNamespaces && (l.reportNamespaces = new k()), !l)) {
          a(
            "You will need to pass in an i18next instance by using initReactI18next"
          );
          var f = function (e) {
              return Array.isArray(e) ? e[e.length - 1] : e;
            },
            p = [f, {}, !1];
          return (p.t = f), (p.i18n = {}), (p.ready = !1), p;
        }
        l.options.react &&
          void 0 !== l.options.react.wait &&
          a(
            "It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour."
          );
        var d = _(_(_({}, y()), l.options.react), t),
          h = d.useSuspense,
          g = d.keyPrefix,
          v = e || u || (l.options && l.options.defaultNS);
        (v = "string" === typeof v ? [v] : v || ["translation"]),
          l.reportNamespaces.addUsedNamespaces &&
            l.reportNamespaces.addUsedNamespaces(v);
        var m =
          (l.isInitialized || l.initializedStoreOnce) &&
          v.every(function (e) {
            return c(e, l, d);
          });
        function b() {
          return l.getFixedT(null, "fallback" === d.nsMode ? v : v[0], g);
        }
        var O = (0, r.useState)(b),
          w = C(O, 2),
          P = w[0],
          j = w[1],
          E = v.join(),
          L = N(E),
          R = (0, r.useRef)(!0);
        (0, r.useEffect)(
          function () {
            var e = d.bindI18n,
              t = d.bindI18nStore;
            function n() {
              R.current && j(b);
            }
            return (
              (R.current = !0),
              m ||
                h ||
                s(l, v, function () {
                  R.current && j(b);
                }),
              m && L && L !== E && R.current && j(b),
              e && l && l.on(e, n),
              t && l && l.store.on(t, n),
              function () {
                (R.current = !1),
                  e &&
                    l &&
                    e.split(" ").forEach(function (e) {
                      return l.off(e, n);
                    }),
                  t &&
                    l &&
                    t.split(" ").forEach(function (e) {
                      return l.store.off(e, n);
                    });
              }
            );
          },
          [l, E]
        );
        var T = (0, r.useRef)(!0);
        (0, r.useEffect)(
          function () {
            R.current && !T.current && j(b), (T.current = !1);
          },
          [l, g]
        );
        var A = [P, l, m];
        if (((A.t = P), (A.i18n = l), (A.ready = m), m)) return A;
        if (!m && !h) return A;
        throw new Promise(function (e) {
          s(l, v, function () {
            e();
          });
        });
      }
      function A(e) {
        var t = e.i18n,
          n = e.defaultNS,
          o = e.children,
          i = (0, r.useMemo)(
            function () {
              return { i18n: t, defaultNS: n };
            },
            [t, n]
          );
        return (0, r.createElement)(S.Provider, { value: i }, o);
      }
      function D() {
        return (
          (D = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          D.apply(this, arguments)
        );
      }
      var M = n(8679),
        F = n.n(M);
      function I(e) {
        if (
          ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      }
      function U(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return j(e);
          })(e) ||
          I(e) ||
          E(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function q(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      var K = {
          defaultNS: "common",
          errorStackTraceLimit: 0,
          i18n: { defaultLocale: "en", locales: ["en"] },
          get initImmediate() {
            return "undefined" !== typeof window;
          },
          interpolation: { escapeValue: !1 },
          load: "currentOnly",
          localeExtension: "json",
          localePath: "./public/locales",
          localeStructure: "{{lng}}/{{ns}}",
          react: { useSuspense: !1 },
          reloadOnPrerender: !1,
          serializeConfig: !0,
          use: [],
        },
        B = ["i18n"],
        H = ["i18n"];
      function V(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function $(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? V(Object(n), !0).forEach(function (t) {
                p(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : V(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var Q = ["backend", "detection"],
        z = function (e) {
          var t;
          if ("string" !== typeof (null === e || void 0 === e ? void 0 : e.lng))
            throw new Error("config.lng was not passed into createConfig");
          var n = e.i18n,
            r = q(e, B),
            o = K.i18n,
            i = $($($($({}, q(K, H)), r), o), n),
            a = i.defaultNS,
            s = i.lng,
            u = i.localeExtension,
            c = i.localePath,
            f = i.localeStructure,
            p = i.nonExplicitSupportedLngs,
            d = i.locales.filter(function (e) {
              return "default" !== e;
            });
          if ("cimode" === s) return i;
          if (
            "undefined" === typeof i.fallbackLng &&
            ((i.fallbackLng = i.defaultLocale), "default" === i.fallbackLng)
          ) {
            var h = C(d, 1);
            i.fallbackLng = h[0];
          }
          var g = i.fallbackLng;
          if (p) {
            var v = function (e, t) {
              var n = C(t.split("-"), 1)[0];
              return (e[t] = [n]), e;
            };
            if ("string" === typeof g)
              i.fallbackLng = i.locales
                .filter(function (e) {
                  return e.includes("-");
                })
                .reduce(v, { default: [g] });
            else if (Array.isArray(g))
              i.fallbackLng = i.locales
                .filter(function (e) {
                  return e.includes("-");
                })
                .reduce(v, { default: g });
            else if ("object" === l(g))
              i.fallbackLng = Object.entries(i.fallbackLng).reduce(function (
                e,
                t
              ) {
                var n,
                  r = C(t, 2),
                  o = r[0],
                  i = r[1];
                return (
                  (e[o] = o.includes("-")
                    ? ((n = [o.split("-")[0]].concat(U(i))),
                      Array.from(new Set(n)))
                    : i),
                  e
                );
              },
              g);
            else if ("function" === typeof g)
              throw new Error(
                "If nonExplicitSupportedLngs is true, no functions are allowed for fallbackLng"
              );
          }
          return (
            (null === e || void 0 === e || null === (t = e.use) || void 0 === t
              ? void 0
              : t.some(function (e) {
                  return "backend" === e.type;
                })) ||
              ("string" === typeof c
                ? (i.backend = {
                    addPath: "".concat(c, "/").concat(f, ".missing.").concat(u),
                    loadPath: "".concat(c, "/").concat(f, ".").concat(u),
                  })
                : "function" === typeof c &&
                  (i.backend = {
                    addPath: function (e, t) {
                      return c(e, t, !0);
                    },
                    loadPath: function (e, t) {
                      return c(e, t, !1);
                    },
                  })),
            "string" === typeof i.ns || Array.isArray(i.ns) || (i.ns = [a]),
            Q.forEach(function (t) {
              e[t] && (i[t] = $($({}, i[t]), e[t]));
            }),
            i
          );
        };
      function J(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function G(e, t) {
        return (
          (G = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          G(e, t)
        );
      }
      function W(e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && G(e, t);
      }
      function X(e, t) {
        if (t && ("object" === l(t) || "function" === typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return J(e);
      }
      function Y(e) {
        return (
          (Y = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          Y(e)
        );
      }
      function Z(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function ee(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Z(Object(n), !0).forEach(function (t) {
                p(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Z(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var te = {
          type: "logger",
          log: function (e) {
            this.output("log", e);
          },
          warn: function (e) {
            this.output("warn", e);
          },
          error: function (e) {
            this.output("error", e);
          },
          output: function (e, t) {
            console && console[e] && console[e].apply(console, t);
          },
        },
        ne = (function () {
          function e(t) {
            var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            b(this, e), this.init(t, n);
          }
          return (
            w(e, [
              {
                key: "init",
                value: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  (this.prefix = t.prefix || "i18next:"),
                    (this.logger = e || te),
                    (this.options = t),
                    (this.debug = t.debug);
                },
              },
              {
                key: "setDebug",
                value: function (e) {
                  this.debug = e;
                },
              },
              {
                key: "log",
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return this.forward(t, "log", "", !0);
                },
              },
              {
                key: "warn",
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return this.forward(t, "warn", "", !0);
                },
              },
              {
                key: "error",
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return this.forward(t, "error", "");
                },
              },
              {
                key: "deprecate",
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return this.forward(t, "warn", "WARNING DEPRECATED: ", !0);
                },
              },
              {
                key: "forward",
                value: function (e, t, n, r) {
                  return r && !this.debug
                    ? null
                    : ("string" === typeof e[0] &&
                        (e[0] = ""
                          .concat(n)
                          .concat(this.prefix, " ")
                          .concat(e[0])),
                      this.logger[t](e));
                },
              },
              {
                key: "create",
                value: function (t) {
                  return new e(
                    this.logger,
                    ee(
                      ee(
                        {},
                        { prefix: "".concat(this.prefix, ":").concat(t, ":") }
                      ),
                      this.options
                    )
                  );
                },
              },
              {
                key: "clone",
                value: function (t) {
                  return (
                    ((t = t || this.options).prefix = t.prefix || this.prefix),
                    new e(this.logger, t)
                  );
                },
              },
            ]),
            e
          );
        })(),
        re = new ne(),
        oe = (function () {
          function e() {
            b(this, e), (this.observers = {});
          }
          return (
            w(e, [
              {
                key: "on",
                value: function (e, t) {
                  var n = this;
                  return (
                    e.split(" ").forEach(function (e) {
                      (n.observers[e] = n.observers[e] || []),
                        n.observers[e].push(t);
                    }),
                    this
                  );
                },
              },
              {
                key: "off",
                value: function (e, t) {
                  this.observers[e] &&
                    (t
                      ? (this.observers[e] = this.observers[e].filter(function (
                          e
                        ) {
                          return e !== t;
                        }))
                      : delete this.observers[e]);
                },
              },
              {
                key: "emit",
                value: function (e) {
                  for (
                    var t = arguments.length,
                      n = new Array(t > 1 ? t - 1 : 0),
                      r = 1;
                    r < t;
                    r++
                  )
                    n[r - 1] = arguments[r];
                  if (this.observers[e]) {
                    var o = [].concat(this.observers[e]);
                    o.forEach(function (e) {
                      e.apply(void 0, n);
                    });
                  }
                  if (this.observers["*"]) {
                    var i = [].concat(this.observers["*"]);
                    i.forEach(function (t) {
                      t.apply(t, [e].concat(n));
                    });
                  }
                },
              },
            ]),
            e
          );
        })();
      function ie() {
        var e,
          t,
          n = new Promise(function (n, r) {
            (e = n), (t = r);
          });
        return (n.resolve = e), (n.reject = t), n;
      }
      function ae(e) {
        return null == e ? "" : "" + e;
      }
      function se(e, t, n) {
        e.forEach(function (e) {
          t[e] && (n[e] = t[e]);
        });
      }
      function ue(e, t, n) {
        function r(e) {
          return e && e.indexOf("###") > -1 ? e.replace(/###/g, ".") : e;
        }
        function o() {
          return !e || "string" === typeof e;
        }
        for (
          var i = "string" !== typeof t ? [].concat(t) : t.split(".");
          i.length > 1;

        ) {
          if (o()) return {};
          var a = r(i.shift());
          !e[a] && n && (e[a] = new n()),
            (e = Object.prototype.hasOwnProperty.call(e, a) ? e[a] : {});
        }
        return o() ? {} : { obj: e, k: r(i.shift()) };
      }
      function ce(e, t, n) {
        var r = ue(e, t, Object);
        r.obj[r.k] = n;
      }
      function le(e, t) {
        var n = ue(e, t),
          r = n.obj,
          o = n.k;
        if (r) return r[o];
      }
      function fe(e, t, n) {
        var r = le(e, n);
        return void 0 !== r ? r : le(t, n);
      }
      function pe(e, t, n) {
        for (var r in t)
          "__proto__" !== r &&
            "constructor" !== r &&
            (r in e
              ? "string" === typeof e[r] ||
                e[r] instanceof String ||
                "string" === typeof t[r] ||
                t[r] instanceof String
                ? n && (e[r] = t[r])
                : pe(e[r], t[r], n)
              : (e[r] = t[r]));
        return e;
      }
      function de(e) {
        return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
      }
      var he = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;",
      };
      function ge(e) {
        return "string" === typeof e
          ? e.replace(/[&<>"'\/]/g, function (e) {
              return he[e];
            })
          : e;
      }
      var ve =
          "undefined" !== typeof window &&
          window.navigator &&
          "undefined" === typeof window.navigator.userAgentData &&
          window.navigator.userAgent &&
          window.navigator.userAgent.indexOf("MSIE") > -1,
        ye = [" ", ",", "?", "!", ";"];
      function me(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function be(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? me(Object(n), !0).forEach(function (t) {
                p(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : me(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function Oe(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = Y(e);
          if (t) {
            var o = Y(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return X(this, n);
        };
      }
      function we(e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ".";
        if (e) {
          if (e[t]) return e[t];
          for (var r = t.split(n), o = e, i = 0; i < r.length; ++i) {
            if (!o) return;
            if ("string" === typeof o[r[i]] && i + 1 < r.length) return;
            if (void 0 === o[r[i]]) {
              for (
                var a = 2, s = r.slice(i, i + a).join(n), u = o[s];
                void 0 === u && r.length > i + a;

              )
                a++, (u = o[(s = r.slice(i, i + a).join(n))]);
              if (void 0 === u) return;
              if (null === u) return null;
              if (t.endsWith(s)) {
                if ("string" === typeof u) return u;
                if (s && "string" === typeof u[s]) return u[s];
              }
              var c = r.slice(i + a).join(n);
              return c ? we(u, c, n) : void 0;
            }
            o = o[r[i]];
          }
          return o;
        }
      }
      var xe = (function (e) {
          W(n, e);
          var t = Oe(n);
          function n(e) {
            var r,
              o =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : { ns: ["translation"], defaultNS: "translation" };
            return (
              b(this, n),
              (r = t.call(this)),
              ve && oe.call(J(r)),
              (r.data = e || {}),
              (r.options = o),
              void 0 === r.options.keySeparator &&
                (r.options.keySeparator = "."),
              void 0 === r.options.ignoreJSONStructure &&
                (r.options.ignoreJSONStructure = !0),
              r
            );
          }
          return (
            w(n, [
              {
                key: "addNamespaces",
                value: function (e) {
                  this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
                },
              },
              {
                key: "removeNamespaces",
                value: function (e) {
                  var t = this.options.ns.indexOf(e);
                  t > -1 && this.options.ns.splice(t, 1);
                },
              },
              {
                key: "getResource",
                value: function (e, t, n) {
                  var r =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : {},
                    o =
                      void 0 !== r.keySeparator
                        ? r.keySeparator
                        : this.options.keySeparator,
                    i =
                      void 0 !== r.ignoreJSONStructure
                        ? r.ignoreJSONStructure
                        : this.options.ignoreJSONStructure,
                    a = [e, t];
                  n && "string" !== typeof n && (a = a.concat(n)),
                    n &&
                      "string" === typeof n &&
                      (a = a.concat(o ? n.split(o) : n)),
                    e.indexOf(".") > -1 && (a = e.split("."));
                  var s = le(this.data, a);
                  return s || !i || "string" !== typeof n
                    ? s
                    : we(this.data && this.data[e] && this.data[e][t], n, o);
                },
              },
              {
                key: "addResource",
                value: function (e, t, n, r) {
                  var o =
                      arguments.length > 4 && void 0 !== arguments[4]
                        ? arguments[4]
                        : { silent: !1 },
                    i = this.options.keySeparator;
                  void 0 === i && (i = ".");
                  var a = [e, t];
                  n && (a = a.concat(i ? n.split(i) : n)),
                    e.indexOf(".") > -1 &&
                      ((r = t), (t = (a = e.split("."))[1])),
                    this.addNamespaces(t),
                    ce(this.data, a, r),
                    o.silent || this.emit("added", e, t, n, r);
                },
              },
              {
                key: "addResources",
                value: function (e, t, n) {
                  var r =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : { silent: !1 };
                  for (var o in n)
                    ("string" !== typeof n[o] &&
                      "[object Array]" !==
                        Object.prototype.toString.apply(n[o])) ||
                      this.addResource(e, t, o, n[o], { silent: !0 });
                  r.silent || this.emit("added", e, t, n);
                },
              },
              {
                key: "addResourceBundle",
                value: function (e, t, n, r, o) {
                  var i =
                      arguments.length > 5 && void 0 !== arguments[5]
                        ? arguments[5]
                        : { silent: !1 },
                    a = [e, t];
                  e.indexOf(".") > -1 &&
                    ((r = n), (n = t), (t = (a = e.split("."))[1])),
                    this.addNamespaces(t);
                  var s = le(this.data, a) || {};
                  r ? pe(s, n, o) : (s = be(be({}, s), n)),
                    ce(this.data, a, s),
                    i.silent || this.emit("added", e, t, n);
                },
              },
              {
                key: "removeResourceBundle",
                value: function (e, t) {
                  this.hasResourceBundle(e, t) && delete this.data[e][t],
                    this.removeNamespaces(t),
                    this.emit("removed", e, t);
                },
              },
              {
                key: "hasResourceBundle",
                value: function (e, t) {
                  return void 0 !== this.getResource(e, t);
                },
              },
              {
                key: "getResourceBundle",
                value: function (e, t) {
                  return (
                    t || (t = this.options.defaultNS),
                    "v1" === this.options.compatibilityAPI
                      ? be(be({}, {}), this.getResource(e, t))
                      : this.getResource(e, t)
                  );
                },
              },
              {
                key: "getDataByLanguage",
                value: function (e) {
                  return this.data[e];
                },
              },
              {
                key: "hasLanguageSomeTranslations",
                value: function (e) {
                  var t = this.getDataByLanguage(e);
                  return !!((t && Object.keys(t)) || []).find(function (e) {
                    return t[e] && Object.keys(t[e]).length > 0;
                  });
                },
              },
              {
                key: "toJSON",
                value: function () {
                  return this.data;
                },
              },
            ]),
            n
          );
        })(oe),
        Se = {
          processors: {},
          addPostProcessor: function (e) {
            this.processors[e.name] = e;
          },
          handle: function (e, t, n, r, o) {
            var i = this;
            return (
              e.forEach(function (e) {
                i.processors[e] && (t = i.processors[e].process(t, n, r, o));
              }),
              t
            );
          },
        };
      function ke(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Pe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ke(Object(n), !0).forEach(function (t) {
                p(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ke(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function je(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = Y(e);
          if (t) {
            var o = Y(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return X(this, n);
        };
      }
      var Ee = {},
        Le = (function (e) {
          W(n, e);
          var t = je(n);
          function n(e) {
            var r,
              o =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            return (
              b(this, n),
              (r = t.call(this)),
              ve && oe.call(J(r)),
              se(
                [
                  "resourceStore",
                  "languageUtils",
                  "pluralResolver",
                  "interpolator",
                  "backendConnector",
                  "i18nFormat",
                  "utils",
                ],
                e,
                J(r)
              ),
              (r.options = o),
              void 0 === r.options.keySeparator &&
                (r.options.keySeparator = "."),
              (r.logger = re.create("translator")),
              r
            );
          }
          return (
            w(
              n,
              [
                {
                  key: "changeLanguage",
                  value: function (e) {
                    e && (this.language = e);
                  },
                },
                {
                  key: "exists",
                  value: function (e) {
                    var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : { interpolation: {} };
                    if (void 0 === e || null === e) return !1;
                    var n = this.resolve(e, t);
                    return n && void 0 !== n.res;
                  },
                },
                {
                  key: "extractFromKey",
                  value: function (e, t) {
                    var n =
                      void 0 !== t.nsSeparator
                        ? t.nsSeparator
                        : this.options.nsSeparator;
                    void 0 === n && (n = ":");
                    var r =
                        void 0 !== t.keySeparator
                          ? t.keySeparator
                          : this.options.keySeparator,
                      o = t.ns || this.options.defaultNS || [],
                      i = n && e.indexOf(n) > -1,
                      a =
                        !this.options.userDefinedKeySeparator &&
                        !t.keySeparator &&
                        !this.options.userDefinedNsSeparator &&
                        !t.nsSeparator &&
                        !(function (e, t, n) {
                          (t = t || ""), (n = n || "");
                          var r = ye.filter(function (e) {
                            return t.indexOf(e) < 0 && n.indexOf(e) < 0;
                          });
                          if (0 === r.length) return !0;
                          var o = new RegExp(
                              "(".concat(
                                r
                                  .map(function (e) {
                                    return "?" === e ? "\\?" : e;
                                  })
                                  .join("|"),
                                ")"
                              )
                            ),
                            i = !o.test(e);
                          if (!i) {
                            var a = e.indexOf(n);
                            a > 0 && !o.test(e.substring(0, a)) && (i = !0);
                          }
                          return i;
                        })(e, n, r);
                    if (i && !a) {
                      var s = e.match(this.interpolator.nestingRegexp);
                      if (s && s.length > 0) return { key: e, namespaces: o };
                      var u = e.split(n);
                      (n !== r ||
                        (n === r && this.options.ns.indexOf(u[0]) > -1)) &&
                        (o = u.shift()),
                        (e = u.join(r));
                    }
                    return (
                      "string" === typeof o && (o = [o]),
                      { key: e, namespaces: o }
                    );
                  },
                },
                {
                  key: "translate",
                  value: function (e, t, r) {
                    var o = this;
                    if (
                      ("object" !== l(t) &&
                        this.options.overloadTranslationOptionHandler &&
                        (t =
                          this.options.overloadTranslationOptionHandler(
                            arguments
                          )),
                      t || (t = {}),
                      void 0 === e || null === e)
                    )
                      return "";
                    Array.isArray(e) || (e = [String(e)]);
                    var i =
                        void 0 !== t.returnDetails
                          ? t.returnDetails
                          : this.options.returnDetails,
                      a =
                        void 0 !== t.keySeparator
                          ? t.keySeparator
                          : this.options.keySeparator,
                      s = this.extractFromKey(e[e.length - 1], t),
                      u = s.key,
                      c = s.namespaces,
                      f = c[c.length - 1],
                      p = t.lng || this.language,
                      d =
                        t.appendNamespaceToCIMode ||
                        this.options.appendNamespaceToCIMode;
                    if (p && "cimode" === p.toLowerCase()) {
                      if (d) {
                        var h = t.nsSeparator || this.options.nsSeparator;
                        return i
                          ? {
                              res: "".concat(f).concat(h).concat(u),
                              usedKey: u,
                              exactUsedKey: u,
                              usedLng: p,
                              usedNS: f,
                            }
                          : "".concat(f).concat(h).concat(u);
                      }
                      return i
                        ? {
                            res: u,
                            usedKey: u,
                            exactUsedKey: u,
                            usedLng: p,
                            usedNS: f,
                          }
                        : u;
                    }
                    var g = this.resolve(e, t),
                      v = g && g.res,
                      y = (g && g.usedKey) || u,
                      m = (g && g.exactUsedKey) || u,
                      b = Object.prototype.toString.apply(v),
                      O = [
                        "[object Number]",
                        "[object Function]",
                        "[object RegExp]",
                      ],
                      w =
                        void 0 !== t.joinArrays
                          ? t.joinArrays
                          : this.options.joinArrays,
                      x = !this.i18nFormat || this.i18nFormat.handleAsObject,
                      S =
                        "string" !== typeof v &&
                        "boolean" !== typeof v &&
                        "number" !== typeof v;
                    if (
                      x &&
                      v &&
                      S &&
                      O.indexOf(b) < 0 &&
                      ("string" !== typeof w || "[object Array]" !== b)
                    ) {
                      if (!t.returnObjects && !this.options.returnObjects) {
                        this.options.returnedObjectHandler ||
                          this.logger.warn(
                            "accessing an object - but returnObjects options is not enabled!"
                          );
                        var k = this.options.returnedObjectHandler
                          ? this.options.returnedObjectHandler(
                              y,
                              v,
                              Pe(Pe({}, t), {}, { ns: c })
                            )
                          : "key '"
                              .concat(u, " (")
                              .concat(
                                this.language,
                                ")' returned an object instead of string."
                              );
                        return i ? ((g.res = k), g) : k;
                      }
                      if (a) {
                        var P = "[object Array]" === b,
                          j = P ? [] : {},
                          E = P ? m : y;
                        for (var L in v)
                          if (Object.prototype.hasOwnProperty.call(v, L)) {
                            var C = "".concat(E).concat(a).concat(L);
                            (j[L] = this.translate(
                              C,
                              Pe(Pe({}, t), { joinArrays: !1, ns: c })
                            )),
                              j[L] === C && (j[L] = v[L]);
                          }
                        v = j;
                      }
                    } else if (
                      x &&
                      "string" === typeof w &&
                      "[object Array]" === b
                    )
                      (v = v.join(w)) &&
                        (v = this.extendTranslation(v, e, t, r));
                    else {
                      var R = !1,
                        _ = !1,
                        N = void 0 !== t.count && "string" !== typeof t.count,
                        T = n.hasDefaultValue(t),
                        A = N
                          ? this.pluralResolver.getSuffix(p, t.count, t)
                          : "",
                        D = t["defaultValue".concat(A)] || t.defaultValue;
                      !this.isValidLookup(v) && T && ((R = !0), (v = D)),
                        this.isValidLookup(v) || ((_ = !0), (v = u));
                      var M =
                          t.missingKeyNoValueFallbackToKey ||
                          this.options.missingKeyNoValueFallbackToKey,
                        F = M && _ ? void 0 : v,
                        I = T && D !== v && this.options.updateMissing;
                      if (_ || R || I) {
                        if (
                          (this.logger.log(
                            I ? "updateKey" : "missingKey",
                            p,
                            f,
                            u,
                            I ? D : v
                          ),
                          a)
                        ) {
                          var U = this.resolve(
                            u,
                            Pe(Pe({}, t), {}, { keySeparator: !1 })
                          );
                          U &&
                            U.res &&
                            this.logger.warn(
                              "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format."
                            );
                        }
                        var q = [],
                          K = this.languageUtils.getFallbackCodes(
                            this.options.fallbackLng,
                            t.lng || this.language
                          );
                        if (
                          "fallback" === this.options.saveMissingTo &&
                          K &&
                          K[0]
                        )
                          for (var B = 0; B < K.length; B++) q.push(K[B]);
                        else
                          "all" === this.options.saveMissingTo
                            ? (q = this.languageUtils.toResolveHierarchy(
                                t.lng || this.language
                              ))
                            : q.push(t.lng || this.language);
                        var H = function (e, n, r) {
                          var i = T && r !== v ? r : F;
                          o.options.missingKeyHandler
                            ? o.options.missingKeyHandler(e, f, n, i, I, t)
                            : o.backendConnector &&
                              o.backendConnector.saveMissing &&
                              o.backendConnector.saveMissing(e, f, n, i, I, t),
                            o.emit("missingKey", e, f, n, v);
                        };
                        this.options.saveMissing &&
                          (this.options.saveMissingPlurals && N
                            ? q.forEach(function (e) {
                                o.pluralResolver
                                  .getSuffixes(e, t)
                                  .forEach(function (n) {
                                    H(
                                      [e],
                                      u + n,
                                      t["defaultValue".concat(n)] || D
                                    );
                                  });
                              })
                            : H(q, u, D));
                      }
                      (v = this.extendTranslation(v, e, t, g, r)),
                        _ &&
                          v === u &&
                          this.options.appendNamespaceToMissingKey &&
                          (v = "".concat(f, ":").concat(u)),
                        (_ || R) &&
                          this.options.parseMissingKeyHandler &&
                          (v =
                            "v1" !== this.options.compatibilityAPI
                              ? this.options.parseMissingKeyHandler(
                                  this.options.appendNamespaceToMissingKey
                                    ? "".concat(f, ":").concat(u)
                                    : u,
                                  R ? v : void 0
                                )
                              : this.options.parseMissingKeyHandler(v));
                    }
                    return i ? ((g.res = v), g) : v;
                  },
                },
                {
                  key: "extendTranslation",
                  value: function (e, t, n, r, o) {
                    var i = this;
                    if (this.i18nFormat && this.i18nFormat.parse)
                      e = this.i18nFormat.parse(
                        e,
                        Pe(
                          Pe({}, this.options.interpolation.defaultVariables),
                          n
                        ),
                        r.usedLng,
                        r.usedNS,
                        r.usedKey,
                        { resolved: r }
                      );
                    else if (!n.skipInterpolation) {
                      n.interpolation &&
                        this.interpolator.init(
                          Pe(Pe({}, n), {
                            interpolation: Pe(
                              Pe({}, this.options.interpolation),
                              n.interpolation
                            ),
                          })
                        );
                      var a,
                        s =
                          "string" === typeof e &&
                          (n &&
                          n.interpolation &&
                          void 0 !== n.interpolation.skipOnVariables
                            ? n.interpolation.skipOnVariables
                            : this.options.interpolation.skipOnVariables);
                      if (s) {
                        var u = e.match(this.interpolator.nestingRegexp);
                        a = u && u.length;
                      }
                      var c =
                        n.replace && "string" !== typeof n.replace
                          ? n.replace
                          : n;
                      if (
                        (this.options.interpolation.defaultVariables &&
                          (c = Pe(
                            Pe({}, this.options.interpolation.defaultVariables),
                            c
                          )),
                        (e = this.interpolator.interpolate(
                          e,
                          c,
                          n.lng || this.language,
                          n
                        )),
                        s)
                      ) {
                        var l = e.match(this.interpolator.nestingRegexp);
                        a < (l && l.length) && (n.nest = !1);
                      }
                      !1 !== n.nest &&
                        (e = this.interpolator.nest(
                          e,
                          function () {
                            for (
                              var e = arguments.length, r = new Array(e), a = 0;
                              a < e;
                              a++
                            )
                              r[a] = arguments[a];
                            return o && o[0] === r[0] && !n.context
                              ? (i.logger.warn(
                                  "It seems you are nesting recursively key: "
                                    .concat(r[0], " in key: ")
                                    .concat(t[0])
                                ),
                                null)
                              : i.translate.apply(i, r.concat([t]));
                          },
                          n
                        )),
                        n.interpolation && this.interpolator.reset();
                    }
                    var f = n.postProcess || this.options.postProcess,
                      p = "string" === typeof f ? [f] : f;
                    return (
                      void 0 !== e &&
                        null !== e &&
                        p &&
                        p.length &&
                        !1 !== n.applyPostProcessor &&
                        (e = Se.handle(
                          p,
                          e,
                          t,
                          this.options && this.options.postProcessPassResolved
                            ? Pe({ i18nResolved: r }, n)
                            : n,
                          this
                        )),
                      e
                    );
                  },
                },
                {
                  key: "resolve",
                  value: function (e) {
                    var t,
                      n,
                      r,
                      o,
                      i,
                      a = this,
                      s =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {};
                    return (
                      "string" === typeof e && (e = [e]),
                      e.forEach(function (e) {
                        if (!a.isValidLookup(t)) {
                          var u = a.extractFromKey(e, s),
                            c = u.key;
                          n = c;
                          var l = u.namespaces;
                          a.options.fallbackNS &&
                            (l = l.concat(a.options.fallbackNS));
                          var f =
                              void 0 !== s.count && "string" !== typeof s.count,
                            p =
                              f &&
                              !s.ordinal &&
                              0 === s.count &&
                              a.pluralResolver.shouldUseIntlApi(),
                            d =
                              void 0 !== s.context &&
                              ("string" === typeof s.context ||
                                "number" === typeof s.context) &&
                              "" !== s.context,
                            h = s.lngs
                              ? s.lngs
                              : a.languageUtils.toResolveHierarchy(
                                  s.lng || a.language,
                                  s.fallbackLng
                                );
                          l.forEach(function (e) {
                            a.isValidLookup(t) ||
                              ((i = e),
                              !Ee["".concat(h[0], "-").concat(e)] &&
                                a.utils &&
                                a.utils.hasLoadedNamespace &&
                                !a.utils.hasLoadedNamespace(i) &&
                                ((Ee["".concat(h[0], "-").concat(e)] = !0),
                                a.logger.warn(
                                  'key "'
                                    .concat(n, '" for languages "')
                                    .concat(
                                      h.join(", "),
                                      '" won\'t get resolved as namespace "'
                                    )
                                    .concat(i, '" was not yet loaded'),
                                  "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
                                )),
                              h.forEach(function (n) {
                                if (!a.isValidLookup(t)) {
                                  o = n;
                                  var i,
                                    u = [c];
                                  if (
                                    a.i18nFormat &&
                                    a.i18nFormat.addLookupKeys
                                  )
                                    a.i18nFormat.addLookupKeys(u, c, n, e, s);
                                  else {
                                    var l;
                                    f &&
                                      (l = a.pluralResolver.getSuffix(
                                        n,
                                        s.count,
                                        s
                                      ));
                                    var h = "".concat(
                                      a.options.pluralSeparator,
                                      "zero"
                                    );
                                    if (
                                      (f && (u.push(c + l), p && u.push(c + h)),
                                      d)
                                    ) {
                                      var g = ""
                                        .concat(c)
                                        .concat(a.options.contextSeparator)
                                        .concat(s.context);
                                      u.push(g),
                                        f &&
                                          (u.push(g + l), p && u.push(g + h));
                                    }
                                  }
                                  for (; (i = u.pop()); )
                                    a.isValidLookup(t) ||
                                      ((r = i),
                                      (t = a.getResource(n, e, i, s)));
                                }
                              }));
                          });
                        }
                      }),
                      {
                        res: t,
                        usedKey: n,
                        exactUsedKey: r,
                        usedLng: o,
                        usedNS: i,
                      }
                    );
                  },
                },
                {
                  key: "isValidLookup",
                  value: function (e) {
                    return (
                      void 0 !== e &&
                      !(!this.options.returnNull && null === e) &&
                      !(!this.options.returnEmptyString && "" === e)
                    );
                  },
                },
                {
                  key: "getResource",
                  value: function (e, t, n) {
                    var r =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : {};
                    return this.i18nFormat && this.i18nFormat.getResource
                      ? this.i18nFormat.getResource(e, t, n, r)
                      : this.resourceStore.getResource(e, t, n, r);
                  },
                },
              ],
              [
                {
                  key: "hasDefaultValue",
                  value: function (e) {
                    var t = "defaultValue";
                    for (var n in e)
                      if (
                        Object.prototype.hasOwnProperty.call(e, n) &&
                        t === n.substring(0, t.length) &&
                        void 0 !== e[n]
                      )
                        return !0;
                    return !1;
                  },
                },
              ]
            ),
            n
          );
        })(oe);
      function Ce(e) {
        return e.charAt(0).toUpperCase() + e.slice(1);
      }
      var Re = (function () {
          function e(t) {
            b(this, e),
              (this.options = t),
              (this.supportedLngs = this.options.supportedLngs || !1),
              (this.logger = re.create("languageUtils"));
          }
          return (
            w(e, [
              {
                key: "getScriptPartFromCode",
                value: function (e) {
                  if (!e || e.indexOf("-") < 0) return null;
                  var t = e.split("-");
                  return 2 === t.length
                    ? null
                    : (t.pop(),
                      "x" === t[t.length - 1].toLowerCase()
                        ? null
                        : this.formatLanguageCode(t.join("-")));
                },
              },
              {
                key: "getLanguagePartFromCode",
                value: function (e) {
                  if (!e || e.indexOf("-") < 0) return e;
                  var t = e.split("-");
                  return this.formatLanguageCode(t[0]);
                },
              },
              {
                key: "formatLanguageCode",
                value: function (e) {
                  if ("string" === typeof e && e.indexOf("-") > -1) {
                    var t = [
                        "hans",
                        "hant",
                        "latn",
                        "cyrl",
                        "cans",
                        "mong",
                        "arab",
                      ],
                      n = e.split("-");
                    return (
                      this.options.lowerCaseLng
                        ? (n = n.map(function (e) {
                            return e.toLowerCase();
                          }))
                        : 2 === n.length
                        ? ((n[0] = n[0].toLowerCase()),
                          (n[1] = n[1].toUpperCase()),
                          t.indexOf(n[1].toLowerCase()) > -1 &&
                            (n[1] = Ce(n[1].toLowerCase())))
                        : 3 === n.length &&
                          ((n[0] = n[0].toLowerCase()),
                          2 === n[1].length && (n[1] = n[1].toUpperCase()),
                          "sgn" !== n[0] &&
                            2 === n[2].length &&
                            (n[2] = n[2].toUpperCase()),
                          t.indexOf(n[1].toLowerCase()) > -1 &&
                            (n[1] = Ce(n[1].toLowerCase())),
                          t.indexOf(n[2].toLowerCase()) > -1 &&
                            (n[2] = Ce(n[2].toLowerCase()))),
                      n.join("-")
                    );
                  }
                  return this.options.cleanCode || this.options.lowerCaseLng
                    ? e.toLowerCase()
                    : e;
                },
              },
              {
                key: "isSupportedCode",
                value: function (e) {
                  return (
                    ("languageOnly" === this.options.load ||
                      this.options.nonExplicitSupportedLngs) &&
                      (e = this.getLanguagePartFromCode(e)),
                    !this.supportedLngs ||
                      !this.supportedLngs.length ||
                      this.supportedLngs.indexOf(e) > -1
                  );
                },
              },
              {
                key: "getBestMatchFromCodes",
                value: function (e) {
                  var t,
                    n = this;
                  return e
                    ? (e.forEach(function (e) {
                        if (!t) {
                          var r = n.formatLanguageCode(e);
                          (n.options.supportedLngs && !n.isSupportedCode(r)) ||
                            (t = r);
                        }
                      }),
                      !t &&
                        this.options.supportedLngs &&
                        e.forEach(function (e) {
                          if (!t) {
                            var r = n.getLanguagePartFromCode(e);
                            if (n.isSupportedCode(r)) return (t = r);
                            t = n.options.supportedLngs.find(function (e) {
                              if (0 === e.indexOf(r)) return e;
                            });
                          }
                        }),
                      t ||
                        (t = this.getFallbackCodes(
                          this.options.fallbackLng
                        )[0]),
                      t)
                    : null;
                },
              },
              {
                key: "getFallbackCodes",
                value: function (e, t) {
                  if (!e) return [];
                  if (
                    ("function" === typeof e && (e = e(t)),
                    "string" === typeof e && (e = [e]),
                    "[object Array]" === Object.prototype.toString.apply(e))
                  )
                    return e;
                  if (!t) return e.default || [];
                  var n = e[t];
                  return (
                    n || (n = e[this.getScriptPartFromCode(t)]),
                    n || (n = e[this.formatLanguageCode(t)]),
                    n || (n = e[this.getLanguagePartFromCode(t)]),
                    n || (n = e.default),
                    n || []
                  );
                },
              },
              {
                key: "toResolveHierarchy",
                value: function (e, t) {
                  var n = this,
                    r = this.getFallbackCodes(
                      t || this.options.fallbackLng || [],
                      e
                    ),
                    o = [],
                    i = function (e) {
                      e &&
                        (n.isSupportedCode(e)
                          ? o.push(e)
                          : n.logger.warn(
                              "rejecting language code not found in supportedLngs: ".concat(
                                e
                              )
                            ));
                    };
                  return (
                    "string" === typeof e && e.indexOf("-") > -1
                      ? ("languageOnly" !== this.options.load &&
                          i(this.formatLanguageCode(e)),
                        "languageOnly" !== this.options.load &&
                          "currentOnly" !== this.options.load &&
                          i(this.getScriptPartFromCode(e)),
                        "currentOnly" !== this.options.load &&
                          i(this.getLanguagePartFromCode(e)))
                      : "string" === typeof e && i(this.formatLanguageCode(e)),
                    r.forEach(function (e) {
                      o.indexOf(e) < 0 && i(n.formatLanguageCode(e));
                    }),
                    o
                  );
                },
              },
            ]),
            e
          );
        })(),
        _e = [
          {
            lngs: [
              "ach",
              "ak",
              "am",
              "arn",
              "br",
              "fil",
              "gun",
              "ln",
              "mfe",
              "mg",
              "mi",
              "oc",
              "pt",
              "pt-BR",
              "tg",
              "tl",
              "ti",
              "tr",
              "uz",
              "wa",
            ],
            nr: [1, 2],
            fc: 1,
          },
          {
            lngs: [
              "af",
              "an",
              "ast",
              "az",
              "bg",
              "bn",
              "ca",
              "da",
              "de",
              "dev",
              "el",
              "en",
              "eo",
              "es",
              "et",
              "eu",
              "fi",
              "fo",
              "fur",
              "fy",
              "gl",
              "gu",
              "ha",
              "hi",
              "hu",
              "hy",
              "ia",
              "it",
              "kk",
              "kn",
              "ku",
              "lb",
              "mai",
              "ml",
              "mn",
              "mr",
              "nah",
              "nap",
              "nb",
              "ne",
              "nl",
              "nn",
              "no",
              "nso",
              "pa",
              "pap",
              "pms",
              "ps",
              "pt-PT",
              "rm",
              "sco",
              "se",
              "si",
              "so",
              "son",
              "sq",
              "sv",
              "sw",
              "ta",
              "te",
              "tk",
              "ur",
              "yo",
            ],
            nr: [1, 2],
            fc: 2,
          },
          {
            lngs: [
              "ay",
              "bo",
              "cgg",
              "fa",
              "ht",
              "id",
              "ja",
              "jbo",
              "ka",
              "km",
              "ko",
              "ky",
              "lo",
              "ms",
              "sah",
              "su",
              "th",
              "tt",
              "ug",
              "vi",
              "wo",
              "zh",
            ],
            nr: [1],
            fc: 3,
          },
          {
            lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
            nr: [1, 2, 5],
            fc: 4,
          },
          { lngs: ["ar"], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
          { lngs: ["cs", "sk"], nr: [1, 2, 5], fc: 6 },
          { lngs: ["csb", "pl"], nr: [1, 2, 5], fc: 7 },
          { lngs: ["cy"], nr: [1, 2, 3, 8], fc: 8 },
          { lngs: ["fr"], nr: [1, 2], fc: 9 },
          { lngs: ["ga"], nr: [1, 2, 3, 7, 11], fc: 10 },
          { lngs: ["gd"], nr: [1, 2, 3, 20], fc: 11 },
          { lngs: ["is"], nr: [1, 2], fc: 12 },
          { lngs: ["jv"], nr: [0, 1], fc: 13 },
          { lngs: ["kw"], nr: [1, 2, 3, 4], fc: 14 },
          { lngs: ["lt"], nr: [1, 2, 10], fc: 15 },
          { lngs: ["lv"], nr: [1, 2, 0], fc: 16 },
          { lngs: ["mk"], nr: [1, 2], fc: 17 },
          { lngs: ["mnk"], nr: [0, 1, 2], fc: 18 },
          { lngs: ["mt"], nr: [1, 2, 11, 20], fc: 19 },
          { lngs: ["or"], nr: [2, 1], fc: 2 },
          { lngs: ["ro"], nr: [1, 2, 20], fc: 20 },
          { lngs: ["sl"], nr: [5, 1, 2, 3], fc: 21 },
          { lngs: ["he", "iw"], nr: [1, 2, 20, 21], fc: 22 },
        ],
        Ne = {
          1: function (e) {
            return Number(e > 1);
          },
          2: function (e) {
            return Number(1 != e);
          },
          3: function (e) {
            return 0;
          },
          4: function (e) {
            return Number(
              e % 10 == 1 && e % 100 != 11
                ? 0
                : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
                ? 1
                : 2
            );
          },
          5: function (e) {
            return Number(
              0 == e
                ? 0
                : 1 == e
                ? 1
                : 2 == e
                ? 2
                : e % 100 >= 3 && e % 100 <= 10
                ? 3
                : e % 100 >= 11
                ? 4
                : 5
            );
          },
          6: function (e) {
            return Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2);
          },
          7: function (e) {
            return Number(
              1 == e
                ? 0
                : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
                ? 1
                : 2
            );
          },
          8: function (e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3);
          },
          9: function (e) {
            return Number(e >= 2);
          },
          10: function (e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4);
          },
          11: function (e) {
            return Number(
              1 == e || 11 == e
                ? 0
                : 2 == e || 12 == e
                ? 1
                : e > 2 && e < 20
                ? 2
                : 3
            );
          },
          12: function (e) {
            return Number(e % 10 != 1 || e % 100 == 11);
          },
          13: function (e) {
            return Number(0 !== e);
          },
          14: function (e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3);
          },
          15: function (e) {
            return Number(
              e % 10 == 1 && e % 100 != 11
                ? 0
                : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20)
                ? 1
                : 2
            );
          },
          16: function (e) {
            return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2);
          },
          17: function (e) {
            return Number(1 == e || (e % 10 == 1 && e % 100 != 11) ? 0 : 1);
          },
          18: function (e) {
            return Number(0 == e ? 0 : 1 == e ? 1 : 2);
          },
          19: function (e) {
            return Number(
              1 == e
                ? 0
                : 0 == e || (e % 100 > 1 && e % 100 < 11)
                ? 1
                : e % 100 > 10 && e % 100 < 20
                ? 2
                : 3
            );
          },
          20: function (e) {
            return Number(
              1 == e ? 0 : 0 == e || (e % 100 > 0 && e % 100 < 20) ? 1 : 2
            );
          },
          21: function (e) {
            return Number(
              e % 100 == 1
                ? 1
                : e % 100 == 2
                ? 2
                : e % 100 == 3 || e % 100 == 4
                ? 3
                : 0
            );
          },
          22: function (e) {
            return Number(
              1 == e ? 0 : 2 == e ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3
            );
          },
        },
        Te = ["v1", "v2", "v3"],
        Ae = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 };
      function De() {
        var e = {};
        return (
          _e.forEach(function (t) {
            t.lngs.forEach(function (n) {
              e[n] = { numbers: t.nr, plurals: Ne[t.fc] };
            });
          }),
          e
        );
      }
      var Me = (function () {
        function e(t) {
          var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          b(this, e),
            (this.languageUtils = t),
            (this.options = n),
            (this.logger = re.create("pluralResolver")),
            (this.options.compatibilityJSON &&
              "v4" !== this.options.compatibilityJSON) ||
              ("undefined" !== typeof Intl && Intl.PluralRules) ||
              ((this.options.compatibilityJSON = "v3"),
              this.logger.error(
                "Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling."
              )),
            (this.rules = De());
        }
        return (
          w(e, [
            {
              key: "addRule",
              value: function (e, t) {
                this.rules[e] = t;
              },
            },
            {
              key: "getRule",
              value: function (e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                if (this.shouldUseIntlApi())
                  try {
                    return new Intl.PluralRules(e, {
                      type: t.ordinal ? "ordinal" : "cardinal",
                    });
                  } catch (n) {
                    return;
                  }
                return (
                  this.rules[e] ||
                  this.rules[this.languageUtils.getLanguagePartFromCode(e)]
                );
              },
            },
            {
              key: "needsPlural",
              value: function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  n = this.getRule(e, t);
                return this.shouldUseIntlApi()
                  ? n && n.resolvedOptions().pluralCategories.length > 1
                  : n && n.numbers.length > 1;
              },
            },
            {
              key: "getPluralFormsOfKey",
              value: function (e, t) {
                var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
                return this.getSuffixes(e, n).map(function (e) {
                  return "".concat(t).concat(e);
                });
              },
            },
            {
              key: "getSuffixes",
              value: function (e) {
                var t = this,
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  r = this.getRule(e, n);
                return r
                  ? this.shouldUseIntlApi()
                    ? r
                        .resolvedOptions()
                        .pluralCategories.sort(function (e, t) {
                          return Ae[e] - Ae[t];
                        })
                        .map(function (e) {
                          return "".concat(t.options.prepend).concat(e);
                        })
                    : r.numbers.map(function (r) {
                        return t.getSuffix(e, r, n);
                      })
                  : [];
              },
            },
            {
              key: "getSuffix",
              value: function (e, t) {
                var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {},
                  r = this.getRule(e, n);
                return r
                  ? this.shouldUseIntlApi()
                    ? "".concat(this.options.prepend).concat(r.select(t))
                    : this.getSuffixRetroCompatible(r, t)
                  : (this.logger.warn("no plural rule found for: ".concat(e)),
                    "");
              },
            },
            {
              key: "getSuffixRetroCompatible",
              value: function (e, t) {
                var n = this,
                  r = e.noAbs ? e.plurals(t) : e.plurals(Math.abs(t)),
                  o = e.numbers[r];
                this.options.simplifyPluralSuffix &&
                  2 === e.numbers.length &&
                  1 === e.numbers[0] &&
                  (2 === o ? (o = "plural") : 1 === o && (o = ""));
                var i = function () {
                  return n.options.prepend && o.toString()
                    ? n.options.prepend + o.toString()
                    : o.toString();
                };
                return "v1" === this.options.compatibilityJSON
                  ? 1 === o
                    ? ""
                    : "number" === typeof o
                    ? "_plural_".concat(o.toString())
                    : i()
                  : "v2" === this.options.compatibilityJSON ||
                    (this.options.simplifyPluralSuffix &&
                      2 === e.numbers.length &&
                      1 === e.numbers[0])
                  ? i()
                  : this.options.prepend && r.toString()
                  ? this.options.prepend + r.toString()
                  : r.toString();
              },
            },
            {
              key: "shouldUseIntlApi",
              value: function () {
                return !Te.includes(this.options.compatibilityJSON);
              },
            },
          ]),
          e
        );
      })();
      function Fe(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Ie(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Fe(Object(n), !0).forEach(function (t) {
                p(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Fe(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var Ue = (function () {
        function e() {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          b(this, e),
            (this.logger = re.create("interpolator")),
            (this.options = t),
            (this.format =
              (t.interpolation && t.interpolation.format) ||
              function (e) {
                return e;
              }),
            this.init(t);
        }
        return (
          w(e, [
            {
              key: "init",
              value: function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                e.interpolation || (e.interpolation = { escapeValue: !0 });
                var t = e.interpolation;
                (this.escape = void 0 !== t.escape ? t.escape : ge),
                  (this.escapeValue =
                    void 0 === t.escapeValue || t.escapeValue),
                  (this.useRawValueToEscape =
                    void 0 !== t.useRawValueToEscape && t.useRawValueToEscape),
                  (this.prefix = t.prefix
                    ? de(t.prefix)
                    : t.prefixEscaped || "{{"),
                  (this.suffix = t.suffix
                    ? de(t.suffix)
                    : t.suffixEscaped || "}}"),
                  (this.formatSeparator = t.formatSeparator
                    ? t.formatSeparator
                    : t.formatSeparator || ","),
                  (this.unescapePrefix = t.unescapeSuffix
                    ? ""
                    : t.unescapePrefix || "-"),
                  (this.unescapeSuffix = this.unescapePrefix
                    ? ""
                    : t.unescapeSuffix || ""),
                  (this.nestingPrefix = t.nestingPrefix
                    ? de(t.nestingPrefix)
                    : t.nestingPrefixEscaped || de("$t(")),
                  (this.nestingSuffix = t.nestingSuffix
                    ? de(t.nestingSuffix)
                    : t.nestingSuffixEscaped || de(")")),
                  (this.nestingOptionsSeparator = t.nestingOptionsSeparator
                    ? t.nestingOptionsSeparator
                    : t.nestingOptionsSeparator || ","),
                  (this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3),
                  (this.alwaysFormat =
                    void 0 !== t.alwaysFormat && t.alwaysFormat),
                  this.resetRegExp();
              },
            },
            {
              key: "reset",
              value: function () {
                this.options && this.init(this.options);
              },
            },
            {
              key: "resetRegExp",
              value: function () {
                var e = "".concat(this.prefix, "(.+?)").concat(this.suffix);
                this.regexp = new RegExp(e, "g");
                var t = ""
                  .concat(this.prefix)
                  .concat(this.unescapePrefix, "(.+?)")
                  .concat(this.unescapeSuffix)
                  .concat(this.suffix);
                this.regexpUnescape = new RegExp(t, "g");
                var n = ""
                  .concat(this.nestingPrefix, "(.+?)")
                  .concat(this.nestingSuffix);
                this.nestingRegexp = new RegExp(n, "g");
              },
            },
            {
              key: "interpolate",
              value: function (e, t, n, r) {
                var o,
                  i,
                  a,
                  s = this,
                  u =
                    (this.options &&
                      this.options.interpolation &&
                      this.options.interpolation.defaultVariables) ||
                    {};
                function c(e) {
                  return e.replace(/\$/g, "$$$$");
                }
                var l = function (e) {
                  if (e.indexOf(s.formatSeparator) < 0) {
                    var o = fe(t, u, e);
                    return s.alwaysFormat
                      ? s.format(
                          o,
                          void 0,
                          n,
                          Ie(Ie(Ie({}, r), t), {}, { interpolationkey: e })
                        )
                      : o;
                  }
                  var i = e.split(s.formatSeparator),
                    a = i.shift().trim(),
                    c = i.join(s.formatSeparator).trim();
                  return s.format(
                    fe(t, u, a),
                    c,
                    n,
                    Ie(Ie(Ie({}, r), t), {}, { interpolationkey: a })
                  );
                };
                this.resetRegExp();
                var f =
                    (r && r.missingInterpolationHandler) ||
                    this.options.missingInterpolationHandler,
                  p =
                    r &&
                    r.interpolation &&
                    void 0 !== r.interpolation.skipOnVariables
                      ? r.interpolation.skipOnVariables
                      : this.options.interpolation.skipOnVariables;
                return (
                  [
                    {
                      regex: this.regexpUnescape,
                      safeValue: function (e) {
                        return c(e);
                      },
                    },
                    {
                      regex: this.regexp,
                      safeValue: function (e) {
                        return s.escapeValue ? c(s.escape(e)) : c(e);
                      },
                    },
                  ].forEach(function (t) {
                    for (a = 0; (o = t.regex.exec(e)); ) {
                      var n = o[1].trim();
                      if (void 0 === (i = l(n)))
                        if ("function" === typeof f) {
                          var u = f(e, o, r);
                          i = "string" === typeof u ? u : "";
                        } else if (
                          r &&
                          Object.prototype.hasOwnProperty.call(r, n)
                        )
                          i = "";
                        else {
                          if (p) {
                            i = o[0];
                            continue;
                          }
                          s.logger.warn(
                            "missed to pass in variable "
                              .concat(n, " for interpolating ")
                              .concat(e)
                          ),
                            (i = "");
                        }
                      else
                        "string" === typeof i ||
                          s.useRawValueToEscape ||
                          (i = ae(i));
                      var c = t.safeValue(i);
                      if (
                        ((e = e.replace(o[0], c)),
                        p
                          ? ((t.regex.lastIndex += i.length),
                            (t.regex.lastIndex -= o[0].length))
                          : (t.regex.lastIndex = 0),
                        ++a >= s.maxReplaces)
                      )
                        break;
                    }
                  }),
                  e
                );
              },
            },
            {
              key: "nest",
              value: function (e, t) {
                var n,
                  r,
                  o,
                  i = this,
                  a =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                function s(e, t) {
                  var n = this.nestingOptionsSeparator;
                  if (e.indexOf(n) < 0) return e;
                  var r = e.split(new RegExp("".concat(n, "[ ]*{"))),
                    i = "{".concat(r[1]);
                  e = r[0];
                  var a = (i = this.interpolate(i, o)).match(/'/g),
                    s = i.match(/"/g);
                  ((a && a.length % 2 === 0 && !s) || s.length % 2 !== 0) &&
                    (i = i.replace(/'/g, '"'));
                  try {
                    (o = JSON.parse(i)), t && (o = Ie(Ie({}, t), o));
                  } catch (u) {
                    return (
                      this.logger.warn(
                        "failed parsing options string in nesting for key ".concat(
                          e
                        ),
                        u
                      ),
                      "".concat(e).concat(n).concat(i)
                    );
                  }
                  return delete o.defaultValue, e;
                }
                for (; (n = this.nestingRegexp.exec(e)); ) {
                  var u = [];
                  ((o =
                    (o = Ie({}, a)).replace && "string" !== typeof o.replace
                      ? o.replace
                      : o).applyPostProcessor = !1),
                    delete o.defaultValue;
                  var c = !1;
                  if (
                    -1 !== n[0].indexOf(this.formatSeparator) &&
                    !/{.*}/.test(n[1])
                  ) {
                    var l = n[1].split(this.formatSeparator).map(function (e) {
                      return e.trim();
                    });
                    (n[1] = l.shift()), (u = l), (c = !0);
                  }
                  if (
                    (r = t(s.call(this, n[1].trim(), o), o)) &&
                    n[0] === e &&
                    "string" !== typeof r
                  )
                    return r;
                  "string" !== typeof r && (r = ae(r)),
                    r ||
                      (this.logger.warn(
                        "missed to resolve "
                          .concat(n[1], " for nesting ")
                          .concat(e)
                      ),
                      (r = "")),
                    c &&
                      (r = u.reduce(function (e, t) {
                        return i.format(
                          e,
                          t,
                          a.lng,
                          Ie(Ie({}, a), {}, { interpolationkey: n[1].trim() })
                        );
                      }, r.trim())),
                    (e = e.replace(n[0], r)),
                    (this.regexp.lastIndex = 0);
                }
                return e;
              },
            },
          ]),
          e
        );
      })();
      function qe(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Ke(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? qe(Object(n), !0).forEach(function (t) {
                p(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : qe(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function Be(e) {
        var t = e.toLowerCase().trim(),
          n = {};
        if (e.indexOf("(") > -1) {
          var r = e.split("(");
          t = r[0].toLowerCase().trim();
          var o = r[1].substring(0, r[1].length - 1);
          if ("currency" === t && o.indexOf(":") < 0)
            n.currency || (n.currency = o.trim());
          else if ("relativetime" === t && o.indexOf(":") < 0)
            n.range || (n.range = o.trim());
          else {
            o.split(";").forEach(function (e) {
              if (e) {
                var t,
                  r = e.split(":"),
                  o = P((t = r)) || I(t) || E(t) || L(),
                  i = o[0],
                  a = o
                    .slice(1)
                    .join(":")
                    .trim()
                    .replace(/^'+|'+$/g, "");
                n[i.trim()] || (n[i.trim()] = a),
                  "false" === a && (n[i.trim()] = !1),
                  "true" === a && (n[i.trim()] = !0),
                  isNaN(a) || (n[i.trim()] = parseInt(a, 10));
              }
            });
          }
        }
        return { formatName: t, formatOptions: n };
      }
      function He(e) {
        var t = {};
        return function (n, r, o) {
          var i = r + JSON.stringify(o),
            a = t[i];
          return a || ((a = e(r, o)), (t[i] = a)), a(n);
        };
      }
      var Ve = (function () {
        function e() {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          b(this, e),
            (this.logger = re.create("formatter")),
            (this.options = t),
            (this.formats = {
              number: He(function (e, t) {
                var n = new Intl.NumberFormat(e, Ke({}, t));
                return function (e) {
                  return n.format(e);
                };
              }),
              currency: He(function (e, t) {
                var n = new Intl.NumberFormat(
                  e,
                  Ke(Ke({}, t), {}, { style: "currency" })
                );
                return function (e) {
                  return n.format(e);
                };
              }),
              datetime: He(function (e, t) {
                var n = new Intl.DateTimeFormat(e, Ke({}, t));
                return function (e) {
                  return n.format(e);
                };
              }),
              relativetime: He(function (e, t) {
                var n = new Intl.RelativeTimeFormat(e, Ke({}, t));
                return function (e) {
                  return n.format(e, t.range || "day");
                };
              }),
              list: He(function (e, t) {
                var n = new Intl.ListFormat(e, Ke({}, t));
                return function (e) {
                  return n.format(e);
                };
              }),
            }),
            this.init(t);
        }
        return (
          w(e, [
            {
              key: "init",
              value: function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : { interpolation: {} },
                  n = t.interpolation;
                this.formatSeparator = n.formatSeparator
                  ? n.formatSeparator
                  : n.formatSeparator || ",";
              },
            },
            {
              key: "add",
              value: function (e, t) {
                this.formats[e.toLowerCase().trim()] = t;
              },
            },
            {
              key: "addCached",
              value: function (e, t) {
                this.formats[e.toLowerCase().trim()] = He(t);
              },
            },
            {
              key: "format",
              value: function (e, t, n) {
                var r = this,
                  o =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : {},
                  i = t.split(this.formatSeparator),
                  a = i.reduce(function (e, t) {
                    var i = Be(t),
                      a = i.formatName,
                      s = i.formatOptions;
                    if (r.formats[a]) {
                      var u = e;
                      try {
                        var c =
                            (o &&
                              o.formatParams &&
                              o.formatParams[o.interpolationkey]) ||
                            {},
                          l = c.locale || c.lng || o.locale || o.lng || n;
                        u = r.formats[a](e, l, Ke(Ke(Ke({}, s), o), c));
                      } catch (f) {
                        r.logger.warn(f);
                      }
                      return u;
                    }
                    return (
                      r.logger.warn(
                        "there was no format function for ".concat(a)
                      ),
                      e
                    );
                  }, e);
                return a;
              },
            },
          ]),
          e
        );
      })();
      function $e(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Qe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? $e(Object(n), !0).forEach(function (t) {
                p(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : $e(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function ze(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = Y(e);
          if (t) {
            var o = Y(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return X(this, n);
        };
      }
      var Je = (function (e) {
        W(n, e);
        var t = ze(n);
        function n(e, r, o) {
          var i,
            a =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {};
          return (
            b(this, n),
            (i = t.call(this)),
            ve && oe.call(J(i)),
            (i.backend = e),
            (i.store = r),
            (i.services = o),
            (i.languageUtils = o.languageUtils),
            (i.options = a),
            (i.logger = re.create("backendConnector")),
            (i.waitingReads = []),
            (i.maxParallelReads = a.maxParallelReads || 10),
            (i.readingCalls = 0),
            (i.maxRetries = a.maxRetries >= 0 ? a.maxRetries : 5),
            (i.retryTimeout = a.retryTimeout >= 1 ? a.retryTimeout : 350),
            (i.state = {}),
            (i.queue = []),
            i.backend && i.backend.init && i.backend.init(o, a.backend, a),
            i
          );
        }
        return (
          w(n, [
            {
              key: "queueLoad",
              value: function (e, t, n, r) {
                var o = this,
                  i = {},
                  a = {},
                  s = {},
                  u = {};
                return (
                  e.forEach(function (e) {
                    var r = !0;
                    t.forEach(function (t) {
                      var s = "".concat(e, "|").concat(t);
                      !n.reload && o.store.hasResourceBundle(e, t)
                        ? (o.state[s] = 2)
                        : o.state[s] < 0 ||
                          (1 === o.state[s]
                            ? void 0 === a[s] && (a[s] = !0)
                            : ((o.state[s] = 1),
                              (r = !1),
                              void 0 === a[s] && (a[s] = !0),
                              void 0 === i[s] && (i[s] = !0),
                              void 0 === u[t] && (u[t] = !0)));
                    }),
                      r || (s[e] = !0);
                  }),
                  (Object.keys(i).length || Object.keys(a).length) &&
                    this.queue.push({
                      pending: a,
                      pendingCount: Object.keys(a).length,
                      loaded: {},
                      errors: [],
                      callback: r,
                    }),
                  {
                    toLoad: Object.keys(i),
                    pending: Object.keys(a),
                    toLoadLanguages: Object.keys(s),
                    toLoadNamespaces: Object.keys(u),
                  }
                );
              },
            },
            {
              key: "loaded",
              value: function (e, t, n) {
                var r = e.split("|"),
                  o = r[0],
                  i = r[1];
                t && this.emit("failedLoading", o, i, t),
                  n && this.store.addResourceBundle(o, i, n),
                  (this.state[e] = t ? -1 : 2);
                var a = {};
                this.queue.forEach(function (n) {
                  !(function (e, t, n, r) {
                    var o = ue(e, t, Object),
                      i = o.obj,
                      a = o.k;
                    (i[a] = i[a] || []),
                      r && (i[a] = i[a].concat(n)),
                      r || i[a].push(n);
                  })(n.loaded, [o], i),
                    (function (e, t) {
                      void 0 !== e.pending[t] &&
                        (delete e.pending[t], e.pendingCount--);
                    })(n, e),
                    t && n.errors.push(t),
                    0 !== n.pendingCount ||
                      n.done ||
                      (Object.keys(n.loaded).forEach(function (e) {
                        a[e] || (a[e] = {});
                        var t = n.loaded[e];
                        t.length &&
                          t.forEach(function (t) {
                            void 0 === a[e][t] && (a[e][t] = !0);
                          });
                      }),
                      (n.done = !0),
                      n.errors.length ? n.callback(n.errors) : n.callback());
                }),
                  this.emit("loaded", a),
                  (this.queue = this.queue.filter(function (e) {
                    return !e.done;
                  }));
              },
            },
            {
              key: "read",
              value: function (e, t, n) {
                var r = this,
                  o =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : 0,
                  i =
                    arguments.length > 4 && void 0 !== arguments[4]
                      ? arguments[4]
                      : this.retryTimeout,
                  a = arguments.length > 5 ? arguments[5] : void 0;
                if (!e.length) return a(null, {});
                if (this.readingCalls >= this.maxParallelReads)
                  this.waitingReads.push({
                    lng: e,
                    ns: t,
                    fcName: n,
                    tried: o,
                    wait: i,
                    callback: a,
                  });
                else {
                  this.readingCalls++;
                  var s = function (s, u) {
                      if ((r.readingCalls--, r.waitingReads.length > 0)) {
                        var c = r.waitingReads.shift();
                        r.read(
                          c.lng,
                          c.ns,
                          c.fcName,
                          c.tried,
                          c.wait,
                          c.callback
                        );
                      }
                      s && u && o < r.maxRetries
                        ? setTimeout(function () {
                            r.read.call(r, e, t, n, o + 1, 2 * i, a);
                          }, i)
                        : a(s, u);
                    },
                    u = this.backend[n].bind(this.backend);
                  if (2 !== u.length) return u(e, t, s);
                  try {
                    var c = u(e, t);
                    c && "function" === typeof c.then
                      ? c
                          .then(function (e) {
                            return s(null, e);
                          })
                          .catch(s)
                      : s(null, c);
                  } catch (l) {
                    s(l);
                  }
                }
              },
            },
            {
              key: "prepareLoading",
              value: function (e, t) {
                var n = this,
                  r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {},
                  o = arguments.length > 3 ? arguments[3] : void 0;
                if (!this.backend)
                  return (
                    this.logger.warn(
                      "No backend was added via i18next.use. Will not load resources."
                    ),
                    o && o()
                  );
                "string" === typeof e &&
                  (e = this.languageUtils.toResolveHierarchy(e)),
                  "string" === typeof t && (t = [t]);
                var i = this.queueLoad(e, t, r, o);
                if (!i.toLoad.length) return i.pending.length || o(), null;
                i.toLoad.forEach(function (e) {
                  n.loadOne(e);
                });
              },
            },
            {
              key: "load",
              value: function (e, t, n) {
                this.prepareLoading(e, t, {}, n);
              },
            },
            {
              key: "reload",
              value: function (e, t, n) {
                this.prepareLoading(e, t, { reload: !0 }, n);
              },
            },
            {
              key: "loadOne",
              value: function (e) {
                var t = this,
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : "",
                  r = e.split("|"),
                  o = r[0],
                  i = r[1];
                this.read(o, i, "read", void 0, void 0, function (r, a) {
                  r &&
                    t.logger.warn(
                      ""
                        .concat(n, "loading namespace ")
                        .concat(i, " for language ")
                        .concat(o, " failed"),
                      r
                    ),
                    !r &&
                      a &&
                      t.logger.log(
                        ""
                          .concat(n, "loaded namespace ")
                          .concat(i, " for language ")
                          .concat(o),
                        a
                      ),
                    t.loaded(e, r, a);
                });
              },
            },
            {
              key: "saveMissing",
              value: function (e, t, n, r, o) {
                var i =
                    arguments.length > 5 && void 0 !== arguments[5]
                      ? arguments[5]
                      : {},
                  a =
                    arguments.length > 6 && void 0 !== arguments[6]
                      ? arguments[6]
                      : function () {};
                if (
                  this.services.utils &&
                  this.services.utils.hasLoadedNamespace &&
                  !this.services.utils.hasLoadedNamespace(t)
                )
                  this.logger.warn(
                    'did not save key "'
                      .concat(n, '" as the namespace "')
                      .concat(t, '" was not yet loaded'),
                    "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
                  );
                else if (void 0 !== n && null !== n && "" !== n) {
                  if (this.backend && this.backend.create) {
                    var s = Qe(Qe({}, i), {}, { isUpdate: o }),
                      u = this.backend.create.bind(this.backend);
                    if (u.length < 6)
                      try {
                        var c;
                        (c =
                          5 === u.length ? u(e, t, n, r, s) : u(e, t, n, r)) &&
                        "function" === typeof c.then
                          ? c
                              .then(function (e) {
                                return a(null, e);
                              })
                              .catch(a)
                          : a(null, c);
                      } catch (l) {
                        a(l);
                      }
                    else u(e, t, n, r, a, s);
                  }
                  e && e[0] && this.store.addResource(e[0], t, n, r);
                }
              },
            },
          ]),
          n
        );
      })(oe);
      function Ge() {
        return {
          debug: !1,
          initImmediate: !0,
          ns: ["translation"],
          defaultNS: ["translation"],
          fallbackLng: ["dev"],
          fallbackNS: !1,
          supportedLngs: !1,
          nonExplicitSupportedLngs: !1,
          load: "all",
          preload: !1,
          simplifyPluralSuffix: !0,
          keySeparator: ".",
          nsSeparator: ":",
          pluralSeparator: "_",
          contextSeparator: "_",
          partialBundledLanguages: !1,
          saveMissing: !1,
          updateMissing: !1,
          saveMissingTo: "fallback",
          saveMissingPlurals: !0,
          missingKeyHandler: !1,
          missingInterpolationHandler: !1,
          postProcess: !1,
          postProcessPassResolved: !1,
          returnNull: !0,
          returnEmptyString: !0,
          returnObjects: !1,
          joinArrays: !1,
          returnedObjectHandler: !1,
          parseMissingKeyHandler: !1,
          appendNamespaceToMissingKey: !1,
          appendNamespaceToCIMode: !1,
          overloadTranslationOptionHandler: function (e) {
            var t = {};
            if (
              ("object" === l(e[1]) && (t = e[1]),
              "string" === typeof e[1] && (t.defaultValue = e[1]),
              "string" === typeof e[2] && (t.tDescription = e[2]),
              "object" === l(e[2]) || "object" === l(e[3]))
            ) {
              var n = e[3] || e[2];
              Object.keys(n).forEach(function (e) {
                t[e] = n[e];
              });
            }
            return t;
          },
          interpolation: {
            escapeValue: !0,
            format: function (e, t, n, r) {
              return e;
            },
            prefix: "{{",
            suffix: "}}",
            formatSeparator: ",",
            unescapePrefix: "-",
            nestingPrefix: "$t(",
            nestingSuffix: ")",
            nestingOptionsSeparator: ",",
            maxReplaces: 1e3,
            skipOnVariables: !0,
          },
        };
      }
      function We(e) {
        return (
          "string" === typeof e.ns && (e.ns = [e.ns]),
          "string" === typeof e.fallbackLng &&
            (e.fallbackLng = [e.fallbackLng]),
          "string" === typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]),
          e.supportedLngs &&
            e.supportedLngs.indexOf("cimode") < 0 &&
            (e.supportedLngs = e.supportedLngs.concat(["cimode"])),
          e
        );
      }
      function Xe(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Ye(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Xe(Object(n), !0).forEach(function (t) {
                p(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Xe(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function Ze(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = Y(e);
          if (t) {
            var o = Y(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return X(this, n);
        };
      }
      function et() {}
      function tt(e) {
        Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(function (
          t
        ) {
          "function" === typeof e[t] && (e[t] = e[t].bind(e));
        });
      }
      var nt = (function (e) {
        W(n, e);
        var t = Ze(n);
        function n() {
          var e,
            r =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            o = arguments.length > 1 ? arguments[1] : void 0;
          if (
            (b(this, n),
            (e = t.call(this)),
            ve && oe.call(J(e)),
            (e.options = We(r)),
            (e.services = {}),
            (e.logger = re),
            (e.modules = { external: [] }),
            tt(J(e)),
            o && !e.isInitialized && !r.isClone)
          ) {
            if (!e.options.initImmediate) return e.init(r, o), X(e, J(e));
            setTimeout(function () {
              e.init(r, o);
            }, 0);
          }
          return e;
        }
        return (
          w(n, [
            {
              key: "init",
              value: function () {
                var e = this,
                  t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  n = arguments.length > 1 ? arguments[1] : void 0;
                "function" === typeof t && ((n = t), (t = {})),
                  !t.defaultNS &&
                    !1 !== t.defaultNS &&
                    t.ns &&
                    ("string" === typeof t.ns
                      ? (t.defaultNS = t.ns)
                      : t.ns.indexOf("translation") < 0 &&
                        (t.defaultNS = t.ns[0]));
                var r = Ge();
                function o(e) {
                  return e ? ("function" === typeof e ? new e() : e) : null;
                }
                if (
                  ((this.options = Ye(Ye(Ye({}, r), this.options), We(t))),
                  "v1" !== this.options.compatibilityAPI &&
                    (this.options.interpolation = Ye(
                      Ye({}, r.interpolation),
                      this.options.interpolation
                    )),
                  void 0 !== t.keySeparator &&
                    (this.options.userDefinedKeySeparator = t.keySeparator),
                  void 0 !== t.nsSeparator &&
                    (this.options.userDefinedNsSeparator = t.nsSeparator),
                  !this.options.isClone)
                ) {
                  var i;
                  this.modules.logger
                    ? re.init(o(this.modules.logger), this.options)
                    : re.init(null, this.options),
                    this.modules.formatter
                      ? (i = this.modules.formatter)
                      : "undefined" !== typeof Intl && (i = Ve);
                  var a = new Re(this.options);
                  this.store = new xe(this.options.resources, this.options);
                  var s = this.services;
                  (s.logger = re),
                    (s.resourceStore = this.store),
                    (s.languageUtils = a),
                    (s.pluralResolver = new Me(a, {
                      prepend: this.options.pluralSeparator,
                      compatibilityJSON: this.options.compatibilityJSON,
                      simplifyPluralSuffix: this.options.simplifyPluralSuffix,
                    })),
                    !i ||
                      (this.options.interpolation.format &&
                        this.options.interpolation.format !==
                          r.interpolation.format) ||
                      ((s.formatter = o(i)),
                      s.formatter.init(s, this.options),
                      (this.options.interpolation.format =
                        s.formatter.format.bind(s.formatter))),
                    (s.interpolator = new Ue(this.options)),
                    (s.utils = {
                      hasLoadedNamespace: this.hasLoadedNamespace.bind(this),
                    }),
                    (s.backendConnector = new Je(
                      o(this.modules.backend),
                      s.resourceStore,
                      s,
                      this.options
                    )),
                    s.backendConnector.on("*", function (t) {
                      for (
                        var n = arguments.length,
                          r = new Array(n > 1 ? n - 1 : 0),
                          o = 1;
                        o < n;
                        o++
                      )
                        r[o - 1] = arguments[o];
                      e.emit.apply(e, [t].concat(r));
                    }),
                    this.modules.languageDetector &&
                      ((s.languageDetector = o(this.modules.languageDetector)),
                      s.languageDetector.init &&
                        s.languageDetector.init(
                          s,
                          this.options.detection,
                          this.options
                        )),
                    this.modules.i18nFormat &&
                      ((s.i18nFormat = o(this.modules.i18nFormat)),
                      s.i18nFormat.init && s.i18nFormat.init(this)),
                    (this.translator = new Le(this.services, this.options)),
                    this.translator.on("*", function (t) {
                      for (
                        var n = arguments.length,
                          r = new Array(n > 1 ? n - 1 : 0),
                          o = 1;
                        o < n;
                        o++
                      )
                        r[o - 1] = arguments[o];
                      e.emit.apply(e, [t].concat(r));
                    }),
                    this.modules.external.forEach(function (t) {
                      t.init && t.init(e);
                    });
                }
                if (
                  ((this.format = this.options.interpolation.format),
                  n || (n = et),
                  this.options.fallbackLng &&
                    !this.services.languageDetector &&
                    !this.options.lng)
                ) {
                  var u = this.services.languageUtils.getFallbackCodes(
                    this.options.fallbackLng
                  );
                  u.length > 0 && "dev" !== u[0] && (this.options.lng = u[0]);
                }
                this.services.languageDetector ||
                  this.options.lng ||
                  this.logger.warn(
                    "init: no languageDetector is used and no lng is defined"
                  );
                var c = [
                  "getResource",
                  "hasResourceBundle",
                  "getResourceBundle",
                  "getDataByLanguage",
                ];
                c.forEach(function (t) {
                  e[t] = function () {
                    var n;
                    return (n = e.store)[t].apply(n, arguments);
                  };
                });
                var l = [
                  "addResource",
                  "addResources",
                  "addResourceBundle",
                  "removeResourceBundle",
                ];
                l.forEach(function (t) {
                  e[t] = function () {
                    var n;
                    return (n = e.store)[t].apply(n, arguments), e;
                  };
                });
                var f = ie(),
                  p = function () {
                    var t = function (t, r) {
                      e.isInitialized &&
                        !e.initializedStoreOnce &&
                        e.logger.warn(
                          "init: i18next is already initialized. You should call init just once!"
                        ),
                        (e.isInitialized = !0),
                        e.options.isClone ||
                          e.logger.log("initialized", e.options),
                        e.emit("initialized", e.options),
                        f.resolve(r),
                        n(t, r);
                    };
                    if (
                      e.languages &&
                      "v1" !== e.options.compatibilityAPI &&
                      !e.isInitialized
                    )
                      return t(null, e.t.bind(e));
                    e.changeLanguage(e.options.lng, t);
                  };
                return (
                  this.options.resources || !this.options.initImmediate
                    ? p()
                    : setTimeout(p, 0),
                  f
                );
              },
            },
            {
              key: "loadResources",
              value: function (e) {
                var t = this,
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : et,
                  r = n,
                  o = "string" === typeof e ? e : this.language;
                if (
                  ("function" === typeof e && (r = e),
                  !this.options.resources ||
                    this.options.partialBundledLanguages)
                ) {
                  if (o && "cimode" === o.toLowerCase()) return r();
                  var i = [],
                    a = function (e) {
                      e &&
                        t.services.languageUtils
                          .toResolveHierarchy(e)
                          .forEach(function (e) {
                            i.indexOf(e) < 0 && i.push(e);
                          });
                    };
                  if (o) a(o);
                  else {
                    var s = this.services.languageUtils.getFallbackCodes(
                      this.options.fallbackLng
                    );
                    s.forEach(function (e) {
                      return a(e);
                    });
                  }
                  this.options.preload &&
                    this.options.preload.forEach(function (e) {
                      return a(e);
                    }),
                    this.services.backendConnector.load(
                      i,
                      this.options.ns,
                      function (e) {
                        e ||
                          t.resolvedLanguage ||
                          !t.language ||
                          t.setResolvedLanguage(t.language),
                          r(e);
                      }
                    );
                } else r(null);
              },
            },
            {
              key: "reloadResources",
              value: function (e, t, n) {
                var r = ie();
                return (
                  e || (e = this.languages),
                  t || (t = this.options.ns),
                  n || (n = et),
                  this.services.backendConnector.reload(e, t, function (e) {
                    r.resolve(), n(e);
                  }),
                  r
                );
              },
            },
            {
              key: "use",
              value: function (e) {
                if (!e)
                  throw new Error(
                    "You are passing an undefined module! Please check the object you are passing to i18next.use()"
                  );
                if (!e.type)
                  throw new Error(
                    "You are passing a wrong module! Please check the object you are passing to i18next.use()"
                  );
                return (
                  "backend" === e.type && (this.modules.backend = e),
                  ("logger" === e.type || (e.log && e.warn && e.error)) &&
                    (this.modules.logger = e),
                  "languageDetector" === e.type &&
                    (this.modules.languageDetector = e),
                  "i18nFormat" === e.type && (this.modules.i18nFormat = e),
                  "postProcessor" === e.type && Se.addPostProcessor(e),
                  "formatter" === e.type && (this.modules.formatter = e),
                  "3rdParty" === e.type && this.modules.external.push(e),
                  this
                );
              },
            },
            {
              key: "setResolvedLanguage",
              value: function (e) {
                if (e && this.languages && !(["cimode", "dev"].indexOf(e) > -1))
                  for (var t = 0; t < this.languages.length; t++) {
                    var n = this.languages[t];
                    if (
                      !(["cimode", "dev"].indexOf(n) > -1) &&
                      this.store.hasLanguageSomeTranslations(n)
                    ) {
                      this.resolvedLanguage = n;
                      break;
                    }
                  }
              },
            },
            {
              key: "changeLanguage",
              value: function (e, t) {
                var n = this;
                this.isLanguageChangingTo = e;
                var r = ie();
                this.emit("languageChanging", e);
                var o = function (e) {
                    (n.language = e),
                      (n.languages =
                        n.services.languageUtils.toResolveHierarchy(e)),
                      (n.resolvedLanguage = void 0),
                      n.setResolvedLanguage(e);
                  },
                  i = function (i) {
                    e || i || !n.services.languageDetector || (i = []);
                    var a =
                      "string" === typeof i
                        ? i
                        : n.services.languageUtils.getBestMatchFromCodes(i);
                    a &&
                      (n.language || o(a),
                      n.translator.language || n.translator.changeLanguage(a),
                      n.services.languageDetector &&
                        n.services.languageDetector.cacheUserLanguage &&
                        n.services.languageDetector.cacheUserLanguage(a)),
                      n.loadResources(a, function (e) {
                        !(function (e, i) {
                          i
                            ? (o(i),
                              n.translator.changeLanguage(i),
                              (n.isLanguageChangingTo = void 0),
                              n.emit("languageChanged", i),
                              n.logger.log("languageChanged", i))
                            : (n.isLanguageChangingTo = void 0),
                            r.resolve(function () {
                              return n.t.apply(n, arguments);
                            }),
                            t &&
                              t(e, function () {
                                return n.t.apply(n, arguments);
                              });
                        })(e, a);
                      });
                  };
                return (
                  e ||
                  !this.services.languageDetector ||
                  this.services.languageDetector.async
                    ? !e &&
                      this.services.languageDetector &&
                      this.services.languageDetector.async
                      ? 0 === this.services.languageDetector.detect.length
                        ? this.services.languageDetector.detect().then(i)
                        : this.services.languageDetector.detect(i)
                      : i(e)
                    : i(this.services.languageDetector.detect()),
                  r
                );
              },
            },
            {
              key: "getFixedT",
              value: function (e, t, n) {
                var r = this,
                  o = function e(t, o) {
                    var i;
                    if ("object" !== l(o)) {
                      for (
                        var a = arguments.length,
                          s = new Array(a > 2 ? a - 2 : 0),
                          u = 2;
                        u < a;
                        u++
                      )
                        s[u - 2] = arguments[u];
                      i = r.options.overloadTranslationOptionHandler(
                        [t, o].concat(s)
                      );
                    } else i = Ye({}, o);
                    (i.lng = i.lng || e.lng),
                      (i.lngs = i.lngs || e.lngs),
                      (i.ns = i.ns || e.ns),
                      (i.keyPrefix = i.keyPrefix || n || e.keyPrefix);
                    var c,
                      f = r.options.keySeparator || ".";
                    return (
                      (c =
                        i.keyPrefix && Array.isArray(t)
                          ? t.map(function (e) {
                              return "".concat(i.keyPrefix).concat(f).concat(e);
                            })
                          : i.keyPrefix
                          ? "".concat(i.keyPrefix).concat(f).concat(t)
                          : t),
                      r.t(c, i)
                    );
                  };
                return (
                  "string" === typeof e ? (o.lng = e) : (o.lngs = e),
                  (o.ns = t),
                  (o.keyPrefix = n),
                  o
                );
              },
            },
            {
              key: "t",
              value: function () {
                var e;
                return (
                  this.translator &&
                  (e = this.translator).translate.apply(e, arguments)
                );
              },
            },
            {
              key: "exists",
              value: function () {
                var e;
                return (
                  this.translator &&
                  (e = this.translator).exists.apply(e, arguments)
                );
              },
            },
            {
              key: "setDefaultNamespace",
              value: function (e) {
                this.options.defaultNS = e;
              },
            },
            {
              key: "hasLoadedNamespace",
              value: function (e) {
                var t = this,
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                if (!this.isInitialized)
                  return (
                    this.logger.warn(
                      "hasLoadedNamespace: i18next was not initialized",
                      this.languages
                    ),
                    !1
                  );
                if (!this.languages || !this.languages.length)
                  return (
                    this.logger.warn(
                      "hasLoadedNamespace: i18n.languages were undefined or empty",
                      this.languages
                    ),
                    !1
                  );
                var r = this.resolvedLanguage || this.languages[0],
                  o = !!this.options && this.options.fallbackLng,
                  i = this.languages[this.languages.length - 1];
                if ("cimode" === r.toLowerCase()) return !0;
                var a = function (e, n) {
                  var r =
                    t.services.backendConnector.state[
                      "".concat(e, "|").concat(n)
                    ];
                  return -1 === r || 2 === r;
                };
                if (n.precheck) {
                  var s = n.precheck(this, a);
                  if (void 0 !== s) return s;
                }
                return (
                  !!this.hasResourceBundle(r, e) ||
                  !(
                    this.services.backendConnector.backend &&
                    (!this.options.resources ||
                      this.options.partialBundledLanguages)
                  ) ||
                  !(!a(r, e) || (o && !a(i, e)))
                );
              },
            },
            {
              key: "loadNamespaces",
              value: function (e, t) {
                var n = this,
                  r = ie();
                return this.options.ns
                  ? ("string" === typeof e && (e = [e]),
                    e.forEach(function (e) {
                      n.options.ns.indexOf(e) < 0 && n.options.ns.push(e);
                    }),
                    this.loadResources(function (e) {
                      r.resolve(), t && t(e);
                    }),
                    r)
                  : (t && t(), Promise.resolve());
              },
            },
            {
              key: "loadLanguages",
              value: function (e, t) {
                var n = ie();
                "string" === typeof e && (e = [e]);
                var r = this.options.preload || [],
                  o = e.filter(function (e) {
                    return r.indexOf(e) < 0;
                  });
                return o.length
                  ? ((this.options.preload = r.concat(o)),
                    this.loadResources(function (e) {
                      n.resolve(), t && t(e);
                    }),
                    n)
                  : (t && t(), Promise.resolve());
              },
            },
            {
              key: "dir",
              value: function (e) {
                if (
                  (e ||
                    (e =
                      this.resolvedLanguage ||
                      (this.languages && this.languages.length > 0
                        ? this.languages[0]
                        : this.language)),
                  !e)
                )
                  return "rtl";
                var t =
                  (this.services && this.services.languageUtils) ||
                  new Re(Ge());
                return [
                  "ar",
                  "shu",
                  "sqr",
                  "ssh",
                  "xaa",
                  "yhd",
                  "yud",
                  "aao",
                  "abh",
                  "abv",
                  "acm",
                  "acq",
                  "acw",
                  "acx",
                  "acy",
                  "adf",
                  "ads",
                  "aeb",
                  "aec",
                  "afb",
                  "ajp",
                  "apc",
                  "apd",
                  "arb",
                  "arq",
                  "ars",
                  "ary",
                  "arz",
                  "auz",
                  "avl",
                  "ayh",
                  "ayl",
                  "ayn",
                  "ayp",
                  "bbz",
                  "pga",
                  "he",
                  "iw",
                  "ps",
                  "pbt",
                  "pbu",
                  "pst",
                  "prp",
                  "prd",
                  "ug",
                  "ur",
                  "ydd",
                  "yds",
                  "yih",
                  "ji",
                  "yi",
                  "hbo",
                  "men",
                  "xmn",
                  "fa",
                  "jpr",
                  "peo",
                  "pes",
                  "prs",
                  "dv",
                  "sam",
                  "ckb",
                ].indexOf(t.getLanguagePartFromCode(e)) > -1 ||
                  e.toLowerCase().indexOf("-arab") > 1
                  ? "rtl"
                  : "ltr";
              },
            },
            {
              key: "cloneInstance",
              value: function () {
                var e = this,
                  t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  r =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : et,
                  o = Ye(Ye(Ye({}, this.options), t), { isClone: !0 }),
                  i = new n(o);
                (void 0 === t.debug && void 0 === t.prefix) ||
                  (i.logger = i.logger.clone(t));
                var a = ["store", "services", "language"];
                return (
                  a.forEach(function (t) {
                    i[t] = e[t];
                  }),
                  (i.services = Ye({}, this.services)),
                  (i.services.utils = {
                    hasLoadedNamespace: i.hasLoadedNamespace.bind(i),
                  }),
                  (i.translator = new Le(i.services, i.options)),
                  i.translator.on("*", function (e) {
                    for (
                      var t = arguments.length,
                        n = new Array(t > 1 ? t - 1 : 0),
                        r = 1;
                      r < t;
                      r++
                    )
                      n[r - 1] = arguments[r];
                    i.emit.apply(i, [e].concat(n));
                  }),
                  i.init(o, r),
                  (i.translator.options = i.options),
                  (i.translator.backendConnector.services.utils = {
                    hasLoadedNamespace: i.hasLoadedNamespace.bind(i),
                  }),
                  i
                );
              },
            },
            {
              key: "toJSON",
              value: function () {
                return {
                  options: this.options,
                  store: this.store,
                  language: this.language,
                  languages: this.languages,
                  resolvedLanguage: this.resolvedLanguage,
                };
              },
            },
          ]),
          n
        );
      })(oe);
      p(nt, "createInstance", function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments.length > 1 ? arguments[1] : void 0;
        return new nt(e, t);
      });
      var rt = nt.createInstance();
      rt.createInstance = nt.createInstance;
      rt.createInstance,
        rt.dir,
        rt.init,
        rt.loadResources,
        rt.reloadResources,
        rt.use,
        rt.changeLanguage,
        rt.getFixedT,
        rt.t,
        rt.exists,
        rt.setDefaultNamespace,
        rt.hasLoadedNamespace,
        rt.loadNamespaces,
        rt.loadLanguages;
      var ot = function (e) {
          void 0 === e.ns && (e.ns = []);
          var t,
            n,
            r = rt.createInstance(e);
          r.isInitialized
            ? (t = Promise.resolve(rt.t))
            : (null === e ||
                void 0 === e ||
                null === (n = e.use) ||
                void 0 === n ||
                n.forEach(function (e) {
                  return r.use(e);
                }),
              "function" === typeof e.onPreInitI18next && e.onPreInitI18next(r),
              (t = r.init(e)));
          return { i18n: r, initPromise: t };
        },
        it = r.createElement;
      function at(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function st(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? at(Object(n), !0).forEach(function (t) {
                p(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : at(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var ut = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null,
          n = function (n) {
            var o,
              i,
              a = n.pageProps._nextI18Next,
              s =
                null !==
                  (o = null === a || void 0 === a ? void 0 : a.initialLocale) &&
                void 0 !== o
                  ? o
                  : null === n ||
                    void 0 === n ||
                    null === (i = n.router) ||
                    void 0 === i
                  ? void 0
                  : i.locale,
              u = null === a || void 0 === a ? void 0 : a.ns,
              c = (0, r.useMemo)(
                function () {
                  var e;
                  if (!a && !t) return null;
                  var n =
                    null !== t && void 0 !== t
                      ? t
                      : null === a || void 0 === a
                      ? void 0
                      : a.userConfig;
                  if (!n)
                    throw new Error(
                      "appWithTranslation was called without a next-i18next config"
                    );
                  if (null === n || void 0 === n || !n.i18n)
                    throw new Error(
                      "appWithTranslation was called without config.i18n"
                    );
                  if (
                    null === n ||
                    void 0 === n ||
                    null === (e = n.i18n) ||
                    void 0 === e ||
                    !e.defaultLocale
                  )
                    throw new Error(
                      "config.i18n does not include a defaultLocale property"
                    );
                  var r = (a || {}).initialI18nStore,
                    o =
                      null !== t && void 0 !== t && t.resources
                        ? t.resources
                        : r;
                  s || (s = n.i18n.defaultLocale);
                  var i = ot(
                    st(
                      st({}, z(st(st({}, n), {}, { lng: s }))),
                      {},
                      { lng: s, ns: u, resources: o }
                    )
                  ).i18n;
                  return i, i;
                },
                [a, s, t, u]
              );
            return null !== c
              ? it(A, { i18n: c }, it(e, n))
              : it(e, D({ key: s }, n));
          };
        return F()(n, e);
      };
    },
    3454: function (e, t, n) {
      "use strict";
      var r, o;
      e.exports =
        (null == (r = n.g.process) ? void 0 : r.env) &&
        "object" === typeof (null == (o = n.g.process) ? void 0 : o.env)
          ? n.g.process
          : n(7663);
    },
    6840: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return n(1256);
        },
      ]);
    },
    1256: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return ne;
          },
        });
      var r = n(1799),
        o = n(9534),
        i = n(5893),
        a = n(7294),
        s = n(1163),
        u = n.n(s),
        c = n(3299);
      const l = "undefined" === typeof window || "Deno" in window;
      function f() {}
      function p(e, t, n) {
        return k(e)
          ? "function" === typeof t
            ? { ...n, queryKey: e, queryFn: t }
            : { ...t, queryKey: e }
          : e;
      }
      function d(e, t, n) {
        return k(e) ? [{ ...t, queryKey: e }, n] : [e || {}, t];
      }
      function h(e, t) {
        const {
          type: n = "all",
          exact: r,
          fetchStatus: o,
          predicate: i,
          queryKey: a,
          stale: s,
        } = e;
        if (k(a))
          if (r) {
            if (t.queryHash !== v(a, t.options)) return !1;
          } else if (!m(t.queryKey, a)) return !1;
        if ("all" !== n) {
          const e = t.isActive();
          if ("active" === n && !e) return !1;
          if ("inactive" === n && e) return !1;
        }
        return (
          ("boolean" !== typeof s || t.isStale() === s) &&
          ("undefined" === typeof o || o === t.state.fetchStatus) &&
          !(i && !i(t))
        );
      }
      function g(e, t) {
        const { exact: n, fetching: r, predicate: o, mutationKey: i } = e;
        if (k(i)) {
          if (!t.options.mutationKey) return !1;
          if (n) {
            if (y(t.options.mutationKey) !== y(i)) return !1;
          } else if (!m(t.options.mutationKey, i)) return !1;
        }
        return (
          ("boolean" !== typeof r || ("loading" === t.state.status) === r) &&
          !(o && !o(t))
        );
      }
      function v(e, t) {
        return ((null == t ? void 0 : t.queryKeyHashFn) || y)(e);
      }
      function y(e) {
        return JSON.stringify(e, (e, t) =>
          x(t)
            ? Object.keys(t)
                .sort()
                .reduce((e, n) => ((e[n] = t[n]), e), {})
            : t
        );
      }
      function m(e, t) {
        return b(e, t);
      }
      function b(e, t) {
        return (
          e === t ||
          (typeof e === typeof t &&
            !(!e || !t || "object" !== typeof e || "object" !== typeof t) &&
            !Object.keys(t).some((n) => !b(e[n], t[n])))
        );
      }
      function O(e, t) {
        if (e === t) return e;
        const n = w(e) && w(t);
        if (n || (x(e) && x(t))) {
          const r = n ? e.length : Object.keys(e).length,
            o = n ? t : Object.keys(t),
            i = o.length,
            a = n ? [] : {};
          let s = 0;
          for (let u = 0; u < i; u++) {
            const r = n ? u : o[u];
            (a[r] = O(e[r], t[r])), a[r] === e[r] && s++;
          }
          return r === i && s === r ? e : a;
        }
        return t;
      }
      function w(e) {
        return Array.isArray(e) && e.length === Object.keys(e).length;
      }
      function x(e) {
        if (!S(e)) return !1;
        const t = e.constructor;
        if ("undefined" === typeof t) return !0;
        const n = t.prototype;
        return !!S(n) && !!n.hasOwnProperty("isPrototypeOf");
      }
      function S(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      function k(e) {
        return Array.isArray(e);
      }
      function P(e) {
        return new Promise((t) => {
          setTimeout(t, e);
        });
      }
      function j(e) {
        P(0).then(e);
      }
      function E(e, t, n) {
        return null != n.isDataEqual && n.isDataEqual(e, t)
          ? e
          : "function" === typeof n.structuralSharing
          ? n.structuralSharing(e, t)
          : !1 !== n.structuralSharing
          ? O(e, t)
          : t;
      }
      const L = console;
      const C = (function () {
        let e = [],
          t = 0,
          n = (e) => {
            e();
          },
          r = (e) => {
            e();
          };
        const o = (r) => {
            t
              ? e.push(r)
              : j(() => {
                  n(r);
                });
          },
          i = () => {
            const t = e;
            (e = []),
              t.length &&
                j(() => {
                  r(() => {
                    t.forEach((e) => {
                      n(e);
                    });
                  });
                });
          };
        return {
          batch: (e) => {
            let n;
            t++;
            try {
              n = e();
            } finally {
              t--, t || i();
            }
            return n;
          },
          batchCalls:
            (e) =>
            (...t) => {
              o(() => {
                e(...t);
              });
            },
          schedule: o,
          setNotifyFunction: (e) => {
            n = e;
          },
          setBatchNotifyFunction: (e) => {
            r = e;
          },
        };
      })();
      class R {
        constructor() {
          (this.listeners = []), (this.subscribe = this.subscribe.bind(this));
        }
        subscribe(e) {
          return (
            this.listeners.push(e),
            this.onSubscribe(),
            () => {
              (this.listeners = this.listeners.filter((t) => t !== e)),
                this.onUnsubscribe();
            }
          );
        }
        hasListeners() {
          return this.listeners.length > 0;
        }
        onSubscribe() {}
        onUnsubscribe() {}
      }
      const _ = new (class extends R {
        constructor() {
          super(),
            (this.setup = (e) => {
              if (!l && window.addEventListener) {
                const t = () => e();
                return (
                  window.addEventListener("visibilitychange", t, !1),
                  window.addEventListener("focus", t, !1),
                  () => {
                    window.removeEventListener("visibilitychange", t),
                      window.removeEventListener("focus", t);
                  }
                );
              }
            });
        }
        onSubscribe() {
          this.cleanup || this.setEventListener(this.setup);
        }
        onUnsubscribe() {
          var e;
          this.hasListeners() ||
            (null == (e = this.cleanup) || e.call(this),
            (this.cleanup = void 0));
        }
        setEventListener(e) {
          var t;
          (this.setup = e),
            null == (t = this.cleanup) || t.call(this),
            (this.cleanup = e((e) => {
              "boolean" === typeof e ? this.setFocused(e) : this.onFocus();
            }));
        }
        setFocused(e) {
          (this.focused = e), e && this.onFocus();
        }
        onFocus() {
          this.listeners.forEach((e) => {
            e();
          });
        }
        isFocused() {
          return "boolean" === typeof this.focused
            ? this.focused
            : "undefined" === typeof document ||
                [void 0, "visible", "prerender"].includes(
                  document.visibilityState
                );
        }
      })();
      const N = new (class extends R {
        constructor() {
          super(),
            (this.setup = (e) => {
              if (!l && window.addEventListener) {
                const t = () => e();
                return (
                  window.addEventListener("online", t, !1),
                  window.addEventListener("offline", t, !1),
                  () => {
                    window.removeEventListener("online", t),
                      window.removeEventListener("offline", t);
                  }
                );
              }
            });
        }
        onSubscribe() {
          this.cleanup || this.setEventListener(this.setup);
        }
        onUnsubscribe() {
          var e;
          this.hasListeners() ||
            (null == (e = this.cleanup) || e.call(this),
            (this.cleanup = void 0));
        }
        setEventListener(e) {
          var t;
          (this.setup = e),
            null == (t = this.cleanup) || t.call(this),
            (this.cleanup = e((e) => {
              "boolean" === typeof e ? this.setOnline(e) : this.onOnline();
            }));
        }
        setOnline(e) {
          (this.online = e), e && this.onOnline();
        }
        onOnline() {
          this.listeners.forEach((e) => {
            e();
          });
        }
        isOnline() {
          return "boolean" === typeof this.online
            ? this.online
            : "undefined" === typeof navigator ||
                "undefined" === typeof navigator.onLine ||
                navigator.onLine;
        }
      })();
      function T(e) {
        return Math.min(1e3 * 2 ** e, 3e4);
      }
      function A(e) {
        return "online" !== (null != e ? e : "online") || N.isOnline();
      }
      class D {
        constructor(e) {
          (this.revert = null == e ? void 0 : e.revert),
            (this.silent = null == e ? void 0 : e.silent);
        }
      }
      function M(e) {
        return e instanceof D;
      }
      function F(e) {
        let t,
          n,
          r,
          o = !1,
          i = 0,
          a = !1;
        const s = new Promise((e, t) => {
            (n = e), (r = t);
          }),
          u = () =>
            !_.isFocused() || ("always" !== e.networkMode && !N.isOnline()),
          c = (r) => {
            a ||
              ((a = !0),
              null == e.onSuccess || e.onSuccess(r),
              null == t || t(),
              n(r));
          },
          l = (n) => {
            a ||
              ((a = !0),
              null == e.onError || e.onError(n),
              null == t || t(),
              r(n));
          },
          f = () =>
            new Promise((n) => {
              (t = (e) => {
                const t = a || !u();
                return t && n(e), t;
              }),
                null == e.onPause || e.onPause();
            }).then(() => {
              (t = void 0), a || null == e.onContinue || e.onContinue();
            }),
          p = () => {
            if (a) return;
            let t;
            try {
              t = e.fn();
            } catch (n) {
              t = Promise.reject(n);
            }
            Promise.resolve(t)
              .then(c)
              .catch((t) => {
                var n, r;
                if (a) return;
                const s = null != (n = e.retry) ? n : 3,
                  c = null != (r = e.retryDelay) ? r : T,
                  d = "function" === typeof c ? c(i, t) : c,
                  h =
                    !0 === s ||
                    ("number" === typeof s && i < s) ||
                    ("function" === typeof s && s(i, t));
                !o && h
                  ? (i++,
                    null == e.onFail || e.onFail(i, t),
                    P(d)
                      .then(() => {
                        if (u()) return f();
                      })
                      .then(() => {
                        o ? l(t) : p();
                      }))
                  : l(t);
              });
          };
        return (
          A(e.networkMode) ? p() : f().then(p),
          {
            promise: s,
            cancel: (t) => {
              a || (l(new D(t)), null == e.abort || e.abort());
            },
            continue: () =>
              (null == t ? void 0 : t()) ? s : Promise.resolve(),
            cancelRetry: () => {
              o = !0;
            },
            continueRetry: () => {
              o = !1;
            },
          }
        );
      }
      class I {
        destroy() {
          this.clearGcTimeout();
        }
        scheduleGc() {
          var e;
          this.clearGcTimeout(),
            "number" === typeof (e = this.cacheTime) &&
              e >= 0 &&
              e !== 1 / 0 &&
              (this.gcTimeout = setTimeout(() => {
                this.optionalRemove();
              }, this.cacheTime));
        }
        updateCacheTime(e) {
          this.cacheTime = Math.max(
            this.cacheTime || 0,
            null != e ? e : l ? 1 / 0 : 3e5
          );
        }
        clearGcTimeout() {
          this.gcTimeout &&
            (clearTimeout(this.gcTimeout), (this.gcTimeout = void 0));
        }
      }
      class U extends I {
        constructor(e) {
          super(),
            (this.abortSignalConsumed = !1),
            (this.defaultOptions = e.defaultOptions),
            this.setOptions(e.options),
            (this.observers = []),
            (this.cache = e.cache),
            (this.logger = e.logger || L),
            (this.queryKey = e.queryKey),
            (this.queryHash = e.queryHash),
            (this.initialState =
              e.state ||
              (function (e) {
                const t =
                    "function" === typeof e.initialData
                      ? e.initialData()
                      : e.initialData,
                  n = "undefined" !== typeof t,
                  r = n
                    ? "function" === typeof e.initialDataUpdatedAt
                      ? e.initialDataUpdatedAt()
                      : e.initialDataUpdatedAt
                    : 0;
                return {
                  data: t,
                  dataUpdateCount: 0,
                  dataUpdatedAt: n ? (null != r ? r : Date.now()) : 0,
                  error: null,
                  errorUpdateCount: 0,
                  errorUpdatedAt: 0,
                  fetchFailureCount: 0,
                  fetchFailureReason: null,
                  fetchMeta: null,
                  isInvalidated: !1,
                  status: n ? "success" : "loading",
                  fetchStatus: "idle",
                };
              })(this.options)),
            (this.state = this.initialState),
            this.scheduleGc();
        }
        get meta() {
          return this.options.meta;
        }
        setOptions(e) {
          (this.options = { ...this.defaultOptions, ...e }),
            this.updateCacheTime(this.options.cacheTime);
        }
        optionalRemove() {
          this.observers.length ||
            "idle" !== this.state.fetchStatus ||
            this.cache.remove(this);
        }
        setData(e, t) {
          const n = E(this.state.data, e, this.options);
          return (
            this.dispatch({
              data: n,
              type: "success",
              dataUpdatedAt: null == t ? void 0 : t.updatedAt,
              manual: null == t ? void 0 : t.manual,
            }),
            n
          );
        }
        setState(e, t) {
          this.dispatch({ type: "setState", state: e, setStateOptions: t });
        }
        cancel(e) {
          var t;
          const n = this.promise;
          return (
            null == (t = this.retryer) || t.cancel(e),
            n ? n.then(f).catch(f) : Promise.resolve()
          );
        }
        destroy() {
          super.destroy(), this.cancel({ silent: !0 });
        }
        reset() {
          this.destroy(), this.setState(this.initialState);
        }
        isActive() {
          return this.observers.some((e) => !1 !== e.options.enabled);
        }
        isDisabled() {
          return this.getObserversCount() > 0 && !this.isActive();
        }
        isStale() {
          return (
            this.state.isInvalidated ||
            !this.state.dataUpdatedAt ||
            this.observers.some((e) => e.getCurrentResult().isStale)
          );
        }
        isStaleByTime(e = 0) {
          return (
            this.state.isInvalidated ||
            !this.state.dataUpdatedAt ||
            !(function (e, t) {
              return Math.max(e + (t || 0) - Date.now(), 0);
            })(this.state.dataUpdatedAt, e)
          );
        }
        onFocus() {
          var e;
          const t = this.observers.find((e) => e.shouldFetchOnWindowFocus());
          t && t.refetch({ cancelRefetch: !1 }),
            null == (e = this.retryer) || e.continue();
        }
        onOnline() {
          var e;
          const t = this.observers.find((e) => e.shouldFetchOnReconnect());
          t && t.refetch({ cancelRefetch: !1 }),
            null == (e = this.retryer) || e.continue();
        }
        addObserver(e) {
          -1 === this.observers.indexOf(e) &&
            (this.observers.push(e),
            this.clearGcTimeout(),
            this.cache.notify({
              type: "observerAdded",
              query: this,
              observer: e,
            }));
        }
        removeObserver(e) {
          -1 !== this.observers.indexOf(e) &&
            ((this.observers = this.observers.filter((t) => t !== e)),
            this.observers.length ||
              (this.retryer &&
                (this.abortSignalConsumed
                  ? this.retryer.cancel({ revert: !0 })
                  : this.retryer.cancelRetry()),
              this.scheduleGc()),
            this.cache.notify({
              type: "observerRemoved",
              query: this,
              observer: e,
            }));
        }
        getObserversCount() {
          return this.observers.length;
        }
        invalidate() {
          this.state.isInvalidated || this.dispatch({ type: "invalidate" });
        }
        fetch(e, t) {
          var n, r;
          if ("idle" !== this.state.fetchStatus)
            if (this.state.dataUpdatedAt && null != t && t.cancelRefetch)
              this.cancel({ silent: !0 });
            else if (this.promise) {
              var o;
              return (
                null == (o = this.retryer) || o.continueRetry(), this.promise
              );
            }
          if ((e && this.setOptions(e), !this.options.queryFn)) {
            const e = this.observers.find((e) => e.options.queryFn);
            e && this.setOptions(e.options);
          }
          Array.isArray(this.options.queryKey);
          const i = (function () {
              if ("function" === typeof AbortController)
                return new AbortController();
            })(),
            a = { queryKey: this.queryKey, pageParam: void 0, meta: this.meta },
            s = (e) => {
              Object.defineProperty(e, "signal", {
                enumerable: !0,
                get: () => {
                  if (i) return (this.abortSignalConsumed = !0), i.signal;
                },
              });
            };
          s(a);
          const u = {
            fetchOptions: t,
            options: this.options,
            queryKey: this.queryKey,
            state: this.state,
            fetchFn: () =>
              this.options.queryFn
                ? ((this.abortSignalConsumed = !1), this.options.queryFn(a))
                : Promise.reject("Missing queryFn"),
          };
          var c;
          (s(u),
          null == (n = this.options.behavior) || n.onFetch(u),
          (this.revertState = this.state),
          "idle" === this.state.fetchStatus ||
            this.state.fetchMeta !==
              (null == (r = u.fetchOptions) ? void 0 : r.meta)) &&
            this.dispatch({
              type: "fetch",
              meta: null == (c = u.fetchOptions) ? void 0 : c.meta,
            });
          const l = (e) => {
            var t, n;
            ((M(e) && e.silent) || this.dispatch({ type: "error", error: e }),
            M(e)) ||
              null == (t = (n = this.cache.config).onError) ||
              t.call(n, e, this);
            this.isFetchingOptimistic || this.scheduleGc(),
              (this.isFetchingOptimistic = !1);
          };
          return (
            (this.retryer = F({
              fn: u.fetchFn,
              abort: null == i ? void 0 : i.abort.bind(i),
              onSuccess: (e) => {
                var t, n;
                "undefined" !== typeof e
                  ? (this.setData(e),
                    null == (t = (n = this.cache.config).onSuccess) ||
                      t.call(n, e, this),
                    this.isFetchingOptimistic || this.scheduleGc(),
                    (this.isFetchingOptimistic = !1))
                  : l(new Error("undefined"));
              },
              onError: l,
              onFail: (e, t) => {
                this.dispatch({ type: "failed", failureCount: e, error: t });
              },
              onPause: () => {
                this.dispatch({ type: "pause" });
              },
              onContinue: () => {
                this.dispatch({ type: "continue" });
              },
              retry: u.options.retry,
              retryDelay: u.options.retryDelay,
              networkMode: u.options.networkMode,
            })),
            (this.promise = this.retryer.promise),
            this.promise
          );
        }
        dispatch(e) {
          (this.state = ((t) => {
            var n, r;
            switch (e.type) {
              case "failed":
                return {
                  ...t,
                  fetchFailureCount: e.failureCount,
                  fetchFailureReason: e.error,
                };
              case "pause":
                return { ...t, fetchStatus: "paused" };
              case "continue":
                return { ...t, fetchStatus: "fetching" };
              case "fetch":
                return {
                  ...t,
                  fetchFailureCount: 0,
                  fetchFailureReason: null,
                  fetchMeta: null != (n = e.meta) ? n : null,
                  fetchStatus: A(this.options.networkMode)
                    ? "fetching"
                    : "paused",
                  ...(!t.dataUpdatedAt && { error: null, status: "loading" }),
                };
              case "success":
                return {
                  ...t,
                  data: e.data,
                  dataUpdateCount: t.dataUpdateCount + 1,
                  dataUpdatedAt: null != (r = e.dataUpdatedAt) ? r : Date.now(),
                  error: null,
                  isInvalidated: !1,
                  status: "success",
                  ...(!e.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null,
                  }),
                };
              case "error":
                const o = e.error;
                return M(o) && o.revert && this.revertState
                  ? { ...this.revertState }
                  : {
                      ...t,
                      error: o,
                      errorUpdateCount: t.errorUpdateCount + 1,
                      errorUpdatedAt: Date.now(),
                      fetchFailureCount: t.fetchFailureCount + 1,
                      fetchFailureReason: o,
                      fetchStatus: "idle",
                      status: "error",
                    };
              case "invalidate":
                return { ...t, isInvalidated: !0 };
              case "setState":
                return { ...t, ...e.state };
            }
          })(this.state)),
            C.batch(() => {
              this.observers.forEach((t) => {
                t.onQueryUpdate(e);
              }),
                this.cache.notify({ query: this, type: "updated", action: e });
            });
        }
      }
      class q extends R {
        constructor(e) {
          super(),
            (this.config = e || {}),
            (this.queries = []),
            (this.queriesMap = {});
        }
        build(e, t, n) {
          var r;
          const o = t.queryKey,
            i = null != (r = t.queryHash) ? r : v(o, t);
          let a = this.get(i);
          return (
            a ||
              ((a = new U({
                cache: this,
                logger: e.getLogger(),
                queryKey: o,
                queryHash: i,
                options: e.defaultQueryOptions(t),
                state: n,
                defaultOptions: e.getQueryDefaults(o),
              })),
              this.add(a)),
            a
          );
        }
        add(e) {
          this.queriesMap[e.queryHash] ||
            ((this.queriesMap[e.queryHash] = e),
            this.queries.push(e),
            this.notify({ type: "added", query: e }));
        }
        remove(e) {
          const t = this.queriesMap[e.queryHash];
          t &&
            (e.destroy(),
            (this.queries = this.queries.filter((t) => t !== e)),
            t === e && delete this.queriesMap[e.queryHash],
            this.notify({ type: "removed", query: e }));
        }
        clear() {
          C.batch(() => {
            this.queries.forEach((e) => {
              this.remove(e);
            });
          });
        }
        get(e) {
          return this.queriesMap[e];
        }
        getAll() {
          return this.queries;
        }
        find(e, t) {
          const [n] = d(e, t);
          return (
            "undefined" === typeof n.exact && (n.exact = !0),
            this.queries.find((e) => h(n, e))
          );
        }
        findAll(e, t) {
          const [n] = d(e, t);
          return Object.keys(n).length > 0
            ? this.queries.filter((e) => h(n, e))
            : this.queries;
        }
        notify(e) {
          C.batch(() => {
            this.listeners.forEach((t) => {
              t(e);
            });
          });
        }
        onFocus() {
          C.batch(() => {
            this.queries.forEach((e) => {
              e.onFocus();
            });
          });
        }
        onOnline() {
          C.batch(() => {
            this.queries.forEach((e) => {
              e.onOnline();
            });
          });
        }
      }
      class K extends I {
        constructor(e) {
          super(),
            (this.options = { ...e.defaultOptions, ...e.options }),
            (this.mutationId = e.mutationId),
            (this.mutationCache = e.mutationCache),
            (this.logger = e.logger || L),
            (this.observers = []),
            (this.state = e.state || {
              context: void 0,
              data: void 0,
              error: null,
              failureCount: 0,
              failureReason: null,
              isPaused: !1,
              status: "idle",
              variables: void 0,
            }),
            this.updateCacheTime(this.options.cacheTime),
            this.scheduleGc();
        }
        get meta() {
          return this.options.meta;
        }
        setState(e) {
          this.dispatch({ type: "setState", state: e });
        }
        addObserver(e) {
          -1 === this.observers.indexOf(e) &&
            (this.observers.push(e),
            this.clearGcTimeout(),
            this.mutationCache.notify({
              type: "observerAdded",
              mutation: this,
              observer: e,
            }));
        }
        removeObserver(e) {
          (this.observers = this.observers.filter((t) => t !== e)),
            this.scheduleGc(),
            this.mutationCache.notify({
              type: "observerRemoved",
              mutation: this,
              observer: e,
            });
        }
        optionalRemove() {
          this.observers.length ||
            ("loading" === this.state.status
              ? this.scheduleGc()
              : this.mutationCache.remove(this));
        }
        continue() {
          var e, t;
          return null !=
            (e = null == (t = this.retryer) ? void 0 : t.continue())
            ? e
            : this.execute();
        }
        async execute() {
          const e = () => {
              var e;
              return (
                (this.retryer = F({
                  fn: () =>
                    this.options.mutationFn
                      ? this.options.mutationFn(this.state.variables)
                      : Promise.reject("No mutationFn found"),
                  onFail: (e, t) => {
                    this.dispatch({
                      type: "failed",
                      failureCount: e,
                      error: t,
                    });
                  },
                  onPause: () => {
                    this.dispatch({ type: "pause" });
                  },
                  onContinue: () => {
                    this.dispatch({ type: "continue" });
                  },
                  retry: null != (e = this.options.retry) ? e : 0,
                  retryDelay: this.options.retryDelay,
                  networkMode: this.options.networkMode,
                })),
                this.retryer.promise
              );
            },
            t = "loading" === this.state.status;
          try {
            var n, r, o, i, a, s;
            if (!t) {
              var u, c, l, f;
              this.dispatch({
                type: "loading",
                variables: this.options.variables,
              }),
                await (null == (u = (c = this.mutationCache.config).onMutate)
                  ? void 0
                  : u.call(c, this.state.variables, this));
              const e = await (null == (l = (f = this.options).onMutate)
                ? void 0
                : l.call(f, this.state.variables));
              e !== this.state.context &&
                this.dispatch({
                  type: "loading",
                  context: e,
                  variables: this.state.variables,
                });
            }
            const p = await e();
            return (
              await (null == (n = (r = this.mutationCache.config).onSuccess)
                ? void 0
                : n.call(r, p, this.state.variables, this.state.context, this)),
              await (null == (o = (i = this.options).onSuccess)
                ? void 0
                : o.call(i, p, this.state.variables, this.state.context)),
              await (null == (a = (s = this.options).onSettled)
                ? void 0
                : a.call(s, p, null, this.state.variables, this.state.context)),
              this.dispatch({ type: "success", data: p }),
              p
            );
          } catch (m) {
            try {
              var p, d, h, g, v, y;
              throw (
                (await (null == (p = (d = this.mutationCache.config).onError)
                  ? void 0
                  : p.call(
                      d,
                      m,
                      this.state.variables,
                      this.state.context,
                      this
                    )),
                await (null == (h = (g = this.options).onError)
                  ? void 0
                  : h.call(g, m, this.state.variables, this.state.context)),
                await (null == (v = (y = this.options).onSettled)
                  ? void 0
                  : v.call(
                      y,
                      void 0,
                      m,
                      this.state.variables,
                      this.state.context
                    )),
                m)
              );
            } finally {
              this.dispatch({ type: "error", error: m });
            }
          }
        }
        dispatch(e) {
          (this.state = ((t) => {
            switch (e.type) {
              case "failed":
                return {
                  ...t,
                  failureCount: e.failureCount,
                  failureReason: e.error,
                };
              case "pause":
                return { ...t, isPaused: !0 };
              case "continue":
                return { ...t, isPaused: !1 };
              case "loading":
                return {
                  ...t,
                  context: e.context,
                  data: void 0,
                  failureCount: 0,
                  failureReason: null,
                  error: null,
                  isPaused: !A(this.options.networkMode),
                  status: "loading",
                  variables: e.variables,
                };
              case "success":
                return {
                  ...t,
                  data: e.data,
                  failureCount: 0,
                  failureReason: null,
                  error: null,
                  status: "success",
                  isPaused: !1,
                };
              case "error":
                return {
                  ...t,
                  data: void 0,
                  error: e.error,
                  failureCount: t.failureCount + 1,
                  failureReason: e.error,
                  isPaused: !1,
                  status: "error",
                };
              case "setState":
                return { ...t, ...e.state };
            }
          })(this.state)),
            C.batch(() => {
              this.observers.forEach((t) => {
                t.onMutationUpdate(e);
              }),
                this.mutationCache.notify({
                  mutation: this,
                  type: "updated",
                  action: e,
                });
            });
        }
      }
      class B extends R {
        constructor(e) {
          super(),
            (this.config = e || {}),
            (this.mutations = []),
            (this.mutationId = 0);
        }
        build(e, t, n) {
          const r = new K({
            mutationCache: this,
            logger: e.getLogger(),
            mutationId: ++this.mutationId,
            options: e.defaultMutationOptions(t),
            state: n,
            defaultOptions: t.mutationKey
              ? e.getMutationDefaults(t.mutationKey)
              : void 0,
          });
          return this.add(r), r;
        }
        add(e) {
          this.mutations.push(e), this.notify({ type: "added", mutation: e });
        }
        remove(e) {
          (this.mutations = this.mutations.filter((t) => t !== e)),
            this.notify({ type: "removed", mutation: e });
        }
        clear() {
          C.batch(() => {
            this.mutations.forEach((e) => {
              this.remove(e);
            });
          });
        }
        getAll() {
          return this.mutations;
        }
        find(e) {
          return (
            "undefined" === typeof e.exact && (e.exact = !0),
            this.mutations.find((t) => g(e, t))
          );
        }
        findAll(e) {
          return this.mutations.filter((t) => g(e, t));
        }
        notify(e) {
          C.batch(() => {
            this.listeners.forEach((t) => {
              t(e);
            });
          });
        }
        resumePausedMutations() {
          var e;
          return (
            (this.resuming = (
              null != (e = this.resuming) ? e : Promise.resolve()
            )
              .then(() => {
                const e = this.mutations.filter((e) => e.state.isPaused);
                return C.batch(() =>
                  e.reduce(
                    (e, t) => e.then(() => t.continue().catch(f)),
                    Promise.resolve()
                  )
                );
              })
              .then(() => {
                this.resuming = void 0;
              })),
            this.resuming
          );
        }
      }
      function H() {
        return {
          onFetch: (e) => {
            e.fetchFn = () => {
              var t, n, r, o, i, a;
              const s =
                  null == (t = e.fetchOptions) || null == (n = t.meta)
                    ? void 0
                    : n.refetchPage,
                u =
                  null == (r = e.fetchOptions) || null == (o = r.meta)
                    ? void 0
                    : o.fetchMore,
                c = null == u ? void 0 : u.pageParam,
                l = "forward" === (null == u ? void 0 : u.direction),
                f = "backward" === (null == u ? void 0 : u.direction),
                p = (null == (i = e.state.data) ? void 0 : i.pages) || [],
                d = (null == (a = e.state.data) ? void 0 : a.pageParams) || [];
              let h = d,
                g = !1;
              const v =
                  e.options.queryFn ||
                  (() => Promise.reject("Missing queryFn")),
                y = (e, t, n, r) => (
                  (h = r ? [t, ...h] : [...h, t]), r ? [n, ...e] : [...e, n]
                ),
                m = (t, n, r, o) => {
                  if (g) return Promise.reject("Cancelled");
                  if ("undefined" === typeof r && !n && t.length)
                    return Promise.resolve(t);
                  const i = {
                    queryKey: e.queryKey,
                    pageParam: r,
                    meta: e.options.meta,
                  };
                  var a;
                  (a = i),
                    Object.defineProperty(a, "signal", {
                      enumerable: !0,
                      get: () => {
                        var t, n;
                        return (
                          null != (t = e.signal) && t.aborted
                            ? (g = !0)
                            : null == (n = e.signal) ||
                              n.addEventListener("abort", () => {
                                g = !0;
                              }),
                          e.signal
                        );
                      },
                    });
                  const s = v(i);
                  return Promise.resolve(s).then((e) => y(t, r, e, o));
                };
              let b;
              if (p.length)
                if (l) {
                  const t = "undefined" !== typeof c,
                    n = t ? c : V(e.options, p);
                  b = m(p, t, n);
                } else if (f) {
                  const t = "undefined" !== typeof c,
                    n = t ? c : $(e.options, p);
                  b = m(p, t, n, !0);
                } else {
                  h = [];
                  const t = "undefined" === typeof e.options.getNextPageParam;
                  b =
                    !s || !p[0] || s(p[0], 0, p)
                      ? m([], t, d[0])
                      : Promise.resolve(y([], d[0], p[0]));
                  for (let n = 1; n < p.length; n++)
                    b = b.then((r) => {
                      if (!s || !p[n] || s(p[n], n, p)) {
                        const o = t ? d[n] : V(e.options, r);
                        return m(r, t, o);
                      }
                      return Promise.resolve(y(r, d[n], p[n]));
                    });
                }
              else b = m([]);
              return b.then((e) => ({ pages: e, pageParams: h }));
            };
          },
        };
      }
      function V(e, t) {
        return null == e.getNextPageParam
          ? void 0
          : e.getNextPageParam(t[t.length - 1], t);
      }
      function $(e, t) {
        return null == e.getPreviousPageParam
          ? void 0
          : e.getPreviousPageParam(t[0], t);
      }
      class Q {
        constructor(e = {}) {
          (this.queryCache = e.queryCache || new q()),
            (this.mutationCache = e.mutationCache || new B()),
            (this.logger = e.logger || L),
            (this.defaultOptions = e.defaultOptions || {}),
            (this.queryDefaults = []),
            (this.mutationDefaults = []),
            (this.mountCount = 0);
        }
        mount() {
          this.mountCount++,
            1 === this.mountCount &&
              ((this.unsubscribeFocus = _.subscribe(() => {
                _.isFocused() &&
                  (this.resumePausedMutations(), this.queryCache.onFocus());
              })),
              (this.unsubscribeOnline = N.subscribe(() => {
                N.isOnline() &&
                  (this.resumePausedMutations(), this.queryCache.onOnline());
              })));
        }
        unmount() {
          var e, t;
          this.mountCount--,
            0 === this.mountCount &&
              (null == (e = this.unsubscribeFocus) || e.call(this),
              (this.unsubscribeFocus = void 0),
              null == (t = this.unsubscribeOnline) || t.call(this),
              (this.unsubscribeOnline = void 0));
        }
        isFetching(e, t) {
          const [n] = d(e, t);
          return (
            (n.fetchStatus = "fetching"), this.queryCache.findAll(n).length
          );
        }
        isMutating(e) {
          return this.mutationCache.findAll({ ...e, fetching: !0 }).length;
        }
        getQueryData(e, t) {
          var n;
          return null == (n = this.queryCache.find(e, t))
            ? void 0
            : n.state.data;
        }
        ensureQueryData(e, t, n) {
          const r = p(e, t, n),
            o = this.getQueryData(r.queryKey);
          return o ? Promise.resolve(o) : this.fetchQuery(r);
        }
        getQueriesData(e) {
          return this.getQueryCache()
            .findAll(e)
            .map(({ queryKey: e, state: t }) => [e, t.data]);
        }
        setQueryData(e, t, n) {
          const r = this.queryCache.find(e),
            o = (function (e, t) {
              return "function" === typeof e ? e(t) : e;
            })(t, null == r ? void 0 : r.state.data);
          if ("undefined" === typeof o) return;
          const i = p(e),
            a = this.defaultQueryOptions(i);
          return this.queryCache
            .build(this, a)
            .setData(o, { ...n, manual: !0 });
        }
        setQueriesData(e, t, n) {
          return C.batch(() =>
            this.getQueryCache()
              .findAll(e)
              .map(({ queryKey: e }) => [e, this.setQueryData(e, t, n)])
          );
        }
        getQueryState(e, t) {
          var n;
          return null == (n = this.queryCache.find(e, t)) ? void 0 : n.state;
        }
        removeQueries(e, t) {
          const [n] = d(e, t),
            r = this.queryCache;
          C.batch(() => {
            r.findAll(n).forEach((e) => {
              r.remove(e);
            });
          });
        }
        resetQueries(e, t, n) {
          const [r, o] = d(e, t, n),
            i = this.queryCache,
            a = { type: "active", ...r };
          return C.batch(
            () => (
              i.findAll(r).forEach((e) => {
                e.reset();
              }),
              this.refetchQueries(a, o)
            )
          );
        }
        cancelQueries(e, t, n) {
          const [r, o = {}] = d(e, t, n);
          "undefined" === typeof o.revert && (o.revert = !0);
          const i = C.batch(() =>
            this.queryCache.findAll(r).map((e) => e.cancel(o))
          );
          return Promise.all(i).then(f).catch(f);
        }
        invalidateQueries(e, t, n) {
          const [r, o] = d(e, t, n);
          return C.batch(() => {
            var e, t;
            if (
              (this.queryCache.findAll(r).forEach((e) => {
                e.invalidate();
              }),
              "none" === r.refetchType)
            )
              return Promise.resolve();
            const n = {
              ...r,
              type:
                null != (e = null != (t = r.refetchType) ? t : r.type)
                  ? e
                  : "active",
            };
            return this.refetchQueries(n, o);
          });
        }
        refetchQueries(e, t, n) {
          const [r, o] = d(e, t, n),
            i = C.batch(() =>
              this.queryCache
                .findAll(r)
                .filter((e) => !e.isDisabled())
                .map((e) => {
                  var t;
                  return e.fetch(void 0, {
                    ...o,
                    cancelRefetch:
                      null == (t = null == o ? void 0 : o.cancelRefetch) || t,
                    meta: { refetchPage: r.refetchPage },
                  });
                })
            );
          let a = Promise.all(i).then(f);
          return (null != o && o.throwOnError) || (a = a.catch(f)), a;
        }
        fetchQuery(e, t, n) {
          const r = p(e, t, n),
            o = this.defaultQueryOptions(r);
          "undefined" === typeof o.retry && (o.retry = !1);
          const i = this.queryCache.build(this, o);
          return i.isStaleByTime(o.staleTime)
            ? i.fetch(o)
            : Promise.resolve(i.state.data);
        }
        prefetchQuery(e, t, n) {
          return this.fetchQuery(e, t, n).then(f).catch(f);
        }
        fetchInfiniteQuery(e, t, n) {
          const r = p(e, t, n);
          return (r.behavior = H()), this.fetchQuery(r);
        }
        prefetchInfiniteQuery(e, t, n) {
          return this.fetchInfiniteQuery(e, t, n).then(f).catch(f);
        }
        resumePausedMutations() {
          return this.mutationCache.resumePausedMutations();
        }
        getQueryCache() {
          return this.queryCache;
        }
        getMutationCache() {
          return this.mutationCache;
        }
        getLogger() {
          return this.logger;
        }
        getDefaultOptions() {
          return this.defaultOptions;
        }
        setDefaultOptions(e) {
          this.defaultOptions = e;
        }
        setQueryDefaults(e, t) {
          const n = this.queryDefaults.find((t) => y(e) === y(t.queryKey));
          n
            ? (n.defaultOptions = t)
            : this.queryDefaults.push({ queryKey: e, defaultOptions: t });
        }
        getQueryDefaults(e) {
          if (!e) return;
          const t = this.queryDefaults.find((t) => m(e, t.queryKey));
          return null == t ? void 0 : t.defaultOptions;
        }
        setMutationDefaults(e, t) {
          const n = this.mutationDefaults.find(
            (t) => y(e) === y(t.mutationKey)
          );
          n
            ? (n.defaultOptions = t)
            : this.mutationDefaults.push({ mutationKey: e, defaultOptions: t });
        }
        getMutationDefaults(e) {
          if (!e) return;
          const t = this.mutationDefaults.find((t) => m(e, t.mutationKey));
          return null == t ? void 0 : t.defaultOptions;
        }
        defaultQueryOptions(e) {
          if (null != e && e._defaulted) return e;
          const t = {
            ...this.defaultOptions.queries,
            ...this.getQueryDefaults(null == e ? void 0 : e.queryKey),
            ...e,
            _defaulted: !0,
          };
          return (
            !t.queryHash && t.queryKey && (t.queryHash = v(t.queryKey, t)),
            "undefined" === typeof t.refetchOnReconnect &&
              (t.refetchOnReconnect = "always" !== t.networkMode),
            "undefined" === typeof t.useErrorBoundary &&
              (t.useErrorBoundary = !!t.suspense),
            t
          );
        }
        defaultMutationOptions(e) {
          return null != e && e._defaulted
            ? e
            : {
                ...this.defaultOptions.mutations,
                ...this.getMutationDefaults(null == e ? void 0 : e.mutationKey),
                ...e,
                _defaulted: !0,
              };
        }
        clear() {
          this.queryCache.clear(), this.mutationCache.clear();
        }
      }
      const z = a.createContext(void 0),
        J = a.createContext(!1);
      function G(e, t) {
        return (
          e ||
          (t && "undefined" !== typeof window
            ? (window.ReactQueryClientContext ||
                (window.ReactQueryClientContext = z),
              window.ReactQueryClientContext)
            : z)
        );
      }
      const W = ({
        client: e,
        children: t,
        context: n,
        contextSharing: r = !1,
      }) => {
        a.useEffect(
          () => (
            e.mount(),
            () => {
              e.unmount();
            }
          ),
          [e]
        );
        const o = G(n, r);
        return a.createElement(
          J.Provider,
          { value: !n && r },
          a.createElement(o.Provider, { value: e }, t)
        );
      };
      function X(e, t = {}) {
        const n = (({ context: e } = {}) => {
            const t = a.useContext(G(e, a.useContext(J)));
            if (!t)
              throw new Error(
                "No QueryClient set, use QueryClientProvider to set one"
              );
            return t;
          })({ context: t.context }),
          r = a.useRef(t);
        (r.current = t),
          a.useMemo(() => {
            e &&
              (function (e, t, n) {
                if ("object" !== typeof t || null === t) return;
                const r = e.getMutationCache(),
                  o = e.getQueryCache(),
                  i = t.mutations || [],
                  a = t.queries || [];
                i.forEach((t) => {
                  var o;
                  r.build(
                    e,
                    {
                      ...(null == n || null == (o = n.defaultOptions)
                        ? void 0
                        : o.mutations),
                      mutationKey: t.mutationKey,
                    },
                    t.state
                  );
                }),
                  a.forEach((t) => {
                    var r;
                    const i = o.get(t.queryHash);
                    i
                      ? i.state.dataUpdatedAt < t.state.dataUpdatedAt &&
                        i.setState(t.state)
                      : o.build(
                          e,
                          {
                            ...(null == n || null == (r = n.defaultOptions)
                              ? void 0
                              : r.queries),
                            queryKey: t.queryKey,
                            queryHash: t.queryHash,
                          },
                          t.state
                        );
                  });
              })(n, e, r.current);
          }, [n, e]);
      }
      const Y = ({ children: e, options: t, state: n }) => (X(n, t), e);
      var Z = n(7561),
        ee = n(4865),
        te = n.n(ee);
      n(4629), n(906);
      te().configure({ showSpinner: !1 }),
        u().events.on("routeChangeStart", function () {
          return te().start();
        }),
        u().events.on("routeChangeComplete", function () {
          return te().done();
        }),
        u().events.on("routeChangeError", function () {
          return te().done();
        });
      var ne = (0, Z.Jc)(function (e) {
        var t = e.Component,
          n = e.pageProps.session,
          s = (0, o.Z)(e.pageProps, ["session"]),
          u = a.useRef();
        return (
          u.current || (u.current = new Q()),
          (0, i.jsx)(W, {
            client: u.current,
            children: (0, i.jsx)(Y, {
              state: s.dehydratedState,
              children: (0, i.jsx)(c.SessionProvider, {
                session: n,
                children: (0, i.jsx)(t, (0, r.Z)({}, s)),
              }),
            }),
          })
        );
      });
    },
    4629: function () {},
    906: function () {},
    7663: function (e) {
      !(function () {
        var t = {
            229: function (e) {
              var t,
                n,
                r = (e.exports = {});
              function o() {
                throw new Error("setTimeout has not been defined");
              }
              function i() {
                throw new Error("clearTimeout has not been defined");
              }
              function a(e) {
                if (t === setTimeout) return setTimeout(e, 0);
                if ((t === o || !t) && setTimeout)
                  return (t = setTimeout), setTimeout(e, 0);
                try {
                  return t(e, 0);
                } catch (r) {
                  try {
                    return t.call(null, e, 0);
                  } catch (r) {
                    return t.call(this, e, 0);
                  }
                }
              }
              !(function () {
                try {
                  t = "function" === typeof setTimeout ? setTimeout : o;
                } catch (e) {
                  t = o;
                }
                try {
                  n = "function" === typeof clearTimeout ? clearTimeout : i;
                } catch (e) {
                  n = i;
                }
              })();
              var s,
                u = [],
                c = !1,
                l = -1;
              function f() {
                c &&
                  s &&
                  ((c = !1),
                  s.length ? (u = s.concat(u)) : (l = -1),
                  u.length && p());
              }
              function p() {
                if (!c) {
                  var e = a(f);
                  c = !0;
                  for (var t = u.length; t; ) {
                    for (s = u, u = []; ++l < t; ) s && s[l].run();
                    (l = -1), (t = u.length);
                  }
                  (s = null),
                    (c = !1),
                    (function (e) {
                      if (n === clearTimeout) return clearTimeout(e);
                      if ((n === i || !n) && clearTimeout)
                        return (n = clearTimeout), clearTimeout(e);
                      try {
                        n(e);
                      } catch (t) {
                        try {
                          return n.call(null, e);
                        } catch (t) {
                          return n.call(this, e);
                        }
                      }
                    })(e);
                }
              }
              function d(e, t) {
                (this.fun = e), (this.array = t);
              }
              function h() {}
              (r.nextTick = function (e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1)
                  for (var n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
                u.push(new d(e, t)), 1 !== u.length || c || a(p);
              }),
                (d.prototype.run = function () {
                  this.fun.apply(null, this.array);
                }),
                (r.title = "browser"),
                (r.browser = !0),
                (r.env = {}),
                (r.argv = []),
                (r.version = ""),
                (r.versions = {}),
                (r.on = h),
                (r.addListener = h),
                (r.once = h),
                (r.off = h),
                (r.removeListener = h),
                (r.removeAllListeners = h),
                (r.emit = h),
                (r.prependListener = h),
                (r.prependOnceListener = h),
                (r.listeners = function (e) {
                  return [];
                }),
                (r.binding = function (e) {
                  throw new Error("process.binding is not supported");
                }),
                (r.cwd = function () {
                  return "/";
                }),
                (r.chdir = function (e) {
                  throw new Error("process.chdir is not supported");
                }),
                (r.umask = function () {
                  return 0;
                });
            },
          },
          n = {};
        function r(e) {
          var o = n[e];
          if (void 0 !== o) return o.exports;
          var i = (n[e] = { exports: {} }),
            a = !0;
          try {
            t[e](i, i.exports, r), (a = !1);
          } finally {
            a && delete n[e];
          }
          return i.exports;
        }
        r.ab = "//";
        var o = r(229);
        e.exports = o;
      })();
    },
    1163: function (e, t, n) {
      e.exports = n(387);
    },
    4865: function (e, t, n) {
      var r, o;
      (r = function () {
        var e = { version: "0.2.0" },
          t = (e.settings = {
            minimum: 0.08,
            easing: "ease",
            positionUsing: "",
            speed: 200,
            trickle: !0,
            trickleRate: 0.02,
            trickleSpeed: 800,
            showSpinner: !0,
            barSelector: '[role="bar"]',
            spinnerSelector: '[role="spinner"]',
            parent: "body",
            template:
              '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>',
          });
        function n(e, t, n) {
          return e < t ? t : e > n ? n : e;
        }
        function r(e) {
          return 100 * (-1 + e);
        }
        function o(e, n, o) {
          var i;
          return (
            ((i =
              "translate3d" === t.positionUsing
                ? { transform: "translate3d(" + r(e) + "%,0,0)" }
                : "translate" === t.positionUsing
                ? { transform: "translate(" + r(e) + "%,0)" }
                : { "margin-left": r(e) + "%" }).transition =
              "all " + n + "ms " + o),
            i
          );
        }
        (e.configure = function (e) {
          var n, r;
          for (n in e)
            void 0 !== (r = e[n]) && e.hasOwnProperty(n) && (t[n] = r);
          return this;
        }),
          (e.status = null),
          (e.set = function (r) {
            var s = e.isStarted();
            (r = n(r, t.minimum, 1)), (e.status = 1 === r ? null : r);
            var u = e.render(!s),
              c = u.querySelector(t.barSelector),
              l = t.speed,
              f = t.easing;
            return (
              u.offsetWidth,
              i(function (n) {
                "" === t.positionUsing &&
                  (t.positionUsing = e.getPositioningCSS()),
                  a(c, o(r, l, f)),
                  1 === r
                    ? (a(u, { transition: "none", opacity: 1 }),
                      u.offsetWidth,
                      setTimeout(function () {
                        a(u, {
                          transition: "all " + l + "ms linear",
                          opacity: 0,
                        }),
                          setTimeout(function () {
                            e.remove(), n();
                          }, l);
                      }, l))
                    : setTimeout(n, l);
              }),
              this
            );
          }),
          (e.isStarted = function () {
            return "number" === typeof e.status;
          }),
          (e.start = function () {
            e.status || e.set(0);
            var n = function () {
              setTimeout(function () {
                e.status && (e.trickle(), n());
              }, t.trickleSpeed);
            };
            return t.trickle && n(), this;
          }),
          (e.done = function (t) {
            return t || e.status
              ? e.inc(0.3 + 0.5 * Math.random()).set(1)
              : this;
          }),
          (e.inc = function (t) {
            var r = e.status;
            return r
              ? ("number" !== typeof t &&
                  (t = (1 - r) * n(Math.random() * r, 0.1, 0.95)),
                (r = n(r + t, 0, 0.994)),
                e.set(r))
              : e.start();
          }),
          (e.trickle = function () {
            return e.inc(Math.random() * t.trickleRate);
          }),
          (function () {
            var t = 0,
              n = 0;
            e.promise = function (r) {
              return r && "resolved" !== r.state()
                ? (0 === n && e.start(),
                  t++,
                  n++,
                  r.always(function () {
                    0 === --n ? ((t = 0), e.done()) : e.set((t - n) / t);
                  }),
                  this)
                : this;
            };
          })(),
          (e.render = function (n) {
            if (e.isRendered()) return document.getElementById("nprogress");
            u(document.documentElement, "nprogress-busy");
            var o = document.createElement("div");
            (o.id = "nprogress"), (o.innerHTML = t.template);
            var i,
              s = o.querySelector(t.barSelector),
              c = n ? "-100" : r(e.status || 0),
              l = document.querySelector(t.parent);
            return (
              a(s, {
                transition: "all 0 linear",
                transform: "translate3d(" + c + "%,0,0)",
              }),
              t.showSpinner ||
                ((i = o.querySelector(t.spinnerSelector)) && f(i)),
              l != document.body && u(l, "nprogress-custom-parent"),
              l.appendChild(o),
              o
            );
          }),
          (e.remove = function () {
            c(document.documentElement, "nprogress-busy"),
              c(document.querySelector(t.parent), "nprogress-custom-parent");
            var e = document.getElementById("nprogress");
            e && f(e);
          }),
          (e.isRendered = function () {
            return !!document.getElementById("nprogress");
          }),
          (e.getPositioningCSS = function () {
            var e = document.body.style,
              t =
                "WebkitTransform" in e
                  ? "Webkit"
                  : "MozTransform" in e
                  ? "Moz"
                  : "msTransform" in e
                  ? "ms"
                  : "OTransform" in e
                  ? "O"
                  : "";
            return t + "Perspective" in e
              ? "translate3d"
              : t + "Transform" in e
              ? "translate"
              : "margin";
          });
        var i = (function () {
            var e = [];
            function t() {
              var n = e.shift();
              n && n(t);
            }
            return function (n) {
              e.push(n), 1 == e.length && t();
            };
          })(),
          a = (function () {
            var e = ["Webkit", "O", "Moz", "ms"],
              t = {};
            function n(e) {
              return e
                .replace(/^-ms-/, "ms-")
                .replace(/-([\da-z])/gi, function (e, t) {
                  return t.toUpperCase();
                });
            }
            function r(t) {
              var n = document.body.style;
              if (t in n) return t;
              for (
                var r, o = e.length, i = t.charAt(0).toUpperCase() + t.slice(1);
                o--;

              )
                if ((r = e[o] + i) in n) return r;
              return t;
            }
            function o(e) {
              return (e = n(e)), t[e] || (t[e] = r(e));
            }
            function i(e, t, n) {
              (t = o(t)), (e.style[t] = n);
            }
            return function (e, t) {
              var n,
                r,
                o = arguments;
              if (2 == o.length)
                for (n in t)
                  void 0 !== (r = t[n]) && t.hasOwnProperty(n) && i(e, n, r);
              else i(e, o[1], o[2]);
            };
          })();
        function s(e, t) {
          return ("string" == typeof e ? e : l(e)).indexOf(" " + t + " ") >= 0;
        }
        function u(e, t) {
          var n = l(e),
            r = n + t;
          s(n, t) || (e.className = r.substring(1));
        }
        function c(e, t) {
          var n,
            r = l(e);
          s(e, t) &&
            ((n = r.replace(" " + t + " ", " ")),
            (e.className = n.substring(1, n.length - 1)));
        }
        function l(e) {
          return (" " + (e.className || "") + " ").replace(/\s+/gi, " ");
        }
        function f(e) {
          e && e.parentNode && e.parentNode.removeChild(e);
        }
        return e;
      }),
        void 0 === (o = "function" === typeof r ? r.call(t, n, t, e) : r) ||
          (e.exports = o);
    },
    9921: function (e, t) {
      "use strict";
      var n = "function" === typeof Symbol && Symbol.for,
        r = n ? Symbol.for("react.element") : 60103,
        o = n ? Symbol.for("react.portal") : 60106,
        i = n ? Symbol.for("react.fragment") : 60107,
        a = n ? Symbol.for("react.strict_mode") : 60108,
        s = n ? Symbol.for("react.profiler") : 60114,
        u = n ? Symbol.for("react.provider") : 60109,
        c = n ? Symbol.for("react.context") : 60110,
        l = n ? Symbol.for("react.async_mode") : 60111,
        f = n ? Symbol.for("react.concurrent_mode") : 60111,
        p = n ? Symbol.for("react.forward_ref") : 60112,
        d = n ? Symbol.for("react.suspense") : 60113,
        h = n ? Symbol.for("react.suspense_list") : 60120,
        g = n ? Symbol.for("react.memo") : 60115,
        v = n ? Symbol.for("react.lazy") : 60116,
        y = n ? Symbol.for("react.block") : 60121,
        m = n ? Symbol.for("react.fundamental") : 60117,
        b = n ? Symbol.for("react.responder") : 60118,
        O = n ? Symbol.for("react.scope") : 60119;
      function w(e) {
        if ("object" === typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case r:
              switch ((e = e.type)) {
                case l:
                case f:
                case i:
                case s:
                case a:
                case d:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case c:
                    case p:
                    case v:
                    case g:
                    case u:
                      return e;
                    default:
                      return t;
                  }
              }
            case o:
              return t;
          }
        }
      }
      function x(e) {
        return w(e) === f;
      }
      (t.AsyncMode = l),
        (t.ConcurrentMode = f),
        (t.ContextConsumer = c),
        (t.ContextProvider = u),
        (t.Element = r),
        (t.ForwardRef = p),
        (t.Fragment = i),
        (t.Lazy = v),
        (t.Memo = g),
        (t.Portal = o),
        (t.Profiler = s),
        (t.StrictMode = a),
        (t.Suspense = d),
        (t.isAsyncMode = function (e) {
          return x(e) || w(e) === l;
        }),
        (t.isConcurrentMode = x),
        (t.isContextConsumer = function (e) {
          return w(e) === c;
        }),
        (t.isContextProvider = function (e) {
          return w(e) === u;
        }),
        (t.isElement = function (e) {
          return "object" === typeof e && null !== e && e.$$typeof === r;
        }),
        (t.isForwardRef = function (e) {
          return w(e) === p;
        }),
        (t.isFragment = function (e) {
          return w(e) === i;
        }),
        (t.isLazy = function (e) {
          return w(e) === v;
        }),
        (t.isMemo = function (e) {
          return w(e) === g;
        }),
        (t.isPortal = function (e) {
          return w(e) === o;
        }),
        (t.isProfiler = function (e) {
          return w(e) === s;
        }),
        (t.isStrictMode = function (e) {
          return w(e) === a;
        }),
        (t.isSuspense = function (e) {
          return w(e) === d;
        }),
        (t.isValidElementType = function (e) {
          return (
            "string" === typeof e ||
            "function" === typeof e ||
            e === i ||
            e === f ||
            e === s ||
            e === a ||
            e === d ||
            e === h ||
            ("object" === typeof e &&
              null !== e &&
              (e.$$typeof === v ||
                e.$$typeof === g ||
                e.$$typeof === u ||
                e.$$typeof === c ||
                e.$$typeof === p ||
                e.$$typeof === m ||
                e.$$typeof === b ||
                e.$$typeof === O ||
                e.$$typeof === y))
          );
        }),
        (t.typeOf = w);
    },
    9864: function (e, t, n) {
      "use strict";
      e.exports = n(9921);
    },
    1739: function (e) {
      e.exports = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
      };
    },
    3897: function (e) {
      (e.exports = function (e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    5372: function (e) {
      (e.exports = function (e) {
        if (Array.isArray(e)) return e;
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    6115: function (e) {
      (e.exports = function (e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    7156: function (e) {
      function t(e, t, n, r, o, i, a) {
        try {
          var s = e[i](a),
            u = s.value;
        } catch (c) {
          return void n(c);
        }
        s.done ? t(u) : Promise.resolve(u).then(r, o);
      }
      (e.exports = function (e) {
        return function () {
          var n = this,
            r = arguments;
          return new Promise(function (o, i) {
            var a = e.apply(n, r);
            function s(e) {
              t(a, o, i, s, u, "next", e);
            }
            function u(e) {
              t(a, o, i, s, u, "throw", e);
            }
            s(void 0);
          });
        };
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    6690: function (e) {
      (e.exports = function (e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    3515: function (e, t, n) {
      var r = n(6015),
        o = n(9617);
      function i(t, n, a) {
        return (
          o()
            ? ((e.exports = i = Reflect.construct.bind()),
              (e.exports.__esModule = !0),
              (e.exports.default = e.exports))
            : ((e.exports = i =
                function (e, t, n) {
                  var o = [null];
                  o.push.apply(o, t);
                  var i = new (Function.bind.apply(e, o))();
                  return n && r(i, n.prototype), i;
                }),
              (e.exports.__esModule = !0),
              (e.exports.default = e.exports)),
          i.apply(null, arguments)
        );
      }
      (e.exports = i),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    9728: function (e, t, n) {
      var r = n(4062);
      function o(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(e, r(o.key), o);
        }
      }
      (e.exports = function (e, t, n) {
        return (
          t && o(e.prototype, t),
          n && o(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    8416: function (e, t, n) {
      var r = n(4062);
      (e.exports = function (e, t, n) {
        return (
          (t = r(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    3808: function (e) {
      function t(n) {
        return (
          (e.exports = t =
            Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports),
          t(n)
        );
      }
      (e.exports = t),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    1655: function (e, t, n) {
      var r = n(6015);
      (e.exports = function (e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && r(e, t);
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    4836: function (e) {
      (e.exports = function (e) {
        return e && e.__esModule ? e : { default: e };
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    6035: function (e) {
      (e.exports = function (e) {
        return -1 !== Function.toString.call(e).indexOf("[native code]");
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    9617: function (e) {
      (e.exports = function () {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    8872: function (e) {
      (e.exports = function (e, t) {
        var n =
          null == e
            ? null
            : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
        if (null != n) {
          var r,
            o,
            i,
            a,
            s = [],
            u = !0,
            c = !1;
          try {
            if (((i = (n = n.call(e)).next), 0 === t)) {
              if (Object(n) !== n) return;
              u = !1;
            } else
              for (
                ;
                !(u = (r = i.call(n)).done) &&
                (s.push(r.value), s.length !== t);
                u = !0
              );
          } catch (l) {
            (c = !0), (o = l);
          } finally {
            try {
              if (!u && null != n.return && ((a = n.return()), Object(a) !== a))
                return;
            } finally {
              if (c) throw o;
            }
          }
          return s;
        }
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    2218: function (e) {
      (e.exports = function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    4993: function (e, t, n) {
      var r = n(8698).default,
        o = n(6115);
      (e.exports = function (e, t) {
        if (t && ("object" === r(t) || "function" === typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return o(e);
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    7061: function (e, t, n) {
      var r = n(8698).default;
      function o() {
        "use strict";
        (e.exports = o =
          function () {
            return t;
          }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
        var t = {},
          n = Object.prototype,
          i = n.hasOwnProperty,
          a =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          s = "function" == typeof Symbol ? Symbol : {},
          u = s.iterator || "@@iterator",
          c = s.asyncIterator || "@@asyncIterator",
          l = s.toStringTag || "@@toStringTag";
        function f(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          f({}, "");
        } catch (_) {
          f = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function p(e, t, n, r) {
          var o = t && t.prototype instanceof g ? t : g,
            i = Object.create(o.prototype),
            s = new L(r || []);
          return a(i, "_invoke", { value: k(e, n, s) }), i;
        }
        function d(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (_) {
            return { type: "throw", arg: _ };
          }
        }
        t.wrap = p;
        var h = {};
        function g() {}
        function v() {}
        function y() {}
        var m = {};
        f(m, u, function () {
          return this;
        });
        var b = Object.getPrototypeOf,
          O = b && b(b(C([])));
        O && O !== n && i.call(O, u) && (m = O);
        var w = (y.prototype = g.prototype = Object.create(m));
        function x(e) {
          ["next", "throw", "return"].forEach(function (t) {
            f(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function S(e, t) {
          function n(o, a, s, u) {
            var c = d(e[o], e, a);
            if ("throw" !== c.type) {
              var l = c.arg,
                f = l.value;
              return f && "object" == r(f) && i.call(f, "__await")
                ? t.resolve(f.__await).then(
                    function (e) {
                      n("next", e, s, u);
                    },
                    function (e) {
                      n("throw", e, s, u);
                    }
                  )
                : t.resolve(f).then(
                    function (e) {
                      (l.value = e), s(l);
                    },
                    function (e) {
                      return n("throw", e, s, u);
                    }
                  );
            }
            u(c.arg);
          }
          var o;
          a(this, "_invoke", {
            value: function (e, r) {
              function i() {
                return new t(function (t, o) {
                  n(e, r, t, o);
                });
              }
              return (o = o ? o.then(i, i) : i());
            },
          });
        }
        function k(e, t, n) {
          var r = "suspendedStart";
          return function (o, i) {
            if ("executing" === r)
              throw new Error("Generator is already running");
            if ("completed" === r) {
              if ("throw" === o) throw i;
              return R();
            }
            for (n.method = o, n.arg = i; ; ) {
              var a = n.delegate;
              if (a) {
                var s = P(a, n);
                if (s) {
                  if (s === h) continue;
                  return s;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              r = "executing";
              var u = d(e, t, n);
              if ("normal" === u.type) {
                if (
                  ((r = n.done ? "completed" : "suspendedYield"), u.arg === h)
                )
                  continue;
                return { value: u.arg, done: n.done };
              }
              "throw" === u.type &&
                ((r = "completed"), (n.method = "throw"), (n.arg = u.arg));
            }
          };
        }
        function P(e, t) {
          var n = t.method,
            r = e.iterator[n];
          if (void 0 === r)
            return (
              (t.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                P(e, t),
                "throw" === t.method)) ||
                ("return" !== n &&
                  ((t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              h
            );
          var o = d(r, e.iterator, t.arg);
          if ("throw" === o.type)
            return (
              (t.method = "throw"), (t.arg = o.arg), (t.delegate = null), h
            );
          var i = o.arg;
          return i
            ? i.done
              ? ((t[e.resultName] = i.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                h)
              : i
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              h);
        }
        function j(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function E(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function L(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(j, this),
            this.reset(!0);
        }
        function C(e) {
          if (e) {
            var t = e[u];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                r = function t() {
                  for (; ++n < e.length; )
                    if (i.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (r.next = r);
            }
          }
          return { next: R };
        }
        function R() {
          return { value: void 0, done: !0 };
        }
        return (
          (v.prototype = y),
          a(w, "constructor", { value: y, configurable: !0 }),
          a(y, "constructor", { value: v, configurable: !0 }),
          (v.displayName = f(y, l, "GeneratorFunction")),
          (t.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === v || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (t.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, y)
                : ((e.__proto__ = y), f(e, l, "GeneratorFunction")),
              (e.prototype = Object.create(w)),
              e
            );
          }),
          (t.awrap = function (e) {
            return { __await: e };
          }),
          x(S.prototype),
          f(S.prototype, c, function () {
            return this;
          }),
          (t.AsyncIterator = S),
          (t.async = function (e, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new S(p(e, n, r, o), i);
            return t.isGeneratorFunction(n)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next();
                });
          }),
          x(w),
          f(w, l, "Generator"),
          f(w, u, function () {
            return this;
          }),
          f(w, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (t.values = C),
          (L.prototype = {
            constructor: L,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(E),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    i.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function n(n, r) {
                return (
                  (a.type = "throw"),
                  (a.arg = e),
                  (t.next = n),
                  r && ((t.method = "next"), (t.arg = void 0)),
                  !!r
                );
              }
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r],
                  a = o.completion;
                if ("root" === o.tryLoc) return n("end");
                if (o.tryLoc <= this.prev) {
                  var s = i.call(o, "catchLoc"),
                    u = i.call(o, "finallyLoc");
                  if (s && u) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (s) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var r = this.tryEntries[n];
                if (
                  r.tryLoc <= this.prev &&
                  i.call(r, "finallyLoc") &&
                  this.prev < r.finallyLoc
                ) {
                  var o = r;
                  break;
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var a = o ? o.completion : {};
              return (
                (a.type = e),
                (a.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), h)
                  : this.complete(a)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                h
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), E(n), h;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    E(n);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: C(e), resultName: t, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                h
              );
            },
          }),
          t
        );
      }
      (e.exports = o),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    6015: function (e) {
      function t(n, r) {
        return (
          (e.exports = t =
            Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (e, t) {
                  return (e.__proto__ = t), e;
                }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports),
          t(n, r)
        );
      }
      (e.exports = t),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    7424: function (e, t, n) {
      var r = n(5372),
        o = n(8872),
        i = n(6116),
        a = n(2218);
      (e.exports = function (e, t) {
        return r(e) || o(e, t) || i(e, t) || a();
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    5036: function (e, t, n) {
      var r = n(8698).default;
      (e.exports = function (e, t) {
        if ("object" !== r(e) || null === e) return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
          var o = n.call(e, t || "default");
          if ("object" !== r(o)) return o;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t ? String : Number)(e);
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    4062: function (e, t, n) {
      var r = n(8698).default,
        o = n(5036);
      (e.exports = function (e) {
        var t = o(e, "string");
        return "symbol" === r(t) ? t : String(t);
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    8698: function (e) {
      function t(n) {
        return (
          (e.exports = t =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports),
          t(n)
        );
      }
      (e.exports = t),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    6116: function (e, t, n) {
      var r = n(3897);
      (e.exports = function (e, t) {
        if (e) {
          if ("string" === typeof e) return r(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? r(e, t)
              : void 0
          );
        }
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    3496: function (e, t, n) {
      var r = n(3808),
        o = n(6015),
        i = n(6035),
        a = n(3515);
      function s(t) {
        var n = "function" === typeof Map ? new Map() : void 0;
        return (
          (e.exports = s =
            function (e) {
              if (null === e || !i(e)) return e;
              if ("function" !== typeof e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              if ("undefined" !== typeof n) {
                if (n.has(e)) return n.get(e);
                n.set(e, t);
              }
              function t() {
                return a(e, arguments, r(this).constructor);
              }
              return (
                (t.prototype = Object.create(e.prototype, {
                  constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                o(t, e)
              );
            }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports),
          s(t)
        );
      }
      (e.exports = s),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    4687: function (e, t, n) {
      var r = n(7061)();
      e.exports = r;
      try {
        regeneratorRuntime = r;
      } catch (o) {
        "object" === typeof globalThis
          ? (globalThis.regeneratorRuntime = r)
          : Function("r", "regeneratorRuntime = r")(r);
      }
    },
    1799: function (e, t, n) {
      "use strict";
      function r(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            o = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            o.forEach(function (t) {
              r(e, t, n[t]);
            });
        }
        return e;
      }
      n.d(t, {
        Z: function () {
          return o;
        },
      });
    },
    9534: function (e, t, n) {
      "use strict";
      function r(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
  },
  function (e) {
    var t = function (t) {
      return e((e.s = t));
    };
    e.O(0, [774, 179], function () {
      return t(6840), t(387);
    });
    var n = e.O();
    _N_E = n;
  },
]);
