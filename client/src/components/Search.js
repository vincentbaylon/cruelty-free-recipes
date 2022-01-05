import { RiSearchLine } from 'react-icons/ri'

function Search() {
	return (
		<div className='p-5 r-0'>
			<div className='r-0'>
				<button className='p-3 bg-green-400 rounded-full'>
					<RiSearchLine size={25} />
				</button>
			</div>
		</div>
	)
}

export default Search
