import { useEffect, useState } from 'react'

import Main from './Main'

function Home() {
	const [recipes, setRecipes] = useState([])

	useEffect(() => {
		async function fetchRecipes() {
			let response = await fetch('/recipes')
			response = await response.json()
			setRecipes(response)
		}

		fetchRecipes()
	}, [])

	return (
		<div>
			<h1 className='p-5 text-xl font-bold'>Explore Recipes</h1>
			<div>
				<Main recipes={recipes} />
			</div>
		</div>
	)
}

export default Home
