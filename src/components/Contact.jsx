import { useState } from 'react'
import styled from '@emotion/styled'
import Card from '@mui/material/Card'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const StyledCard = styled(Card)`
	padding: 5px;
	margin: 5px;
`

const Contact = (props) => {
	const initialValues = {
		firstName: '',
		lastName: '',
		emailAddress: '',
		phoneNumber: ''
	}
	const [values, setValues] = useState(initialValues)

	const handleSubmit = () => {
		console.log("HEY", values)
	}
	
	return (
		<StyledCard variant='outlined'>
			<TextField
				label='First Name'
				size='small'
				margin='normal'
				value={values.firstName}
				onChange={(ev) => {setValues({...values, firstName: ev.target.value})}}
			/>
			<TextField
				label='Last Name'
				size='small'
				margin='normal'
				value={values.lastName}
				onChange={(ev) => {setValues({...values, lastName: ev.target.value})}}
			/>
			<TextField
				label='Email'
				size='small'
				margin='normal'
				value={values.emailAddress}
				onChange={(ev) => {setValues({...values, emailAddress: ev.target.value})}}
			/>
			<TextField
				label='Phone'
				size='small'
				margin='normal'
				value={values.phoneNumber}
				onChange={(ev) => {setValues({...values, phoneNumber: ev.target.value})}}
			/>
			<br/>
			<Button
				type='submit'
				onClick={handleSubmit}
			>
				Submit
			</Button>
		</StyledCard>
	)

}

export default Contact;
