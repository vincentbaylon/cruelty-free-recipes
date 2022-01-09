import Backdrop from './Backdrop'
import { motion } from 'framer-motion'

function Modal({ handleClose, selectedRecipe }) {
	return (
		<>
			{console.log(selectedRecipe)}
			<Backdrop onClick={handleClose}>
				<div className='flex flex-col w-full h-full relative'>
					<motion.div
						className='p-5 top-12 w-full h-full absolute rounded-tl-lg rounded-tr-lg bg-white'
						initial={{ y: 1000, opacity: 1 }}
						animate={{ y: 0, opacity: [1, 1] }}
						transition={{
							type: 'spring',
							delay: 0,
							duration: 1,
							repeat: false,
						}}
					>
						<div className=''>MODAL</div>
					</motion.div>
				</div>
			</Backdrop>
		</>
	)
}

export default Modal
