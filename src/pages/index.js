import { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'
import Button from '@mui/material/Button'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';




import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
const Contact = (props) => {
	const handleDelete = async (id) => {
		const res = await axios.delete(`/api/contacts/${id}`)
		if(res) {
			const data = [...props.contacts]
			data[props.index] = null
			props.setContacts([...data.filter(x => x)])
		}
	}

	return (
		<Card variant='outlined'>
			<Typography>
				Name: {props.firstName} {props.lastName}
			</Typography>
			<Typography>
				Email: {props.emailAddress} Phone: {props.phoneNumber}
			</Typography>
			<Button onClick={() => handleDelete(props.id)}>
				<DeleteForeverIcon />
			</Button>
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
			{contacts.map((contact, index) => {
				return (
					<Contact 
						key={index}
						index={index}
						contacts={contacts}
						setContacts={setContacts}
						{...contact}
					/>
				)
			})}
		</>
  )
}
