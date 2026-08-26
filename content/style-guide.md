---
title: "Style Guide"
noindex: true
searchHidden: true
ShowToc: true
sitemap:
  disable: true
---

Referência rápida de formatação em Markdown usada neste site. Cada bloco de código mostra a sintaxe crua — clique em **copy** para copiar — seguido do resultado renderizado.

## Títulos

```markdown
# Título H1
## Título H2
### Título H3
#### Título H4
```

## Ênfase

```markdown
*itálico* ou _itálico_
**negrito** ou __negrito__
***negrito e itálico***
~~riscado~~
```

*itálico*, **negrito**, ***negrito e itálico***, ~~riscado~~

## Links e imagens

```markdown
[Texto do link](https://exemplo.com)
[Link com título](https://exemplo.com "Título ao passar o mouse")
![Texto alternativo](/images/exemplo.jpg)
```

## Listas

```markdown
- Item não ordenado
- Outro item
  - Sub-item

1. Item ordenado
2. Outro item
   1. Sub-item

- [ ] Tarefa pendente
- [x] Tarefa concluída
```

- Item não ordenado
- Outro item
  - Sub-item

1. Item ordenado
2. Outro item
   1. Sub-item

- [ ] Tarefa pendente
- [x] Tarefa concluída

## Citação

```markdown
> Uma citação em bloco.
>
> Pode ter várias linhas.
```

> Uma citação em bloco.
>
> Pode ter várias linhas.

## Código

````markdown
Código `inline` dentro de uma frase.

```go
func main() {
    fmt.Println("olá, mundo")
}
```
````

Código `inline` dentro de uma frase.

```go
func main() {
    fmt.Println("olá, mundo")
}
```

## Tabela

```markdown
| Coluna A | Coluna B |
| -------- | -------- |
| valor 1  | valor 2  |
| valor 3  | valor 4  |
```

| Coluna A | Coluna B |
| -------- | -------- |
| valor 1  | valor 2  |
| valor 3  | valor 4  |

## Linha horizontal

```markdown
---
```

---

## Sumário (TOC)

Ativado por página, no front matter. Gera automaticamente uma lista com os títulos (`##`, `###`...) do post, dentro de um bloco recolhível.

```yaml
---
title: Meu post
ShowToc: true
TocOpen: true # opcional: já vem aberto
---
```

Esta própria página tem `ShowToc: true` — o sumário aparece no topo do conteúdo, logo acima deste parágrafo.

## Série de posts

Agrupa posts relacionados numa sequência numerada, com navegação entre eles. Basta usar o mesmo valor de `series` em 2 ou mais posts — a navegação só aparece quando há mais de um post com a mesma série.

```yaml
---
title: Parte 1 - Introdução
series: Guia de Privacidade Digital
---
```

## Front matter completo

Todos os campos reconhecidos pelo site, em YAML (o formato usado em todo o conteúdo existente):

```yaml
---
title: Título da página # obrigatório
date: 2026-08-24T00:00:00-03:00 # data de publicação
lastmod: 2026-08-25T00:00:00-03:00 # última atualização (opcional; padrão = date)
description: Resumo curto # meta description, cards de compartilhamento e busca
tags:
  - privacidade
  - lgpd
series: Nome da série # ativa a navegação de série (ver acima)
ShowToc: true # ativa o sumário (ver acima)
TocOpen: true # sumário já aberto por padrão
cover: /images/capa-do-post.jpg # imagem de OpenGraph própria (substitui o card gerado automaticamente)
subtitle: Subtítulo # usado apenas na página /agora/
aliases:
  - /url-antiga/ # redireciona URLs antigas para esta página
draft: true # não publica a página (fica de fora do build de produção)
noindex: true # remove dos mecanismos de busca (robots meta), mas continua no site
searchHidden: true # remove da busca interna do site, mas continua indexável
hidden: true # remove do /llms.txt, mas continua no site normalmente
sitemap:
  disable: true # remove do sitemap.xml
---
```
