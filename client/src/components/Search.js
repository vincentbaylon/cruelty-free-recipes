import { useState } from 'react'
import { RiSearchLine, RiCloseLine } from 'react-icons/ri'

function Search() {
	const [toggleSearch, setToggleSearch] = useState(false)

	const dietCategories = ['High-Protein', 'Low-Carb', 'Low-Fat', 'Low-Sodium']

	const healthCategories = [
		'Gluten-Free',
		'Keto-Friendly',
		'No-Oil-Added',
		'Peanut-Free',
		'Sesame-Free',
		'Soy-Free',
		'Sugar-Conscious',
		'Tree-Nut-Free',
		'Wheat-Free',
	]

	const cuisineCategories = [
		'American',
		'Asian',
		'British',
		'Caribbean',
		'Central Europe',
		'Chinese',
		'Eastern Europe',
		'French',
		'Indian',
		'Japanese',
		'Mediterranean',
		'Mexican',
		'Middle Eastern',
		'Nordic',
		'South American',
		'South East Asian',
	]

	const dishCategories = [
		'Biscuits and Cookies',
		'Bread',
		'Cereals',
		'Condiments and Sauces',
		'Desserts',
		'Drinks',
		'Main Course',
		'Pancake',
		'Preps',
		'Preserve',
		'Salads',
		'Side Dish',
		'Soup',
		'Starter',
		'Sweets',
	]

	const mealCategories = ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Teatime']

	const displayCategories = (category) =>
		category.map((eachCategory) => {
			return (
				<div className=''>
					<input type='checkbox' name={eachCategory} />
					<label className='px-1' key={eachCategory}>
						{eachCategory}
					</label>
				</div>
			)
		})

	return (
		<div className='p-5 r-0'>
			{toggleSearch ? (
				<div className='p-3 bg-green-400 rounded-lg scale-up-tr r-0'>
					<div className='flex justify-end'>
						<button className='bg-green-400 rounded-full'>
							<RiCloseLine size={25} onClick={() => setToggleSearch(false)} />
						</button>
					</div>
					<div className='py-2'>
						<input
							className='p-1 rounded-lg'
							type='text'
							placeholder='Search recipes'
						/>
					</div>

					<div className=''>
						<h1 className='py-2 font-semibold'>Filter</h1>

						<div className='pl-2'>
							<p>Meal:</p>
							{displayCategories(mealCategories)}

							<div className='py-3'>
								<hr></hr>
							</div>

							<p>Cuisine:</p>
							{displayCategories(cuisineCategories)}

							<div className='py-3'>
								<hr></hr>
							</div>

							<p>Health:</p>
							{displayCategories(healthCategories)}

							<div className='py-3'>
								<hr></hr>
							</div>

							<p>Diet:</p>
							{displayCategories(dietCategories)}

							{/* <div className='py-3'>
								<hr></hr>
							</div>

							<p>Dish:</p>
							{displayCategories(dishCategories)} */}
						</div>
					</div>
				</div>
			) : (
				<div>
					<button className='p-3 bg-green-400 rounded-full'>
						<RiSearchLine size={25} onClick={() => setToggleSearch(true)} />
					</button>
				</div>
			)}
		</div>
	)
}

export default Search
