import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { IconSun, IconMoon } from '@tabler/icons'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../tailwind.config'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()
  const fullConfig = resolveConfig(tailwindConfig)

  let iconColor = fullConfig.theme.colors.theme.primary

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="w-8 h-8 p-1 ml-1 mr-1 rounded sm:ml-4"
      onClick={() => setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? (
        <IconSun color={fullConfig.theme.colors.theme['50']} />
      ) : (
        <IconMoon color={fullConfig.theme.colors.theme['900']} />
      )}
    </button>
  )
}

export default ThemeSwitch
