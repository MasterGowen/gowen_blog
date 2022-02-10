import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import { IconBrandGithub, IconBrandYoutube, IconMail } from '@tabler/icons'

const SocialIcons = ({ color, wrapperClass, size = 36 }) => {
  return (
    <div className={wrapperClass}>
      <Link href={'mailto://' + siteMetadata.email}>
        <IconMail size={size} color={color} stroke={1} strokeLinejoin="miter" />
      </Link>
      <Link href={siteMetadata.github}>
        <IconBrandGithub size={size} color={color} stroke={1} strokeLinejoin="miter" />
      </Link>

      <Link href={siteMetadata.youtube}>
        <IconBrandYoutube size={size} color={color} stroke={1} strokeLinejoin="miter" />
      </Link>
    </div>
  )
}

export default SocialIcons
