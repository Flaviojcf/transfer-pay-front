'use client'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { NavItem } from './NavItem'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Menu } from 'lucide-react'
import { NavItensLinks } from '@/mock/navItens'
import { CustomButton } from '../CustomButton'
import Link from 'next/link'

export function MenuComponent() {
  const [isOpen, setOpen] = useState<boolean>(false)

  return (
    <DropdownMenu.Root open={isOpen} onOpenChange={setOpen}>
      <DropdownMenu.Trigger className="hidden lg:flex ">
        <div>
          <Menu size={30} />
        </div>
      </DropdownMenu.Trigger>
      <AnimatePresence>
        {isOpen && (
          <DropdownMenu.Content
            className="h-[269px] -mt-12 mr-1"
            asChild
            forceMount
          >
            <motion.ul
              className="flex flex-col px-2 py-4 
              rounded-md gap-4 text-black w-full h-full  drop-shadow-2xl bg-white"
              initial={{ x: 200 }}
              animate={{ x: 0 }}
              exit={{ x: 200 }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <div className="flex items-center justify-center mt-4 ">
                  <div
                    className="w-6 h-6 relative cursor-pointer ml-auto"
                    onClick={() => setOpen(false)}
                  >
                    <div className="w-full h-0.5 bg-black absolute top-1/2 transform -translate-y-1/2 rotate-45 dark:bg-orange-600"></div>
                    <div className="w-full h-0.5 bg-black absolute top-1/2 transform -translate-y-1/2 -rotate-45 dark:bg-orange-600"></div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-4 ">
                <Link href="/login" className="">
                  <CustomButton
                    className="text-emerald-800 font-bold 
          text-base border-none h-12 hover:bg-emerald-100 rounded-lg hover:bg-opacity-45 underline"
                  >
                    Área do Cliente
                  </CustomButton>
                </Link>

                <Link href="/register">
                  <CustomButton>Cadastre-se</CustomButton>
                </Link>
              </div>

              <h1 className="text-white font-bold">
                Mais informações? Entre em contato:
              </h1>
              {NavItensLinks.map((item) => (
                <li key={`label-${item.label}`}>
                  <NavItem href={item.href} label={item.label} />
                </li>
              ))}
            </motion.ul>
          </DropdownMenu.Content>
        )}
      </AnimatePresence>
    </DropdownMenu.Root>
  )
}
