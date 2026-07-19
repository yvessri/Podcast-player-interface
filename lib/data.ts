// Placeholder data used across the app. Swap these out for real content later.

export const LOGO_PLACEHOLDER = "[LOGO HERE]"

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."

export type NavKey = "search" | "home" | "new" | "top-charts"

export type FeatureCard = {
  id: string
  eyebrow: string
  title: string
  imageAlt: string
}

export type Show = {
  id: string
  rank: number
  title: string
  publisher: string
  imageAlt: string
}

export type Episode = {
  id: string
  season: string
  episode: string
  title: string
  duration: string
  description: string
}

export type Person = {
  id: string
  name: string
  role: string
}

export const featureCards: FeatureCard[] = [
  {
    id: "feature-1",
    eyebrow: "[Eyebrow]",
    title: "[Feature title goes here for the first highlighted card]",
    imageAlt: "Feature artwork placeholder one",
  },
  {
    id: "feature-2",
    eyebrow: "[Eyebrow]",
    title: "[Feature title goes here for the second highlighted card]",
    imageAlt: "Feature artwork placeholder two",
  },
  {
    id: "feature-3",
    eyebrow: "[Eyebrow]",
    title: "[Feature title goes here for the third highlighted card]",
    imageAlt: "Feature artwork placeholder three",
  },
]

export const topShows: Show[] = Array.from({ length: 8 }, (_, i) => ({
  id: `show-${i + 1}`,
  rank: i + 1,
  title: `[Show Title ${i + 1}]`,
  publisher: "[Publisher]",
  imageAlt: `Show artwork placeholder ${i + 1}`,
}))

export const featuredShow = {
  id: "featured-show",
  title: "[Show Title]",
  publisher: "[Publisher] | [Network] | [Studio]",
  rating: "0.0 (0K)",
  category: "[Category]",
  cadence: "[Cadence]",
  description: `${LOREM} ${LOREM}`,
  imageAlt: "Featured show artwork placeholder",
}

export const episodes: Episode[] = Array.from({ length: 6 }, (_, i) => ({
  id: `episode-${i + 1}`,
  season: "Season 1",
  episode: `Episode ${i + 1}`,
  title: `[Episode Title ${i + 1}]`,
  duration: `${30 + i * 2}m`,
  description: LOREM,
}))

export const episodeDetail = {
  season: "Season 1",
  episode: "Episode 1",
  title: "[Episode Title]",
  showTitle: "[Show Title]",
  duration: "41m",
  description: `${LOREM} ${LOREM}`,
  intro: "[Intro line describing what this episode features]:",
  showImageAlt: "Show artwork placeholder",
}

export const people: Person[] = Array.from({ length: 11 }, (_, i) => ({
  id: `person-${i + 1}`,
  name: `[Guest Name ${i + 1}]`,
  role: "[Role, Organization]",
}))
