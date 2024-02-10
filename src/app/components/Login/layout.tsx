import clsx from 'clsx'

export default function LoginLayout({
  children,
  isLoading,
}: {
  children: React.ReactNode
  isLoading: boolean
}) {
  return (
    <div
      className={clsx(
        isLoading && 'bg-customGreen',
        !isLoading && 'bg-slate-100 ',
      )}
    >
      <main>{children}</main>
    </div>
  )
}
