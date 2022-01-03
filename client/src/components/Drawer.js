import { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

function Drawer() {
	const [toggleMenu, setToggleMenu] = useState(false)

	return (
		<div className='text-white'>
			{toggleMenu ? (
				<RiCloseLine size={27} onClick={() => setToggleMenu(false)} />
			) : (
				<RiMenu3Line
					size={22}
					className='rotate-180'
					onClick={() => setToggleMenu(true)}
				/>
			)}
			{toggleMenu ? (
				<div className='p-5 flex flex-col gap-2 bg-black font-semibold scale-up-center rounded-lg'>
					<Link to='/'>Home</Link>

					<Link to='/veganism'>Veganism</Link>

					<hr></hr>

					<Link className='' to='/login'>
						Login
					</Link>
					<Link className='' to='/signup'>
						Sign up
					</Link>
				</div>
			) : null}
		</div>
	)
}

export default Drawer
