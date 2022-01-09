import { RiCloseLine } from 'react-icons/ri'

function Backdrop({ children, onClick }) {
	return (
		<div className='backdrop z-50 min-h-screen w-full flex h-full justify-center'>
			{children}
			<button className='m-2 absolute top-0 right-0' onClick={onClick}>
				<RiCloseLine size={30} className='text-white' />
			</button>
		</div>
	)
}

export default Backdrop
