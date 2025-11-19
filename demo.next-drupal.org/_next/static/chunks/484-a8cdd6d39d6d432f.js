"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [484],
  {
    5611: function (e, r, t) {
      t.d(r, {
        r: function () {
          return u;
        },
      });
      var s = t(2670),
        l = t(5893),
        n = t(5935),
        a = t(7790),
        i = t(5675),
        c = t.n(i),
        o = t(1664),
        d = t.n(o),
        h = t(2461),
        m = {
          replace: function (e) {
            if ((0, s.Z)(e, a.Element)) {
              if ("img" === e.name) {
                var r = e.attribs,
                  t = r.src,
                  i = r.alt,
                  o = r.class,
                  m = r.width,
                  u = void 0 === m ? "100px" : m,
                  x = r.height,
                  f = void 0 === x ? "100px" : x;
                if ((0, h.f3)(t))
                  return (0, l.jsx)("div", {
                    className: o,
                    children: (0, l.jsx)(c(), {
                      src: ""
                        .concat("https://cms.next-drupal.org", "/")
                        .concat(t),
                      width: "".concat(u, "px"),
                      height: "".concat(f, "px"),
                      alt: i,
                      layout: "intrinsic",
                      objectFit: "cover",
                    }),
                  });
              }
              if ("a" === e.name) {
                var j = e.attribs,
                  v = j.href,
                  p = j.class;
                if (v && (0, h.f3)(v))
                  return (0, l.jsx)(d(), {
                    href: v,
                    passHref: !0,
                    children: (0, l.jsx)("a", {
                      className: p,
                      children: (0, n.du)(e.children),
                    }),
                  });
              }
            }
          },
        };
      function u(e) {
        var r = e.text;
        return r ? (0, l.jsx)(l.Fragment, { children: (0, n.ZP)(r, m) }) : null;
      }
    },
    5484: function (e, r, t) {
      t.d(r, {
        A: function () {
          return D;
        },
      });
      var s = t(1799),
        l = t(5893),
        n = t(9008),
        a = t.n(n),
        i = t(1163),
        c = t(2899),
        o = t.n(c),
        d = t(2461),
        h = t(3454);
      function m(e) {
        var r = e.title,
          t = e.description,
          s = (0, i.useRouter)();
        return (0, l.jsxs)(a(), {
          children: [
            (0, l.jsx)("link", {
              rel: "canonical",
              href: (0, d.mr)("/" !== s.asPath ? s.asPath : ""),
            }),
            (0, l.jsx)("title", {
              children: "".concat(r, " | ").concat(o().name),
            }),
            (0, l.jsx)("meta", {
              name: "description",
              content: t || o().slogan,
            }),
            (0, l.jsx)("meta", {
              property: "og:image",
              content: "".concat(
                h.env.NEXT_PUBLIC_BASE_URL,
                "/images/meta.jpg"
              ),
            }),
            (0, l.jsx)("meta", { property: "og:image:width", content: "800" }),
            (0, l.jsx)("meta", { property: "og:image:height", content: "600" }),
          ],
        });
      }
      var u = t(603),
        x = t(7294);
      function f() {
        var e = (0, i.useRouter)().isPreview,
          r = (0, u.Z)(x.useState(!1), 2),
          t = r[0],
          s = r[1];
        return (
          x.useEffect(
            function () {
              s(e && window.top === window.self);
            },
            [e]
          ),
          t
            ? (0, l.jsx)("div", {
                className:
                  "sticky top-0 left-0 z-50 w-full px-2 py-1 text-center text-white bg-black",
                children: (0, l.jsxs)("p", {
                  className: "mb-0",
                  children: [
                    "This page is a preview.",
                    " ",
                    (0, l.jsx)("a", {
                      href: "/api/exit-preview",
                      className: "text-white underline",
                      children: "Click here",
                    }),
                    " ",
                    "to exit preview mode.",
                  ],
                }),
              })
            : null
        );
      }
      var j = t(1664),
        v = t.n(j),
        p = t(4184),
        g = t.n(p),
        y = t(872),
        b = t(9396);
      function N(e) {
        var r = (0, y.Z)({}, e);
        return (0, l.jsx)(
          "svg",
          (0, b.Z)((0, s.Z)({ viewBox: "0 0 711 206" }, r), {
            children: (0, l.jsxs)("g", {
              fill: "currentColor",
              fillRule: "evenodd",
              children: [
                (0, l.jsx)("path", {
                  d: "M143.425 85.908c-13.783 24.918-33.66 38.693-50.525 38.693-14.172 0-26.29-9.34-31.392-29.353C55.627 120.49 40.852 129 28.841 129 13.783 129 0 103.037 0 81.761c0-14.423 6.378-26.468 22.96-26.468 2.568.032 5.13.298 7.652.794-.783 5.978-1.209 12-1.275 18.03 0 21.275 4.074 41.288 13.783 41.288 6.377 0 13.782-16.082 15.554-40.747v-3.606c0-11.684 13.251-18.03 23.207-18.03a14.37 14.37 0 0 1 8.68 2.344c-.782 5.978-1.208 11.999-1.275 18.03 0 21.275 6.626 37.899 18.353 37.899 7.902 0 18.354-7.537 30.613-25.964a143.56 143.56 0 0 0 8.68-16.37l4.855 1.297c-2.233 4.832-5.138 10.205-8.362 15.65Z",
                  fillRule: "nonzero",
                }),
                (0, l.jsx)("path", {
                  d: "M205.435 131c-10.018 0-17.184-26.201-18.467-49.05-6.417 17.37-13.084 41.013-17.47 46.852a21.755 21.755 0 0 1-7.7 1.55c-16.435 0-27.986-40.726-27.986-54.06 0-13.335 7.7-28.292 25.918-28.292 3.918.022 7.81.629 11.551 1.802a230.968 230.968 0 0 0-6.417 53.447c0 3.388 0 15.822 1.783 15.822.25 0 .499-.505 1.034-1.298 7.13-13.479 12.834-35.283 19.251-49.302.785-12.47 4.635-19.462 11.052-19.462 4.35 0 10.018 3.1 16.935 10.127-2.068 8.29-3.565 35.824-3.565 48.798 0 4.397 0 6.992.499 6.992l2.567-7.208c10.267-29.048 11.301-53.447 40.57-53.447a29.984 29.984 0 0 1 11.801 2.343c0 2.847-.25 5.442-.25 8.036 0 31.644 8.736 46.852 21.035 46.852 9.484 0 20.785-8.83 32.336-25.948a142.865 142.865 0 0 0 8.735-16.363l4.884 1.298a118.878 118.878 0 0 1-8.485 15.821c-15.152 23.354-35.652 38.671-53.156 38.671-17.505 0-32.621-15.821-35.438-55.285-10.018 14.02-17.184 48.258-23.352 56.33-2.78 3.316-5.347 4.974-7.665 4.974Z",
                  fillRule: "nonzero",
                }),
                (0, l.jsx)("path", {
                  d: "M375.678 106.555a52.58 52.58 0 0 1-6.697-25.362c0-13.175 5.945-24.095 19.84-24.095 8.523 0 12.641 6.094 12.641 14.443-.748 10.98-4.982 21.454-12.104 29.942 2.83 7.609 6.948 13.174 13.394 13.174 10.743 0 25.068-10.92 38.927-31.703a138.704 138.704 0 0 0 8.774-15.993l4.907 1.269a115.235 115.235 0 0 1-8.524 15.464c-15.972 24.094-34.308 38.748-48.203 38.748-7.743-.45-14.859-4.339-19.338-10.568-10.712 9.071-24.364 14.08-38.498 14.126-22.418 0-32.231-12.681-32.231-28.18 0-24.87 25.068-56.82 63.96-56.82 10.744 0 17.011 4.298 17.011 8.102 0 2.783-3.366 5.32-10.744 6.094-2.327-7.609-8.236-8.63-14.324-8.63-15.722 0-25.284 22.826-25.284 41.848 0 13.456 4.907 24.87 15.722 24.87 7.498.131 14.82-2.24 20.77-6.729Zm11.603-12.681a49.23 49.23 0 0 0 8.523-25.116c0-5.32-1.54-8.877-5.157-8.877s-4.906 7.855-4.906 17.613a86.67 86.67 0 0 0 1.611 16.38h-.071Z",
                  fillRule: "nonzero",
                }),
                (0, l.jsx)("path", {
                  d: "M511.006 131c-10.018 0-17.184-26.201-18.468-49.05-6.417 17.37-13.084 41.013-17.469 46.852a21.755 21.755 0 0 1-7.7 1.55c-16.436 0-27.987-40.726-27.987-54.06 0-13.335 7.7-28.292 25.919-28.292 3.917.022 7.81.629 11.55 1.802a230.968 230.968 0 0 0-6.417 53.447c0 3.388 0 15.822 1.783 15.822.25 0 .5-.505 1.034-1.298 7.13-13.479 12.834-35.283 19.252-49.302.784-12.47 4.634-19.462 11.052-19.462 4.349 0 10.018 3.1 16.934 10.127-2.068 8.29-3.565 35.824-3.565 48.798 0 4.397 0 6.992.499 6.992l2.567-7.208c10.267-29.048 11.301-53.447 40.571-53.447a29.984 29.984 0 0 1 11.8 2.343c0 2.847-.249 5.442-.249 8.036 0 31.644 8.735 46.852 21.034 46.852 9.484 0 20.785-8.83 32.336-25.948a142.865 142.865 0 0 0 8.735-16.363l4.884 1.298a118.878 118.878 0 0 1-8.485 15.821c-15.152 23.354-35.651 38.671-53.156 38.671-17.505 0-32.621-15.821-35.438-55.285-10.018 14.02-17.184 48.258-23.351 56.33-2.781 3.316-5.348 4.974-7.665 4.974Z",
                  fillRule: "nonzero",
                }),
                (0, l.jsx)("path", {
                  d: "M702.476 85.62C688.151 111.168 666.877 126 649.364 126c-17.513 0-32.232-15.329-32.232-50.35 0-11.497 13.394-17.742 23.458-17.742 3.097-.166 6.168.641 8.774 2.307a145.285 145.285 0 0 0-1.289 17.741c0 20.19 5.945 34.241 16.761 34.241 8.237 0 19.089-7.913 32.483-27.322a140.028 140.028 0 0 0 8.775-16.109L711 70.043c-2.328 4.932-5.408 10.22-8.524 15.577Zm-69.371-60.569c-6.697 0-12.893-3.548-12.893-11.248C620.212 4.86 628.449 0 636.185 0c6.697 0 12.893 3.548 12.893 11.248.036 8.977-8.237 13.838-15.973 13.838v-.035Z",
                  fillRule: "nonzero",
                }),
                (0, l.jsx)("path", {
                  d: "M289.938 205.251c-.378-.395-.567-.92-.567-1.574v-32.423c0-.62.197-1.118.593-1.497.395-.379.919-.568 1.572-.568h18.766c.619 0 1.1.155 1.444.465.344.31.515.757.515 1.342 0 .55-.171.981-.515 1.29-.344.31-.825.465-1.444.465h-16.755v12.546h15.724c.619 0 1.1.155 1.444.465.343.31.515.757.515 1.342 0 .55-.172.981-.515 1.29-.344.31-.825.465-1.444.465h-15.724v14.818c0 .654-.18 1.179-.542 1.574-.36.396-.867.594-1.52.594-.654 0-1.17-.198-1.547-.594Zm34.568-1.523c-2.492-1.514-4.408-3.665-5.749-6.453-1.34-2.788-2.01-6.075-2.01-9.861 0-3.82.661-7.133 1.985-9.939 1.323-2.805 3.23-4.956 5.722-6.453 2.492-1.497 5.44-2.246 8.842-2.246 3.403 0 6.35.749 8.842 2.246 2.492 1.497 4.4 3.648 5.723 6.453 1.323 2.806 1.985 6.101 1.985 9.887 0 3.786-.67 7.082-2.011 9.887-1.34 2.805-3.257 4.965-5.749 6.48-2.491 1.514-5.421 2.271-8.79 2.271-3.368 0-6.298-.757-8.79-2.272Zm17.787-5.24c2.148-2.599 3.222-6.307 3.222-11.126 0-4.818-1.066-8.518-3.197-11.1-2.13-2.581-5.138-3.872-9.022-3.872-3.85 0-6.848 1.3-8.996 3.898-2.148 2.599-3.222 6.29-3.222 11.074s1.074 8.484 3.222 11.1c2.148 2.616 5.147 3.924 8.996 3.924 3.85 0 6.849-1.3 8.997-3.898Zm21.602 5.24c-2.492-1.514-4.408-3.665-5.749-6.453-1.34-2.788-2.01-6.075-2.01-9.861 0-3.82.661-7.133 1.984-9.939 1.324-2.805 3.231-4.956 5.723-6.453 2.492-1.497 5.44-2.246 8.842-2.246 3.403 0 6.35.749 8.842 2.246 2.492 1.497 4.4 3.648 5.722 6.453 1.324 2.806 1.985 6.101 1.985 9.887 0 3.786-.67 7.082-2.01 9.887-1.34 2.805-3.257 4.965-5.749 6.48-2.492 1.514-5.422 2.271-8.79 2.271-3.368 0-6.299-.757-8.79-2.272Zm17.786-5.24c2.148-2.599 3.223-6.307 3.223-11.126 0-4.818-1.066-8.518-3.197-11.1-2.13-2.581-5.138-3.872-9.022-3.872-3.85 0-6.848 1.3-8.997 3.898-2.148 2.599-3.222 6.29-3.222 11.074s1.074 8.484 3.222 11.1c2.149 2.616 5.147 3.924 8.997 3.924 3.85 0 6.848-1.3 8.996-3.898Zm15.776 6.531c-.395-.379-.592-.878-.592-1.497v-32.268c0-.62.197-1.118.592-1.497.396-.379.92-.568 1.573-.568h10.053c5.809 0 10.303 1.575 13.482 4.724 3.18 3.15 4.769 7.632 4.769 13.45 0 5.816-1.598 10.308-4.795 13.474-3.196 3.167-7.682 4.75-13.456 4.75H399.03c-.653 0-1.177-.19-1.573-.568Zm11.368-3.046c9.418 0 14.127-4.87 14.127-14.61 0-9.707-4.709-14.56-14.127-14.56h-7.733v29.17h7.733Zm73.235-32.448c.361.395.542.92.542 1.574v32.681c0 .62-.172 1.119-.516 1.497-.343.379-.825.568-1.443.568-.619 0-1.083-.19-1.392-.568-.31-.378-.464-.877-.464-1.497v-26.382l-11.188 21.477c-.481.998-1.186 1.498-2.114 1.498-.893 0-1.598-.5-2.114-1.498l-11.239-21.219v26.124c0 .62-.163 1.119-.49 1.497-.326.379-.799.568-1.417.568-.619 0-1.1-.19-1.444-.568-.344-.378-.515-.877-.515-1.497V171.1c0-.655.189-1.18.567-1.575.378-.396.893-.594 1.546-.594.86 0 1.547.499 2.063 1.497l13.095 25.143 12.94-25.143c.275-.55.576-.938.903-1.162.326-.223.713-.335 1.16-.335.653 0 1.16.198 1.52.594Zm41.065 34.513c0 .516-.198.947-.593 1.29a2.087 2.087 0 0 1-1.418.517c-.86 0-1.46-.413-1.805-1.239l-3.66-8.364h-19.437l-3.712 8.364c-.343.826-.945 1.24-1.804 1.24-.55 0-1.031-.182-1.444-.543-.412-.361-.618-.8-.618-1.317 0-.275.069-.55.206-.826l14.745-32.835c.206-.482.516-.843.928-1.084.412-.241.86-.362 1.34-.362.516 0 .98.13 1.392.387.413.259.722.611.928 1.059l14.745 32.835c.138.276.207.568.207.878Zm-25.366-11.306h16.343l-8.197-18.535-8.146 18.535Zm59.624-5.628c.327.31.49.74.49 1.29v12.856c0 .826-.129 1.446-.386 1.859-.258.413-.73.74-1.418.98-1.375.586-3.042 1.05-5.001 1.395-1.96.344-3.918.516-5.878.516-3.608 0-6.719-.74-9.331-2.22-2.612-1.48-4.614-3.614-6.006-6.402-1.392-2.788-2.088-6.126-2.088-10.016 0-3.82.687-7.125 2.062-9.912 1.375-2.788 3.351-4.93 5.929-6.428 2.578-1.497 5.602-2.246 9.074-2.246 2.406 0 4.64.37 6.702 1.11 2.062.74 3.798 1.798 5.207 3.175.584.585.876 1.188.876 1.807 0 .482-.137.904-.412 1.265-.275.361-.619.542-1.031.542-.413 0-.894-.206-1.444-.62-1.787-1.376-3.402-2.331-4.846-2.865-1.444-.533-3.11-.8-5-.8-4.091 0-7.227 1.29-9.41 3.872-2.182 2.582-3.274 6.282-3.274 11.1 0 4.922 1.109 8.665 3.326 11.23 2.217 2.564 5.473 3.846 9.77 3.846 3.196 0 6.1-.482 8.713-1.446v-11.048h-7.528c-.584 0-1.048-.155-1.392-.465-.343-.31-.515-.706-.515-1.188 0-.516.172-.92.515-1.213.344-.292.808-.439 1.392-.439h9.641c.516 0 .937.155 1.263.465Zm40.55 16.934c0 .516-.199.947-.594 1.29a2.087 2.087 0 0 1-1.418.517c-.859 0-1.46-.413-1.804-1.239l-3.66-8.364H571.02l-3.712 8.364c-.344.826-.945 1.24-1.805 1.24-.55 0-1.03-.182-1.443-.543-.413-.361-.619-.8-.619-1.317 0-.275.069-.55.206-.826l14.745-32.835c.207-.482.516-.843.928-1.084.413-.241.86-.362 1.34-.362.516 0 .98.13 1.393.387.412.259.722.611.928 1.059l14.745 32.835c.137.276.206.568.206.878Zm-25.366-11.306h16.343l-8.198-18.535-8.145 18.535Zm55.267 9.757c.344.31.516.74.516 1.291 0 .585-.172 1.033-.516 1.342-.343.31-.824.465-1.443.465h-23.046c-.618 0-1.108-.172-1.469-.516a1.71 1.71 0 0 1-.541-1.291c0-.516.189-1.05.567-1.6l20.622-29.429h-19.179c-.618 0-1.1-.155-1.443-.464-.344-.31-.516-.74-.516-1.291 0-.585.172-1.033.516-1.342.344-.31.825-.465 1.443-.465h22.479c.618 0 1.108.172 1.47.516.36.344.54.775.54 1.291 0 .482-.189.998-.567 1.549l-20.674 29.48h19.798c.619 0 1.1.155 1.443.464Zm7.064 2.762c-.379-.395-.568-.92-.568-1.574v-32.578c0-.654.19-1.179.568-1.574.378-.396.893-.594 1.546-.594s1.169.198 1.547.594c.378.395.567.92.567 1.574v32.578c0 .654-.189 1.179-.567 1.574-.378.396-.894.594-1.547.594-.653 0-1.168-.198-1.546-.594Zm41.244-35.726c.344.395.516.92.516 1.574v32.578c0 .654-.18 1.179-.542 1.574-.36.396-.867.594-1.52.594-.654 0-1.22-.292-1.702-.878L651.5 176.314v27.363c0 .654-.18 1.179-.542 1.574-.36.396-.85.594-1.47.594-.618 0-1.099-.198-1.443-.594-.343-.395-.515-.92-.515-1.574v-32.578c0-.654.18-1.179.541-1.574.36-.396.868-.594 1.52-.594.688 0 1.273.292 1.754.878l21.344 28.653V171.1c0-.654.18-1.179.541-1.574.361-.396.85-.594 1.47-.594.618 0 1.1.198 1.443.594Zm10.08 35.494c-.396-.379-.594-.878-.594-1.497v-32.268c0-.62.198-1.118.593-1.497.396-.379.92-.568 1.573-.568h19.282c.618 0 1.1.155 1.443.465.344.31.516.74.516 1.29 0 .551-.172.981-.516 1.291-.344.31-.825.465-1.443.465h-17.272v12.649h16.24c.62 0 1.1.155 1.444.464.344.31.516.74.516 1.291 0 .55-.172.981-.516 1.29-.344.31-.825.465-1.443.465h-16.24v13.217h17.27c.62 0 1.1.147 1.444.44.344.292.516.73.516 1.316 0 .55-.172.98-.516 1.29-.344.31-.825.465-1.443.465h-19.282c-.653 0-1.177-.19-1.573-.568Z",
                }),
              ],
            }),
          })
        );
      }
      function Z(e) {
        var r = (0, y.Z)({}, e),
          t = (0, i.useRouter)(),
          n = t.locales,
          a = t.asPath,
          c = t.locale;
        return !n || n.length < 2
          ? null
          : (0, l.jsx)(
              "nav",
              (0, b.Z)((0, s.Z)({}, r), {
                children: (0, l.jsx)("ul", {
                  className: "flex space-x-4",
                  children: n.map(function (e) {
                    return (0,
                    l.jsx)("li", { children: (0, l.jsx)(v(), { href: a, locale: e, passHref: !0, children: (0, l.jsx)("a", { "data-cy": "local-switcher-".concat(e), className: g()(e === c ? "font-semibold" : "font-normal"), children: o().locales[e] }) }) }, e);
                  }),
                }),
              })
            );
      }
      var w = t(9534);
      function _(e) {
        var r = e.items,
          t = (0, w.Z)(e, ["items"]),
          n = (0, i.useRouter)();
        return (0, l.jsx)(
          "nav",
          (0, b.Z)((0, s.Z)({}, t), {
            children: (0, l.jsx)("ul", {
              className:
                "flex flex-col items-center justify-center w-full pt-8 space-y-6 md:pt-0 md:space-y-0 md:flex-row md:space-x-14",
              children: r.map(function (e) {
                var r =
                  n.asPath === e.url ||
                  "/"
                    .concat(n.locale)
                    .concat("/" === n.asPath ? "" : n.asPath) === e.url ||
                  ("/" !== e.url && 0 === n.asPath.indexOf(e.url));
                return (0,
                l.jsx)("li", { children: (0, l.jsx)(v(), { href: e.url, passHref: !0, children: (0, l.jsx)("a", { className: g()("text-xl border-b-[3px] flex border-b-transparent font-serif transition-colors hover:text-primary", { "border-b-primary": r }), children: e.title }) }) }, e.id);
              }),
            }),
          })
        );
      }
      var k = t(7561),
        P = t(3299),
        R = t(2606),
        C = t(7106);
      function M(e, r) {
        var t = e.href,
          n = e.children,
          a = (0, w.Z)(e, ["href", "children"]);
        return (0, l.jsx)(v(), {
          href: t,
          passHref: !0,
          children: (0, l.jsx)(
            "a",
            (0, b.Z)((0, s.Z)({ ref: r }, a), { children: n })
          ),
        });
      }
      var z = x.forwardRef(M);
      function H() {
        var e = (0, P.useSession)(),
          r = e.data,
          t = e.status,
          s = (0, k.$G)().t;
        return "loading" === t
          ? null
          : "unauthenticated" === t
          ? (0, l.jsx)(v(), {
              href: "/login",
              passHref: !0,
              children: (0, l.jsx)("a", {
                className: "text-text hover:underline",
                children: s("login"),
              }),
            })
          : "authenticated" === t
          ? (0, l.jsx)("div", {
              className: "flex space-x-4",
              children: (0, l.jsxs)(R.v, {
                as: "div",
                className: "relative z-50",
                children: [
                  (0, l.jsx)(R.v.Button, {
                    className:
                      "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-opacity-75",
                    children: s("my-account"),
                  }),
                  (0, l.jsx)(C.u, {
                    enter: "transition duration-100 ease-out",
                    enterFrom: "transform scale-95 opacity-0",
                    enterTo: "transform scale-100 opacity-100",
                    leave: "transition duration-75 ease-out",
                    leaveFrom: "transform scale-100 opacity-100",
                    leaveTo: "transform scale-95 opacity-0",
                    children: (0, l.jsxs)(R.v.Items, {
                      className:
                        "absolute right-0 w-48 mt-2 origin-top-right bg-white border divide-y shadow-md border-border divide-border",
                      children: [
                        (0, l.jsxs)(R.v.Item, {
                          as: "div",
                          className: "flex flex-col px-3 py-2",
                          children: [
                            (0, l.jsx)("p", {
                              className: "font-semibold",
                              children: r.user.name,
                            }),
                            (0, l.jsx)("p", {
                              className: "text-sm truncate text-gray",
                              children: r.user.email,
                            }),
                          ],
                        }),
                        (0, l.jsx)(R.v.Item, {
                          children: function (e) {
                            var r = e.active;
                            return (0, l.jsx)(z, {
                              href: "/account",
                              className: g()(
                                "flex hover:bg-body w-full px-3 py-2 text-text",
                                { "bg-body": r }
                              ),
                              children: s("my-account"),
                            });
                          },
                        }),
                        (0, l.jsx)(R.v.Item, {
                          children: function (e) {
                            var r = e.active;
                            return (0, l.jsx)("button", {
                              className: g()(
                                "flex w-full px-3 py-2 text-text",
                                { "bg-body": r }
                              ),
                              onClick: function () {
                                return (0, P.signOut)();
                              },
                              children: s("logout"),
                            });
                          },
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            })
          : void 0;
      }
      var E = t(7568),
        F = t(655);
      function I(e) {
        var r = e.className,
          t = (0, w.Z)(e, ["className"]),
          n = (0, i.useRouter)(),
          a = (0, k.$G)().t,
          c = (function () {
            var e = (0, E.Z)(function (e) {
              var r;
              return (0, F.__generator)(this, function (t) {
                return (
                  e.preventDefault(),
                  (r = new FormData(e.target)),
                  (window.location.href = "/"
                    .concat(n.locale, "/search?keys=")
                    .concat(r.get("keys"))),
                  [2]
                );
              });
            });
            return function (r) {
              return e.apply(this, arguments);
            };
          })();
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(v(), {
              href: "/search",
              passHref: !0,
              children: (0, l.jsxs)("a", {
                className: "md:hidden",
                children: [
                  (0, l.jsx)("span", {
                    className: "sr-only",
                    children: a("search"),
                  }),
                  (0, l.jsx)(L, {}),
                ],
              }),
            }),
            (0, l.jsxs)(
              "form",
              (0, b.Z)(
                (0, s.Z)(
                  {
                    className: g()("text-sm hidden md:flex items-center", r),
                    onSubmit: c,
                  },
                  t
                ),
                {
                  children: [
                    (0, l.jsxs)("div", {
                      className: "relative flex-1",
                      children: [
                        (0, l.jsxs)("label", {
                          htmlFor: "keys",
                          className:
                            "absolute inset-y-0 flex items-center px-2",
                          children: [
                            (0, l.jsx)("span", {
                              className: "sr-only",
                              children: a("search"),
                            }),
                            (0, l.jsx)(L, {}),
                          ],
                        }),
                        (0, l.jsx)("input", {
                          id: "keys",
                          name: "keys",
                          required: !0,
                          className:
                            "py-2 pl-10 pr-4 border border-r-0 rounded-l-sm w-60 lg:w-80 border-gray-lighter focus:outline-dotted focus:outline-offset-2 focus:ring-0 focus:outline-link focus:border-gray",
                          placeholder: a("search-by-keyword-ingredient-dish"),
                        }),
                      ],
                    }),
                    (0, l.jsx)("div", {
                      children: (0, l.jsx)("input", {
                        type: "submit",
                        className:
                          "flex items-center px-3 py-2 font-serif transition-colors bg-white border rounded-sm rounded-r-sm cursor-pointer border-gray-lighter hover:bg-link/10 hover:border-link",
                        value: a("search"),
                      }),
                    }),
                  ],
                }
              )
            ),
          ],
        });
      }
      function L(e) {
        var r = e.className,
          t = (0, w.Z)(e, ["className"]);
        return (0, l.jsx)(
          "svg",
          (0, b.Z)(
            (0, s.Z)(
              {
                className: g()("w-5 h-5 text-primary", r),
                viewBox: "0 0 16 16",
              },
              t
            ),
            {
              children: (0, l.jsxs)("g", {
                fill: "none",
                fillRule: "evenodd",
                children: [
                  (0, l.jsx)("path", {
                    d: "M5.407 9.766 1.13 14.042l.828.827 4.276-4.276a6 6 0 0 1-.827-.827Zm4.611-8.556a4.772 4.772 0 1 0 0 9.543 4.772 4.772 0 0 0 0-9.543ZM6.911 5.47a.467.467 0 1 1 0-.935.467.467 0 0 1 0 .934Zm1.03-1.134A.818.818 0 1 1 7.942 2.7a.818.818 0 0 1-.003 1.637Zm1.652-1.124a.468.468 0 1 1 .005-.937.468.468 0 0 1-.005.937Z",
                  }),
                  (0, l.jsx)("path", {
                    d: "M10.018.017a5.966 5.966 0 0 0-5.23 8.833 1.41 1.41 0 0 0-.399.28L.431 13.088a1.412 1.412 0 0 0 0 1.996l.484.484a1.412 1.412 0 0 0 1.997 0l3.958-3.958c.115-.115.21-.25.28-.398A5.965 5.965 0 1 0 10.018.017Zm-8.06 14.852-.828-.827 4.277-4.276a6 6 0 0 0 .827.827l-4.276 4.276Zm8.06-4.115a4.772 4.772 0 1 1 .002-9.545 4.772 4.772 0 0 1-.003 9.545h.001Z",
                    fill: "currentColor",
                    fillRule: "nonzero",
                  }),
                  (0, l.jsx)("circle", {
                    fill: "currentColor",
                    fillRule: "nonzero",
                    cx: "7.94",
                    cy: "3.518",
                    r: "1",
                  }),
                  (0, l.jsx)("circle", {
                    fill: "currentColor",
                    fillRule: "nonzero",
                    cx: "9.595",
                    cy: "2.744",
                    r: "1",
                  }),
                  (0, l.jsx)("circle", {
                    fill: "currentColor",
                    fillRule: "nonzero",
                    cx: "6.911",
                    cy: "5.002",
                    r: "1",
                  }),
                ],
              }),
            }
          )
        );
      }
      function B(e) {
        var r = e.menus,
          t = (0, u.Z)(x.useState(!1), 2),
          s = t[0],
          n = t[1];
        return (0, l.jsxs)("header", {
          className: "bg-white",
          children: [
            (0, l.jsx)("div", {
              className: "container",
              children: (0, l.jsxs)("div", {
                className:
                  "grid items-center justify-between grid-cols-3 py-4 border-b border-gray-lighter md:py-6",
                children: [
                  (0, l.jsx)("div", { children: (0, l.jsx)(Z, {}) }),
                  (0, l.jsx)("div", {
                    className: "flex justify-center",
                    children: (0, l.jsx)(I, {}),
                  }),
                  (0, l.jsx)("div", {
                    className: "flex justify-end",
                    children: (0, l.jsx)(H, {}),
                  }),
                ],
              }),
            }),
            (0, l.jsxs)("div", {
              className:
                "container relative flex-wrap items-center justify-between py-6 md:flex lg:py-10",
              children: [
                (0, l.jsx)(v(), {
                  href: "/",
                  passHref: !0,
                  children: (0, l.jsxs)("a", {
                    className: "flex justify-start",
                    children: [
                      (0, l.jsx)(N, {
                        className: "w-48 h-12 text-primary lg:h-16 lg:w-52",
                      }),
                      (0, l.jsx)("span", {
                        className: "sr-only",
                        children: o().name,
                      }),
                    ],
                  }),
                }),
                (0, l.jsx)("button", {
                  className:
                    "absolute transition-all border beorder-transparent md:hidden right-4 top-8 hover:border-link",
                  onClick: function () {
                    return n(!s);
                  },
                  children: (0, l.jsx)("svg", {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    className: "w-8 h-8",
                    children: (0, l.jsx)("path", {
                      d: "M3 12h18M3 6h18M3 18h18",
                    }),
                  }),
                }),
                (0, l.jsx)("div", {
                  className: g()(
                    "max-h-0 transition-all overflow-hidden md:max-h-screen",
                    { "max-h-screen": s }
                  ),
                  children: (0, l.jsx)(_, { items: r.main }),
                }),
              ],
            }),
          ],
        });
      }
      var U = t(3811),
        S = t(5611);
      function O(e) {
        var r = e.items,
          t = (0, w.Z)(e, ["items"]);
        return (0, l.jsx)(
          "nav",
          (0, b.Z)((0, s.Z)({}, t), {
            children: (0, l.jsx)("ul", {
              className: "flex flex-col space-y-2",
              children: r.map(function (e) {
                return (0,
                l.jsx)("li", { children: (0, l.jsx)(v(), { href: e.url, passHref: !0, children: (0, l.jsx)("a", { className: "text-sm font-semibold transition-colors hover:bg-black hover:underline", children: e.title }) }) }, e.id);
              }),
            }),
          })
        );
      }
      function T(e) {
        var r,
          t,
          s = e.menus,
          n = e.blocks,
          a = (0, k.$G)("common").t;
        return (0, l.jsxs)("footer", {
          children: [
            (
              null === (r = n.recipeCollections) || void 0 === r
                ? void 0
                : r.length
            )
              ? (0, l.jsx)("section", {
                  className: "py-10 text-white bg-gray",
                  children: (0, l.jsxs)("div", {
                    className: "container",
                    children: [
                      (0, l.jsx)("h2", {
                        className: "font-serif text-3xl text-center",
                        children: a("recipe-collections"),
                      }),
                      (0, l.jsx)("div", {
                        className:
                          "grid max-w-4xl mx-auto mt-4 text-sm text-center md:text-left md:grid-cols-4 gap-y-3 gap-x-4",
                        children: n.recipeCollections.map(function (e) {
                          return (0,
                          l.jsx)(v(), { href: e.path.alias, passHref: !0, children: (0, l.jsx)("a", { className: "font-semibold hover:underline", children: e.name }) }, e.id);
                        }),
                      }),
                    ],
                  }),
                })
              : null,
            (0, l.jsx)("section", {
              className: "py-8 text-white bg-gray-darker",
              children: (0, l.jsxs)("div", {
                className:
                  "container justify-between lg:grid lg:grid-cols-[6fr_1.5fr_2.5fr]",
                children: [
                  (null === n || void 0 === n ? void 0 : n.footerPromo) &&
                    (0, l.jsxs)("div", {
                      className:
                        "grid text-center lg:text-left lg:grid-cols-[266px_1fr] lg:h-[200px] overflow-hidden gap-6",
                      children: [
                        n.footerPromo.field_media_image &&
                          (0, l.jsx)(U.j, {
                            media: n.footerPromo.field_media_image,
                            width: 266,
                            height: 236,
                            layout: "fixed",
                          }),
                        (0, l.jsxs)("div", {
                          className:
                            "items-start flex-1 space-y-4 text-center lg:pt-10 lg:flex lg:flex-col lg:text-left",
                          children: [
                            (0, l.jsx)("h2", {
                              className: "font-serif text-2xl",
                              children: n.footerPromo.field_title,
                            }),
                            n.footerPromo.field_summary &&
                              (0, l.jsx)("p", {
                                className: "text-sm leading-normal",
                                children: n.footerPromo.field_summary,
                              }),
                            n.footerPromo.field_content_link &&
                              (0, l.jsx)(v(), {
                                href: n.footerPromo.field_content_link.uri.replace(
                                  "internal:",
                                  ""
                                ),
                                passHref: !0,
                                children: (0, l.jsx)("a", {
                                  className:
                                    "text-sm underline transition-colors hover:bg-black",
                                  children:
                                    n.footerPromo.field_content_link.title,
                                }),
                              }),
                          ],
                        }),
                      ],
                    }),
                  (
                    null === s ||
                    void 0 === s ||
                    null === (t = s.footer) ||
                    void 0 === t
                      ? void 0
                      : t.length
                  )
                    ? (0, l.jsxs)("div", {
                        className:
                          "pt-10 text-center lg:text-left lg:col-start-3",
                        children: [
                          (0, l.jsx)("h2", {
                            className: "mb-4 font-serif text-2xl",
                            children: a("tell-us-what-you-think"),
                          }),
                          (0, l.jsx)(O, { items: s.footer }),
                        ],
                      })
                    : null,
                ],
              }),
            }),
            n.disclaimer &&
              (0, l.jsxs)("div", {
                className:
                  "container text-center flex flex-col space-y-4 lg:text-left lg:grid-cols-[4fr_3.5fr_2.5fr] lg:space-y-0 lg:grid justify-between py-8 text-sm text-text",
                children: [
                  (0, l.jsx)("div", {
                    children: (0, l.jsx)(S.r, {
                      text: n.disclaimer.field_disclaimer.processed,
                    }),
                  }),
                  (0, l.jsx)("div", {
                    className: "col-start-3",
                    children: (0, l.jsx)(S.r, {
                      text: n.disclaimer.field_copyright.processed,
                    }),
                  }),
                ],
              }),
          ],
        });
      }
      function A() {
        return null;
      }
      function D(e) {
        var r = e.meta,
          t = e.menus,
          n = e.blocks,
          a = e.children;
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(m, (0, s.Z)({}, r)),
            (0, l.jsxs)("div", {
              className: "flex flex-col min-h-screen",
              children: [
                (0, l.jsx)(f, {}),
                (0, l.jsx)(B, { menus: { main: t.main } }),
                (0, l.jsx)("main", {
                  className: "flex-1 pb-10 bg-body",
                  children: a,
                }),
                (0, l.jsx)(T, { menus: { footer: t.footer }, blocks: n }),
              ],
            }),
            (0, l.jsx)(A, {}),
          ],
        });
      }
    },
    3811: function (e, r, t) {
      t.d(r, {
        j: function () {
          return d;
        },
      });
      var s = t(1799),
        l = t(9396),
        n = t(9534),
        a = t(5893),
        i = t(5675),
        c = t.n(i),
        o = t(2461);
      function d(e) {
        var r = e.media,
          t = e.layout,
          i = void 0 === t ? "responsive" : t,
          d = e.objectFit,
          h = e.width,
          m = e.height,
          u = e.priority,
          x = (0, n.Z)(e, [
            "media",
            "layout",
            "objectFit",
            "width",
            "height",
            "priority",
          ]),
          f = null === r || void 0 === r ? void 0 : r.field_media_image;
        if (!(null === f || void 0 === f ? void 0 : f.uri)) return null;
        var j =
          "fill" === i
            ? null
            : {
                width: h || f.resourceIdObjMeta.width,
                height: m || f.resourceIdObjMeta.height,
              };
        return (0, a.jsx)(
          "div",
          (0, l.Z)(
            (0, s.Z)({ className: "media__content image__wrapper" }, x),
            {
              children: (0, a.jsx)(
                c(),
                (0, s.Z)(
                  {
                    src: (0, o.mr)(f.uri.url),
                    layout: i,
                    objectFit: d,
                    alt: f.resourceIdObjMeta.alt || "Image",
                    title: f.resourceIdObjMeta.title,
                    priority: u,
                  },
                  j
                )
              ),
            }
          )
        );
      }
    },
    2461: function (e, r, t) {
      t.d(r, {
        f3: function () {
          return i;
        },
        mr: function () {
          return n;
        },
        p6: function () {
          return a;
        },
      });
      var s = t(2899),
        l = t.n(s);
      function n(e) {
        return "".concat(l().drupalBaseUrl).concat(e);
      }
      function a(e) {
        return new Date(e).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        });
      }
      function i(e) {
        return !new RegExp("^(?:[a-z]+:)?//", "i").test(e);
      }
    },
    2899: function (e, r, t) {
      var s = t(3454);
      e.exports = {
        name: "Umami",
        slogan: "The Umami demo site built as a headless Drupal with Next.js",
        baseUrl: s.env.NEXT_PUBLIC_BASE_URL,
        drupalBaseUrl: "https://cms.next-drupal.org",
        defaultLocale: "en",
        locales: { en: "English", es: "Espa\xf1ol" },
      };
    },
  },
]);
