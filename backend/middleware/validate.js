const validateContact = (req,res,next) =>{
    const {firstName, lastName, email, phone, company} = req.body;
    if (!firstName) return res.status(400).json({error:"First name is required"});
    if (!lastName) return res.status(400).json({error:"Last name is required"});
    if (!email) return res.status(400).json({error:"Email is required"});
    if (!phone) return res.status(400).json({error:"Phone number is required"});
    if (!company) return res.status(400).json({error:"Company name is required"});

    if (!email.includes('@') || !email.includes('.')) {
    return res.status(400).json({ error: 'Invalid email format' });
}
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    if (!phoneRegex.test(phone)) return res.status(400).json({ error: 'Invalid phone format. Use XXX-XXX-XXXX' });
    next();
};

const validateUpdate = (req,res,next) => {
    const {email} = req.body;
    if (Object.keys(req.body).length === 0){
        return res.status(400).json({error:"No update value inputted"});
    }
    if (!email.includes('@') || !email.includes('.')) {
    return res.status(400).json({ error: 'Invalid email format' });
}
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    if (!phoneRegex.test(phone)) return res.status(400).json({ error: 'Invalid phone format. Use XXX-XXX-XXXX' });
    next();
};

export {validateContact, validateUpdate}