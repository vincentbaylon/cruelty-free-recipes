import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GLogin from './GLogin'

function Signup({ setUser }) {
	const navigate = useNavigate()
	const [formData, setFormData] = useState({
		name: '',
		username: '',
		email: '',
	})
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [matches, setMatches] = useState(false)

	useEffect(() => {
		if (password === confirmPassword) {
			setMatches(true)
		} else {
			setMatches(false)
		}
	}, [password, confirmPassword])

	function capitalizeName(name) {
		return name.replace(/\b(\w)/g, (s) => s.toUpperCase())
	}

	const handleChange = (e) => {
		let name = e.target.name
		let value = e.target.value

		setFormData({ ...formData, [name]: value })
	}

	const handleName = (e) => {
		let name = e.target.name
		let value = capitalizeName(e.target.value)

		setFormData({ ...formData, [name]: value })
	}

	const handlePassword = (e) => {
		setPassword(e.target.value)
	}

	const handleConfirmPassword = (e) => {
		setConfirmPassword(e.target.value)
	}

	const handleSubmit = async () => {
		if (matches && password !== '') {
			let response = await fetch(`/users`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					name: formData.name,
					username: formData.username,
					email: formData.email,
					password: password,
				}),
			})
			response = await response.json()

			if (response.success) {
				let loginResponse = await fetch('/login', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						name: formData.name,
						username: formData.username,
						email: formData.email,
						password: password,
					}),
				})
				loginResponse = await response.json()

				setUser(loginResponse)
				navigate('/')
			} else {
				alert(response.error)
			}
		}
	}

	return (
		<div className='p-5 flex flex-col items-center pb-10 pt-10'>
			<div className='bg-slate-200 p-2 flex flex-col justify-center md:w-5/12 lg:w-4/12 m-auto rounded-lg w-11/12'>
				<h1 className='p-1 font-semibold text-xl'>Sign Up</h1>
				{/* <br></br>
				<div className='flex justify-center'>
					<GLogin text='Sign up with Google' />
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
						className='p-2 rounded-sm capitalize'
						type='text'
						name='name'
						value={formData.name}
						onChange={handleName}
						placeholder='Name'
					/>
					<input
						className='p-2 rounded-sm'
						type='email'
						name='email'
						value={formData.email}
						onChange={handleChange}
						placeholder='Email'
					/>
					<input
						className='p-2 rounded-sm'
						type='text'
						name='username'
						value={formData.username}
						onChange={handleChange}
						placeholder='Username'
					/>
					<br></br>
					<input
						className='p-2 rounded-sm'
						type='password'
						name='password'
						value={password}
						onChange={handlePassword}
						placeholder='Password (min 6 chars)'
					/>
					<input
						className='p-2 rounded-sm'
						type='password'
						name='password'
						value={confirmPassword}
						onChange={handleConfirmPassword}
						placeholder='Confirm Password'
					/>
					{password === '' && confirmPassword === '' ? null : matches ? (
						<h1 className='text-sm text-green-500'>✅ Confirmed</h1>
					) : (
						<h1 className='text-sm text-red-400'>❌ Does not match</h1>
					)}
				</form>
				<div className='p-4 flex justify-center'>
					<button
						className='bg-green-400 font-semibold w-40 h-10 rounded-md hover:bg-red-400 hover:text-white'
						onClick={handleSubmit}
					>
						Sign Up
					</button>
				</div>
			</div>
		</div>
	)
}

export default Signup
