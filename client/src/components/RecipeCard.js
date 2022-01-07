function RecipeCard({ recipes }) {
	return (
		<div className='hover:shadow-xl hover:bg-green-50 hover:border-2 rounded-lg p-2'>
			<img
				className='rounded-lg'
				src={recipes.recipe.image}
				alt={recipes.recipe.label}
			/>
			<h1 className='text-md font-semibold truncate'>{recipes.recipe.label}</h1>
			<p className='text-sm'>{recipes.recipe.source}</p>
			<h1 className='text-sm font-semibold'>
				Prep time:{' '}
				{recipes.recipe.totalTime === 0
					? 'N/A'
					: recipes.recipe.totalTime + ' mins'}
			</h1>
		</div>
	)
}

export default RecipeCard
