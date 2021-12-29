import Navbar from './Navbar'

import pigs from '../assets/pigs-header-image.jpg'

function Header() {
	return (
		<div className='top-0 relative'>
			<img className='' src={pigs} alt='pigs' />
			<div className='bottom-0 right-0 absolute'>
				<Navbar />
			</div>
		</div>
	)
}

export default Header
