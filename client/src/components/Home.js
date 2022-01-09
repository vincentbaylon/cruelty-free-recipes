import { useEffect, useState } from 'react'

import Main from './Main'
import Search from './Search'
import Modal from './Modal'

function Home() {
	const [selectedRecipe, setSelectedRecipe] = useState({})
	const [modalOpen, setModalOpen] = useState(false)
	const [nextLink, setNextLink] = useState('')
	const [recipes, setRecipes] = useState([])
	const [searching, setSearching] = useState(false)
	const [queryData, setQueryData] = useState({
		query: '',
		meal: '',
		cuisine: '',
		health: '',
		dish: '',
	})

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
		if (searching) {
			let response = await fetch(`/search_more`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					nextLink: nextLink,
					query: queryData.query,
					meal: queryData.meal,
					cuisine: queryData.cuisine,
					health: queryData.health,
					dish: queryData.dish,
				}),
			})
			response = await response.json()

			setNextLink(substring(response))

			let newRecipes = [...recipes, ...response.hits]
			setRecipes(newRecipes)
		} else {
			let response = await fetch(`/more_recipes`, {
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
	}

	const handleClose = () => {
		setModalOpen(false)
	}

	const handleClick = () => {
		setModalOpen((modalOpen) => !modalOpen)
	}

	return (
		<>
			<div className='w-full relative flex flex-col justify-center'>
				<h1 className='pl-5 pr-5 pt-5 text-2xl font-bold'>Explore Recipes</h1>
				<div className='-top-1 absolute flex justify-end w-full r-0'>
					<Search
						recipes={recipes}
						setRecipes={setRecipes}
						nextLink={nextLink}
						setNextLink={setNextLink}
						substring={substring}
						setQueryData={setQueryData}
						setSearching={setSearching}
					/>
				</div>

				<Main
					recipes={recipes}
					setSelectedRecipe={setSelectedRecipe}
					handleClick={handleClick}
				/>

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

			{modalOpen ? (
				<Modal
					modalOpen={modalOpen}
					handleClose={handleClose}
					selectedRecipe={selectedRecipe}
				/>
			) : null}
		</>
	)
}

export default Home
