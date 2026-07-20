// Placeholder data used across the app. Swap these out for real content later.

export const LOGO_PLACEHOLDER = "[โลโก้ที่นี่]"

const LOREM =
  "ข้อความตัวอย่างสำหรับใช้แทนเนื้อหาจริง เนื้อหาส่วนนี้เป็นเพียงข้อความตัวอย่างเพื่อแสดงรูปแบบการจัดวางเท่านั้น คุณสามารถแทนที่ด้วยคำอธิบายรายการหรือเนื้อหาจริงของคุณได้ในภายหลัง"

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
    eyebrow: "[หัวข้อย่อย]",
    title: "[ชื่อรายการเด่นสำหรับการ์ดไฮไลต์ใบแรก]",
    imageAlt: "ภาพตัวอย่างรายการเด่นที่หนึ่ง",
  },
  {
    id: "feature-2",
    eyebrow: "[หัวข้อย่อย]",
    title: "[ชื่อรายการเด่นสำหรับการ์ดไฮไลต์ใบที่สอง]",
    imageAlt: "ภาพตัวอย่างรายการเด่นที่สอง",
  },
  {
    id: "feature-3",
    eyebrow: "[หัวข้อย่อย]",
    title: "[ชื่อรายการเด่นสำหรับการ์ดไฮไลต์ใบที่สาม]",
    imageAlt: "ภาพตัวอย่างรายการเด่นที่สาม",
  },
]

export const topShows: Show[] = Array.from({ length: 8 }, (_, i) => ({
  id: `show-${i + 1}`,
  rank: i + 1,
  title: `[ชื่อรายการ ${i + 1}]`,
  publisher: "[ผู้เผยแพร่]",
  imageAlt: `ภาพตัวอย่างรายการ ${i + 1}`,
}))

export const featuredShow = {
  id: "featured-show",
  title: "[ชื่อรายการ]",
  publisher: "[ผู้เผยแพร่] | [เครือข่าย] | [สตูดิโอ]",
  rating: "0.0 (0K)",
  category: "[หมวดหมู่]",
  cadence: "[ความถี่]",
  description: `${LOREM} ${LOREM}`,
  imageAlt: "ภาพตัวอย่างรายการแนะนำ",
}

export const episodes: Episode[] = Array.from({ length: 6 }, (_, i) => ({
  id: `episode-${i + 1}`,
  season: "ซีซัน 1",
  episode: `ตอนที่ ${i + 1}`,
  title: `[ชื่อตอน ${i + 1}]`,
  duration: `${30 + i * 2} นาที`,
  description: LOREM,
}))

export const episodeDetail = {
  season: "ซีซัน 1",
  episode: "ตอนที่ 1",
  title: "[ชื่อตอน]",
  showTitle: "[ชื่อรายการ]",
  duration: "41 นาที",
  description: `${LOREM} ${LOREM}`,
  intro: "[ประโยคเกริ่นนำที่อธิบายว่าตอนนี้มีเนื้อหาเกี่ยวกับอะไร]:",
  showImageAlt: "ภาพตัวอย่างรายการ",
}

export const people: Person[] = Array.from({ length: 11 }, (_, i) => ({
  id: `person-${i + 1}`,
  name: `[ชื่อแขกรับเชิญ ${i + 1}]`,
  role: "[ตำแหน่ง, องค์กร]",
}))
