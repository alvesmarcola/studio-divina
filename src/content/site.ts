// Conteúdo editável do site. Troque textos, links e imagens aqui.
// Imagens: substitua os arquivos em src/assets/ pelas fotos reais do Studio Divina (mesmo nome).
import hero from "@/assets/hero.jpg";
import studio1 from "@/assets/studio-1.jpg";
import studio2 from "@/assets/studio-2.jpg";
import hair from "@/assets/hair.jpg";
import nails from "@/assets/nails.jpg";
import estetica from "@/assets/estetica.jpg";
import beleza from "@/assets/beleza.jpg";
import resultado from "@/assets/resultado.jpg";

export const site = {
  name: "Studio Divina",
  tagline: "Salão de Beleza & Estética",
  city: "Canela • RS",
  whatsapp: "https://wa.me/5554984125983",
  phone: "(54) 98412-5983",
  instagram: "https://www.instagram.com/studio.divina/",
  instagramHandle: "@studio.divina",
  maps: "https://www.google.com/maps/search/?api=1&query=Av.+Osvaldo+Aranha,+680+-+Vila+Luiza,+Canela+-+RS",
  address: ["Av. Osvaldo Aranha, 680", "Vila Luiza", "Canela - RS"],
  hours: [
    { day: "Segunda a sexta", time: "09:00 — 20:30" },
    { day: "Sábado", time: "08:00 — 17:00" },
    { day: "Domingo", time: "Fechado" },
  ],
};

export const nav = [
  { label: "Início", href: "#inicio" },
  { label: "Studio", href: "#studio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Resultados", href: "#resultados" },
  { label: "Contato", href: "#contato" },
];

export const images = { hero, studio1, studio2, hair, nails, estetica, beleza, resultado };

export const services = [
  { title: "Cabelos", text: "Corte, cor e finalização pensados para o seu estilo.", image: hair },
  { title: "Unhas", text: "Mãos e pés cuidados com capricho, do clássico ao delicado.", image: nails },
  { title: "Estética", text: "Momentos de cuidado com a pele e o bem-estar.", image: estetica },
  { title: "Beleza", text: "Detalhes que realçam o que você já tem de mais bonito.", image: beleza },
];

export const gallery = [
  { src: hero, label: "Cabelos", ratio: "aspect-[3/4]" },
  { src: studio2, label: "Detalhes", ratio: "aspect-[4/3]" },
  { src: nails, label: "Unhas", ratio: "aspect-[4/5]" },
  { src: studio1, label: "Ambiente", ratio: "aspect-[3/4]" },
  { src: beleza, label: "Beleza", ratio: "aspect-[4/5]" },
  { src: resultado, label: "Resultados", ratio: "aspect-[4/3]" },
  { src: hair, label: "Cabelos", ratio: "aspect-[3/4]" },
  { src: estetica, label: "Estética", ratio: "aspect-[4/5]" },
];

export const instagramPreview = [hair, nails, studio2, beleza, resultado, estetica];
