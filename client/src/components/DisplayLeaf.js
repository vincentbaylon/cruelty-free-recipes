import { RiLeafFill, RiLeafLine } from 'react-icons/ri'

function DisplayLeaf({ rank }) {
	const displayLeafs = [1, 2, 3, 4, 5].map((i) => {
		return i <= rank ? <RiLeafFill /> : <RiLeafLine />
	})

	return <>{displayLeafs}</>
}

export default DisplayLeaf
