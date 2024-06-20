import { auth } from '@/auth'
import CountDown from '@/components/CountDown/Countdown'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import { redirect } from 'next/navigation'

export default async function Home() {
  const specificEndDate = new Date('2024-10-31T23:59:59')
  const session = await auth()

  if (session) {
    redirect('/dashboard')
  }

  return (
    <>
      {/* Standard Version */}
      <Header />
      <CountDown endDate={specificEndDate} />
      <Footer />
      {/* <ComingSoonVersion /> */}
    </>
  )
}
