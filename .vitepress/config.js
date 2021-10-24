const glob = require("glob");

const pages = glob
  .sync("guia/*.md")
  .filter((f) => f !== "guia/index.md")
  .map((f) => "/" + f)
  .map((link) => ({
    link: link.replace(".md", ""),
    text: link.replace(/^\/guia\//, "").replace(/\.md$/, ""),
  }));

module.exports = {
  title: "sobrevivir.de",
  description: "Información útil sobre la vida en Alemania",
  lang: "es",
  themeConfig: {
    repo: "sobrevivir-de/sobrevivir.de",
    docsDir: ".",

    editLinks: true,
    editLinkText: "Edita esta página en GitHub",
    lastUpdated: "Última actualización",

    nav: [
      { text: "Comienzo", link: "/" },
      { text: "Guía", link: "/guia/" },
      {
        text: "Nosotros",
        link: "/nosotros",
      },
      {
        text: "Instagram",
        link: "https://instagram.com/sobrevivir.de",
      },
      {
        text: "Telegram",
        link: "https://t.me/sobrevivirde",
      },
    ],

    sidebar: {
      "/guia/": pages,
    },
  },
};
