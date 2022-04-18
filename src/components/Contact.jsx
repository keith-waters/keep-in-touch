import styled from '@emotion/styled'
import Card from '@mui/material/Card'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const StyledCard = styled(Card)`
	padding: 5px;
	margin: 5px;
`

const handleSubmit = () => {
	console.log("HEY")
}
const Contact = (props) => {
	
	return (
		<StyledCard variant='outlined'>
			<TextField
				label='First Name'
				size='small'
				margin='normal'
			/>
			<TextField
				label='Last Name'
				size='small'
				margin='normal'
			/>
			<TextField
				label='Email'
				size='small'
				margin='normal'
			/>
			<TextField
				label='Phone'
				size='small'
				margin='normal'
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
