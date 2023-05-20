import featuresData from '@/app/utils/features-data.json'
import Image from "next/image";

const Features = () => {
    return (
        <section className='bg-gray pt-20 pb-32'>
            <div className='container'>
                <h2 className='text-center'>Advanced Statistics</h2>
                <p className='text-center lg:w-1/2 mx-auto mt-4 mb-8'>Track how your links are performing across the web with our advanced statistics dashboard</p>

                <div className='relative flex flex-col gap-8 my-12 lg:flex-row'>
                    <div className='absolute left-0 top-1/2 w-full h-[10px] bg-cyan'></div>
                    { featuresData.map((feature, index) => {
                        const style = {
                            top: `${index * 3}rem`
                        }
                        return (
                            <div style={style} className='relative z-10 bg-white rounded-lg text-center p-8 lg:text-left'
                                key={index}>
                                <div className='bg-dark-violet p-4 rounded-full w-fit mx-auto lg:mx-0'>
                                    <Image src={feature.iconURL} alt='feature icon' width={50} height={50}/>
                                </div>
                                <h3 className='pt-8 pb-4'>{feature.title}</h3>
                                <p className='text-very-dark-blue'>{feature.description}</p>
                            </div>
                        )
                    }) }
                </div>
            </div>
        </section>
    )
}

export default Features