import Image from 'next/image'
import logo from '../public/hstreet-logo.svg'

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'About', href: '/about', current: false },
  { name: 'Projects', href: '/projects', current: false },
  { name: 'Blog', href: '/blog', current: false },
  { name: 'Contact', href: '/contact', current: false},

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Header({ title }) {
  return (
    <div className="relative z-10 w-full bg-gray-900 bg-opacity-50 shadow-sm bg-clip-padding blur-backdrop-filter">
      <nav className='relative flex items-center justify-between w-full max-w-screen-xl px-5 py-5 mx-auto text-white lg:px-2 lg:shadow-none'>
        <div className='inset-0 block w-full h-full '>
          <Image src={logo} height={50} width={50} />
        </div>

        <div className='absolute inset-0 z-0 block w-full h-full shadow-md opacity-80'>
        </div>
      </nav>
    </div>
  )
}
