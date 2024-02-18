import Page from '@/app/components/Payments/page'
import TransactionLayout from './layout'
import { Dashboard } from '@/app/components/Dashboard'

export default function Transactions() {
  return (
    <TransactionLayout>
      <div className="flex items-center h-screen lg:pt-12 mb:12 lg:flex-col lg:h-full">
        <Dashboard />
        <Page />
      </div>
    </TransactionLayout>
  )
}
