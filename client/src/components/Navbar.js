import { Link } from 'react-router-dom'

import Drawer from './Drawer'

function Navbar({ user }) {
	const matches = window.matchMedia('(min-width: 768px)').matches

	return (
		<>
			{/* {matches ? (
				<div className='flex space-x-5 p-2 pl-5 pt-4 text-white w-full font-semibold items-center'>
					<Link to='/'>Home</Link>
					<div className='flex-1'>
						<Link to='/veganism'>Veganism</Link>
					</div>
					<Link className='' to='/login'>
						Login
					</Link>
					<Link className='pr-5' to='/signup'>
						<button className='border-2 border-green-500 h-7 w-20 rounded-full font-semibold hover:bg-green-500 text-white'>
							Sign up
						</button>
					</Link>
				</div>
			) : ( */}
			<div className='flex p-2'>
				<Drawer user={user} />
			</div>
			{/* )} */}
		</>
	)
}

export default Navbar
