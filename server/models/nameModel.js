const mongoose = require('mongoose'); 
const { Schema } = mongoose; 

const myURI = "mongodb+srv://Kevin:Pass@cluster0.nizlbdn.mongodb.net/?retryWrites=true&w=majority";

// const URI = process.env.MONGO_URI || myURI; 

mongoose.connect(myURI);
mongoose.connection.once('open', () => console.log('Database connected...'));

const nameSchema = new Schema({
    name: {
        type: String, 
        required: true
    }
}); 

module.exports = mongoose.model('Name', nameSchema); 



