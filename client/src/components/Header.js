import Navbar from './Navbar'

import pigs from '../assets/pigs-header-image.jpg'

function Header() {
	return (
		<div className='top-0 relative'>
			<img className='' src={pigs} alt='pigs' />
			<div className='top-0 absolute w-full'>
				<Navbar />
			</div>
			<div className='bottom-0 right-0 absolute'>
				<h1 className='p-2 text-white font-medium text-l md:text-3xl font-mono'>
					Cruelty Free Recipes
				</h1>
			</div>
		</div>
	)
}

export default Header
