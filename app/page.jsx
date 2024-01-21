import Image from 'next/image'

export default function Home() {
  return (
    <div className='home'>
      <div className='text'>
        <h2>DONDE TODO EMPIEZA <Image src="/img/comienzo.png" alt="Imagen de comienzo" width={30} height={30} /></h2>
      </div>
    </div>
  )
}