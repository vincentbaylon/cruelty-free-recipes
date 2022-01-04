import RecipeCard from './RecipeCard'

function Main({ recipes }) {
	const displayRecipes = recipes?.map((r) => {
		return <RecipeCard key={r.id} recipes={r} />
	})

	return (
		<div className='p-5 grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
			{console.log('MAIN', recipes)}
			{displayRecipes}
		</div>
	)
}

export default Main
