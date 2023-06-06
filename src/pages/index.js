import Company from '@/components/Company'
import Fees from '@/components/Fees'
import Header from '@/components/Header'
import Integrations from '@/components/Integrations'
import Intro from '@/components/Intro'
import Merchants from '@/components/Merchants'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Intro />
      <Merchants />
      <Company />
      <Fees />
      <Integrations />
    </>
  )
}
