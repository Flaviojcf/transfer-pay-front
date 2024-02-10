import { useFormContext } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import InputMask from 'react-input-mask'
import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

export function LoginUserForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex flex-col gap-4 w-full ">
      <InputMask
        mask="999.999.999-99"
        className="rounded-md  w-96 h-12 border border-gray-600 px-4 placeholder:text-gray-600
        focus:outline-emerald-700 
        lg:w-full"
        type="text"
        placeholder="CPF"
        {...register('cpf')}
      />
      <div className="text-red-400 text-sm">
        <ErrorMessage errors={errors} name="cpf" />
      </div>

      <div className="relative">
        <input
          className="rounded-md w-96 h-12 border border-gray-600 px-4 placeholder:text-gray-600 focus:outline-emerald-700 lg:w-full"
          type={showPassword ? 'text' : 'password'}
          placeholder="Digite sua senha"
          {...register('senha')}
        />
        <button
          type="button"
          className="absolute inset-y-0 right-0 flex items-center pr-3"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <Eye /> : <EyeOff />}
        </button>
      </div>

      <div className="text-red-400 text-sm">
        <ErrorMessage errors={errors} name="senha" />
      </div>
    </div>
  )
}
