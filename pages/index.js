import Image from 'next/image'
import Navbar from '../components/nav'
import Footer from '../components/footer'
import Head from 'next/head'


export default function Home() {
  return (
    <html>
      <body>
        <div className="md:font-body h-screen bg-primary ">
          <Navbar />
          <div className="w-9/12 h-screen m-auto">
            <div className="relative h-5/6">
              <div className="w-96 z-10 absolute top-0 left-10 pl-24 pt-64 text-7xl">
                <h1>
                  I’m Robert Harrison, a software engineer based in UK. Available for freelance & collaborations.
                </h1>
              </div>
              <div className="z-0 absolute top-0 right-0 pr-24 pt-16 " >
                <Image src="/background.png" alt="me" width="600" height="600" className=" object-contain" />
              </div>
            </div>
            <div className=" border-b-4 border-fuchsia-600">
              <h2 className="text-5xl"> Projects </h2>
            </div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
