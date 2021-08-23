import Image from 'next/image'
import Navbar from '../components/nav'
import Footer from '../components/footer'
import Head from 'next/head'


export default function Home() {
  return (
    <html>
      <body className="bg-primary">
        <div className="md:font-body h-auto">
          <Navbar />
          <div className="w-9/12 h-screen m-auto">
            <div className="relative h-5/6" id="relative">
              <div className="w-96 z-10 absolute top-0 left-10 pl-24 pt-64 text-7xl">
                <h1>
                  I’m Robert dwaoinadw, a software engineer based in UK. Available for freelance & collaborations.
                </h1>
              </div>
              <div className="z-0 absolute top-0 right-0 pr-24 pt-16 " >
                <Image src="/background.png" alt="me" width="600" height="600" className=" object-contain" id="relative" />
              </div>
            </div>
            <div className="border-black border-b-2 border-fuchsia-600">
              <h2 className="text-5xl"> Projects </h2>
            </div>
            <div className="flex pt-8">
              <div className="flex-1 text-3xl">
                <div className="pb-4"><a href="/Project1">DHT Sensor Arduino</a></div>
                <Image src="/DHTsensor.png" alt="DHT sensor project with arduino" width="370" height="550" className="rounded-3xl object-fill" />

              </div>
              <div className="flex-1 text-3xl ">
                <div className="pb-4"><a href="/Project2">Project 2</a></div>
                <Image src="/temp1.png" alt="DHT sensor project with arduino" width="370" height="550" className="rounded-3xl object-fill" />
              </div>
              <div className="flex-1 text-3xl">
                <div className="pb-4"><a href="/Project3">Project 3</a></div>
                <Image src="/temp2.png" alt="DHT sensor project with arduino" width="370" height="550" className="rounded-3xl object-fill" />
              </div>

            </div>
            <div className="pt-8 border-black border-b-2 border-fuchsia-600">
              <h2 className="text-5xl"> About Me </h2>
            </div>
            <div className="flex pt-8 ">
              <div className="flex-1 text-3xl pt-8">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu nullam augue dolor
                  libero at in. Egestas in elit vitae tincidunt morbi egestas nec massa. Pretium, placerat quis sem gravida vel quam nisl in semper. Platea
                  enim nunc aliquam volutpat, ut sed morbi. Sit leo aliquam at amet, eu dictumst accumsan eu, quis. Nam ac mattis adipiscing euismod arcu ac
                  laoreet vitae at. Nibh etiam dictumst nibh ut. Vitae massa rhoncus, et massa. Diam fermentum malesuada scelerisque orci massa. </p>

              </div>
              <div className="flex-1 pt-8 ">
                <img src="/catBackground.png" alt="me" width="300" height="300" className=" m-auto rounded-full" />
              </div>

            </div>
          </div>
          <Footer />
        </div>

      </body>
    </html>
  )
}
