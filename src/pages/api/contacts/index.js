import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
	if(req.method === 'POST') {

		const contact = await prisma.contacts.create({data: req.body})

  	res.status(200).json(contact)
	} else {
		res.status(404).send('Api not found')
	}
}
