/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom'
import Logo from '../../public/logo.png'

const PageNotFound = () => {
    return (
        <div className='w-screen h-screen bg-[#fbfcf0] dark:bg-black flex flex-col justify-around items-center'>
            <img src={Logo} alt='logo' className='w-64' />
            <h1 className='text-9xl font-semibold text-gray-900 dark:text-white'>404</h1>
            <div className='flex flex-col justify-center items-center tracking-wider'>
            <p className='dark:text-white'>Oops! It seems you've reached a page that doesn't exist.</p>
            <p className='dark:text-white'>Don't worry, even the best of us get lost sometimes.</p>
            <p className='dark:text-white'>You can navigate back to safety by clicking button below</p>
            </div>
                <button className='bg-black rounded-lg px-5 py-4 text-white hover:bg-white hover:text-black dark:text-black dark:bg-white dark:hover:bg-gray-400 dark:hover:text-[#fbfcf0]'><Link to='/home'>Back to Home</Link></button>

        </div>
    )
}

export default PageNotFound
