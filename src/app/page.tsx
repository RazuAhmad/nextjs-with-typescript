import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main >
      <h1>this is app</h1>
      <Link href="/users" className='bg-slate-400 px-2 py-1'>Go to User</Link>
    </main>
  )
}
