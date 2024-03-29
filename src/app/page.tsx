'use client'

import Image from 'next/image'
import { CustomButton } from './components/CustomButton'
import { MoveRight } from 'lucide-react'
import { SectionItens } from '@/mock/sectionItens'
import { ItemSection } from './components/ItemSection'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="mb-10">
      <section
        className="flex items-center bg-customGray h-[750px] justify-between w-full 
                lg:flex-col lg:pt-14
                md:text-center  md:justify-around"
      >
        <div
          className="flex flex-col space-y-12 w-1/2 pl-64
             lg:w-full lg:items-center lg:px-4"
        >
          <h1
            className="flex flex-wrap text-6xl text-[rgb(56, 50, 39)] font-bold 
           lg:text-2xl"
          >
            Muda pro PicPay e dê mais pique pro seu dinheiro
          </h1>

          <CustomButton
            className="flex space-x-4 items-center justify-center 
          bg-emerald-600 rounded-lg w-60 h-12 text-white font-bold text-lg hover:opacity-75
          lg:w-full"
          >
            <p>Abrir conta PicPay</p> <MoveRight />
          </CustomButton>
        </div>

        <div
          className="flex w-1/2 overflow-hidden sm:mt-12 
           lg:w-full"
        >
          <Image src="/image.webp" width={952} height={750} alt="Picpay Ad" />
        </div>
      </section>

      <section
        className="flex w-full pl-52 -mt-14 h-96 
      lg:w-full lg:pl-0"
      >
        <div
          className="flex items-center bg-[rgb(35,134,98)] w-full pl-14 space-x-14
          md:pl-0 md:text-center md:items-center md:p-6 "
        >
          <div className="w-96 md:hidden">
            <Image
              src="/card.webp"
              width={400}
              height={400}
              alt="Card Image"
            ></Image>
          </div>

          <div
            className="flex flex-col space-y-6  max-w-[680px]
            md:items-center"
          >
            <h1
              className="flex flex-wrap text-white text-5xl font-bold 
            md:text-2xl"
            >
              PicPay Card: mais pique para suas compras
            </h1>
            <h2 className="flex flex-wrap text-white text-lg font-bold">
              O cartão de débito, crédito e com limite garantido do PicPay. Com
              zero anuidade e muitas vantagens.
            </h2>
            <CustomButton className="w-60 h-10 border-2 border-white rounded-lg text-white font-bold hover:opacity-65">
              Pedir cartão de crédito
            </CustomButton>
          </div>
        </div>
      </section>

      <section
        className="flex items-center bg-white mt-16 pl-52 w-full justify-between  
        2xl:justify-normal 2xl:gap-16
        lg:flex-col lg:pl-0 lg:items-center
        md:text-center
        md:items-center"
      >
        <div className="flex flex-col space-y-4 w-1/2  md:w-full md:items-center">
          <h1
            className="text-5xl font-bold max-w-[500px]
          md:text-2xl md:w-full"
          >
            Conta com o melhor rendimento do Brasil
          </h1>
          <h2 className="text-lg max-w-[500px] md:w-full">
            Com PicPay, você facilita a sua vida, investindo, recebendo e
            pagando o que quiser de um só lugar, de forma segura e gratuita.
          </h2>
          <CustomButton className="w-60 h-10 border-2 border-emerald-700 rounded-lg text-emerald-700  font-bold hover:opacity-65">
            Abrir conta PicPay
          </CustomButton>
        </div>

        <ul
          className="flex flex-wrap w-1/2 gap-8
        2xl:justify-center
        lg:w-full
        md:items-center"
        >
          {SectionItens.map((item) => (
            <li key={`item-${item.title}`} className="list-none ">
              <ItemSection
                description={item.description}
                image={item.image}
                title={item.title}
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
