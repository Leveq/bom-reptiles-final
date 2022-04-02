import Image from 'next/image'
import hero from '../public/hero.jpg'

function HeroImg() {
  return (
    <>
      <Image
        className='brightness-50'
        src={hero}
        alt="Hero image"
        layout='fill'
        objectFit='cover'
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
    </>
  )
}

export default HeroImg