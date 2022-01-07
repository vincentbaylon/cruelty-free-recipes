import { useEffect, useState } from 'react'

import Main from './Main'
import Search from './Search'

function Home() {
	const [nextLink, setNextLink] = useState('')
	const [recipes, setRecipes] = useState([])

	const substring = (response) => {
		let link = response._links.next.href
		let start = '_cont'
		let end = '&health'
		let startIndex = link.indexOf(start)
		let endIndex = link.indexOf(end)
		let cont = link.substring(startIndex, endIndex)

		return cont
	}

	useEffect(() => {
		async function fetchRecipes() {
			let response = await fetch('/recipes')
			response = await response.json()
			setRecipes(response.hits)

			setNextLink(substring(response))
		}

		fetchRecipes()
	}, [])

	const fetchMore = async () => {
		let response = await fetch(`/more_recipes/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				nextLink: nextLink,
			}),
		})
		response = await response.json()

		setNextLink(substring(response))

		let newRecipes = [...recipes, ...response.hits]
		setRecipes(newRecipes)
	}

	return (
		<div className='w-full relative'>
			<h1 className='pl-5 pr-5 pt-5 text-2xl font-bold'>Explore Recipes</h1>
			<div className='-top-1 absolute flex justify-end w-full r-0'>
				<Search />
			</div>

			<Main recipes={recipes} />

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
