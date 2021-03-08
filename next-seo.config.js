export default {
  description:
    "I am a self-taught full stack developer, I show you my open source projects and ideas, with javascript and other technologies.",
  additionalMetaTags: [
    {
      propiedad: "dc: creator",
      contenido: "senixcode",
    },
    {
      nombre: "senixcode",
      contenido: "about me, portfolio, project and ideas",
    },
    {
      httpEquiv: "x-ua-compatible",
      contenido: "IE = borde; chrome = 1 ",
    },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://senixcode.dev/",
    images: [
      {
        url:
          "https://raw.githubusercontent.com/senixcode/my-website/main/public/senixcode.jpg",
        width: 800,
        height: 600,
        alt: "logo senixcode",
      },
    ],
    site_name: "About senixcode",
  },
  twitter: {
    handle: "@senixcode",
    site: "@senixcode",
    cardType: "summary_large_image",
  },
};
