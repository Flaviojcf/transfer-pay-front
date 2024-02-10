import Image from 'next/image'
import * as zod from 'zod'
import { useForm, FormProvider, useFormContext } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { usePathname } from 'next/navigation'
import { LoginUserForm } from '../Form/LoginUserForm'
import { CustomButton } from '../CustomButton'

const FormValidationSchema = zod.object({
  cpf: zod
    .string()
    .min(1, { message: 'Campo obrigatório' })
    .refine((data) => /^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}$/.test(data), {
      message: 'O CPF deve ter o seguinte formato "xxx.xxx.xxx-xx" ',
    }),

  senha: zod
    .string()
    .min(1, { message: 'Campo obrigatório' })
    .refine(
      (value) => {
        return value.length >= 4
      },
      { message: 'A senha deve ter pelo menos 4 caracteres' },
    ),
})

type NewLoginUserFormData = zod.infer<typeof FormValidationSchema>

export function Login() {
  const newLoginUserForm = useForm<NewLoginUserFormData>({
    resolver: zodResolver(FormValidationSchema),
  })

  const { handleSubmit, reset } = newLoginUserForm
  const pathname = usePathname()

  function handleLoginUser(data: NewLoginUserFormData) {
    console.log(data)
  }

  return (
    <div className="flex h-full">
      <div className="flex items-center justify-center w-1/2 lg:w-full lg:h-full lg:min-h-screen lg:px-6">
        <form
          onSubmit={handleSubmit(handleLoginUser)}
          id="newLoginUserForm"
          className="flex flex-col gap-12 lg:items-center lg:w-full"
        >
          <div className="">
            <Image
              src="/picpay.png"
              alt="picpay logo"
              width={140}
              height={40}
            ></Image>
          </div>
          <h1 className="font-bold text-2xl ">Acesse sua conta</h1>
          <FormProvider {...newLoginUserForm}>
            <LoginUserForm />
          </FormProvider>
          <CustomButton
            className="flex items-center justify-center w-full h-12 rounded-lg 
          bg-emerald-600 hover:opacity-80 transition-all font-bold text-white dark:bg-emerald-700 focus:outline-blue-500"
            type="submit"
            form="newLoginUserForm"
          >
            Entrar
          </CustomButton>
          <div className="flex justify-between lg:flex-col lg:gap-6">
            <CustomButton
              className="text-emerald-800 font-bold 
          text-lg  underline"
              type="button"
            >
              Esqueci minha senha
            </CustomButton>

            <CustomButton
              className="text-emerald-800 font-bold 
          text-lg hover:underline"
              type="button"
            >
              Login como lojista
            </CustomButton>
          </div>
        </form>
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
