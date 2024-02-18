'use client'
import { useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import * as Dialog from '@radix-ui/react-dialog'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import clsx from 'clsx'
import { TransactionModal } from '../Modal/TransactionModal'

export function Dashboard() {
  const [isOpen, setIsOpen] = useState(false)
  const [isEstacionamentoModalOpen, setIsEstacionamentoModalOpen] =
    useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const pathname = usePathname()
  const controls = useAnimation()

  const handleToggle = () => {
    setIsExpanded(!isExpanded)
    controls.start({
      width: isExpanded ? 300 : 30,
    })
  }

  function handleCloseOnSubmit() {
    setIsOpen(!isOpen)
  }

  function handleCloseEstacionamentoOnSubmit() {
    setIsEstacionamentoModalOpen(!isEstacionamentoModalOpen)
  }

  return (
    <motion.nav
      className="relative bg-emerald-700 h-96 w-[300px] overflow-hidden rounded-md mb-auto mt-6"
      initial={{ width: 300, opacity: 1 }}
      animate={controls}
    >
      <button className="absolute bottom-0 transform -translate-y-1/2 right-0 p-1 cursor-pointer h-10 mb-10">
        <div onClick={handleToggle} className="text-4xl text-gray-800">
          {isExpanded ? '>' : '<'}
        </div>
      </button>

      <ul
        style={{ display: isExpanded ? 'none' : 'block' }}
        className="flex flex-col h-full "
      >
        <motion.h1
          animate={{ opacity: isExpanded ? 0 : 1 }}
          className="text-white font-bold text-center border-b border-black p-6"
        >
          Aqui você faz a gestão da sua conta
        </motion.h1>

        <Link href="/">
          <motion.li
            className="px-4 flex items-center 
            gap-2 h-12 transition duration-200 hover:bg-black mt-4 cursor-pointer text-white font-bold
            mb-12"
            animate={{ opacity: isExpanded ? 0 : 1 }}
          >
            Home
          </motion.li>
        </Link>

        <Dialog.Root open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
          <Dialog.Trigger className="w-full">
            <motion.li
              className="px-4 flex items-center gap-2 
              h-12 transition duration-200 hover:bg-black cursor-pointer w-full text-white font-bold
              "
              animate={{ opacity: isExpanded ? 0 : 1 }}
            >
              Nova transação
            </motion.li>
          </Dialog.Trigger>
          <TransactionModal handleCloseOnSubmit={handleCloseOnSubmit} />
        </Dialog.Root>
      </ul>
      <motion.div
        animate={{
          opacity: isExpanded ? 0 : 1,
        }}
        style={{ display: isExpanded ? 'none' : 'block' }}
        className="absolute bottom-0 w-full py-2 bg-emerald-400 text-black font-bold text-center mb-0"
      >
        <h2>&copy; Gestão de conta</h2>
      </motion.div>
    </motion.nav>
  )
}
