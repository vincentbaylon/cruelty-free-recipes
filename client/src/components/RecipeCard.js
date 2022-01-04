function RecipeCard({ recipes }) {
	return (
		<div className=''>
			{console.log(recipes)}
			<img
				className='rounded-lg object-cover'
				src={recipes.recipe.image}
				alt={recipes.recipe.label}
			/>
			<h1 className='text-md font-semibold truncate'>{recipes.recipe.label}</h1>
			<p className='text-sm'>{recipes.recipe.source}</p>
		</div>
	)
}

export default RecipeCard
