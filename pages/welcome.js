import {useState} from 'react';
import  Link  from 'next/link';
import Image from 'next/image'


export default function Welcome() {


  return (

    <header className='header'>
      <div className='header__left'>
        <figure className='header__left-item'>
          <Image src='/game.jpg' width={1000} height={1000} className='header__left-item-photo'/>
        </figure>
        <div className="btn__container">
            <Link href='/game'><a className='btn btn__white'>PLAY GAME</a></Link>

        </div>
      </div>
      <div className='header__right' >
        <figure className='header__right-item'>
          <Image src='/shop.jpg' width={1000} height={1000} className='header__right-item-photo'/>
        </figure>
        <div className="btn__container">
        <Link href='/shop'><a className='btn btn__white'>SHOP NOW</a></Link>
        </div>
      </div>
    </header>
  )
}

/*

*/


