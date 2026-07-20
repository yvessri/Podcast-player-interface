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

export const LOGO_PLACEHOLDER = "ดูแลรัก"

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

// -----------------------------------------------------------------------------
// 7 ตอน (episodes) ภายใต้หัวข้อหลัก "การดูแลผู้สูงอายุ"
// เนื้อหาเต็มอยู่ในไฟล์ Markdown ที่ content/episodes/<slug>.md
// และถูกดึงแบบไดนามิกผ่าน API route /api/episodes/<slug>
// -----------------------------------------------------------------------------
export const episodes: Episode[] = [
  {
    id: "episode-1",
    slug: "01-nutrition",
    season: "ซีซัน 1",
    episode: "ตอนที่ 1",
    title: "โภชนาการเฉพาะบุคคลสำหรับผู้สูงอายุ",
    duration: "12 นาที",
    description:
      "กินอย่างไรให้แข็งแรงและปลอดภัย ตั้งแต่การจัดการภาวะกลืนลำบาก การเสริมโปรตีนป้องกันกล้ามเนื้อสลาย ไปจนถึงอาหารเฉพาะโรคเบาหวาน โรคไต และโรคหัวใจ",
    // coverImage: "/covers/nutrition.jpg", // 800x800 px
  },
  {
    id: "episode-2",
    slug: "02-tube-feeding",
    season: "ซีซัน 1",
    episode: "ตอนที่ 2",
    title: "ให้อาหารทางสายยางอย่างปลอดภัย",
    duration: "10 นาที",
    description:
      "คู่มือดูแลผู้ป่วยภาวะกลืนลำบาก การจัดท่า การตรวจอาหารค้างในกระเพาะ และเทคนิคล้างสายยางเพื่อป้องกันการอุดตันและการติดเชื้อ",
    // coverImage: "/covers/tube-feeding.jpg", // 800x800 px
  },
  {
    id: "episode-3",
    slug: "03-repositioning",
    season: "ซีซัน 1",
    episode: "ตอนที่ 3",
    title: "นาฬิกาพลิกตัวผู้ป่วยติดเตียงทุก 2 ชั่วโมง",
    duration: "9 นาที",
    description:
      "ทำไมการพลิกตัวทุก 2 ชั่วโมงจึงสำคัญ พร้อมตารางเวลา ขั้นตอนการจัดท่า และอุปกรณ์ช่วยป้องกันแผลกดทับและปอดอักเสบ",
    // coverImage: "/covers/repositioning.jpg", // 800x800 px
  },
  {
    id: "episode-4",
    slug: "04-pressure-ulcers",
    season: "ซีซัน 1",
    episode: "ตอนที่ 4",
    title: "เจาะลึก 6 ระยะแผลกดทับ",
    duration: "11 นาที",
    description:
      "สังเกต ประเมิน และดูแลแผลกดทับทั้ง 6 ระยะ พร้อมแนวทางป้องกันและสัญญาณอันตรายที่ต้องรีบพบแพทย์",
    // coverImage: "/covers/pressure-ulcers.jpg", // 800x800 px
  },
  {
    id: "episode-5",
    slug: "05-urinary-catheter",
    season: "ซีซัน 1",
    episode: "ตอนที่ 5",
    title: "ดูแลสายสวนปัสสาวะให้ปลอดภัย",
    duration: "10 นาที",
    description:
      "ป้องกันการติดเชื้อทางเดินปัสสาวะและกระแสเลือด ด้วยการจัดวางถุงปัสสาวะ การเทปัสสาวะอย่างปลอดเชื้อ และสุขอนามัยประจำวัน",
    // coverImage: "/covers/urinary-catheter.jpg", // 800x800 px
  },
  {
    id: "episode-6",
    slug: "06-tepid-sponge",
    season: "ซีซัน 1",
    episode: "ตอนที่ 6",
    title: "เช็ดตัวลดไข้ด้วยน้ำอุ่นอย่างถูกวิธี",
    duration: "8 นาที",
    description:
      "ทำไมต้องใช้น้ำอุ่นเท่านั้น ขั้นตอนการเช็ดตัวย้อนรูขุมขน ข้อควรระวัง และสัญญาณที่ต้องรีบพบแพทย์",
    // coverImage: "/covers/tepid-sponge.jpg", // 800x800 px
  },
  {
    id: "episode-7",
    slug: "07-blood-sugar",
    season: "ซีซัน 1",
    episode: "ตอนที่ 7",
    title: "เข้าใจระดับน้ำตาลในเลือด (FBS)",
    duration: "10 นาที",
    description:
      "คู่มือผู้บริบาลในการตรวจและแปลผลระดับน้ำตาลในเลือดหลังอดอาหาร เพื่อคัดกรองความเสี่ยงเบาหวานในผู้สูงอายุ",
    // coverImage: "/covers/blood-sugar.jpg", // 800x800 px
  },
]

export const featureCards: FeatureCard[] = [
  {
    id: "feature-1",
    eyebrow: "ตอนแนะนำ",
    title: "โภชนาการเฉพาะบุคคลสำหรับผู้สูงอายุ กินอย่างไรให้ห่างไกลโรค",
    imageAlt: "ภาพปกตอนโภชนาการผู้สูงอายุ",
    episodeSlug: "01-nutrition",
    // coverImage: "/covers/feature-nutrition.jpg", // 1280x720 px
  },
  {
    id: "feature-2",
    eyebrow: "มาแรง",
    title: "นาฬิกาพลิกตัวผู้ป่วยติดเตียง ป้องกันแผลกดทับทุก 2 ชั่วโมง",
    imageAlt: "ภาพปกตอนการพลิกตัวผู้ป่วยติดเตียง",
    episodeSlug: "03-repositioning",
    // coverImage: "/covers/feature-repositioning.jpg", // 1280x720 px
  },
  {
    id: "feature-3",
    eyebrow: "ควรรู้",
    title: "เจาะลึก 6 ระยะแผลกดทับ สังเกตและดูแลก่อนสายเกินไป",
    imageAlt: "ภาพปกตอนแผลกดทับ",
    episodeSlug: "04-pressure-ulcers",
    // coverImage: "/covers/feature-pressure-ulcers.jpg", // 1280x720 px
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

export const featuredShow = {
  id: "featured-show",
  title: SHOW_TITLE,
  publisher: "พอดแคสต์เพื่อผู้ดูแลและผู้บริบาล",
  rating: "4.9 (1.2พัน)",
  category: "สุขภาพและการดูแล",
  cadence: "ตอนใหม่ทุกสัปดาห์",
  description:
    "พอดแคสต์ที่รวบรวมความรู้และแนวทางปฏิบัติสำหรับการดูแลผู้สูงอายุและผู้ป่วยที่บ้าน ตั้งแต่โภชนาการ การให้อาหารทางสายยาง การพลิกตัวป้องกันแผลกดทับ ไปจนถึงการดูแลสายสวนปัสสาวะและการเฝ้าระวังระดับน้ำตาลในเลือด เพื่อให้ผู้ดูแลทำหน้าที่ได้อย่างมั่นใจและปลอดภัย",
  imageAlt: "ภาพปกรายการการดูแลผู้สูงอายุ",
  // coverImage: "/covers/show.jpg", // 1200x1200 px
}
