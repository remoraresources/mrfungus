(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    8312: function (e, r, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return i(3543);
        },
      ]);
    },
    600: function (e, r, i) {
      "use strict";
      i.d(r, {
        l: function () {
          return a;
        },
      });
      var l = i(5893),
        n = i(1664),
        s = i.n(n),
        t = i(3811);
      function a(e) {
        var r = e.block;
        return (0, l.jsxs)("div", {
          className: "relative lg:max-h-[550px] overflow-hidden",
          children: [
            (0, l.jsx)(t.j, { media: r.field_media_image, priority: !0 }),
            (0, l.jsx)("div", {
              className: "container inset-0 z-10 flex items-center lg:absolute",
              children: (0, l.jsxs)("div", {
                className:
                  "top-0 flex flex-col items-start space-y-4 lg:max-w-[40%] text-text px-0 py-6 lg:px-6 lg:text-white lg:border border-text lg:bg-black/40",
                children: [
                  (0, l.jsx)("p", {
                    className: "font-serif text-[28px] leading-tight",
                    children: r.field_title,
                  }),
                  r.field_summary &&
                    (0, l.jsx)("p", {
                      className: "text-[19px] leading-snug",
                      children: r.field_summary,
                    }),
                  r.field_content_link &&
                    (0, l.jsx)(s(), {
                      href: r.field_content_link.uri.replace("internal:", ""),
                      passHref: !0,
                      children: (0, l.jsx)("a", {
                        className:
                          "px-6 py-3 font-serif text-xl text-white transition-colors border-2 rounded-md bg-secondary hover:bg-white hover:text-black border-secondary",
                        children: r.field_content_link.title,
                      }),
                    }),
                ],
              }),
            }),
          ],
        });
      }
    },
    3543: function (e, r, i) {
      "use strict";
      i.r(r),
        i.d(r, {
          __N_SSG: function () {
            return v;
          },
          default: function () {
            return g;
          },
        });
      var l = i(5893),
        n = i(7561),
        s = i(4184),
        t = i.n(s),
        a = i(5484),
        c = i(600),
        o = i(1799),
        d = i(9396),
        x = i(9534),
        f = i(1664),
        h = i.n(f),
        p = i(3811);
      function m(e) {
        var r = e.node,
          i = e.className,
          s = (0, x.Z)(e, ["node", "className"]),
          a = (0, n.$G)().t;
        return (0, l.jsxs)(
          "article",
          (0, d.Z)(
            (0, o.Z)(
              {
                className: t()(
                  "relative flex flex-col p-4 space-y-4 overflow-hidden bg-white border border-border group",
                  i
                ),
              },
              s
            ),
            {
              children: [
                (0, l.jsxs)("div", {
                  className: "flex flex-col flex-1 space-y-4",
                  children: [
                    (0, l.jsx)("h2", {
                      className: "flex-1 font-serif text-2xl",
                      children: r.title,
                    }),
                    (0, l.jsx)(h(), {
                      href: r.path.alias,
                      passHref: !0,
                      children: (0, l.jsxs)("a", {
                        className:
                          "inline-flex items-center uppercase hover:underline text-link",
                        children: [
                          a("view-article"),
                          (0, l.jsx)("svg", {
                            className: "w-5 h-5 ml-1",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: (0, l.jsx)("path", {
                              d: "m9 18 6-6-6-6",
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, l.jsx)(p.j, {
                  media: r.field_media_image,
                  width: 335,
                  height: 225,
                }),
              ],
            }
          )
        );
      }
      function u(e) {
        var r = e.node,
          i = (0, x.Z)(e, ["node"]),
          s = (0, n.$G)().t;
        return (0, l.jsxs)(
          "article",
          (0, d.Z)(
            (0, o.Z)(
              {
                className:
                  "relative flex flex-col p-4 space-y-4 overflow-hidden bg-white border border-border group",
              },
              i
            ),
            {
              children: [
                (0, l.jsx)("h2", {
                  className: "flex-1 font-serif text-[22px]",
                  children: r.title,
                }),
                (0, l.jsx)(h(), {
                  href: r.path.alias,
                  passHref: !0,
                  children: (0, l.jsxs)("a", {
                    className:
                      "inline-flex items-center uppercase hover:underline text-link",
                    children: [
                      s("view-recipe"),
                      (0, l.jsx)("svg", {
                        className: "w-5 h-5 ml-1",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: (0, l.jsx)("path", { d: "m9 18 6-6-6-6" }),
                      }),
                    ],
                  }),
                }),
                (0, l.jsx)(p.j, {
                  media: r.field_media_image,
                  width: 335,
                  height: 225,
                }),
              ],
            }
          )
        );
      }
      var v = !0;
      function g(e) {
        var r = e.banner,
          i = e.promotedArticles,
          s = e.promotedRecipes,
          o = e.menus,
          d = e.blocks,
          x = (0, n.$G)().t;
        return (0, l.jsxs)(a.A, {
          meta: { title: x("home") },
          menus: o,
          blocks: d,
          children: [
            (0, l.jsx)(c.l, { block: r }),
            (0, l.jsx)("div", {
              className:
                "container grid gap-8 py-8 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]",
              children: (null === i || void 0 === i ? void 0 : i.length)
                ? i.map(function (e, r) {
                    return (0,
                    l.jsx)(m, { node: e, className: t()({ "col-span-1 sm:col-span-2 lg:col-span-1": 0 === r, "flex-col-reverse space-y-0 gap-4": 0 !== r }) }, e.id);
                  })
                : null,
            }),
            (null === s || void 0 === s ? void 0 : s.length)
              ? (0, l.jsxs)("div", {
                  className: "container",
                  children: [
                    (0, l.jsx)("p", {
                      className:
                        "py-10 font-serif text-3xl text-center text-text",
                      children: x(
                        "explore-recipes-across-every-type-of-occasion-ingredient-and-skill-level"
                      ),
                    }),
                    (0, l.jsx)("div", {
                      className: "grid gap-8 sm:grid-cols-2",
                      children: s.map(function (e) {
                        return (0, l.jsx)(u, { node: e }, e.id);
                      }),
                    }),
                  ],
                })
              : null,
          ],
        });
      }
    },
  },
  function (e) {
    e.O(0, [363, 484, 774, 888, 179], function () {
      return (r = 8312), e((e.s = r));
      var r;
    });
    var r = e.O();
    _N_E = r;
  },
]);
