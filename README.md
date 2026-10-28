# Keyframe Ninjas — Motion Dojo Showcase

The public showcase website for [ninjas.motiondojo.com](https://ninjas.motiondojo.com), featuring the paid students of Motion Dojo's **"Black Belt in Motion Design"** course. Its purpose is to showcase real students, final capstone projects, and creative breakthroughs so visitors are inspired to enrol and belong.

---

## Tech Stack & Architecture

- **Framework**: Next.js (App Router) + TypeScript
- **Styling**: Tailwind CSS + CSS Variables for first-class Light & Dark themes
- **Typography**: Local WOFF2 fonts for `Sora` (headings, 700/800) and `Inter` (body) — zero external network dependency, zero layout shift (FOUT)
- **Deployment**: Configured for static export or serverless edge on **Vercel**
- **Accessibility**: Semantic HTML5, full keyboard navigation, focus trapping in modal/bottom-sheet dialogs, WCAG AA contrast, and `prefers-reduced-motion` compliance.

---

## How to Add a Ninja

All student profiles are managed inside one central file: [`data/ninjas.json`](./data/ninjas.json) (and synced to [`src/data/ninjas.json`](./src/data/ninjas.json)).

To add a new ninja, append a new object to the array in `data/ninjas.json`:

```json
{
  "slug": "jane-doe",
  "name": "Jane Doe",
  "specialty": "3D Motion & Title Sequences",
  "status": "graduate",
  "phase": "Black Belt",
  "cohort": "Cohort 03",
  "openToWork": true,
  "photo": "/images/jane-doe.webp",
  "bio": "Jane is a motion designer specializing in cinematic camera moves and procedural typography. After completing the Black Belt curriculum, she transitioned from static layout into high-tempo title sequences for independent film projects and commercials.",
  "project": {
    "title": "Quantum: Cinematic Sequence",
    "video": "https://vimeo.com/1238665663",
    "note": "A 45-second speculative brand ident exploring refractive glass typography.",
    "poster": "/images/quantum-poster.webp"
  },
  "links": {
    "instagram": "janedoe_motion",
    "x": "janedoe",
    "linkedin": "jane-doe-motion",
    "behance": "janedoe",
    "youtube": "janedoevideo",
    "website": "janedoe.design",
    "whatsapp": "+2348012345678",
    "email": "jane@example.com"
  }
}
```

### Ninja Fields Explained:
- `slug`: Unique URL-friendly slug (creates the shareable URL `/n/slug`).
- `name`: Student full name.
- `specialty`: Primary creative focus (e.g. `2D Explainer & Character Motion`, `3D Motion & Title Sequences`, `UI Micro-interactions & Brand Motion`).
- `status`: Either `"graduate"` (Black Belt) or `"training"`.
- `phase`: Current stage, e.g. `"Black Belt"`, `"Phase 02"`, or `"Phase 03"`.
- `cohort`: Cohort identifier, e.g. `"Cohort 01"`.
- `openToWork`: `true` or `false` (displays a live green pill badge).
- `photo`: URL or local path in `/public/images/`. If left blank or the image fails to load, a geometric shape tile avatar with initials is automatically rendered as a fallback.
- `bio`: Concise bio of approximately 60 words.
- `project.title`: Capstone title.
- `project.video`: Vimeo URL (e.g. `https://vimeo.com/1238665663`) or raw Vimeo ID.
- `project.note`: One-line creator note.
- `project.poster`: Poster image displayed before play button is tapped.
- `links`: Social handles entered **without** `@`. The application automatically expands them into full valid URLs. Only handles that exist in the data are rendered. Supported platforms:
  - `instagram`, `x`, `linkedin`, `tiktok`, `youtube`, `behance`, `website`, `whatsapp`, `email`.

---

## How to Change the Vimeo Links

### 1. Student Projects
To change a student's capstone video, locate their profile in [`data/ninjas.json`](./data/ninjas.json) and update the `video` property inside `project`:

```json
"project": {
  "title": "New Project Title",
  "video": "https://vimeo.com/YOUR_NEW_VIMEO_ID",
  "note": "Updated one-line note.",
  "poster": "/images/new-poster.webp"
}
```

### 2. Student Testimonial Videos (Stories Section)
The three student testimonial videos are located in [`components/Stories.tsx`](./components/Stories.tsx). To update or replace any video, edit the `videoUrl` and `poster` properties:

```tsx
const testimonials = [
  {
    id: "mary",
    name: "Mary",
    role: "Keyframe Ninja • Cohort 01",
    poster: "/images/testimonial-mary.webp",
    videoUrl: "https://vimeo.com/1238665663", // <-- Replace with new Vimeo URL
    summary: "...",
  },
  {
    id: "roseline",
    name: "Roseline",
    role: "Keyframe Ninja • Cohort 02",
    poster: "/images/testimonial-roseline.webp",
    videoUrl: "https://vimeo.com/1238666245", // <-- Replace with new Vimeo URL
    summary: "...",
  },
  {
    id: "fatihi",
    name: "Muhammad Fatihi",
    role: "Keyframe Ninja • Cohort 02",
    poster: "/images/testimonial-fatihi.webp",
    videoUrl: "https://vimeo.com/1238668293", // <-- Replace with new Vimeo URL
    summary: "...",
  },
];
```

Videos are **lazy-loaded**: an optimized poster with a play button is shown until tapped, avoiding heavy third-party iframe scripts until the user actually decides to watch.

---

## Design System & Theme Customization

Colours are mapped to CSS variables in [`app/globals.css`](./app/globals.css):
- **Light Theme**:
  - `bg`: `#FFFFFF`
  - `surface`: `#F7F5FC`
  - `surface-2`: `#F1EAFF`
  - `border`: `#E7E3F1`
  - `text`: `#14102A`
  - `muted`: `#5E5877`
  - `link/accent`: `#6D32E8`
- **Dark Theme**:
  - `bg`: `#0D0A1A`
  - `surface`: `#15112A`
  - `surface-2`: `#1D1838`
  - `border`: `#2A2447`
  - `text`: `#F4F1FF`
  - `muted`: `#A9A2C6`
  - `link/accent`: `#A77BFF`
- **Primary Buttons**: Kinetic Lime `#C8FF3D` with dark text `#14102A` in both themes.
- **Theme Behavior**: Follows system preference by default; user preference is toggled via header sun/moon button and saved to `localStorage`. An inline head script prevents flash of wrong theme (FOUC).

---

## Development & Build

```bash
# Run local dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```
