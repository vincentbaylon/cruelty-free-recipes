import { useEffect, useState, useRef } from 'react'
import LeafIcon from './LeafIcon'
import DisplayLeaf from './DisplayLeaf'
import Login from './Login'
import Signup from './Signup'
import Moment from 'react-moment'

function MainRecipe({
	selectedRecipe,
	user,
	setUser,
	selectedRank,
	setSelectedRank,
}) {
	const [showLogin, setShowLogin] = useState(false)
	const [showSignup, setShowSignup] = useState(false)
	const [rating, setRating] = useState(0)
	const [hoverRating, setHoverRating] = useState(0)
	const [hovering, setHovering] = useState(true)
	const myRef = useRef(null)
	const [comment, setComment] = useState('')
	const [currentRating, setCurrentRating] = useState(0)

	useEffect(() => {
		console.log(selectedRank)
		let sum = 0
		selectedRank.map((r) => {
			sum = sum + r.rank
		})
		sum = sum / selectedRank.length

		setCurrentRating(Math.round(sum))
	}, [])

	useEffect(() => {
		setShowLogin(false)
		setShowSignup(false)
	}, [user])

	const handleLogin = () => {
		setShowLogin(true)
		setShowSignup(false)
	}

	const handleSignup = () => {
		setShowSignup(true)
		setShowLogin(false)
	}

	const handleChange = (e) => {
		setComment(e.target.value)
	}

	const executeScroll = () => {
		myRef.current.scrollIntoView()
		myRef.current.focus()
	}

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

	const displayRanks = selectedRank
		.slice(0)
		.reverse()
		.map((r) => {
			return (
				<div key={r.id} className='p-5 bg-slate-300'>
					<div className='flex flex-row items-center'>
						<h1 className='pr-2'>{r.user.username}</h1>
						<DisplayLeaf rank={r.rank} />
					</div>
					<h1 className='text-sm text-slate-600'>
						<Moment format='MM/DD/YYYY HH:mm'>{r.created_at}</Moment>
					</h1>
					<h1>"{r.comment}"</h1>
				</div>
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

	const handleSubmit = async () => {
		let response = await fetch('/ranks', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				ref_key: selectedRecipe.id,
				comment: comment,
				rank: rating,
				user_id: user.id,
			}),
		})
		response = await response.json()

		if (response.error) {
			alert(response.error)
		} else {
			setSelectedRank([...selectedRank, response])

			setComment('')
			setRating(0)
		}
	}

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
						<button className='hover:underline text-sm' onClick={executeScroll}>
							{selectedRank.length > 0 ? (
								<>
									<div className='flex flex-row items-center'>
										<DisplayLeaf rank={currentRating} />
										<h1>/{selectedRank.length} ratings</h1>
									</div>
								</>
							) : (
								'Add rate and comment'
							)}
						</button>
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
			<div className='p-5 pt-2 flex flex-col justify-center bg-slate-200 rounded-md'>
				<div className='p-2'>
					{Object.keys(user).length !== 0 ? (
						<h1 className='font-semibold'>{user.username}</h1>
					) : (
						<h1 className=''>
							<button
								className='text-green-500 hover:underline'
								onClick={handleLogin}
							>
								Login
							</button>{' '}
							/{' '}
							<button
								className='text-green-500 hover:underline'
								onClick={handleSignup}
							>
								Sign up
							</button>{' '}
							to rate and comment
						</h1>
					)}
				</div>
				{showLogin ? <Login setUser={setUser} /> : null}
				{showSignup ? <Signup setUser={setUser} /> : null}
				<div className='p-1 flex flex-row items-center'>
					<h1 className='p-1'>Rate and comment</h1>
					{displayLeafs}
				</div>

				<textarea
					ref={myRef}
					className='p-1 rounded-md'
					type='textarea'
					id='comment'
					name='comment'
					onChange={handleChange}
					required
					placeholder=''
					value={comment}
					rows='3'
				/>
				<div className='pt-2 flex justify-start pb-5'>
					{Object.keys(user).length !== 0 ? (
						<button
							className='bg-green-500 text-black font-semibold text-md rounded-md w-full md:w-auto md:p-2 hover:bg-red-400 hover:text-white h-8 flex items-center justify-center'
							onClick={handleSubmit}
						>
							Submit
						</button>
					) : (
						<button
							disabled
							className='text-slate-300 font-semibold text-md rounded-md w-full md:w-auto md:p-2 disabled:bg-slate-400 h-8 flex items-center justify-center'
						>
							Submit
						</button>
					)}
				</div>
				{displayRanks}
			</div>
		</div>
	)
}

export default MainRecipe
