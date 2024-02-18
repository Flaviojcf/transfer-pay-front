import { useFormContext } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'

export function NewTransactionForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <div className="flex flex-col gap-4">
      <label className="text-white" htmlFor="valor">
        Valor da Transação
      </label>
      <input
        className="border-0 rounded-md bg-[#121214] text-white p-4 placeholder:text-white"
        type="number"
        placeholder="Valor da transação"
        {...register('valor')}
      />
      <div className="text-red-400 text-sm">
        <ErrorMessage errors={errors} name="valor" />
      </div>
    </div>
  )
}
