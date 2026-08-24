---
title: "Style Guide"
noindex: true
searchHidden: true
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

## Front matter de uma página

```markdown
+++
title = "Título da página"
date = 2026-08-24T00:00:00Z
draft = false
+++
```
