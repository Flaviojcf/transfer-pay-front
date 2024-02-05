import { NavItensLinks } from '@/mock/navItens'
import Image from 'next/image'
import Link from 'next/link'
import { NavItem } from './NavItem'
import { CustomButton } from '../CustomButton'

export function Header() {
  return (
    <div className="flex items-center px-8 justify-between w-full h-20 bg-white ">
      <div>
        <Link href="/">
          <Image
            src="/picpayHeaderLogo2.png"
            alt="picpay logo"
            width={140}
            height={40}
          ></Image>
        </Link>
      </div>
      <ul className="flex items-center justify-between space-x-14 ">
        {NavItensLinks.map((item) => (
          <li key={`label-${item.label}`}>
            <NavItem href={item.href} label={item.label} />
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between space-x-12">
        <Link href="/login" className="">
          <CustomButton
            className="text-emerald-800 font-bold 
          text-lg border-none w-44 h-12 hover:bg-emerald-100 rounded-lg hover:bg-opacity-45 underline"
          >
            Área do Cliente
          </CustomButton>
        </Link>

        <Link href="/register">
          <CustomButton>Cadastre-se</CustomButton>
        </Link>
      </div>
    </div>
  )
}
