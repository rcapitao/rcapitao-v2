// Faz a pré-visualização do editor usar o CSS real do site, em vez do estilo
// genérico padrão. Busca a home, descobre a URL do stylesheet publicado
// (o nome muda a cada build, por causa do fingerprint do Hugo) e registra
// no Sveltia CMS. A pré-visualização roda num iframe isolado, então isso
// não interfere em nada na interface do editor em si.
(function () {
  if (!window.CMS || typeof window.CMS.registerPreviewStyle !== "function") {
    return;
  }

  fetch("/", { credentials: "omit" })
    .then(function (response) {
      return response.text();
    })
    .then(function (html) {
      var doc = new DOMParser().parseFromString(html, "text/html");
      var link = doc.querySelector('link[rel="stylesheet"]');
      var href = link && link.getAttribute("href");

      if (href) {
        window.CMS.registerPreviewStyle(new URL(href, window.location.origin).href);
      }
    })
    .catch(function () {
      // Sem estilo na prévia não impede editar/publicar — segue sem quebrar nada.
    });
})();
