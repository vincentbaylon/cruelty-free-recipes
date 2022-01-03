function RecipeCard({ recipes }) {
	return (
		<div className=''>
			{console.log(recipes)}
			<img
				className='rounded-lg object-cover'
				src={recipes.image}
				alt={recipes.title}
			/>
			<h1 className='text-md font-semibold truncate'>{recipes.title}</h1>
			<p className='text-sm'>{recipes.sourceName}</p>
		</div>
	)
}

export default RecipeCard
