import { Navbar, Header, Home, Dashboard, About, Login } from './components'

function App() {
	return (
		<div className='flex flex-col items-center h-full min-h-screen w-full min-w-screen bg-gray-200'>
			<div className='max-w-7xl bg-slate-50'>
				{/* <Navbar /> */}
				<Header />
				<Home />
				<Dashboard />
				<About />
				<Login />
			</div>
		</div>
	)
}

export default App
