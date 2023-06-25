import Image from 'next/image'
import Link from 'next/link'

export default function FooterOSS() {
  return (
    <footer className='bg-black border-t border-gray-100/10'>
      <div className='grid grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4'>
        <div>
          <h2 className='mb-6 text-[15px] font-medium text-gray-100/80 uppercase font-[PoppinsBold]'>
            What's new?
          </h2>
          <ul className='text-gray-100/80 text-[11px]'>
            <li className='mb-4'>
              <Link href='/design' className=' hover:underline'>
                Boxode Design
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className='mb-6 text-[15px] font-medium text-gray-100/80 uppercase font-[PoppinsBold]'>
            Help Center
          </h2>
          <ul className='text-gray-100/80 text-[11px]'>
            <li className='mb-4 font-[Satoshi]'>
              <Link
                href='https://discord.gg/gdRmAa5xHU'
                target='_blank'
                className='hover:underline'
              >
                Discord Server
              </Link>
            </li>
            <li className='mb-4 font-[Satoshi]'>
              <Link
                href='https://twitter.com/BoxodeHQ'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:underline'
              >
                Twitter
              </Link>
            </li>
            <li className='mb-4 font-[Satoshi]'>
              <Link
                href='https://www.facebook.com/BoxodeHQ'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:underline'
              >
                Facebook
              </Link>
            </li>
            <li className='mb-4 font-[Satoshi]'>
              <Link
                href='https://www.instagram.com/BoxodeHQ'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:underline'
              >
                Instagram
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className='mb-6 text-[15px] font-medium text-gray-100/80 uppercase font-[PoppinsBold]'>
            Develop and IT
          </h2>
          <ul className='text-gray-100/80 text-[11px]'>
            <li className='mb-4 font-[Satoshi]'>
              <Link href='/oss' className='hover:underline'>
                Open Source Software
              </Link>
            </li>
            <li className='mb-4 font-[Satoshi]'>
              <Link href='/oss/contributing' className='hover:underline'>
                Contribution
              </Link>
            </li>
            <li className='mb-4 font-[Satoshi]'>
              <Link href='oss/coc' className='hover:underline'>
                Code of Conduct
              </Link>
            </li>
            <li className='mb-4 font-[Satoshi]'>
              <Link
                href='https://github.com/Boxode'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:underline'
              >
                Github
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className='mb-6 text-[15px] font-medium text-gray-100/80 uppercase font-[PoppinsBold]'>
            Company
          </h2>
          <ul className='text-gray-100/80 text-[11px]'>
            <li className='mb-4 font-[Satoshi]'>
              <Link href='/careers' className='hover:underline'>
                Careers
              </Link>
            </li>
            <li className='mb-4 font-[Satoshi]'>
              <Link href='/ceo' className='hover:underline'>
                CEO
              </Link>
            </li>
            <li className='mb-4 font-[Satoshi]'>
              <Link href='/about' className='hover:underline'>
                About Boxode
              </Link>
            </li>
            <li className='mb-4 font-[Satoshi]'>
              <Link href='/privacy' className='hover:underline'>
                Privacy at Boxode
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='px-5 md:px-6 py-6 bg-black md:flex md:items-center md:justify-between'>
        <Image
          src='/svg/Boxode_white.svg'
          alt='Boxode'
          className='w-24'
          width={100}
          height={100}
        />
        <div className='inline-block md:flex mt-4 space-x-3 sm:justify-center md:mt-0 font-[Satoshi]'>
          <Link
            href='/contactus'
            className='text-[11px] text-gray-100/80 hover:underline'
          >
            Contact Boxode
          </Link>
          <Link
            href='/sitemap'
            className='text-[11px] text-gray-100/80 hover:underline'
          >
            Sitemap
          </Link>
          <Link
            href='/privacystatement'
            className='text-[11px] text-gray-100/80 hover:underline'
          >
            Privacy Statement
          </Link>
          <Link
            href='/trademarks'
            className='text-[11px] text-gray-100/80 hover:underline'
          >
            Trademarks
          </Link>
          <Link
            href='/security-and-eco'
            className='text-[11px] text-gray-100/80 hover:underline'
          >
            Sefety & Eco
          </Link>
          <span className='text-[11px] text-gray-100/80 sm:text-center'>
            © Boxode <span id='year'>2023</span>
          </span>
        </div>
      </div>
    </footer>
  )
}
