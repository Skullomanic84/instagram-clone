import Image from 'next/image';
import mainLogo from '../../../asset/images/instagram-logo.png';
import mobileLogo from '../../../asset/images/instagram-icon-logo.png';

function Logo() {
  return (
    <div className='cursor-pointer'>
      <div className='relative hidden lg:inline-grid h-24 w-24'>
          <Image
          src={mainLogo}
          layout='fill'
          objectFit='contain'
          alt='instagram' />
      </div>
      <div className='relative w-10 h-10 lg:hidden flex-shrink-0'>
      <Image
          src={mobileLogo}
          layout='fill'
          objectFit='contain'
          alt='instagram' />
      </div>
      
    </div>
  )
}

export default Logo