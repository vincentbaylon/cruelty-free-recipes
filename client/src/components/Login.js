import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GLogin from './GLogin'

function Login({ setUser }) {
	const navigate = useNavigate()
	const [formData, setFormData] = useState({
		password: '',
		username: '',
	})

	const handleChange = (e) => {
		let name = e.target.name
		let value = e.target.value

		setFormData({ ...formData, [name]: value })
	}

	const handleSubmit = async () => {
		let response = await fetch('/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		})
		response = await response.json()

		if (response.error) {
			alert(response.error)
		} else {
			setUser(response)
			navigate('/')
		}
	}

	return (
		<div className='p-5 flex flex-col items-center pb-10 pt-10'>
			<div className='bg-slate-200 p-2 flex flex-col justify-center md:w-5/12 lg:w-4/12 m-auto rounded-lg w-11/12'>
				<h1 className='p-1 font-semibold text-xl'>Login</h1>
				{/* <br></br>
				<div className='flex justify-center'>
					<GLogin text='Login with Google' />
				</div>
				<br></br>
				<div className='flex justify-center items-center'>
					<hr className='bg-slate-300 h-0.5 w-full m-2'></hr>
					<h1 className='text-slate-500 text-sm p-2'>Or</h1>
					<hr className='bg-slate-300 h-0.5 w-full m-2'></hr>
				</div> */}

				<br></br>

				<form className='p-2 flex flex-col gap-2'>
					<input
						className='p-2 rounded-sm'
						type='text'
						name='username'
						value={formData.username}
						onChange={handleChange}
						placeholder='Username'
					/>
					<input
						className='p-2 rounded-sm'
						type='password'
						name='password'
						value={formData.password}
						onChange={handleChange}
						placeholder='Password'
					/>
				</form>
				<div className='p-4 flex justify-center'>
					<button
						className='bg-green-400 font-semibold w-40 h-10 rounded-md hover:bg-red-400 hover:text-white'
						onClick={handleSubmit}
					>
						Login
					</button>
				</div>
			</div>
		</div>
	)
}

export default Login
