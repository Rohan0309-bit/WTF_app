
"use client"

import * as React from "react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Sun, Moon } from "lucide-react"
import { Skeleton } from "./ui/skeleton"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [isMounted, setIsMounted] = React.useState(false)

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <Skeleton className="h-6 w-24" />
  }

  return (
    <div className="flex items-center gap-2">
      <Sun className="h-5 w-5" />
      <Switch
        id="dark-mode"
        checked={theme === 'dark'}
        onCheckedChange={(checked) => {
          setTheme(checked ? 'dark' : 'light')
        }}
      />
      <Moon className="h-5 w-5" />
    </div>
  )
}
