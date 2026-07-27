# TRACKR — Personal Tracker

A Next.js landing page for a personal tracker app (habits, goals, finances,
journaling), with an animated 3D hero built using
[react-three-fiber](https://docs.pmnd.rs/react-three-fiber) / Three.js.

The hero visual is a continuously rotating torus knot with an iridescent
material that also tilts toward the cursor as you move your mouse.

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see
the result.

## Project structure

- `src/app/page.tsx` — hero section layout and copy
- `src/components/Hero3D.tsx` — the Three.js scene (rotating knot, lights, particles)
- `src/components/Hero3DClient.tsx` — client-only wrapper (WebGL needs `ssr: false`)

## Build

```bash
npm run build
```
