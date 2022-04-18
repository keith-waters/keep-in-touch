import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
	if(req.method === 'DELETE') {

		const contact = await prisma.contacts.delete({where: {id: parseInt(req.query.id, 10)}})
  	res.status(200).json(contact)

	} if(req.method === 'PUT') {
		const {id, ...data} = req.body
		const contact = await prisma.contacts.update({where: {id: parseInt(req.query.id, 10)}, data})
  	res.status(200).json(contact)

	} else {
		res.status(404).send('Api not found')
	}
}
