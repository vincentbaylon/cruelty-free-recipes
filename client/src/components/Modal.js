import Backdrop from './Backdrop'
import MainRecipe from './MainRecipe'
import { motion } from 'framer-motion'

function Modal({ handleClose, selectedRecipe }) {
	return (
		<>
			{console.log(selectedRecipe)}
			<Backdrop onClick={handleClose}>
				<motion.div
					className='p-2 top-12 absolute rounded-lg bg-white'
					initial={{ y: 1000, opacity: 1 }}
					animate={{ y: 0, opacity: [1, 1] }}
					transition={{
						type: 'spring',
						delay: 0,
						duration: 1,
						repeat: false,
					}}
				>
					<MainRecipe selectedRecipe={selectedRecipe} />
				</motion.div>
			</Backdrop>
		</>
	)
}

export default Modal
