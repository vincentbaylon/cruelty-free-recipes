import { Routes, Route } from 'react-router-dom'
import { Header, Home, Dashboard, About, Login } from './components'

function App() {
	return (
		<div className='flex flex-col items-center h-full min-h-screen bg-gray-200'>
			<div className='max-w-7xl bg-slate-50'>
				<Header />

				<Routes>
					<Route exact path='/about' element={<About />} />
					<Route exact path='/dashboard' element={<Dashboard />} />
					<Route exact path='/login' element={<Login />} />
					<Route exact path='/' element={<Home />} />
				</Routes>
			</div>
		</div>
	)
}

export default App
