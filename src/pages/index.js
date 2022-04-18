import { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'
import Button from '@mui/material/Button'




import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
const Contact = (props) => {
	return (
		<Card variant='outlined'>
			<Typography>
				Name: {props.firstName} {props.lastName}
			</Typography>
			<Typography>
				Email: {props.emailAddress} Phone: {props.phoneNumber}
			</Typography>
		</Card>
	)
}

export default function Home() {
	const [ contacts, setContacts ] = useState([])

	const getContacts = async () => {
		const res = await axios.get('/api/contacts')
		setContacts(res.data)
	}

	useEffect(() => {
		getContacts()
	}, [])


  return (
		<>
			<Link href='/create'>
				<Button>
					Add contacts
				</Button>
			</Link>
			{contacts.map((contact) => {
				return (
					<Contact 
						key={contact.firstName}
						{...contact}
					/>
				)
			})}
		</>
  )
}
