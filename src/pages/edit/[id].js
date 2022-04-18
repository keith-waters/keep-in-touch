import { useState } from 'react'
import axios from 'axios'
import Button from '@mui/material/Button'
import Link from 'next/link'
import { useRouter } from 'next/router'
import ContactForm from '../../components/ContactForm'

export default function Create() {
	const router = useRouter()

	const initialValues = {
		...router.query
	}
	const [formData, setFormData] = useState([initialValues])

	const handleChange = (index, data) => {
		const contacts = [...formData]
		contacts[index] = {...contacts[index], ...data}
		setFormData(contacts)
	}

	const handleSubmit = async () => {
		for(const data of formData) {
			const res = await axios.put(`/api/contacts/${router.query.id}`, data)
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
