import {contacts , uuidv4} from "../storage/contacts.js";

const getAllContacts = (req,res) =>{
    try {
        const {company} = req.query;
        if (company) {
            const filteredContacts = contacts.filter(c => c.company.toLowerCase() === company.toLowerCase());
            if (filteredContacts.length === 0) return res.status(404).json({error:'No contacts with that company name is found'});
            res.json(filteredContacts);
        } else{
            res.json(contacts);
        }
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}

const getContactById = (req,res) => {
    try {
        const contact = contacts.find(c => c.id === req.params.id);
        if(!contact) return res.status(404).json({error:"Contact not found"});
        res.json(contact)
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}

const createContact = (req,res) => {
    try {
        const {firstName, lastName, email, phone, company} = req.body;
        const newContact = {
            id: uuidv4(),
            firstName,
            lastName,
            email,
            phone,
            company,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        contacts.push(newContact)
        res.status(201).json(newContact);
    } catch (error) {
        res.status(500).json({ error:"Internal server error"});
    }
}

const updateContact = (req,res) => {
    try {
        const index = contacts.findIndex(c => c.id === req.params.id);
        if (index === -1) return res.status(404).json({ error: "Contact not found" });
        contacts[index] = {...contacts[index], ...req.body,updatedAt: new Date()}
        res.json(contacts[index])
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}

const deleteContact =  (req,res) => {
    try {
        const index = contacts.findIndex(c => c.id === req.params.id);
        if (index === -1) return res.status(404).json({ error: "Contact not found" });
        contacts.splice(index,1)
        res.status(200).json({ message: "Contact deleted successfully"} );
    } catch (error) {
        res.status(500).json({ error: "Internal server error"});
    }
}

export {getAllContacts, getContactById, createContact, updateContact, deleteContact};