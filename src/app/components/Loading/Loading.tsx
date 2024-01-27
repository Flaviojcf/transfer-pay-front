'use client'

import Image from "next/image";
import { useEffect, useState } from "react";

export function Loading({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []); 

  return (
    <div className="flex">
      {isLoading ? <Image className="object-contain" fill alt="Picpay loading" src="/picpay-loading.gif"/> : children}
    </div>
  )
}

