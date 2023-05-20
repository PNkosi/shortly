const URLForm = () => {
    return (
        <section className='lg:absolute -bottom-[50px] bg-dark-violet p-6 w-full lg:w-[70%] lg:left-1/2 lg:-translate-x-1/2'>
            <form className='flex flex-col gap-4 lg:flex-row'>
                <input className='lg:grow h-[60px] rounded-lg px-4' type='text' placeholder='Shorten a link here...'/>
                <button className='h-[60px] rounded-lg bg-cyan font-bold text-white text-2xl lg:px-12' type="submit">Shorten It!</button>
            </form>
        </section>
    )
}

export default URLForm