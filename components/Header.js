
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
      
    </div>
  )
}
