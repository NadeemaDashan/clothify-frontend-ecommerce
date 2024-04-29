
import Logo from "../../public/logo.png"
import { Link } from 'react-router-dom'

const Error = () => {

    return (
        <div className='w-screen h-screen bg-[#fbfcf0] dark:bg-black flex flex-col justify-around items-center'>
            <img src={Logo} alt='logo' className='w-64' />
            <h1 className='text-9xl font-semibold text-gray-900 dark:text-white'>404</h1>
            <p className='dark:text-white'><span className='ml-20'>Oops, something went wrong </span><br></br>Sorry, There is a issue from our side try again later</p>
            <button className='bg-black rounded-lg px-5 py-4 text-white hover:bg-white hover:text-black dark:text-black dark:bg-white dark:hover:bg-gray-400 dark:hover:text-[#fbfcf0]'><Link to='/home'>Back to Home</Link></button>
        </div>
    )
}

export default Error
