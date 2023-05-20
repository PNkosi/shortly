import Image from "next/image";
import Link from "next/link";
import image from "../../public/images/illustration-working.svg"
import URLForm from "@/app/components/URLForm";

const Hero = () => {
    return (
        <section className='relative lg:flex flex-row-reverse lg:container pt-32 lg:h-screen'>
            <div className='w-full'>
                <Image src={image}
                       alt='Illustration'
                       className='w-[733px]'
                />
            </div>
            <div className='container lg:pl-0 text-center mt-8 mb-12 lg:text-left grow'>
                <h1 className='text-very-dark-violet'>More than just shorter links</h1>
                <p className='mt-4 text-very-dark-blue font-medium'>Build your brand&apos;s recognition and get detailed
                insights on how your links are performing</p>

                <button>
                    <Link className='cyan-button px-6 inline-block mt-12' href='/'>Get Started</Link>
                </button>
            </div>

            <URLForm />
        </section>
    )
}

export default Hero