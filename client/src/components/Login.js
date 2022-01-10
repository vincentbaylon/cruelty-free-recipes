import { useState } from 'react'

function Login() {
	const [formData, setFormData] = useState({
		password: '',
		username: '',
	})

	const handleChange = () => {}

	return (
		<div className='p-5 flex flex-col items-center'>
			<div className='bg-slate-200 p-2 flex flex-col justify-center w-80 m-auto rounded-lg'>
				<h1 className='p-1 font-semibold text-xl'>Login</h1>
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
					<button className='bg-green-400 font-semibold w-40 h-10 rounded-md'>
						Login
					</button>
				</div>
			</div>
		</div>
	)
}

export default Login
