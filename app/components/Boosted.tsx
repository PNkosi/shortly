import Link from "next/link";
import boostMobileSVG from '@/public/images/bg-boost-mobile.svg'
import boostDesktopSVG from '@/public/images/bg-boost-desktop.svg'
import Image from "next/image";

const Boosted = () => {
    return (
        <section className='relative bg-dark-violet text-white py-12'>
            <Image className='absolute top-0 left-0 w-full h-full' src={boostDesktopSVG} alt='illustration' />
            <div className='relative z-10 container text-center'>
                <h2 className='mb-4'>Boost your links today</h2>
                <button>
                    <Link className='cyan-button px-6 inline-block' href='/'>Get Started</Link>
                </button>
            </div>
        </section>
    )
}

export default Boosted