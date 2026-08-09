// ข้อมูลเนื้อหาของแอป (ภาษาไทย) — ปรับให้เป็นพอดแคสต์ "การดูแลผู้สูงอายุ"
//
// -----------------------------------------------------------------------------
// วิธีใส่ภาพปก (COVER IMAGES) — อ่านก่อนเพิ่มรูป
// -----------------------------------------------------------------------------
// ทุก episode/show มี property `coverImage` ที่ชี้ไปยังไฟล์รูปใน `public/`.
// ขั้นตอนการเพิ่มรูปจริง:
//   1) วางไฟล์รูปไว้ที่ `public/covers/` เช่น `public/covers/nutrition.jpg`
//   2) ตั้งค่า `coverImage: "/covers/nutrition.jpg"` ให้ตรงกับ episode นั้น
//   3) ขนาดที่แนะนำ:
//        - ปกรายการหลัก (show/featured): 1200 x 1200 px (อัตราส่วน 1:1)
//        - ปกตอน (episode square): 800 x 800 px (อัตราส่วน 1:1)
//        - ปกแนวนอน (feature card): 1280 x 720 px (อัตราส่วน 16:9)
//   4) ไฟล์แนะนำ .jpg หรือ .webp ขนาดไม่เกิน ~300KB เพื่อโหลดเร็ว
// ถ้า `coverImage` เป็น undefined คอมโพเนนต์ <Artwork> จะแสดง placeholder ให้อัตโนมัติ
// -----------------------------------------------------------------------------

export const LOGO_PLACEHOLDER = "KareX"

export const SHOW_TITLE = "การดูแลผู้สูงอายุ"

export type NavKey = "search" | "home" | "new" | "top-charts"

export type FeatureCard = {
  id: string
  eyebrow: string
  title: string
  imageAlt: string
  /** เส้นทางรูปปกแนวนอน 16:9 ใน public/ เช่น "/covers/feature-nutrition.jpg" */
  coverImage?: string
  /** slug ของตอนที่การ์ดนี้ลิงก์ไป */
  episodeSlug?: string
}

export type Show = {
  id: string
  rank: number
  title: string
  publisher: string
  imageAlt: string
  /** เส้นทางรูปปกสี่เหลี่ยมจัตุรัส 1:1 ใน public/ */
  coverImage?: string
}

export type Episode = {
  id: string
  /** slug ต้องตรงกับชื่อไฟล์ใน content/episodes/<slug>.md */
  slug: string
  season: string
  episode: string
  title: string
  duration: string
  description: string
  /** เส้นทางรูปปกสี่เหลี่ยมจัตุรัส 1:1 ใน public/ เช่น "/covers/nutrition.jpg" */
  coverImage?: string
}

// เพิ่มประเภทข้อมูลสำหรับหน้าปกรายการหลักเพื่อแก้ไขปัญหาบั๊กในหน้าคอมโพเนนต์
export type FeaturedShowType = {
  id: string
  title: string
  publisher: string
  rating: string
  category: string
  cadence: string
  description: string
  imageAlt: string
  coverImage?: string
}

