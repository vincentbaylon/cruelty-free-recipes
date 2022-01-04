import { useEffect, useState } from 'react'

import Main from './Main'

function Home() {
	const [apiFetch, setApiFetch] = useState({})
	const [recipes, setRecipes] = useState([])

	useEffect(() => {
		async function fetchRecipes() {
			let response = await fetch('/recipes')
			response = await response.json()
			setRecipes(response.hits)
			setApiFetch(response)
		}

		fetchRecipes()
	}, [])

	const fetchMore = async () => {
		let response = await fetch(apiFetch._links.next.href)
		response = await response.json()
		setApiFetch(response)

		let newRecipes = [...recipes, ...response.hits]
		setRecipes(newRecipes)
	}

	return (
		<div>
			<h1 className='pl-5 pr-5 pt-5 text-2xl font-bold'>Explore Recipes</h1>
			<div className=''>
				<Main recipes={recipes} />
			</div>
			<div className='flex justify-center'>
				{recipes ? (
					<button
						className='m-5 text-lg border-2 border-green-500 h-12 w-36 rounded-full font-semibold hover:bg-green-500 text-black'
						onClick={fetchMore}
					>
						More Recipes
					</button>
				) : null}
			</div>
		</div>
	)
}

export default Home
