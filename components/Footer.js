import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../tailwind.config.js'
import SocialIcons from '@/components/SocialIcons'
const fullConfig = resolveConfig(tailwindConfig)
let theme_color = fullConfig.theme.colors.theme.primary

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center mt-16">
        <SocialIcons color={theme_color} wrapperClass={'flex mb-3 space-x-4'} />
        <div className="flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
            Tailwind Nextjs Theme
          </Link>
        </div>
      </div>
    </footer>
  )
}
