import { GoogleLogin } from 'react-google-login'

const clientId = ''

function GLogin({ text }) {
	const onSuccess = (res) => {}

	const onFailure = (res) => {}

	return (
		<div>
			<GoogleLogin
				clientId={clientId}
				buttonText={text}
				onSuccess={onSuccess}
				onFailure={onFailure}
				cookiePolicy={'single_host_origin'}
				isSignedIn={true}
			/>
		</div>
	)
}

export default GLogin
