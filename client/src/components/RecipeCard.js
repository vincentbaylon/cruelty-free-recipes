function RecipeCard({ recipes }) {
	return (
		<div>
			{console.log(recipes)}
			<img src={recipes.image} alt={recipes.title} />
			<h1 className='text-md'>{recipes.title}</h1>
			<p className='text-md'>{recipes.souceName}</p>
		</div>
	)
}

export default RecipeCard