// -----------------------------------------------------------------------------
// 7 ตอน (episodes) ภายใต้หัวข้อหลัก "การดูแลผู้สูงอายุ"
// เนื้อหาเต็มอยู่ในไฟล์ Markdown ที่ content/episodes/<slug>.md
// และถูกดึงแบบไดนามิกผ่าน API route /api/episodes/<slug>
// -----------------------------------------------------------------------------
export const episodes: Episode[] = [
  {
    id: "episode-1",
    slug: "Static topic 1",
    season: "ซีซัน 1",
    episode: "ตอนที่ 1",
    title: "การพลิกตัวผู้ป่วยติดเตียง",
    duration: "10 นาที",
    description:
      "การดูแลผู้ป่วยติดเตียงอย่างถูกวิธีเป็นหัวใจสำคัญในการป้องกันภาวะแทรกซ้อนร้ายแรงที่อาจเป็นอันตรายถึงชีวิต",
    coverImage: "/covers/blood-sugar.jpg",
  },
  {
    id: "episode-2",
    slug: "Static topic 2",
    season: "ซีซัน 1",
    episode: "ตอนที่ 2",
    title: "การเช็ดตัวลดไข้",
    duration: "10 นาที",
    description:
      "การเช็ดตัวลดไข้ที่ถูกต้อง",
    coverImage: "/covers/blood-sugar.jpg",
  },
  {
    id: "episode-3",
    slug: "Static topic 3",
    season: "ซีซัน 1",
    episode: "ตอนที่ 3",
    title: "การดูแลสายยาง",
    duration: "10 นาที",
    description:
      "การดูแลสายยางให้อาหารและการทำความสะอาดสำหรับผู้ป่วยที่มีภาวะกลืนลำบาก",
    coverImage: "/covers/blood-sugar.jpg",
  },
  {
    id: "episode-4",
    slug: "Static topic 4",
    season: "ซีซัน 1",
    episode: "ตอนที่ 4",
    title: "การดูแลสายสวนและถุงปัสสาวะ",
    duration: "10 นาที",
    description:
      "แนวทางปฏิบัติเพื่อการดูแลสายสวนและถุงปัสสาวะอย่างถูกวิธีเพื่อป้องกันการติดเชื้อในระบบทางเดินปัสสาวะ",
    coverImage: "/covers/blood-sugar.jpg",
  },
  {
    id: "episode-5",
    slug: "Static topic 5",
    season: "ซีซัน 1",
    episode: "ตอนที่ 5",
    title: "การประเมินและการดูแลแผลกดทับ",
    duration: "10 นาที",
    description:
      "เกณฑ์การประเมินความรุนแรงของแผลกดทับเพื่อดูแลได้ถูกต้อง และแนวทางป้องกันการเกิดแผลกดทับ",
    coverImage: "/covers/blood-sugar.jpg",
  },
  {
    id: "episode-6",
    slug: "Static topic 6",
    season: "ซีซัน 1",
    episode: "ตอนที่ 6",
    title: "สุขภาพและโภชนาการสำหรับผู้สูงอายุ",
    duration: "10 นาที",
    description:
      "การดูแลโภชนาการของผู้สูงอายุเป็นสิ่งสำคัญอย่างยิ่งต่อคุณภาพชีวิตและสุขภาพโดยรวม",
    coverImage: "/covers/blood-sugar.jpg",
  },
  {
    id: "episode-7",
    slug: "Static topic 7",
    season: "ซีซัน 1",
    episode: "ตอนที่ 7",
    title: "การแปลผลสุขภาพเบื้องต้น",
    duration: "10 นาที",
    description:
      "แนวทางคัดกรองและเฝ้าระวังความเสี่ยงโรคเบาหวานของผู้สูงอายุเพื่อให้สามารถทำได้เองที่บ้าน",
    coverImage: "/covers/blood-sugar.jpg",
  },
]

export const featureCards: FeatureCard[] = [
  {
    id: "feature-1",
    eyebrow: "ตอนแนะนำ",
    title: "โภชนาการเฉพาะบุคคลสำหรับผู้สูงอายุ กินอย่างไรให้ห่างไกลโรค",
    imageAlt: "ภาพปกตอนโภชนาการผู้สูงอายุ",
    episodeSlug: "01-nutrition",
    coverImage: "/covers/feature-nutrition.jpg",
  },
  {
    id: "feature-2",
    eyebrow: "มาแรง",
    title: "นาฬิกาพลิกตัวผู้ป่วยติดเตียง ป้องกันแผลกดทับทุก 2 ชั่วโมง",
    imageAlt: "ภาพปกตอนการพลิกตัวผู้ป่วยติดเตียง",
    episodeSlug: "03-repositioning",
    coverImage: "/covers/feature-repositioning.jpg",
  },
  {
    id: "feature-3",
    eyebrow: "ควรรู้",
    title: "เจาะลึก 6 ระยะแผลกดทับ สังเกตและดูแลก่อนสายเกินไป",
    imageAlt: "ภาพปกตอนแผลกดทับ",
    episodeSlug: "04-pressure-ulcers",
    coverImage: "/covers/feature-pressure-ulcers.jpg",
  },
]

// รายการยอดนิยม — ใช้ตอนทั้ง 7 เป็นอันดับชาร์ต
export const topShows: Show[] = episodes.map((ep, i) => ({
  id: `show-${i + 1}`,
  rank: i + 1,
  title: ep.title,
  publisher: SHOW_TITLE,
  imageAlt: `ภาพปก ${ep.title}`,
  coverImage: ep.coverImage,
}))

// ผูก Type ให้กับตัวแปรเพื่อแก้ปัญหาเส้นแดงใน VS Code
export const featuredShow: FeaturedShowType = {
  id: "featured-show",
  title: SHOW_TITLE,
  publisher: "พอดแคสต์เพื่อผู้ดูแลและผู้บริบาล",
  rating: "4.9 (1.2พัน)",
  category: "สุขภาพและการดูแล",
  cadence: "ตอนใหม่ทุกสัปดาห์",
  description:
    "พอดแคสต์ที่รวบรวมความรู้และแนวทางปฏิบัติสำหรับการดูแลผู้สูงอายุและผู้ป่วยที่บ้าน ตั้งแต่โภชนาการ การให้อาหารทางสายยาง การพลิกตัวป้องกันแผลกดทับ ไปจนถึงการดูแลสายสวนปัสสาวะและการเฝ้าระวังระดับน้ำตาลในเลือด เพื่อให้ผู้ดูแลทำหน้าที่ได้อย่างมั่นใจและปลอดภัย",
  imageAlt: "ภาพปกรายการการดูแลผู้สูงอายุ",
  coverImage: "/covers/show.jpg",
}