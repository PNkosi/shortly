import Image from "next/image";
import Link from "next/link";
import logo from '@/public/images/logo-light.svg'
import fbIcon from '@/public/images/icon-facebook.svg'
import twitterIcon from '@/public/images/icon-twitter.svg'
import pinterestIcon from '@/public/images/icon-pinterest.svg'
import instaIcon from '@/public/images/icon-instagram.svg'

const Footer = () => {
    return (
        <footer className='bg-very-dark-blue py-8'>
            <div className='container footer-container w-full'>
                <section className='grow'>
                    <Link href='/'>
                        <Image className='mx-auto lg:mx-0' src={logo} alt='logo'/>
                    </Link>
                </section>

                <section className='footer-section'>
                    <h4 className='text-white font-bold text-xl'>Features</h4>
                    <Link href='/'>Link Shortening</Link>
                    <Link href='/'>Branded Links</Link>
                    <Link href='/'>Analytics</Link>
                </section>

                <section className='footer-section'>
                    <h4 className='text-white font-bold text-xl'>Resources</h4>
                    <Link href='/'>Blog</Link>
                    <Link href='/'>Developers</Link>
                    <Link href='/'>Support</Link>
                </section>

                <section className='footer-section'>
                    <h4 className='text-white font-bold text-xl'>Company</h4>
                    <Link href='/'>About</Link>
                    <Link href='/'>Our Team</Link>
                    <Link href='/'>Careers</Link>
                    <Link href='/'>Contact</Link>
                </section>

                <section className='flex gap-4 mx-auto'>
                    <Link href='https://facebook.com'>
                        <Image src={fbIcon} alt='fbIcon'/>
                    </Link>
                    <Link href='https://twitter.com'>
                        <Image src={twitterIcon} alt='twitterIcon'/>
                    </Link>
                    <Link href='https://pinterest.com'>
                        <Image src={pinterestIcon} alt='pinterestIcon'/>
                    </Link>
                    <Link href='https://instagram.com'>
                        <Image src={instaIcon} alt='instaIcon'/>
                    </Link>
                </section>
            </div>
        </footer>
    )
}

export default Footer