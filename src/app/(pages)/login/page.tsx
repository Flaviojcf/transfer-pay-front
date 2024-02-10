'use client'

import { Login } from '@/app/components/Login'
import LoginLayout from '@/app/components/Login/layout'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])
  return (
    <LoginLayout isLoading={isLoading}>
      {isLoading ? (
        <div className="h-screen bg-red">
          <Image
            className="object-contain mt-[80px]"
            fill
            alt="Picpay loading"
            src="/picpay-loading.gif"
          />
        </div>
      ) : (
        <Login />
      )}
    </LoginLayout>
  )
}
