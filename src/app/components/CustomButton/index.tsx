'use client'
import { ICustomButton } from '@/app/interfaces/ICustomButton'
import clsx from 'clsx'

export function CustomButton({ children, className, ...props }: ICustomButton) {
  return (
    <button
      className={clsx(
        {
          'flex items-center justify-center w-40 h-12 rounded-lg bg-emerald-600 hover:opacity-80 transition-all font-bold text-white dark:bg-emerald-700':
            !className,
        },
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
