import Head from 'next/head'
import Overview from '../components/Overview'
import HeroImg from '../components/HeroImg'


export default function Home() {
  return (
    <>
      <div className='container h-screen'>
        <HeroImg />
      </div>
      <Overview />
    </>
  )
}
