import Home from './components/Home'
import Dashboard from './components/Dashboard'
import About from './components/About'
import Login from './components/Login'

function App() {
	return (
		<div className='max-h-full bg-red-400'>
			<h1 className='text-3xl font-bold underline'>Hello world!</h1>

			<Home />
			<Dashboard />
			<About />
			<Login />
		</div>
	)
}

export default App
