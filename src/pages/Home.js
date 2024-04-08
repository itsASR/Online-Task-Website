import React from 'react'
import Banner from '../componentes/Home/Banner'
import Hero1 from '../componentes/Home/Hero1'
import Level from '../componentes/Home/Level'
import Hero2 from '../componentes/Home/Hero2'
import Hero3 from '../componentes/Home/Hero3'
import Hero4 from '../componentes/Home/Hero4'
import Hero5 from '../componentes/Home/Hero5'
import Hero6 from '../componentes/Home/Hero6'
import Messages from '../componentes/Home/Messages'

export default function Home() {
  return (
    <div>
      {/* <Messages></Messages> */}
      <Banner/>
      
      {/* <Level/> */}
      <Hero2/>
      <Hero3/>
      <Hero4/>
      <Hero5/>
      <Hero1/>
      <Hero6/>
    </div>
  )
}
