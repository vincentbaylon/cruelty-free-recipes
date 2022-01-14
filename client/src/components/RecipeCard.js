import { useState, useEffect } from 'react'
import DisplayLeaf from './DisplayLeaf'
import { RiTimer2Line } from 'react-icons/ri'

function RecipeCard({
	recipes,
	setSelectedRecipe,
	handleClick,
	recipeRank,
	selectedRank,
	setSelectedRank,
}) {
	const [currentRating, setCurrentRating] = useState(0)

	useEffect(() => {
		let sum = 0
		recipeRank.map((r) => {
			sum = sum + r.rank
		})
		sum = sum / recipeRank.length

		setCurrentRating(Math.round(sum))
	}, [recipeRank])

	const recipeClick = () => {
		setSelectedRecipe(recipes)
		setSelectedRank(recipeRank)
		handleClick()
	}

	return (
		<div
			className='hover:shadow-xl hover:bg-green-50 hover:border-slate-200 border-2 border-white rounded-lg p-2'
			onClick={recipeClick}
		>
			<img className='rounded-lg' src={recipes.image} alt={recipes.title} />
			<h1 className='text-md font-semibold truncate capitalize'>
				{recipes.title}
			</h1>
			<p className='text-sm'>{recipes.sourceName}</p>

			<h1 className='text-sm font-semibold text-amber-800'>
				{recipes.glutenFree ? 'Gluten-Free' : null}
			</h1>
			<div className='flex flex-row justify-between items-center'>
				<div className='flex flex-row items-center'>
					<RiTimer2Line />
					<h1 className='pl-1 text-sm font-semibold'>
						{' '}
						{recipes.readyInMinutes === 0
							? 'N/A'
							: recipes.readyInMinutes + ' mins'}
					</h1>
				</div>

				<div className='flex flex-row'>
					{currentRating > 0 ? <DisplayLeaf rank={currentRating} /> : null}
				</div>
			</div>
		</div>
	)
}

export default RecipeCard
