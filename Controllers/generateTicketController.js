const {sql} = require('../DB/dbConnection')


//Route => http://localhost:5000/ticket/create
module.exports.generateTicket = async (req , res) =>{
    try {
        // let mailOptions = {
        //     "mailId": Date.now(),
        //     "from": "rakeshpk97@gmail.com",
        //     "subject": "testing1",
        //     "body": "Hello World101"
        // };
        // const { mailId, from, subject, body } = mailOptions;
        console.log(req.body)
        const { messageId  , from , subject, body  , formData} = req.body;
        console.log('formdata' , formData)
        const {categoryId , subcategoryId , description} = req.body.formData
        // Use parameterized query to prevent SQL injection
        const result = await sql.query`
            INSERT INTO tkt_Incident
            (messageid ,    categoryId ,  subcategoryId,     description,        from_address, subject, bodyhtml , bodyplain , insertedOn , createdBy)
    VALUES(${messageId},   ${categoryId},${subcategoryId}, ${description}, ${from}, ${subject} ,${bodyhtml} , ${bodyplain} ,${insertedOn} , ${formData.name})
        `;

        res.status(200).json({ message: `Ticket generated successfully with id ${messageId}` });
    } catch (error) {
        console.error('Error generating ticket:', error);
        res.status(500).json({ error: 'Internal server error' });
    }

}

//Route =>  /ticket/alltickets
module.exports.getAllTickets = async (req , res) =>{
    try {
        const result = await sql.query`
        SELECT * from ticket
    `;
    res.status(200).send(result.recordset)
    }
    catch(error){
        console.error('Error fetching all ticket:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}


module.exports.findTicket = async (req , res) =>{
    try {
    
    let messageId = req.params.id 
    messageId = messageId.toString()
        const result = await sql.query`
       SELECT * from tkt_Incident
       where messageId = ${messageId}
    `;
    console.log(result)

   res.status(200).send(result.recordset)
    }
    catch(error){
        console.error('Error fetching a ticket:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}