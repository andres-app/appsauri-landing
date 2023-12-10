import React from 'react'
import { RiCheckboxBlankCircleFill } from "react-icons/ri";


export const Header = () => {
  return (
    <header className='flex items-center w-full p-4 h-[10vh]'>
      <div className='w-1/6 text-center'>
        <span className='text-2xl font-bold relative p-1 bg-white'>
          Appsauri <span className='text-primary text-5xl'>.</span>{''}
          <RiCheckboxBlankCircleFill className='absolute -left-3 -bottom-3 text-pacman -z-10'/></span>
      </div>
      <nav className='flex-1 justify-center flex items-center gap-10'>
        <a href="">Inicio</a>
        <a href="">Nosotros</a>
        <a href="">Servicios</a>
        <a href="">Productos</a>
        <a href="">Contactanos</a>
      </nav>
    </header>
  )
}
