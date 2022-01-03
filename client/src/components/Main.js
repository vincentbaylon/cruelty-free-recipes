import RecipeCard from './RecipeCard'

function Main({ recipes }) {
	const displayRecipes = recipes.recipes.map((r) => {
		return <RecipeCard key={r.id} recipes={r} />
	})

	return (
		<div>
			{console.log('MAIN', recipes)}
			{displayRecipes}
		</div>
	)
}

export default Main
