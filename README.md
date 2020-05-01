# Sync Contact API 

## Abstract
The Sync Contact API allows for user validation, and contact and contact detail retrieval for the Sync Contact interface. 

## Endpoints
### Users

**Fetching a specific user**

GET /user/:id 

input:

200 OK on success
returns JSON
{
    id: 1,
    name: 'Dolph Lundgren',
    pass: 'iSmellCrime',
    profileImg: blob
}

**Adding a new user**

POST /user

Returns a json object of the added user 
{
    id: 1,
    name: 'Dolph Lundgren',
    pass: 'iSmellCrime',
    profileImg: blob
}

**Deleting a user**
To be added in later updates.

### Contact

**Fetching user contacts**
GET /contacts/:userId 

200 OK on success
returns JSON
[
    {
        contactID: 1
        userID: 1,
        name: 'Jean-Claude Van Damme',
        phone: 8321439992,
        email: 'jeanClaude1@gmail.com',
        address: 
    },
    {
        ...
    }...
]

**Adding a new contact for a user**
POST /contacts/


**Updating an existing contact**
patch? 

**Deleting a contact**
DELETE /contacts/:contactID

returns all remaining contacts for user 

### Talking Points

**Fetching talking points for a contact**

**Adding new talking points for a contact**

**Updating a contacts existing talking points**

**Deleting a specific talking point**