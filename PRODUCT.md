# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, served on the same surface:

- **New visitors** — people in or near Rio das Ostras (RJ) looking for a church community to join; they come to learn what the community is, find service times and address, and feel welcomed.
- **Current members** — people already part of the community who stay informed about programs, events, the gallery, and ways to give.

## Product Purpose

The official digital presence of Comunidade Costa do Sol, an evangelical Christian community in Rio das Ostras, RJ. It exists to be the trustworthy, complete source of information about the community — who they are, when they meet, what happens, and how to connect or contribute — in one place. Success means a new visitor knows where and when to come, and a member finds the information they need.

## Positioning

A welcoming community whose stated identity is "Um lugar para pertencer" (a place to belong). The site's claim neighbors could not copy: it is the community's own official voice in Portuguese, grounded in real local presence (address in Cidade Praiana, Rio das Ostras) and real life together (services, ministries, events, photos, giving), not generic church marketing.

## Operating Context

- Single-page site in Portuguese (pt-BR) with fixed header and anchor navigation across sections: Reuniões, Ministérios, Eventos, Galeria, Quem Somos, Equipe Pastoral, Doação, Contato.
- Real meeting schedule shown: Domingo — Escola Bíblica 10:00 and Culto de Celebração 19:00; Quarta — Culto de Oração 20:00; Sexta — Encontro de Jovens 20:00; Sábado — Encontro de Mulheres 10:00.
- Real venue: Alameda Campomar, 562 — Cidade Praiana, Rio das Ostras, RJ (Google Maps embed and "Como chegar" directions link).
- Real social channels: YouTube (@comunidadecostadosol8122), Instagram (@comunidadedecostadosol), Facebook (comunidadecostadosol).
- Gallery images are hosted on Facebook's CDN; hero and section photos are local assets under `src/assets/img`.
- Contact form is frontend-only (success alert, no backend submission).
- Donation section offers PIX, bank transfer, and online giving through a partner platform.
- Built with React + Vite + Tailwind CSS v4; dev command `npm run dev`; `_redirects` file indicates Netlify hosting. Footer credits "Desenvolvido por Nomos Digital".

## Capabilities and Constraints

- Anchor-based single-page navigation with active-section highlight and mobile menu.
- Scroll-reveal animations with staggered children and a grain overlay, respecting `prefers-reduced-motion`.
- Gallery with lightbox (keyboard: Esc/arrows) and category captions.
- PIX key copy-to-clipboard interaction.
- Back-to-top floating button.
- **Undecided / pending (do not fabricate):** pastoral team names (currently "Pastor Nome" placeholders), contact phone and e-mail, PIX key, bank details, CNPJ, and the online-donation partner URL are placeholders pending real data.
- Hardcoded content that must be revisited as reality changes: the next-event card (Ágape Aniversário da Igreja, 11 Janeiro 2026) and the meeting schedule.

## Brand Commitments

- Name: Comunidade Costa do Sol.
- Tagline: "Um lugar para pertencer".
- Language: Portuguese (pt-BR).
- Palette: primary #203246, primaryLight #2A4A6E, accent #D8C6A5, dark #2E3A59, light #FAFAF8, olive #75836A.
- Typography: Inter (sans) + Libre Baskerville (serif).
- Logo assets: `src/assets/img/logo-claro.jpeg`, `src/assets/img/logo-oscuro.jpeg`.
- Footer credit: "Desenvolvido por Nomos Digital" with link to nomosdigital.com.ar.
- Spanish/Portuguese style: content stays in pt-BR; do not localize away from the community's language.

## Evidence on Hand

- Real local photos: `src/assets/img/heroimg.png`, `heroimg2.png`, `heroimg3.png`, `imgHorizontal.jpg`, `quemsomos.png`.
- Real logos (light and dark variants).
- Real social URLs, address, and meeting times (see Operating Context).
- Real gallery photos pulled from the community's Facebook page.
- **Absences future work must not invent:** real names of the pastoral team, a working phone number and e-mail, the real PIX key, bank account details, CNPJ, and an online-giving URL. All are placeholders today.

## Product Principles

- **One trusted source:** the site is the official word of the community; never invent contact, financial, team, or event facts.
- **Welcome first, inform second:** new visitors must immediately grasp who the community is, where it is, and when to come.
- **Serve members too:** programs, events, gallery, and giving belong on the same surface, not hidden behind marketing.
- **Real over stock:** real photos and real local detail carry the story; placeholder sections are marked pending, never dressed up as fact.
- **Keep it simple to maintain:** hardcoded data lives in clear, local spots so the community can update times, events, and facts as they change.

## Accessibility & Inclusion

The implementation already includes a skip link, labeled controls, focus-visible outlines, and reduced-motion support; no additional product-specific accessibility standard has been established.
