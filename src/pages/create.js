import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import Button from '@mui/material/Button'
import Link from 'next/link'
import ContactForm from '../components/ContactForm'

export default function Create() {
	const router = useRouter()
	const initialValues = {
		firstName: '',
		lastName: '',
		emailAddress: '',
		phoneNumber: ''
	}
	const [formData, setFormData] = useState([initialValues])

	const handleAdd = () => {
		if (formData.length < 5) setFormData([...formData, initialValues])
	}

	const handleChange = (index, data) => {
		const contacts = [...formData]
		contacts[index] = {...contacts[index], ...data}
		setFormData(contacts)
	}

	const handleSubmit = async () => {
		for(const data of formData) {
			const res = await axios.post('/api/contacts', data)
		}
		router.push('/')
	}

  return (
		<>
			{formData.map((data, index) => (
				<ContactForm 
					key={index} 
					index={index} 
					handleChange={handleChange} 
					{ ...data }
				/>
			))}
			<Button
				onClick={handleAdd}
			>
			  Add another contact	
			</Button>
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
		</>
  )
}
