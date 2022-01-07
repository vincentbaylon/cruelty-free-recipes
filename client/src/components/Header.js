import Navbar from './Navbar'

import pigs from '../assets/pigs2-header-image.jpeg'

function Header() {
	return (
		<div className='top-0 relative'>
			<img className='' src={pigs} alt='pigs' />
			<div className='top-0 absolute w-full'>
				<Navbar />
			</div>
			<div className='bottom-0 left-0 absolute'>
				<h1 className='p-2 text-white font-medium text-xl font-vujahday md:text-4xl md:pr-5 lg:text-5xl lg:pb-3'>
					Cruelty Free Recipes
				</h1>
			</div>
		</div>
	)
}

export default Header
