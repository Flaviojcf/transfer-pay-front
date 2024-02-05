import { INavItem } from '@/app/interfaces/INavItem'
import Link from 'next/link'
import { ArrowUpRightFromSquare, Github, Linkedin } from 'lucide-react'

export function NavItem({ href, label }: INavItem) {
  return (
    <Link href={href} className="flex items-center" target="blank">
      <span className="flex items-center gap-2 text-lg text-black font-bold text-bold hover:opacity-40 transition-all ease-in-out">
        {label === 'Linkedin' ? (
          <Linkedin size={20} />
        ) : label === 'Github' ? (
          <Github size={20} />
        ) : (
          <ArrowUpRightFromSquare size={20} />
        )}

        {label}
      </span>
    </Link>
  )
}
