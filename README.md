# Coordi Contacts API

A simple REST API for managing contacts, built with Node.js and Express using an in-memory store.

---

## Setup

1. Clone the repository
```
git clone https://github.com/JackyYe23/coordi-interview-assessment.git
```

2. Navigate into the project folder
```
cd backend
```

3. Install dependencies
```
npm install
```

4. Start the server
```
npm run dev
```

Server will run on `http://localhost:8080`

---

## Endpoints

| Method | Endpoint | Description ||
| GET | /contacts | List all contacts |
| GET | /contacts?company={name} | Filter contacts by company |
| GET | /contacts/:id | Retrieve a single contact by ID |
| POST | /contacts | Create a new contact |
| PUT | /contacts/:id | Update an existing contact |
| DELETE | /contacts/:id | Delete a contact |

---

## Contact Schema

```json
{
    "firstName": "John",
    "lastName": "Smith",
    "email": "john@gmail.com",
    "phone": "123-456-7890",
    "company": "Coordi Labs"
}
```

## Validation

All fields are required when creating a contact. PUT requests accept only fields you would like to update

If a required field is missing on POST, the API will return:
```json
{ "error": "Field is required" }
```

If a contact is not found, the API will return:
```json
{ "error": "Contact not found" }
```

---

## Project Structure

```
backend/
├── store/
│   └── contacts.js       # in-memory data store
├── controllers/
│   └── contacts.js       # functions of each HTTP method and endpoint
├── middleware/
│   └── validate.js       # input validation
├── routes/
│   └── contacts.js       # define routes
├── app.js                # setup express app
├── index.js              # starting the server
└── README.md
```

---

## Notes

- Data is stored in memory and will reset on server restart
- No authentication or database required to run locally