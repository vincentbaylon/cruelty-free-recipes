import RecipeCard from './RecipeCard'

function Main({ recipes }) {
	const displayRecipes = recipes?.map((r) => {
		return <RecipeCard key={r.id} recipes={r} />
	})

	return (
		<div className='p-5 grid grow grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
			{displayRecipes}
		</div>
	)
}

export default Main
