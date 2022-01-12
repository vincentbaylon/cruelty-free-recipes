import { useState } from 'react'
import { RiSearchLine, RiCloseLine } from 'react-icons/ri'

function Search({
	recipes,
	setRecipes,
	setQueryData,
	setSearching,
	setTotalResults,
	setLoading,
}) {
	const [toggleSearch, setToggleSearch] = useState(false)
	const [query, setQuery] = useState('')
	const [healthData, setHealthData] = useState([])
	const [cuisineData, setCuisineData] = useState([])
	const [dishData, setDishData] = useState([])

	const healthCategories = [
		'Gluten',
		'Grain',
		'Peanut',
		'Sesame',
		'Soy',
		'Sulfite',
		'Tree Nut',
		'Wheat',
	]

	const cuisineCategories = [
		'African',
		'American',
		'British',
		'Cajun',
		'Caribbean',
		'Chinese',
		'Eastern European',
		'European',
		'French',
		'German',
		'Greek',
		'Indian',
		'Irish',
		'Italian',
		'Japanese',
		'Jewish',
		'Korean',
		'Latin American',
		'Mediterranean',
		'Mexican',
		'Middle Eastern',
		'Nordic',
		'Southern',
		'Spanish',
		'Thai',
		'Vietnamese',
	]

	const dishCategories = [
		'main course',
		'side dish',
		'dessert',
		'appetizer',
		'salad',
		'bread',
		'breakfast',
		'soup',
		'beverage',
		'sauce',
		'marinade',
		'fingerfood',
		'snack',
		'drink',
	]

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
				<label className='px-1 capitalize' key={eachCategory}>
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

	const handleQuery = (e) => {
		setQuery(e.target.value)
	}

	const handleSearch = async () => {
		window.scrollTo(0, 0)
		setLoading(true)
		let cuisine = cuisineData.join(',')
		let health = healthData.join(',')
		let dish = dishData.join(',')

		let response = await fetch(`/search`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				query: query,
				cuisine: cuisine,
				intolerance: health,
				type: dish,
			}),
		})
		response = await response.json()

		setRecipes(response.results)
		setTotalResults(response.totalResults)
		setSearching(true)

		setQueryData({
			query: query,
			cuisine: cuisine,
			intolerance: health,
			type: dish,
		})

		setDishData([])
		setCuisineData([])
		setHealthData([])
		setQuery('')
		setToggleSearch(false)
		setLoading(false)
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
							<p>Cuisine:</p>
							{displayCuisine}

							<div className='py-3'>
								<hr></hr>
							</div>

							<p>Intolerance:</p>
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
