// Campo de etiquetas com sugestão das já cadastradas (lista em "tag_options",
// no config.yml) e opção de criar uma nova digitando — o widget "select"
// nativo do Sveltia CMS só permite escolher entre opções fixas, não permite
// criar. Este widget resolve isso com um <input> de texto + <datalist> do
// próprio navegador: digitar mostra sugestões das etiquetas existentes, e
// confirmar (Enter ou vírgula) aceita qualquer texto, exista ou não na lista.
(function () {
  function whenCMSReady(cb) {
    if (window.CMS && window.h && window.createClass) {
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

  whenCMSReady(function () {
    var h = window.h;

    var styleTag = document.createElement("style");
    styleTag.textContent =
      ".tags-field-control{display:flex;flex-wrap:wrap;gap:6px;align-items:center;" +
      "padding:6px;border:1px solid var(--sui-control-border-color,#ccc);border-radius:4px;}" +
      ".tags-field-chip{display:inline-flex;align-items:center;gap:4px;" +
      "background:var(--sui-secondary-background-color,#eee);border-radius:999px;" +
      "padding:2px 4px 2px 10px;font-size:0.85em;}" +
      ".tags-field-chip button{border:none;background:none;cursor:pointer;" +
      "font-size:1.1em;line-height:1;padding:2px 6px;color:inherit;}" +
      ".tags-field-input{flex:1;min-width:160px;border:none;outline:none;" +
      "background:transparent;font:inherit;color:inherit;padding:4px;}";
    document.head.appendChild(styleTag);

    var TagsControl = window.createClass({
      getInitialState: function () {
        return { draft: "" };
      },
      commit: function (raw) {
        var tag = (raw || "").trim();
        if (!tag) return;
        var current = toArray(this.props.value);
        if (current.indexOf(tag) === -1) {
          this.props.onChange(current.concat([tag]));
        }
        this.setState({ draft: "" });
      },
      remove: function (tag) {
        var current = toArray(this.props.value);
        this.props.onChange(current.filter(function (t) { return t !== tag; }));
      },
      render: function () {
        var self = this;
        var current = toArray(this.props.value);
        var configured = toArray(this.props.field && this.props.field.get("tag_options"));
        var options = configured.filter(function (o) { return current.indexOf(o) === -1; });
        var listId = (this.props.forID || "tags") + "-options";

        return h(
          "div",
          { className: "tags-field-control" },
          current.map(function (tag) {
            return h(
              "span",
              { key: tag, className: "tags-field-chip" },
              tag,
              h(
                "button",
                {
                  type: "button",
                  "aria-label": "Remover " + tag,
                  onClick: function () { self.remove(tag); }
                },
                "×"
              )
            );
          }),
          h("input", {
            id: this.props.forID,
            className: "tags-field-input",
            type: "text",
            list: listId,
            value: this.state.draft,
            placeholder: current.length ? "" : "Digite ou escolha uma etiqueta",
            onChange: function (e) { self.setState({ draft: e.target.value }); },
            onKeyDown: function (e) {
              if (e.key === "Enter" || e.key === ",") {
                e.preventDefault();
                self.commit(self.state.draft);
              } else if (e.key === "Backspace" && !self.state.draft && current.length) {
                self.remove(current[current.length - 1]);
              }
            },
            onBlur: function () { self.commit(self.state.draft); }
          }),
          h(
            "datalist",
            { id: listId },
            options.map(function (o) { return h("option", { key: o, value: o }); })
          )
        );
      }
    });

    window.CMS.registerFieldType("tags-select", TagsControl);
  });
})();
