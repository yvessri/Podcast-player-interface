export type Topic = {
  id: number
  title: string
  summary: string
  /** lucide-react icon name used in the sidebar */
  icon:
    | "RotateCw"
    | "Salad"
    | "Milk"
    | "Droplets"
    | "HeartPulse"
    | "Thermometer"
    | "Activity"
}

/**
 * The 7 sequential care topics/episodes.
 * Each maps to the API endpoint: /api/topics/[id]
 */
export const topics: Topic[] = [
  {
    id: 1,
    title: "การพลิกตัวผู้ป่วยติดเตียง",
    summary: "นาฬิกาพลิกตัวทุก 2 ชั่วโมง ป้องกันแผลกดทับและภาวะแทรกซ้อน",
    icon: "RotateCw",
  },
  {
    id: 2,
    title: "โภชนาการสำหรับผู้สูงอายุ",
    summary: "กินอย่างไรให้แข็งแรง ปลอดภัย และห่างไกลโรค",
    icon: "Salad",
  },
  {
    id: 3,
    title: "การให้อาหารทางสายยาง",
    summary: "ดูแลผู้ป่วยภาวะกลืนลำบากอย่างปลอดภัยและถูกวิธี",
    icon: "Milk",
  },
  {
    id: 4,
    title: "การดูแลสายสวนปัสสาวะ",
    summary: "ป้องกันการติดเชื้อทางเดินปัสสาวะและกระแสเลือด",
    icon: "Droplets",
  },
  {
    id: 5,
    title: "ระยะของแผลกดทับ",
    summary: "สังเกต ประเมิน และดูแลแผลกดทับทั้ง 6 ระยะ",
    icon: "HeartPulse",
  },
  {
    id: 6,
    title: "การเช็ดตัวลดไข้",
    summary: "เทคนิคการเช็ดตัวด้วยน้ำอุ่นอย่างถูกวิธีและปลอดภัย",
    icon: "Thermometer",
  },
  {
    id: 7,
    title: "ระดับน้ำตาลในเลือด (FBS)",
    summary: "เข้าใจการตรวจและแปลผลน้ำตาลในเลือดเพื่อดูแลผู้สูงอายุ",
    icon: "Activity",
  },
]

export function getTopic(id: number): Topic | undefined {
  return topics.find((t) => t.id === id)
}

/** Base URL for the external markdown content API. */
export const TOPICS_API_BASE = "http://localhost:5000/api/topics"
