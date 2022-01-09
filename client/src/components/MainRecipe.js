function MainRecipe({ selectedRecipe }) {
	const displaySteps = selectedRecipe.analyzedInstructions[0].steps.map((s) => {
		return (
			<div key={s.number + s.step}>
				<li className='text-sm'>{s.step}</li>
				<br></br>
			</div>
		)
	})

	const displayIngredients = selectedRecipe.extendedIngredients.map((i) => {
		return (
			<div key={i.id}>
				<li className='text-sm'>{i.original}</li>
				<br></br>
			</div>
		)
	})

	return (
		<div className='max-w-7xl flex flex-col justify-center'>
			<div className='p-3 flex flex-col md:flex-row justify-evenly gap-2 bg-green-500'>
				<img
					className='rounded-md right-0 order-first md:order-1'
					src={selectedRecipe.image}
					alt={selectedRecipe.title}
				/>
				<div className='flex flex-col'>
					<h1 className='text-2xl font-bold text-white'>
						{selectedRecipe.title}
					</h1>
					<h1 className='text-white font-semibold'>
						{selectedRecipe.sourceName}
					</h1>
					<br></br>
					<h1 className='text-amber-800 font-semibold'>
						{selectedRecipe.glutenFree ? 'Gluten-Free' : null}
					</h1>
					<br></br>
					<h1 className='text-slate-100 font-semibold'>
						Prep time: {selectedRecipe.readyInMinutes} mins
					</h1>
					<h1 className='text-slate-100 font-semibold'>
						Servings: {selectedRecipe.servings}
					</h1>
				</div>
			</div>
			<div className='pt-2 flex-row justify-center grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-5'>
				<div className='p-2'>
					<h1 className='font-semibold text-lg pb-2 text-green-500'>
						Ingredients
					</h1>
					{displayIngredients}
				</div>
				<div className='p-2'>
					<h1 className='font-semibold text-lg pb-2 text-green-500'>
						Directions
					</h1>
					{displaySteps}
				</div>
			</div>
		</div>
	)
}

export default MainRecipe
