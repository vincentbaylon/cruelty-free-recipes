import { useEffect, useState } from 'react'
import { TailSpin } from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import Main from './Main'
import Search from './Search'
import Modal from './Modal'

function Home() {
	const [loading, setLoading] = useState(false)
	const [moreLoading, setMoreLoading] = useState(false)
	const [selectedRecipe, setSelectedRecipe] = useState({})
	const [modalOpen, setModalOpen] = useState(false)
	const [recipes, setRecipes] = useState([])
	const [totalResults, setTotalResults] = useState(0)
	const [searching, setSearching] = useState(false)
	const [queryData, setQueryData] = useState({
		query: '',
		cuisine: '',
		intolerance: '',
		type: '',
	})

	useEffect(() => {
		async function fetchRecipes() {
			setLoading(true)
			let response = await fetch('/recipes')
			response = await response.json()

			setRecipes(response.results)
			setTotalResults(response.totalResults)
			setLoading(false)
		}

		fetchRecipes()
	}, [])

	const fetchMore = async () => {
		if (searching) {
			setMoreLoading(true)
			let response = await fetch(`/search_more`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					queryData,
					offset: totalResults > recipes.length ? recipes.length : 0,
				}),
			})
			response = await response.json()

			let newRecipes = [...recipes, ...response.results]
			setRecipes(newRecipes)
			setMoreLoading(false)
		} else {
			setMoreLoading(true)
			let response = await fetch(`/more_recipes`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					offset: totalResults > recipes.length ? recipes.length : 0,
				}),
			})
			response = await response.json()

			let newRecipes = [...recipes, ...response.results]
			setRecipes(newRecipes)
			setMoreLoading(false)
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
				<h1 className='pl-5 font-semibold text-sm capitalize'>
					{queryData.query !== '' ? `${queryData.query} - ` : null}
					{queryData.cuisine !== '' ? `${queryData.cuisine} - ` : null}
					{queryData.intolerance !== '' ? `${queryData.intolerance} - ` : null}
					{queryData.type !== '' ? `${queryData.type}` : null}
				</h1>
				<div className='-top-1 absolute flex justify-end w-full r-0'>
					<Search
						recipes={recipes}
						setRecipes={setRecipes}
						setQueryData={setQueryData}
						setSearching={setSearching}
						setTotalResults={setTotalResults}
						setLoading={setLoading}
					/>
				</div>
				{loading ? (
					<div className='p-10 flex justify-center'>
						<TailSpin type='TailSpin' color='#aeb6bf' height={80} width={80} />
					</div>
				) : (
					<Main
						recipes={recipes}
						setSelectedRecipe={setSelectedRecipe}
						handleClick={handleClick}
					/>
				)}

				{moreLoading ? (
					<div className='p-10 flex justify-center'>
						<TailSpin type='TailSpin' color='#aeb6bf' height={80} width={80} />
					</div>
				) : null}

				<div className='flex justify-center'>
					{totalResults > 100 ? (
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
