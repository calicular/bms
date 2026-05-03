import React from 'react'
import mainLogo from '../../assets/main-icon-white.png'
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube, 
  FaPinterestP, 
  FaLinkedinIn 
} from 'react-icons/fa'

const Footer = () => {
  return (
    // Use lowercase <footer> here
    <footer className='bg-[#2b2b2b] text-gray-400 text-sm'> 
        <div className='border-t border-gray-600 w-full py-6 flex flex-col items-center'>
            {/* Logo */}
            <img src={mainLogo} alt="BookMyScreen Logo" className='w-28 mb-4' />

            {/* Social Icons */} 
            <div className="flex space-x-4 mb-4">
              <FaFacebookF className="w-8 h-8 p-2 rounded-full bg-gray-700 text-white cursor-pointer hover:bg-gray-600" />
              <FaTwitter className="w-8 h-8 p-2 rounded-full bg-gray-700 text-white cursor-pointer hover:bg-gray-600" />
              <FaInstagram className="w-8 h-8 p-2 rounded-full bg-gray-700 text-white cursor-pointer hover:bg-gray-600" />
              <FaYoutube className="w-8 h-8 p-2 rounded-full bg-gray-700 text-white cursor-pointer hover:bg-gray-600" />
              <FaPinterestP className="w-8 h-8 p-2 rounded-full bg-gray-700 text-white cursor-pointer hover:bg-gray-600" />
              <FaLinkedinIn className="w-8 h-8 p-2 rounded-full bg-gray-700 text-white cursor-pointer hover:bg-gray-600" />
            </div>

            {/* Copyright */}
            <div className="text-center">
              <p>&copy; 2023 BookMyScreen. All rights reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer