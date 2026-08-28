# rcapitao-vhugo

Site pessoal de Rafael Capitão — advogado especialista em Privacidade, Proteção de Dados e Segurança da Informação — gerado com [Hugo](https://gohugo.io/) e publicado no GitHub Pages, no domínio próprio [rcapitao.com](https://rcapitao.com/).

O tema é baseado em [Ink](https://github.com/vinooganesh/hugo-ink), de Vinoo Ganesh (MIT — ver `LICENSE`), incorporado diretamente neste repositório para permitir edição livre.

## Stack

- **Hugo** `0.165.0` (extended), front matter em **TOML**
- **GitHub Pages** com deploy automático via **GitHub Actions** (`.github/workflows/hugo.yml`) a cada push em `main`
- Domínio próprio configurado via `static/CNAME` — sem dependência de configuração manual nas Settings do repositório
- Sem framework JS/build step: CSS e JS são escritos à mão em `assets/`

## Conteúdo

- `content/posts/` — posts do blog
- `content/*.md` — páginas fixas do site (Sobre, Diretório, Agora, Uses, Certificações, Changelog, RSS, Links, Style Guide, Busca)
- Todas as páginas usam front matter TOML; campos reconhecidos (`ShowToc`, `TocOpen`, `series`, `lastmod`, `noindex`, `searchHidden`, `hidden`, `sitemap.disable`, etc.) estão documentados ao vivo em [`/style-guide/`](https://rcapitao.com/style-guide/)

## Desenvolvimento local

```bash
hugo server -D
```

Build de produção (mesmo comando usado no deploy):

```bash
hugo --gc --minify --baseURL "https://rcapitao.com/"
```

## Deploy

Automático: todo push em `main` dispara o workflow do GitHub Actions, que builda o site com Hugo e publica no GitHub Pages. Não é necessário nenhum passo manual.
