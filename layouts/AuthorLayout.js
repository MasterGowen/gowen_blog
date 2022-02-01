import SocialIcons from '@/components/SocialIcons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import { useTheme } from 'next-themes'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../tailwind.config'
import { RoughNotation } from 'react-rough-notation'

export default function AuthorLayout({ children, frontMatter }) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = frontMatter
  const { theme } = useTheme()
  const fullConfig = resolveConfig(tailwindConfig)

  let iconColor = fullConfig.theme.colors.theme.primary
  if (theme == 'dark') {
    iconColor = fullConfig.theme.colors.theme['dark-bright']
  } else if (theme == 'light') {
    iconColor = fullConfig.theme.colors.theme['dark-light']
  }

  return (
    <>
      <PageSEO title={`Обо мне - ${name}`} description={`Обо мне - ${name}`} />
      <div className="divide-y">
        <div className="pt-8 pb-4 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-display leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
            Обо мне
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-12 space-x-2">
            <Image
              src={avatar}
              alt="avatar"
              width="192px"
              height="192px"
              className="w-48 h-48 rounded-full"
            />
            <h3 className="pt-4 pb-4 font-display text-3xl font-bold leading-8 tracking-tight">
              {name}
            </h3>
            <div className="text-lg text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-2xl pt-4 text-theme-500 dark:text-theme-200">{company}</div>
            <SocialIcons color={iconColor} wrapperClass={'flex pt-6 space-x-3'} size={24} />
          </div>
          <div className="pt-12 pb-8 prose-lg dark:prose-dark max-w-none xl:col-span-2">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
