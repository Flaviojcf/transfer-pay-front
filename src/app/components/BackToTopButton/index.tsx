'use client'
import { CustomButton } from '@/app/components/CustomButton'
import { useEffect, useCallback, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MoveUp } from 'lucide-react'

export function BacktoTopButton() {
  const [show, setShow] = useState(false)

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleScroll = useCallback(() => {
    if (!show && window.scrollY > 150) setShow(true)
    if (show && window.scrollY <= 150) setShow(false)
  }, [show])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed right-4 bottom-4 z-20"
          initial={{ opacity: 0, right: -10 }}
          animate={{ opacity: 1, right: 16 }}
          exit={{ opacity: 0, right: -10 }}
        >
          <CustomButton
            onClick={scrollToTop}
            className="bg-emerald-700 py-3 px-4 rounded-lg text-gray-50 flex 
            items-center justify-center gap-2 hover:opacity-80 transition-all disabled:opacity-50"
          >
            <MoveUp size={20} />
          </CustomButton>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
