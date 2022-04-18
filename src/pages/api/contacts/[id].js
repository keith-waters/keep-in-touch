import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
	if(req.method === 'DELETE') {

		console.log(req.query)
		const contact = await prisma.contacts.delete({where: {id: parseInt(req.query.id, 10)}})
  	res.status(200).json(contact)

	} else {
		res.status(404).send('Api not found')
	}
}
