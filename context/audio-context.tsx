"use client"

import React, { createContext, useContext, useEffect, useRef, useState } from "react"
import type { Episode } from "@/lib/data"

type AudioContextType = {
  currentEpisode: Episode | null
  isPlaying: boolean
  progress: number
  playbackRate: number
  playEpisode: (episode: Episode) => void
  togglePlay: () => void
  seekRelative: (seconds: number) => void
  changeSpeed: () => void
}

const AudioContext = createContext<AudioContextType | undefined>(undefined)

const SPEEDS = [1, 1.25, 1.5, 2]

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const [currentEpisode, setCurrentEpisode] = useState<Episode | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [speedIndex, setSpeedIndex] = useState(0)

  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const audio = new Audio()
    audioRef.current = audio

    const handleTimeUpdate = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100)
      }
    }

    const handleEnded = () => {
      setIsPlaying(false)
      setProgress(0)
    }

    audio.addEventListener("timeupdate", handleTimeUpdate)
    audio.addEventListener("ended", handleEnded)

    return () => {
      audio.pause()
      audio.removeEventListener("timeupdate", handleTimeUpdate)
      audio.removeEventListener("ended", handleEnded)
    }
  }, [])

  const playEpisode = (episode: Episode) => {
    if (!audioRef.current) return

    // หากกดตอนเดิมที่กำลังเล่นอยู่ ให้สลับ เล่น/หยุด
    if (currentEpisode?.id === episode.id) {
      togglePlay()
      return
    }

    // หากเปิดตอนใหม่
    setCurrentEpisode(episode)
    const src = episode.audio ?? `/audio/${episode.id}.wav`
    audioRef.current.src = src
    audioRef.current.playbackRate = SPEEDS[speedIndex]
    audioRef.current
      .play()
      .then(() => setIsPlaying(true))
      .catch((err) => console.error("Audio error:", err))
  }

  const togglePlay = () => {
    if (!audioRef.current || !currentEpisode) return

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.error("Audio error:", err))
    }
  }

  const seekRelative = (seconds: number) => {
    if (!audioRef.current) return
    audioRef.current.currentTime = Math.max(
      0,
      Math.min(audioRef.current.duration || 0, audioRef.current.currentTime + seconds),
    )
  }

  const changeSpeed = () => {
    const nextIndex = (speedIndex + 1) % SPEEDS.length
    setSpeedIndex(nextIndex)
    if (audioRef.current) {
      audioRef.current.playbackRate = SPEEDS[nextIndex]
    }
  }

  return (
    <AudioContext.Provider
      value={{
        currentEpisode,
        isPlaying,
        progress,
        playbackRate: SPEEDS[speedIndex],
        playEpisode,
        togglePlay,
        seekRelative,
        changeSpeed,
      }}
    >
      {children}
    </AudioContext.Provider>
  )
}

export function useAudio() {
  const context = useContext(AudioContext)
  if (!context) {
    throw new Error("useAudio must be used within an AudioProvider")
  }
  return context
}