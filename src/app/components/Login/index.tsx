import Image from 'next/image'

export function Login() {
  return (
    <div className="flex h-full">
      <div className="flex items-center justify-center w-1/2 lg:w-full lg:h-full lg:min-h-screen ">
        <p>Aqui vai o form de login</p>
      </div>
      <div className="w-1/2 mr-0 lg:hidden">
        <Image
          className="object-contain  ml-auto"
          src="/girl-image.png"
          width={880}
          height={480}
          alt="Mulher sorridente utilizando o aplicativo do PicPay ao lado de uma avenida."
        ></Image>
      </div>
    </div>
  )
}
