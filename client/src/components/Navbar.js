import { Link } from 'react-router-dom'

function Navbar() {
	return (
		<div className='flex space-x-5 p-2 pl-5 pt-4 text-white w-full font-semibold items-center'>
			<Link to='/'>Home</Link>
			<div id='dashboard' className='target:text-green-400'>
				<Link to='/dashboard'>Dashboard</Link>
			</div>

			<div className='flex-1'>
				<Link to='/about'>About</Link>
			</div>
			<Link className='' to='/login'>
				Login
			</Link>
			<Link className='pr-5' to='/signup'>
				<button className='border-2 border-green-500 h-7 w-20 rounded font-semibold hover:bg-green-500 text-white'>
					Sign up
				</button>
			</Link>
		</div>
	)
}

export default Navbar
