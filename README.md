## Getting Started

First, run the development server:

```bash
# start mysql docker
docker-compose up -d

# push database schema
npx prisma db push

# start the web app
npm run dev
```

Then navigate to `http://localhost:3000`!

## Requirements
- contact entity must have firstName, lastName, emailAddress, phoneNumber.
- can create contact
- can create multiple contacts at once
- can update a contact
- can delete a contact
- use React and Next
- instructions to spin up app

## Bonus
- docker-ize app
- sort and filter contacts
- paginate contacts

## Things to consider
- code organization
- implementation choices
- api structure
- code quality
- tests

## Tasks
- [ ] ui single contact component: list item
- [ ] ui contact list component: list of contacts
- [ ] ui edit contact: pencil icon
- [ ] ui create/edit contact form: form to create or edit, autofills on edit
- [ ] ui add another contact: button at bottom of create form, adds another create form
- [ ] ui submit new contacts: submits all contacts on screen
- [ ] ui submit updated contact: submits edited contact
- [ ] ui delete contact: trash can and "are you sure" popup
- [ ] api create contacts: POST, array of objects
- [ ] api update contact: PATCH, [id], object
- [ ] api delete contact: DELETE, [id]





