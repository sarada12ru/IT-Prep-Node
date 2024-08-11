require('dotenv').config();

export const config = {
    dbURI: process.env.dbURI || "mongodb+srv://SARADA:sarada@mydb.fvytdj2.mongodb.net/?retryWrites=true&w=majority&appName=MyDB"
}