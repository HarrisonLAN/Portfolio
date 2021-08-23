import Image from 'next/image'
import Navbar from '../components/nav'
import Footer from '../components/footer'
import Head from 'next/head'


export default function Home() {
  return (
    <body className="bg-primary">
      <Navbar />
      <div className="w-9/12 h-screen m-auto hidden xl:block">
        <div className="relative h-5/6" id="relative">
          <div className="w-3/5 z-10 absolute top-0 left-10 pl-24 pt-64 text-7xl">
            <h1>
              I’m Robert dwaoinadw, a software engineer based in UK. Available for freelance & collaborations.
            </h1>
          </div>
          <div className="z-0 absolute top-0 right-10 pr-24 pt-16 " >
            <Image src="/background.png" alt="me" width="600" height="600" className=" object-contain" />
          </div>

        </div>
      </div>

      <div className="w-9/12 m-auto">
        <h2 className="text-5xl"> Projects </h2>
        <div className="w-full border-black border-b-2 border-fuchsia-600"></div>
        <div className="w-full grid md:grid-flow-col">
          <div className="">
            <div className="pb-4"><a href="/Project1">DHT Sensor Arduino</a></div>
            <Image src="/DHTsensor.png" alt="DHT sensor project with arduino" width="370" height="550" className="rounded-3xl object-fill" />
          </div>
          <div className="">
            <div className="pb-4"><a href="/Project2">Project 2</a></div>
            <Image src="/temp1.png" alt="DHT sensor project with arduino" width="370" height="550" className="rounded-3xl object-fill" />
          </div>
          <div className="">
            <div className="pb-4"><a href="/Project3">Project 3</a></div>
            <Image src="/temp2.png" alt="DHT sensor project with arduino" width="370" height="550" className="rounded-3xl object-fill" />
          </div>
        </div>
      </div>
    </body>


  )
}
