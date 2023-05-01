import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="container">
      <main>
        <h1 className="title">
          Hello Done Do
        </h1>
      </main>
    </div>
  )
}
