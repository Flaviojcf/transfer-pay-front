'use client'
import * as Dialog from '@radix-ui/react-dialog'
import * as zod from 'zod'
import { useForm, FormProvider, useFormContext } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Toaster, toast } from 'sonner'
import { X } from 'lucide-react'
import { NewTransactionForm } from '../Form/NewTransactionForm'

type VeiculoModalProps = {
  handleCloseOnSubmit: () => void
}

const FormValidationSchema = zod.object({
  valor: zod.number().min(1, { message: 'Campo obrigatório' }),
})

type NewVeiculoFormData = zod.infer<typeof FormValidationSchema>

export function TransactionModal({ handleCloseOnSubmit }: VeiculoModalProps) {
  const newVeiculoForm = useForm<NewVeiculoFormData>({
    resolver: zodResolver(FormValidationSchema),
  })

  const { handleSubmit, reset } = newVeiculoForm

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/50" />
      <Dialog.Content
        className="fixed left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-md 
      bg-[#202024] p-8 text-gray-900 shadow sm:w-[320px]"
      >
        <div className="flex items-center justify-between">
          <Dialog.Title className="text-xl text-white">
            Nova Transação
          </Dialog.Title>
          <Dialog.Close className="text-gray-200 hover:text-gray-600">
            <X size={24} />
          </Dialog.Close>
        </div>
        <div className="mt-8">
          <form id="newVeiculoForm" onSubmit={() => handleSubmit}>
            <FormProvider {...newVeiculoForm}>
              <NewTransactionForm />
            </FormProvider>
          </form>
        </div>

        <div className="mt-8 space-x-6 text-right">
          <Dialog.Close className="rounded px-4 py-2 text-sm font-medium text-white bg-red-500 hover:bg-red-600">
            Cancelar
          </Dialog.Close>
          <button
            type="submit"
            form="newVeiculoForm"
            className="rounded bg-green-500 px-4 py-2 text-sm font-medium text-white hover:bg-green-600"
          >
            Salvar
          </button>
        </div>
      </Dialog.Content>
      <Toaster richColors position="top-right" />
    </Dialog.Portal>
  )
}
