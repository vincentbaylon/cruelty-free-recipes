function RecipeCard({ recipes, setSelectedRecipe, handleClick }) {
	const recipeClick = () => {
		setSelectedRecipe(recipes)
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
			<h1 className='text-sm font-semibold'>
				Prep time:{' '}
				{recipes.readyInMinutes === 0
					? 'N/A'
					: recipes.readyInMinutes + ' mins'}
			</h1>
			<h1 className='text-sm font-semibold text-amber-800'>
				{recipes.glutenFree ? 'Gluten-Free' : null}
			</h1>
		</div>
	)
}

export default RecipeCard
