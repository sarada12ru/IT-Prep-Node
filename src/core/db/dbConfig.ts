require('dotenv').config();

export const config = {
    dbURI: process.env.dbURI || "mongodb+srv://SARADA:sarada@mydb.lhxr1.mongodb.net/MYDB?retryWrites=true&w=majority"
    // dbURI: "mongodb://localhost:27017/MyDatabase" 
}