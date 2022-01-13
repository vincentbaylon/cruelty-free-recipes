import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import {
	Header,
	Home,
	Dashboard,
	Veganism,
	Login,
	Signup,
	Footer,
} from './components'
import './App.css'

function App() {
	const [user, setUser] = useState({})
	const navigate = useNavigate()

	useEffect(() => {
		async function fetchMe() {
			let response = await fetch('/me')
			response = await response.json()

			if (!response.error) {
				setUser(response)

				navigate('/')
			}
		}

		fetchMe()
	}, [])

	return (
		<div className='flex flex-col items-center h-full min-h-screen bg-gray-200'>
			<div className='max-w-7xl bg-white'>
				<Header user={user} />

				<Routes>
					<Route exact path='/veganism' element={<Veganism />} />
					<Route exact path='/dashboard' element={<Dashboard />} />
					<Route exact path='/login' element={<Login setUser={setUser} />} />
					<Route exact path='/signup' element={<Signup setUser={setUser} />} />
					<Route exact path='/' element={<Home />} />
				</Routes>
			</div>
			<Footer />
		</div>
	)
}

export default App
