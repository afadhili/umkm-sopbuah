"use client"
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const links = [
    {
      name: "About",
      href: "#",
    },
    {
      name: "Menu",
      href: "#",
    },
    {
      name: "Services",
      href: "#",
    },
    {
      name: "Contact",
      href: "#",
    }
  ]

  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Sidenav />
      <nav className="fixed top-0 w-full px-4 md:px-12 py-6 flex items-center justify-between bg-slate-900 bg-opacity-60 backdrop-blur-sm z-50">
        <Link href='/' className="text-4xl font-bold bg-gradient-to-br from-primary to-40% to-secondary inline-block text-transparent bg-clip-text">
          Soeltan
        </Link>

        <div className="navlink">
          {links.map(({ name, href }, index) => (
            <a href={href} key={index}>{name}</a>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={() => setOpen(!isOpen)} className="text-primary opacity-70 hover:opacity-100" >
            <IoMenu size={28} />
          </button>
        </div>

        <div className={`${isOpen ? 'right-0' : '-right-full'} duration-200 ease-in-out md:hidden fixed top-0 flex flex-col w-full h-screen bg-gradient-to-tr from-slate-900 via-slate-600 to-slate-800 justify-center items-center space-y-8`}>
          <button onClick={() => setOpen(!isOpen)} className="absolute top-6 right-4 text-primary opacity-70 hover:opacity-100">
            <IoClose size={30} />
          </button>
          {links.map(({ name, href }, index) => (
            <a href={href} key={index} className="text-xl font-bold hidemenu">{name}</a>
          ))}
          <Sidenav type="center" />
        </div>
      </nav>
    </>
  )
}

function Sidenav({ type = 'left' }) {
  const links = [
    {
      name: 'Instagram',
      href: '#',
      icon: <FaInstagram size={30} />,
      style: 'bg-gradient-to-l from-primary to-secondary'
    },
    {
      name: 'Whatsapp',
      href: '#',
      icon: <FaWhatsapp size={30} />,
      style: 'bg-green-600'
    },
    {
      name: 'Facebook',
      href: '#',
      icon: <FaFacebook size={30} />,
      style: 'bg-blue-600'
    },
    {
      name: 'Go-Jek',
      href: '#',
      icon: (<div className="w-[30px] h-[30px]">
        <Image src={'/img/gojek.svg'} alt="Go-Jek" width={100} height={100} />
      </div>),
      style: 'bg-green-500'
    }
  ]

  if (type === 'left') {
    return (
      <div className="z-50 fixed hidden md:flex flex-col left-0 top-1/2 -translate-y-1/2">
        {links.map(({ name, href, icon, style }, index) => (
          <a href={href} key={index} className={`${style} text-gray-300 flex justify-between items-center px-4 py-2 -translate-x-[118px] hover:translate-x-0 duration-200 hover:rounded-r-lg`}>
            <h2 className="text-xl font-bold">
              {name}
            </h2>
            <div className="inline-block ml-4">
              {icon}
            </div>
          </a>
        ))}
      </div>
    )
  }

  return (
    <div className="flex items-center">
      {links.map(({ name, href, icon, style }, index) => (
        <a key={index} href={href} className={`${style} relative duration-200 px-4 py-2 text-gray-300 opacity-80 hover:opacity-100 active:scale-95 active:rounded group`}>
          {icon}

          <h2 className="absolute duration-200 opacity-0 group-hover:-bottom-6 group-hover:opacity-100 bottom-0 left-1/2 -translate-x-1/2 font-bold text-gray-300 whitespace-nowrap">
            {name}
          </h2>
        </a>
      ))}
    </div>
  )
}