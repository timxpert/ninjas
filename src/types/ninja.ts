export type NinjaStatus = "graduate" | "training";

export interface NinjaLinks {
  instagram?: string;
  x?: string;
  linkedin?: string;
  tiktok?: string;
  youtube?: string;
  behance?: string;
  website?: string;
  whatsapp?: string;
  email?: string;
}

export interface NinjaProject {
  title: string;
  video: string; // Vimeo URL or embed ID
  note: string; // One-line note
  poster?: string;
}

export interface Ninja {
  slug: string;
  name: string;
  specialty: string;
  status: NinjaStatus;
  phase: string; // e.g. "Black Belt", "Phase 02", "Phase 03"
  cohort: string;
  openToWork: boolean;
  photo: string;
  bio: string; // ~60 words
  project: NinjaProject;
  links: NinjaLinks;
  isSample?: boolean;
}

export type NinjaFilter = "everyone" | "blackbelts" | "training";
