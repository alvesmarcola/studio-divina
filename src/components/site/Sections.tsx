import { useEffect, useRef } from "react";
import { images, services, gallery, instagramPreview, site } from "@/content/site";
import { Reveal, SectionLabel } from "./Reveal";


const btnPrimary =
  "label-micro inline-flex items-center justify-center bg-primary px-9 py-4 text-primary-foreground transition-colors duration-500 hover:bg-nude";
const btnGhost =
  "label-micro inline-flex items-center justify-center border border-foreground/40 px-9 py-4 transition-colors duration-500 hover:bg-foreground hover:text-background";

export function Hero() {
  const imgRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const on = () => {
      if (imgRef.current) imgRef.current.style.transform = `translateY(${window.scrollY * 0.08}px) scale(1.05)`;
    };
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <section id="inicio" className="relative min-h-screen pt-20">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-6 pb-16 md:px-10 lg:grid-cols-12 lg:gap-6 lg:pb-0">
        <div className="flex flex-col justify-center pt-10 lg:col-span-6 lg:pt-0 lg:pr-10">
          <p className="label-micro text-muted-foreground">
            Studio Divina — Salão de Beleza & Estética
          </p>
          <p className="mt-8 max-w-sm text-base leading-relaxed text-muted-foreground">
            Um espaço para desacelerar, se cuidar e sair se sentindo ainda mais você.
          </p>
          <h1 className="mt-8 text-[3.4rem] leading-[0.95] sm:text-7xl xl:text-[7.5rem]">
            Beleza que <em className="italic text-nude">combina</em> com você.
          </h1>
          <div className="mt-8 flex items-center gap-4">
            <span className="h-px w-12 bg-foreground/40" />
            <span className="label-micro">{site.city}</span>
          </div>
          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <a href={site.whatsapp} target="_blank" rel="noreferrer" className={btnPrimary}>Agendar horário</a>
            <a href="#studio" className={btnGhost}>Conhecer o Studio</a>
          </div>
        </div>
        <div className="relative lg:col-span-6">
          <div className="relative h-[78vh] overflow-hidden lg:h-[calc(100vh-5rem)]">
            <img ref={imgRef} src={images.hero} alt="Cabelo longo ondulado finalizado no Studio Divina"
              width={1024} height={1408} className="h-full w-full scale-105 object-cover" />
          </div>
          <div className="absolute -bottom-6 left-6 hidden bg-background px-6 py-5 lg:block">
            <p className="label-micro text-muted-foreground">Um studio em</p>
            <p className="font-serif text-2xl italic">Canela, Serra Gaúcha</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Marquee() {
  const words = ["Beleza", "Cuidado", "Autoestima", "Studio Divina"];
  const row = Array.from({ length: 4 }, () => words).flat();
  return (
    <section aria-hidden className="overflow-hidden bg-ink py-8 text-ink-foreground md:py-10">
      <div className="marquee-track">
        {[...row, ...row].map((w, i) => (
          <span key={i} className="flex items-center whitespace-nowrap font-serif text-4xl md:text-6xl">
            <span className={i % 2 ? "italic" : ""}>{w}</span>
            <span className="mx-8 text-gold md:mx-12">•</span>
          </span>
        ))}
      </div>
    </section>
  );
}

export function Studio() {
  return (
    <section id="studio" className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-40">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
        <Reveal className="lg:col-span-5 lg:pt-20">
          <SectionLabel n="01">O Studio</SectionLabel>
          <h2 className="mt-8 text-5xl leading-[1] md:text-7xl">Um espaço<br /><em className="italic">para você.</em></h2>
          <p className="mt-10 max-w-md text-lg leading-relaxed text-muted-foreground">
            O Studio Divina nasceu para ser aquele lugar onde você chega, respira e se entrega ao cuidado.
            Cabelos, unhas, estética e beleza — tudo num só endereço, com calma e carinho.
          </p>
          <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
            Aqui, cada horário é um momento seu.
          </p>
        </Reveal>
        <div className="relative lg:col-span-7">
          <Reveal className="ml-auto w-[78%] overflow-hidden">
            <img src={images.studio1} alt="Ambiente do salão" loading="lazy" width={1024} height={1280}
              className="aspect-[4/5] w-full object-cover" />
          </Reveal>
          <Reveal delay={200} className="relative -mt-40 w-[58%] border-8 border-background md:-mt-64">
            <img src={images.studio2} alt="Detalhes da bancada do studio" loading="lazy" width={1280} height={896}
              className="aspect-[4/3] w-full object-cover" />
          </Reveal>
          <p className="label-micro mt-6 text-muted-foreground">Av. Osvaldo Aranha, 680 — Canela</p>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="servicos" className="bg-card py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <SectionLabel n="02">Serviços</SectionLabel>
            <h2 className="mt-8 text-5xl leading-[1] md:text-7xl">Seu momento<br /><em className="italic">de beleza.</em></h2>
          </div>
          <p className="max-w-xs text-muted-foreground">Quatro universos de cuidado, um mesmo olhar atento.</p>
        </Reveal>
        <div className="mt-20 grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 120} className={i % 2 ? "lg:mt-20" : ""}>
              <a href={site.whatsapp} target="_blank" rel="noreferrer" className="group block">
                <div className="overflow-hidden">
                  <img src={s.image} alt={s.title} loading="lazy" width={1024} height={1280}
                    className="img-zoom aspect-[3/4] w-full object-cover group-hover:scale-[1.06]" />
                </div>
                <div className="mt-6 flex items-baseline gap-4">
                  <span className="label-micro text-muted-foreground">0{i + 1}</span>
                  <h3 className="text-3xl uppercase tracking-[0.12em] transition-transform duration-700 group-hover:-translate-y-1">{s.title}</h3>
                </div>
                <p className="mt-3 text-muted-foreground">{s.text}</p>
                <span className="label-micro mt-4 inline-block translate-y-2 opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
                  Conhecer serviços →
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Gallery() {
  return (
    <section id="resultados" className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-40">
      <Reveal className="text-center">
        <div className="flex justify-center"><SectionLabel n="03">Resultados</SectionLabel></div>
        <h2 className="mt-8 text-5xl md:text-8xl">Beleza <em className="italic">em detalhes.</em></h2>
      </Reveal>
      <div className="mt-20 columns-1 gap-5 sm:columns-2 lg:columns-3">
        {gallery.map((g, i) => (
          <Reveal key={i} delay={(i % 3) * 120} className="group relative mb-5 break-inside-avoid overflow-hidden">
            <img src={g.src} alt={g.label} loading="lazy" className={`img-zoom ${g.ratio} w-full object-cover group-hover:scale-[1.04]`} />
            <div className="absolute inset-0 flex items-end bg-ink/0 p-6 transition-colors duration-700 group-hover:bg-ink/35">
              <span className="label-micro translate-y-3 text-ink-foreground opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
                {g.label}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Highlight() {
  return (
    <section className="grid grid-cols-1 bg-secondary lg:grid-cols-2">
      <Reveal className="overflow-hidden">
        <img src={images.resultado} alt="Resultado de corte e escova" loading="lazy" width={1280} height={896}
          className="h-full min-h-[420px] w-full object-cover" />
      </Reveal>
      <Reveal delay={150} className="flex flex-col justify-center px-6 py-20 md:px-16 lg:px-24">
        <SectionLabel n="04">Acabamento</SectionLabel>
        <h2 className="mt-8 text-5xl leading-[1] md:text-7xl">Detalhes que<br /><em className="italic">fazem diferença.</em></h2>
        <p className="mt-10 max-w-md text-lg leading-relaxed text-muted-foreground">
          O fio no lugar, o brilho certo, a cutícula perfeita. A gente acredita que o cuidado mora no detalhe —
          e é isso que você leva para casa.
        </p>
        <div className="mt-12 flex items-center gap-4">
          <span className="h-px w-12 bg-foreground/40" />
          <span className="label-micro">Studio Divina • Canela/RS</span>
        </div>
      </Reveal>
    </section>
  );
}

export function BookingCTA() {
  return (
    <section id="contato" className="bg-nude px-6 py-28 text-center text-primary-foreground md:py-40">
      <Reveal>
        <p className="label-micro opacity-70">Agendamento</p>
        <h2 className="mx-auto mt-8 max-w-4xl text-5xl leading-[1] md:text-8xl">
          Seu próximo momento <em className="italic">começa aqui.</em>
        </h2>
        <p className="mx-auto mt-8 max-w-md text-lg opacity-80">
          Agende seu horário e venha viver a experiência Studio Divina.
        </p>
        <a href={site.whatsapp} target="_blank" rel="noreferrer"
          className="label-micro mt-12 inline-flex w-full items-center justify-center bg-background px-14 py-6 text-foreground transition-colors duration-500 hover:bg-ink hover:text-ink-foreground sm:w-auto">
          Agendar pelo WhatsApp
        </a>
      </Reveal>
    </section>
  );
}

export function Location() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
      <div className="grid grid-cols-1 gap-14 border-t pt-16 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <SectionLabel n="05">Endereço</SectionLabel>
          <h2 className="mt-8 text-5xl md:text-6xl">Estamos <em className="italic">em Canela.</em></h2>
        </Reveal>
        <Reveal delay={100} className="md:col-span-3">
          <p className="label-micro text-muted-foreground">Onde</p>
          <address className="mt-5 text-lg not-italic leading-relaxed">
            {site.address.map((l) => <span key={l} className="block">{l}</span>)}
          </address>
          <a href={site.maps} target="_blank" rel="noreferrer" className="label-micro mt-8 inline-block border-b border-foreground pb-1 transition-opacity duration-500 hover:opacity-50">
            Como chegar →
          </a>
        </Reveal>
        <Reveal delay={200} className="md:col-span-4">
          <p className="label-micro text-muted-foreground">Horários</p>
          <ul className="mt-5">
            {site.hours.map((h) => (
              <li key={h.day} className="flex justify-between border-b py-3 text-lg">
                <span>{h.day}</span><span className="font-serif italic">{h.time}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export function Instagram() {
  return (
    <section className="bg-card py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <SectionLabel n="06">Instagram</SectionLabel>
            <h2 className="mt-8 text-5xl md:text-6xl">Mais do <em className="italic">Studio Divina.</em></h2>
            <p className="mt-5 text-muted-foreground">Veja nossos trabalhos, bastidores e novidades no Instagram.</p>
          </div>
          <a href={site.instagram} target="_blank" rel="noreferrer" className={btnGhost}>{site.instagramHandle}</a>
        </Reveal>
        <div className="mt-14 grid grid-cols-3 gap-2 md:grid-cols-6">
          {instagramPreview.map((src, i) => (
            <a key={i} href={site.instagram} target="_blank" rel="noreferrer" className="group overflow-hidden">
              <img src={src} alt="Publicação do Instagram" loading="lazy" className="img-zoom aspect-square w-full object-cover group-hover:scale-[1.06]" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink px-6 py-16 text-ink-foreground md:px-10">
      <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-10 md:flex-row md:items-end">
        <div>
          <p className="font-serif text-3xl tracking-[0.28em]">STUDIO DIVINA</p>
          <p className="label-micro mt-3 opacity-60">{site.tagline} — {site.city}</p>
        </div>
        <nav className="flex gap-8">
          <a href={site.instagram} target="_blank" rel="noreferrer" className="label-micro hover:text-gold">Instagram</a>
          <a href={site.whatsapp} target="_blank" rel="noreferrer" className="label-micro hover:text-gold">WhatsApp</a>
          <a href={site.maps} target="_blank" rel="noreferrer" className="label-micro hover:text-gold">Localização</a>
        </nav>
      </div>
    </footer>
  );
}
