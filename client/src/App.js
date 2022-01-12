import { Routes, Route } from 'react-router-dom'
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
	return (
		<div className='flex flex-col items-center h-full min-h-screen bg-gray-200'>
			<div className='max-w-7xl bg-white'>
				<Header />

				<Routes>
					<Route exact path='/veganism' element={<Veganism />} />
					<Route exact path='/dashboard' element={<Dashboard />} />
					<Route exact path='/login' element={<Login />} />
					<Route exact path='/signup' element={<Signup />} />
					<Route exact path='/' element={<Home />} />
				</Routes>
			</div>
			<Footer />
		</div>
	)
}

export default App
