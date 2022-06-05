import React from 'react'

const Header = () => {
  return (
    <>
    <div className="z-[999999999999999999999999] relative px-7 py-5 max-w-[1600px] mx-auto flex items-center justify-between w-full text-white">
    <div className="flex items-center gap-7">
      <img src="/images/logo.svg" alt="logo"  className="cursor-pointer"/>
      <div className="flex gap-5">
        <a href="/#">AI Tool</a>
        <a href="/#">The Platform</a>
        <a href="/#">Litepaper</a>
      </div>
    </div>


    <div className="flex items-center gap-5">

      <a href="/#"><img src="/images/medium.svg" alt="social-icon" /></a>
      <a href="/#"><img src="/images/telegram.svg" alt="social-icon" /></a>
      <a href="/#"><img src="/images/twitter.svg" alt="social-icon" /></a>
      <a href="/#"><img src="/images/instagram.svg" alt="social-icon" /></a>
      <a href="/#"><img src="/images/discord.svg" alt="social-icon" /></a>
      <a href="/#"><img src="/images/facebook.svg" alt="social-icon" /></a>
      <button className="px-4 py-3 ml-2 rounded-md bg-[#9F00FF80]">Connect Wallet</button>

    </div>

   </div>

    </>
  )
}

export default Header