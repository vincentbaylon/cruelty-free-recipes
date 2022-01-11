import { GoogleLogout } from 'react-google-login'

const clientId = ''

function GLogout() {
	const onSuccess = () => {}

	return (
		<div>
			<GoogleLogout
				clientId={clientId}
				buttonText='Logout'
				onLogoutSuccess={onSuccess}
			/>
		</div>
	)
}

export default GLogout
