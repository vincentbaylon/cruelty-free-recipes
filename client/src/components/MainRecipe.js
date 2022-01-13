import { useState } from 'react'
import { RiLeafFill, RiLeafLine } from 'react-icons/ri'
import LeafIcon from './LeafIcon'

function MainRecipe({ selectedRecipe }) {
	const [rating, setRating] = useState(0)
	const [hoverRating, setHoverRating] = useState(0)
	const [hovering, setHovering] = useState(true)

	const displayLeafs = [1, 2, 3, 4, 5].map((i) => {
		return (
			<LeafIcon
				key={i}
				idx={i}
				setHoverRating={setHoverRating}
				hoverRating={hoverRating}
				setRating={setRating}
				rating={rating}
				hovering={hovering}
				setHovering={setHovering}
			/>
		)
	})

	const displaySteps = selectedRecipe.analyzedInstructions[0].steps?.map(
		(s) => {
			return (
				<div key={s.number + s.step}>
					<li className='text-sm'>{s.step}</li>
					<br></br>
				</div>
			)
		}
	)

	const displayIngredients = selectedRecipe.extendedIngredients.map((i) => {
		return (
			<div key={i.id}>
				<li className='text-sm'>{i.original}</li>
				<br></br>
			</div>
		)
	})

	return (
		<div className='max-w-5xl flex flex-col justify-center'>
			<div className='p-3 flex flex-col md:flex-row justify-evenly gap-2 bg-green-500'>
				<img
					className='rounded-md right-0 order-first md:order-1 object-cover'
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
					<div className='flex items-center text-lime-900'>
						<RiLeafFill />
						<RiLeafFill />
						<RiLeafLine />
						<RiLeafLine />
						<RiLeafLine />
						<h1>/ 5 reviews</h1>
					</div>

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
					<br></br>
					<div className='flex flex-row items-stretch justify-start gap-3'>
						<div className='flex flex-col items-center justify-center'>
							<h1 className='bg-lime-400 text-sm w-full text-center p-1 font-semibold rounded-t-sm'>
								Calories
							</h1>
							<h1 className='bg-lime-300 text-sm w-full text-center p-2 font-semibold rounded-b-sm'>
								{Math.round(selectedRecipe.nutrition.nutrients[0].amount)}
							</h1>
						</div>
						<div className='flex flex-col items-center justify-center'>
							<h1 className='bg-lime-400 text-sm w-full text-center p-1 font-semibold rounded-t-sm'>
								Protein
							</h1>
							<h1 className='bg-lime-300 text-sm w-full text-center p-2 font-semibold rounded-b-sm'>
								{Math.round(selectedRecipe.nutrition.nutrients[8].amount)}
							</h1>
						</div>
						<div className='flex flex-col items-center justify-center'>
							<h1 className='bg-lime-400 text-sm w-full text-center p-1 font-semibold rounded-t-sm'>
								Carbs
							</h1>
							<h1 className='bg-lime-300 text-sm w-full text-center p-2 font-semibold rounded-b-sm'>
								{Math.round(selectedRecipe.nutrition.nutrients[3].amount)}
							</h1>
						</div>
						<div className='flex flex-col items-center justify-center'>
							<h1 className='bg-lime-400 text-sm w-full text-center p-1 font-semibold rounded-t-sm'>
								Fat
							</h1>
							<h1 className='bg-lime-300 text-sm w-full text-center p-2 font-semibold rounded-b-sm'>
								{Math.round(selectedRecipe.nutrition.nutrients[1].amount)}
							</h1>
						</div>
					</div>
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
			<div className='pt-2 flex flex-row justify-center'>{displayLeafs}</div>
		</div>
	)
}

export default MainRecipe
