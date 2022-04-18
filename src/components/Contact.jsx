import TextField from '@mui/material/TextField'

const Contact = (props) => {
	
	return (
		<>
			<TextField
				label='First Name'
				size='small'
			/>
			<TextField
				label='Last Name'
				size='small'
			/>
			<br/>
			<TextField
				label='Email'
				size='small'
			/>
			<TextField
				label='Phone'
				size='small'
			/>
		</>
	)

}

export default Contact;
