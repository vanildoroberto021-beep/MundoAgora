const TRADUCOES = {
  pt: {
    search: "Procurar notícias...",
    featured: "Em destaque",
    latest: "Últimas notícias",
    loadMore: "Carregar mais",
    mostRead: "Mais lidas hoje",
    newsletter: "Boletim diário",
    newsletterDesc: "As notícias do mundo, todos os dias às 7h.",
    subscribe: "Subscrever grátis",
    back: "← Voltar",
    backToNews: "← Voltar às notícias",
    notFound: "Artigo não encontrado",
    notFoundDesc: "O artigo que procuras não existe ou foi removido.",
    minRead: "min de leitura",
    regions: ["Mundo","África","América","Ásia","Europa","Oceania"]
  },
  en: {
    search: "Search news...",
    featured: "Featured",
    latest: "Latest news",
    loadMore: "Load more",
    mostRead: "Most read today",
    newsletter: "Daily newsletter",
    newsletterDesc: "World news every day at 7am.",
    subscribe: "Subscribe free",
    back: "← Back",
    backToNews: "← Back to news",
    notFound: "Article not found",
    notFoundDesc: "The article you're looking for doesn't exist or was removed.",
    minRead: "min read",
    regions: ["World","Africa","Americas","Asia","Europe","Oceania"]
  },
  es: {
    search: "Buscar noticias...",
    featured: "Destacado",
    latest: "Últimas noticias",
    loadMore: "Cargar más",
    mostRead: "Más leídas hoy",
    newsletter: "Boletín diario",
    newsletterDesc: "Las noticias del mundo cada día a las 7h.",
    subscribe: "Suscribirse gratis",
    back: "← Volver",
    backToNews: "← Volver a noticias",
    notFound: "Artículo no encontrado",
    notFoundDesc: "El artículo que buscas no existe o fue eliminado.",
    minRead: "min de lectura",
    regions: ["Mundo","África","América","Asia","Europa","Oceanía"]
  },
  fr: {
    search: "Rechercher des actualités...",
    featured: "À la une",
    latest: "Dernières nouvelles",
    loadMore: "Charger plus",
    mostRead: "Les plus lus aujourd'hui",
    newsletter: "Bulletin quotidien",
    newsletterDesc: "Les nouvelles du monde tous les jours à 7h.",
    subscribe: "S'abonner gratuitement",
    back: "← Retour",
    backToNews: "← Retour aux actualités",
    notFound: "Article introuvable",
    notFoundDesc: "L'article que vous recherchez n'existe pas ou a été supprimé.",
    minRead: "min de lecture",
    regions: ["Monde","Afrique","Amériques","Asie","Europe","Océanie"]
  }
};

function obterIdioma() {
  return localStorage.getItem("mundoagora-idioma") || "pt";
}

function t(chave) {
  const lang = obterIdioma();
  return (TRADUCOES[lang] && TRADUCOES[lang][chave]) || TRADUCOES.pt[chave] || chave;
}

// Sobrescrever a função de tempo (definida no index/artigo)
window.tempoRelativo = function(h) {
  const lang = obterIdioma();
  if (lang === "en") {
    if (h < 1) return "just now";
    if (h === 1) return "1 hour ago";
    if (h < 24) return h + " hours ago";
    const d = Math.floor(h/24);
    return d === 1 ? "1 day ago" : d + " days ago";
  }
  if (lang === "es") {
    if (h < 1) return "ahora mismo";
    if (h === 1) return "hace 1 hora";
    if (h < 24) return "hace " + h + " horas";
    const d = Math.floor(h/24);
    return d === 1 ? "hace 1 día" : "hace " + d + " días";
  }
  if (lang === "fr") {
    if (h < 1) return "à l'instant";
    if (h === 1) return "il y a 1 heure";
    if (h < 24) return "il y a " + h + " heures";
    const d = Math.floor(h/24);
    return d === 1 ? "il y a 1 jour" : "il y a " + d + " jours";
  }
  if (h < 1) return "agora mesmo";
  if (h === 1) return "há 1 hora";
  if (h < 24) return "há " + h + " horas";
  const d = Math.floor(h/24);
  return d === 1 ? "há 1 dia" : "há " + d + " dias";
};

function aplicarTraducoes() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(el.getAttribute("data-i18n"));
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    el.placeholder = t(el.getAttribute("data-i18n-placeholder"));
  });
  const regioes = t("regions");
  document.querySelectorAll(".chip").forEach((chip, i) => {
    if (regioes[i]) chip.textContent = regioes[i];
  });
}

function criarSeletorIdioma() {
  const topbar = document.querySelector(".topbar");
  if (!topbar || document.getElementById("lang-switcher")) return;
  const atual = obterIdioma();
  const idiomas = { pt: "PT", en: "EN", es: "ES", fr: "FR" };
  const div = document.createElement("div");
  div.id = "lang-switcher";
  div.style.cssText = "display:flex;gap:.2rem;border:1px solid var(--border);border-radius:999px;padding:.2rem;background:var(--surface);flex-shrink:0";
  div.innerHTML = Object.keys(idiomas).map(k =>
    '<button data-lang="' + k + '" style="border:0;background:' + (k===atual?'var(--accent)':'none') + ';cursor:pointer;padding:.3rem .55rem;border-radius:999px;font-size:.72rem;font-weight:700;color:' + (k===atual?'#fff':'var(--muted)') + '">' + idiomas[k] + '</button>'
  ).join("");
  div.addEventListener("click", e => {
    const b = e.target.closest("button");
    if (b && b.dataset.lang !== atual) {
      localStorage.setItem("mundoagora-idioma", b.dataset.lang);
      location.reload();
    }
  });
  topbar.insertBefore(div, topbar.lastElementChild);
}

document.addEventListener("DOMContentLoaded", () => {
  aplicarTraducoes();
  criarSeletorIdioma();
});
