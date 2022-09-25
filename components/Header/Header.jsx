import React from 'react'
import Logo from '../Logo/Logo'
import SearchBar from '../SearchBar/SearchBar'
import HomeIcon from '@heroicons/react/solid/HomeIcon'
import {MenuIcon, PaperAirplaneIcon, PlusCircleIcon,UserGroupIcon,HeartIcon } from '@heroicons/react/outline'


const Header = () => {
  return (
    <div className='shadow-sm border-b bg-white sticky top-0  z-50'>
      <div className='flex justify-between bg-white items-center max-w-6xl mx-5 lg:mx-auto'>
      {/* logo section */}
        <div>
          <Logo />
        </div>
          {/* search section */}
        <div className='max-w-xs'>
          <SearchBar />
        </div>
        <div className='flex items-center justify-end space-x-4'>
          {/* menu */}
          <HomeIcon className='navBtn'/>
          <MenuIcon className='h-7 md:hidden '/>
          <div className='relative navBtn'>
          <PaperAirplaneIcon className='navBtn rotate-45' />
          <div className='absolute -top-2 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse'>3</div>
          </div>
          
          <PlusCircleIcon className='navBtn' />
          <UserGroupIcon className='navBtn' />
          <HeartIcon className='navBtn' />
      
          <picture>
          <img
          src='https://media-exp1.licdn.com/dms/image/C4D03AQHNkz6FUSw6FA/profile-displayphoto-shrink_800_800/0/1635013646469?e=1669852800&v=beta&t=RPtUDGyX9NPstAdSWABO2gP7GiekdkYJaWT49XA-hgo'
          alt='profile pic'
          className='h-10 rounded-full cursor-pointer'
          />
          </picture>    
          
        </div>
    </div>
    </div>
    
  )
}

export default Header