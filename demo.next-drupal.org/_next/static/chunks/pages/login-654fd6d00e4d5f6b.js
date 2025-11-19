(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [459],
  {
    3236: function (e, s, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/login",
        function () {
          return t(340);
        },
      ]);
    },
    7831: function (e, s, t) {
      "use strict";
      t.d(s, {
        O: function () {
          return c;
        },
      });
      var r = t(1799),
        n = t(9396),
        a = t(9534),
        i = t(5893),
        l = t(7561),
        u = t(1664),
        o = t.n(u);
      function c(e) {
        var s = e.items,
          t = (0, a.Z)(e, ["items"]),
          u = (0, l.$G)().t;
        return (null === s || void 0 === s ? void 0 : s.length)
          ? (s.unshift({ title: u("home"), url: "/" }),
            (0, i.jsx)(
              "nav",
              (0, n.Z)((0, r.Z)({ className: "py-4 text-text" }, t), {
                children: (0, i.jsx)("ol", {
                  className: "flex",
                  children: s.map(function (e, t) {
                    return (0,
                    i.jsxs)("li", { className: "flex items-center leading-none truncate", children: [e.url ? (0, i.jsx)(o(), { href: e.url, passHref: !0, children: (0, i.jsx)("a", { className: "underline text-link", children: e.title }) }) : e.title, t !== s.length - 1 && (0, i.jsx)("svg", { className: "w-3 h-3 mx-1", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: (0, i.jsx)("path", { d: "m13 17 5-5-5-5M6 17l5-5-5-5" }) })] }, t);
                  }),
                }),
              })
            ))
          : null;
      }
    },
    1524: function (e, s, t) {
      "use strict";
      t.d(s, {
        m: function () {
          return c;
        },
      });
      var r = t(1799),
        n = t(9396),
        a = t(9534),
        i = t(5893),
        l = t(4184),
        u = t.n(l),
        o = t(7831);
      function c(e) {
        var s = e.heading,
          t = e.breadcrumbs,
          l = e.children,
          c = e.className,
          d = (0, a.Z)(e, ["heading", "breadcrumbs", "children", "className"]);
        return (0, i.jsxs)(
          "div",
          (0, n.Z)((0, r.Z)({ className: u()("container", c) }, d), {
            children: [
              (null === t || void 0 === t ? void 0 : t.length)
                ? (0, i.jsx)(o.O, { items: t })
                : null,
              (0, i.jsxs)("div", {
                className: u()(
                  "flex items-center py-10 text-text",
                  l ? "justify-between" : "justify-center"
                ),
                children: [
                  (0, i.jsx)("h1", {
                    className:
                      "max-w-4xl font-serif text-2xl text-center md:text-5xl lg:text-4xl",
                    children: s,
                  }),
                  l,
                ],
              }),
            ],
          })
        );
      }
    },
    340: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          __N_SSG: function () {
            return b;
          },
          default: function () {
            return N;
          },
        });
      var r = t(5893),
        n = t(3299),
        a = t(7561),
        i = t(1163),
        l = t(5484),
        u = t(7568),
        o = t(1799),
        c = t(9396),
        d = t(9534),
        m = t(603),
        x = t(655),
        f = t(7294),
        h = t(4184),
        p = t.n(h);
      function g(e) {
        var s = e.className,
          t = (0, d.Z)(e, ["className"]),
          l = (0, m.Z)(f.useState(null), 2),
          h = l[0],
          g = l[1],
          v = (0, a.$G)().t,
          b = (0, i.useRouter)();
        f.useEffect(
          function () {
            return "CredentialsSignin" === b.query.error
              ? g({
                  status: "error",
                  message: v(
                    "unrecognized-username-or-password-please-try-again"
                  ),
                })
              : g(null);
          },
          [b, v]
        );
        var N = (function () {
          var e = (0, u.Z)(function (e) {
            var s;
            return (0, x.__generator)(this, function (t) {
              switch (t.label) {
                case 0:
                  return (
                    e.preventDefault(),
                    (s = new FormData(e.target)),
                    g({ status: "fetching" }),
                    [
                      4,
                      (0, n.signIn)("credentials", {
                        username: s.get("username"),
                        password: s.get("password"),
                      }),
                    ]
                  );
                case 1:
                  return t.sent(), [2, g({ status: "success" })];
              }
            });
          });
          return function (s) {
            return e.apply(this, arguments);
          };
        })();
        return (0, r.jsxs)(
          "form",
          (0, c.Z)(
            (0, o.Z)({ className: p()("grid gap-4", s), onSubmit: N }, t),
            {
              children: [
                (null === h || void 0 === h ? void 0 : h.message) &&
                  (0, r.jsx)("p", {
                    className: p()("py-3 px-4 border", {
                      "border-link bg-link/10 text-link":
                        "success" ===
                        (null === h || void 0 === h ? void 0 : h.status),
                      "border-error bg-error/10 text-error":
                        "error" ===
                        (null === h || void 0 === h ? void 0 : h.status),
                    }),
                    children: h.message,
                  }),
                (0, r.jsxs)("div", {
                  className: "grid gap-2",
                  children: [
                    (0, r.jsxs)("label", {
                      htmlFor: "username",
                      className: "font-semibold text-text",
                      children: [
                        v("username"),
                        " ",
                        (0, r.jsx)("span", {
                          className: "text-sm text-red-500",
                          children: "*",
                        }),
                      ],
                    }),
                    (0, r.jsx)("input", {
                      id: "username",
                      name: "username",
                      maxLength: 255,
                      required: !0,
                      className:
                        "px-2 py-3 border-2 border-gray focus:outline-dotted focus:outline-offset-2 focus:ring-0 focus:outline-link focus:border-gray",
                    }),
                    (0, r.jsx)("p", {
                      className: "text-sm text-text",
                      children: v("enter-your-drupal-username"),
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: "grid gap-2",
                  children: [
                    (0, r.jsxs)("label", {
                      htmlFor: "password",
                      className: "font-semibold text-text",
                      children: [
                        v("password"),
                        " ",
                        (0, r.jsx)("span", {
                          className: "text-sm text-red-500",
                          children: "*",
                        }),
                      ],
                    }),
                    (0, r.jsx)("input", {
                      type: "password",
                      id: "password",
                      name: "password",
                      required: !0,
                      className:
                        "px-2 py-3 border-2 border-gray focus:outline-dotted focus:outline-offset-2 focus:ring-0 focus:outline-link focus:border-gray",
                    }),
                    (0, r.jsx)("p", {
                      className: "text-sm text-text",
                      children: v(
                        "enter-the-password-that-accompanies-your-username"
                      ),
                    }),
                  ],
                }),
                (0, r.jsx)("div", {
                  children: (0, r.jsx)("input", {
                    type: "submit",
                    className:
                      "px-6 py-3 font-serif text-xl text-white transition-colors border-2 rounded-sm cursor-pointer bg-link hover:bg-white hover:text-black border-link",
                    disabled:
                      "fetching" ===
                      (null === h || void 0 === h ? void 0 : h.status),
                    value:
                      "fetching" ===
                      (null === h || void 0 === h ? void 0 : h.status)
                        ? v("please-wait")
                        : v("login"),
                  }),
                }),
              ],
            }
          )
        );
      }
      var v = t(1524),
        b = !0;
      function N(e) {
        var s = e.menus,
          t = e.blocks,
          u = (0, a.$G)().t,
          o = (0, i.useRouter)(),
          c = (0, n.useSession)().status;
        return "authenticated" === c
          ? (o.push("/"), null)
          : (0, r.jsxs)(l.A, {
              meta: { title: u("login") },
              menus: s,
              blocks: t,
              children: [
                (0, r.jsx)(v.m, {
                  heading: u("login"),
                  breadcrumbs: [{ title: u("login") }],
                }),
                "unauthenticated" === c &&
                  (0, r.jsx)("div", {
                    className: "container pb-10",
                    children: (0, r.jsx)(g, { className: "max-w-xl mx-auto" }),
                  }),
              ],
            });
      }
    },
  },
  function (e) {
    e.O(0, [363, 484, 774, 888, 179], function () {
      return (s = 3236), e((e.s = s));
      var s;
    });
    var s = e.O();
    _N_E = s;
  },
]);
