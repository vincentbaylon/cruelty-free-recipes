import { useState } from 'react'
import { RiSearchLine, RiCloseLine } from 'react-icons/ri'

function Search({
	recipes,
	setRecipes,
	nextLink,
	setNextLink,
	substring,
	setQueryData,
	setSearching,
}) {
	const [toggleSearch, setToggleSearch] = useState(false)
	const [query, setQuery] = useState('')
	const [healthData, setHealthData] = useState([])
	const [cuisineData, setCuisineData] = useState([])
	const [mealData, setMealData] = useState([])
	const [dishData, setDishData] = useState([])

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
		'Biscuits and cookies',
		'Bread',
		'Cereals',
		'Condiments and sauces',
		'Desserts',
		'Drinks',
		'Main course',
		'Pancake',
		'Preps',
		'Preserve',
		'Salads',
		'Side dish',
		'Soup',
		'Starter',
		'Sweets',
	]

	const mealCategories = ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Teatime']

	const handleHealth = (e) => {
		if (e.target.checked) {
			setHealthData([...healthData, e.target.value])
		} else {
			const newData = healthData.filter((h) => h !== e.target.value)
			setHealthData(newData)
		}
	}

	const displayHealth = healthCategories.map((eachCategory) => {
		return (
			<div key={eachCategory} className=''>
				<input
					type='checkbox'
					name={eachCategory}
					value={eachCategory}
					onChange={handleHealth}
				/>
				<label className='px-1' key={eachCategory}>
					{eachCategory}
				</label>
			</div>
		)
	})

	const handleDish = (e) => {
		if (e.target.checked) {
			setDishData([...dishData, e.target.value])
		} else {
			const newData = dishData.filter((h) => h !== e.target.value)
			setDishData(newData)
		}
	}

	const displayDish = dishCategories.map((eachCategory) => {
		return (
			<div key={eachCategory} className=''>
				<input
					type='checkbox'
					name={eachCategory}
					value={eachCategory}
					onChange={handleDish}
				/>
				<label className='px-1' key={eachCategory}>
					{eachCategory}
				</label>
			</div>
		)
	})

	const handleCuisine = (e) => {
		if (e.target.checked) {
			setCuisineData([...cuisineData, e.target.value])
		} else {
			const newData = cuisineData.filter((h) => h !== e.target.value)
			setCuisineData(newData)
		}
	}

	const displayCuisine = cuisineCategories.map((eachCategory) => {
		return (
			<div key={eachCategory} className=''>
				<input
					type='checkbox'
					name={eachCategory}
					value={eachCategory}
					onChange={handleCuisine}
				/>
				<label className='px-1' key={eachCategory}>
					{eachCategory}
				</label>
			</div>
		)
	})

	const handleMeal = (e) => {
		if (e.target.checked) {
			setMealData([...mealData, e.target.value])
		} else {
			const newData = mealData.filter((h) => h !== e.target.value)
			setMealData(newData)
		}
	}

	const displayMeal = mealCategories.map((eachCategory) => {
		return (
			<div key={eachCategory} className=''>
				<input
					type='checkbox'
					name={eachCategory}
					value={eachCategory}
					onChange={handleMeal}
				/>
				<label className='px-1' key={eachCategory}>
					{eachCategory}
				</label>
			</div>
		)
	})

	const handleQuery = (e) => {
		setQuery(e.target.value)
	}

	const handleSearch = async () => {
		let meal = mealData.join('&mealType=')
		let cuisine = cuisineData.join('&cuisineType=')
		let health = healthData.join('&healthType=').toLowerCase()
		let dish = dishData.join('&dishType')

		let response = await fetch(`/search`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				query: query,
				meal: mealData.length > 0 ? `&mealType=${meal}` : '',
				cuisine: cuisineData.length > 0 ? `&cuisineType=${cuisine}` : '',
				health: healthData.length > 0 ? `&health=${health}` : '',
				dish: dishData.length > 0 ? `&dishType=${dish}` : '',
			}),
		})
		response = await response.json()

		setRecipes(response.hits)

		setSearching(true)
		setNextLink(substring(response))
		setQueryData({
			query: query,
			meal: mealData.length > 0 ? `&mealType=${meal}` : '',
			cuisine: cuisineData.length > 0 ? `&cuisineType=${cuisine}` : '',
			health: healthData.length > 0 ? `&health=${health}` : '',
			dish: dishData.length > 0 ? `&dishType=${dish}` : '',
		})

		setMealData([])
		setCuisineData([])
		setHealthData([])
		setQuery('')
		setToggleSearch(false)
	}

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
							className='p-1 rounded-lg capitalize'
							type='text'
							placeholder='Search recipes'
							value={query}
							onChange={handleQuery}
						/>
					</div>

					<div className=''>
						<h1 className='py-2 font-semibold'>Filter</h1>

						<div className='pl-2'>
							<p>Meal:</p>
							{displayMeal}

							<div className='py-3'>
								<hr></hr>
							</div>

							<p>Cuisine:</p>
							{displayCuisine}

							<div className='py-3'>
								<hr></hr>
							</div>

							<p>Health:</p>
							{displayHealth}

							{/* <div className='py-3'>
								<hr></hr>
							</div>

							<p>Diet:</p>
							{displayCategories(dietCategories)} */}

							<div className='py-3'>
								<hr></hr>
							</div>

							<p>Dish:</p>
							{displayDish}
						</div>
						<div className='py-3 flex justify-center'>
							<button
								className=' bg-white text-black font-semibold text-lg rounded-lg h-9 w-full hover:bg-red-400 hover:text-white'
								onClick={handleSearch}
							>
								Get Recipes
							</button>
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

// const dietCategories = ['High-Protein', 'Low-Carb', 'Low-Fat', 'Low-Sodium']
