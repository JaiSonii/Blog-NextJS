import { MongoClient } from "mongodb";

export default async function handler(req,res){
    const {email,name, message } = req.body;

    if(!email || email.trim()==='' || !email.includes('@') ||
        !name || name.trim() ==='' ||
        !message || message.trim() === ''){
            res.status(422).json({message: 'Invalid details and message'})
            return;
        }
        let client
        const connectionString = `mongodb+srv://${process.env.mongodb_user}:${process.env.mongodb_pass}@${process.env.mongodb_cluster}.dqv2erz.mongodb.net/${process.env.dbName}?retryWrites=true&w=majority`
    try {
        client = await MongoClient.connect(connectionString)
    } catch (error) {
        res.status(401).json({message: 'Failed to connect'});
        return;
    }

    


    const newMessage = {
        email,
        name,
        message
    }

    const db = client.db();
    try {
        const result = await db.collection('messages').insertOne(newMessage);
        newMessage.id = result.insertedId;
    } catch (error) {
        res.status(400).json({message: "Failed to insert"})
    }

    
    res.status(201).json({message : 'Message Sent Successfully'});
}