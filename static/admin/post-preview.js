// Pré-visualização customizada da coleção "posts": reproduz a estrutura real
// da página de post (layouts/_default/single.html — header.post-header,
// h1.post-title, .post-meta, .post-tags, .post-content), em vez da lista
// genérica de campos que o Sveltia CMS mostra por padrão. Combinado com
// preview.js (que injeta o CSS real do site), isso faz a prévia parecer o
// post de verdade, não uma lista de campo/valor.
(function () {
  function whenCMSReady(cb) {
    if (window.CMS && window.h) {
      cb();
    } else {
      setTimeout(function () {
        whenCMSReady(cb);
      }, 50);
    }
  }

  function toArray(value) {
    if (!value) return [];
    if (typeof value.toJS === "function") return value.toJS();
    return Array.isArray(value) ? value : [];
  }

  function formatDate(value) {
    if (!value) return "";
    var date = new Date(value);
    if (isNaN(date.getTime())) return "";
    try {
      return new Intl.DateTimeFormat("pt-BR", { dateStyle: "long" }).format(date);
    } catch (e) {
      return date.toLocaleDateString("pt-BR");
    }
  }

  function readingTime(text) {
    var words = (text || "").trim().split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.round(words / 200));
  }

  whenCMSReady(function () {
    var h = window.h;

    function PostPreview(props) {
      var entry = props.entry;
      var title = entry.getIn(["data", "title"]) || "";
      var date = entry.getIn(["data", "date"]);
      var tags = toArray(entry.getIn(["data", "tags"]));
      var body = entry.getIn(["data", "body"]) || "";

      return h(
        "main",
        { className: "container" },
        h(
          "article",
          null,
          h(
            "header",
            { className: "post-header" },
            h("h1", { className: "post-title" }, title),
            h(
              "span",
              { className: "post-meta" },
              date ? h("span", null, formatDate(date)) : null,
              h("span", null, readingTime(body) + " min de leitura")
            ),
            tags.length
              ? h(
                  "div",
                  { className: "post-tags" },
                  tags.map(function (tag) {
                    return h("a", { key: tag, href: "javascript:void(0)" }, tag);
                  })
                )
              : null
          ),
          h("div", { className: "post-content" }, props.widgetFor("body"))
        )
      );
    }

    window.CMS.registerPreviewTemplate("posts", PostPreview);
  });
})();
