import { useState } from 'react'

import RecipeCard from './RecipeCard'

function Main({ recipes, setSelectedRecipe, handleClick }) {
	const displayRecipes = recipes?.map((r) => {
		return (
			<RecipeCard
				key={r.id}
				recipes={r}
				handleClick={handleClick}
				setSelectedRecipe={setSelectedRecipe}
			/>
		)
	})

	return (
		<>
			<div className='p-5 pt-10 grid grow grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
				{displayRecipes}
			</div>
			<div className='p-5 flex justify-center'>
				{recipes.length === 0 ? (
					<h1>😢 No recipes found. Please try another search.</h1>
				) : null}
			</div>
		</>
	)
}

export default Main
