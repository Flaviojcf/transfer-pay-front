import clsx from 'clsx'

export default function TransactionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-stone-900">
      <main>{children}</main>
    </div>
  )
}
