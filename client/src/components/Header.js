import Navbar from './Navbar'

import pigs from '../assets/pigs2-header-image.jpeg'

function Header({ user }) {
	return (
		<div className='top-0 relative z-40'>
			<img className='' src={pigs} alt='pigs' />
			<div className='top-0 absolute w-full'>
				<Navbar user={user} />
			</div>
			<div className='top-0 right-0 absolute'>
				<h1 className='p-2 text-white font-medium text-xl font-vujahday md:text-5xl md:pr-5 lg:text-6xl lg:pb-3'>
					Cruelty-Free Recipes
				</h1>
			</div>
		</div>
	)
}

export default Header
