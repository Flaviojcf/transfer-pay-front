import Image from 'next/image'
import { Header } from './components/Header'
import { CustomButton } from './components/CustomButton'
import { MoveRight } from 'lucide-react'

export default function Home() {
  return (
    <div>
      <section className="flex items-center bg-customGray h-[750px] justify-between w-full">
        <div className="flex flex-col space-y-12 w-1/2 pl-64">
          <h1 className="flex flex-wrap text-6xl text-[rgb(56, 50, 39)] font-bold ">
            Muda pro PicPay e dê mais pique pro seu dinheiro
          </h1>

          <CustomButton
            className="flex space-x-4 items-center justify-center 
          bg-emerald-600 rounded-lg w-60 h-12 text-white font-bold text-lg hover:opacity-75"
          >
            <p>Abrir conta PicPay</p> <MoveRight />
          </CustomButton>
        </div>

        <div className="flex w-1/2 overflow-hidden">
          <Image src="/image.webp" width={952} height={750} alt="Picpay Ad" />
        </div>
      </section>

      <section className="flex w-full pl-52 -mt-14 h-96 ">
        <div className="flex items-center bg-[rgb(35,134,98)] w-full pl-14 space-x-14">
          <div className="w-96 border border-red-500">
            <Image
              src="/card.webp"
              width={400}
              height={400}
              alt="Card Image"
            ></Image>
          </div>

          <div className="flex flex-col space-y-8 border border-red-500 h-64 max-w-[680px]">
            <h1 className="flex flex-wrap text-white text-5xl font-bold">
              PicPay Card: mais pique para suas compras
            </h1>
            <h2 className="flex flex-wrap text-white text-lg font-bold">
              O cartão de débito, crédito e com limite garantido do PicPay. Com
              zero anuidade e muitas vantagens.
            </h2>
          </div>
        </div>
      </section>

      <section className="h-96 bg-[black]"></section>
    </div>
  )
}
