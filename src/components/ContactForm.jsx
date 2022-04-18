import { useState } from 'react'
import styled from '@emotion/styled'
import axios from 'axios'
import Card from '@mui/material/Card'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Link from 'next/link'

const StyledCard = styled(Card)`
	padding: 5px;
	margin: 5px;
`

const ContactForm = (props) => {
	const initialValues = {
		firstName: '',
		lastName: '',
		emailAddress: '',
		phoneNumber: ''
	}
	const [values, setValues] = useState(initialValues)

	const handleSubmit = async () => {
		const res = await axios.post('/api/contacts', values)
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
			<Link href='/'>
				<Button>
					Cancel
				</Button>
			</Link>
			<Button
				type='submit'
				onClick={handleSubmit}
			>
				Submit
			</Button>
		</StyledCard>
	)

}

export default ContactForm;
