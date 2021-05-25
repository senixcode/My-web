---
title: "Mi experiencia con Reacjs"
description: "Te contare como aprendi react y tips para crear proyectos y no aburrirce en el intento "
date: "2020-01-01"
---

> Comence con las classes realmente no me gusto al principio me senti muy perdido pense que ponian html con js hasta que conoci **React Hook** y **Styled Components**. La diferencia es **increible** me genero un gusto por realizar estos tipo de codigos.

```

```

```js
const AboutMe = () => (
  <Container
    gridTemplateColumnsXs="1fr"
    gridTemplateColumnsMd={"4fr 6fr 1fr"}
    height="87vh"
    styles={container}
  >
    <Hide maxMd="none" styles={image}>
      <Image alt="image about me" src="/static/aboutMe.svg" styles={image} />
    </Hide>
    <Content />
    <Hide maxMd="none">
      <SocialNetworks />
    </Hide>
  </Container>
)
```

- **Generación estática** es un método de pre-renderización que genera HTML durante la **construcción**. El HTML pre-renderizado se _reutiliza_ cada vez que se hace una petición.
- **El renderizado del lado del servidor** es un método de pre-renderizado que genera HTML en **tiempo de construcción**.

Es importante tener en cuenta que Next.js permite **elegir** la forma de pre-renderización para cada página. Puedes crear una aplicación Next.js "híbrida", utilizando la generación estática para la mayoría de las páginas y utilizando la renderización del lado del servidor para otras.

```

```

![imagen de prueba](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-images-1.medium.com%2Fmax%2F1600%2F1*zRK0fIblNtfxdn5k4JJX-A.png&f=1&nofb=1)

>
