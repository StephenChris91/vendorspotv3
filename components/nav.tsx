"use client";
import React, { useState } from "react";
import Image from 'next/image'
import Logo from '@/public/logo.png'
import { Button } from '@/components/ui/button'
import { RiMapPinLine } from "react-icons/ri";
import { AlertDialogTrigger, AlertDialog } from '@/components/ui/alert-dialog'
import LocationSearch from '@/components/location-search'
import { useRouter } from "next/navigation";


const links = ["shop", "about", "offers", "contact"];



export default function Navbar() {
  
  const [isOpen, setIsOpen] = useState(false);

  // const handleClick = (link: string) => {
  //   return router.push(link)
  // }
  
  const router = useRouter()
  
  const routes = links.map((link, index) => (
    <li onClick={() => router.push(`/${link}`)} className="px-3 py-2 bg-none shadow-0 text-black cursor-pointer rounded" key={index}>
      {link}
    </li>
  ));


  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="px-20 relative m-auto p-3 flex justify-between items-center">
      <Image src={Logo} height={30} alt='header logo' onClick={() => router.push('/')} className="cursor-pointer"/>
      <nav className={isOpen ? ("flex") : (" hidden md:flex")}>
        <ul className="flex bg-transparent absolute md:relative flex-col md:flex-row w-full shadow md:shadow-none text-center top-12 left-0 md:top-0 md:flex">{routes}</ul>
      </nav>
        <div className='flex space-x-3'>
            <div className='border-2 rounded-full p-3 cursor-pointer'>
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <RiMapPinLine />
                    </AlertDialogTrigger>
                </AlertDialog>
            </div>
            <Button className='rounded-sm p-5 bg-blue-500 hover:bg-blue-600' onClick={() => router.push('/login')}>Login</Button>
            <Button className='rounded-sm p-5 bg-green-600 hover:bg-green-700' onClick={() => router.push('/register')}>Become A Vendor</Button>
        </div>
      <div className="md:hidden">
        <button className="flex justify-center items-center" onClick={toggleNavbar}>
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            className={isOpen ? ("hidden") : ("flex")}
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            className={isOpen ? ("flex") : ("hidden")}
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      <LocationSearch />
    </div>
  );
}