import { useEffect, useState } from 'react'

import Main from './Main'

function Home() {
	const [recipes, setRecipes] = useState([])

	useEffect(() => {
		async function fetchRecipes() {
			let response = await fetch('')
			response = await response.json()
			setRecipes(response)
		}

		fetchRecipes()
	}, [])

	return (
		<div>
			<h1 className='pl-5 pr-5 pt-5 text-2xl font-bold'>Explore Recipes</h1>
			<div>
				<Main recipes={recipes} />
			</div>
		</div>
	)
}

export default Home
