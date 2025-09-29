import react from 'react'

const header = () => {
    return (
        <header className='bg-gray-950 flex items-center justify-between text-purple-400 p-4 '>
            <h1 className='text-xl font-semibold ml-6 mt-4'>MF</h1>
            <nav className='absolute left-1/2 transform -translate-x-1/2'>
                <ul className='flex items-center mt-4 space-x-8'>
                    <li><a href="#home" className='hover:text-purple-800'>Home</a></li>
                    <li><a href="#about" className='hover:text-purple-800'>About</a></li>
                    <li><a href="#projects" className='hover:text-purple-800'>Projects</a></li>
                    <li><a href="#contact" className='hover:text-purple-800'>Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default header