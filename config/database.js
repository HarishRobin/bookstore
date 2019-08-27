const mongo=require('mongoose');
const config=require('config');
const dbURI=config.get('mongoURI');

const connectDB = async() => {
    try{
        await mongo.connect(dbURI,{useNewUrlParser:true});
        console.log("MongoDB Connected..");
    }
    catch(err)
    {
        console.error(err);
        process.exit(1);
    }
};

module.exports = connectDB;