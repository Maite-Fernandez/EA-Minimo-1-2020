//Configuration for database connection
export default {
    DB: {
        URI: process.env.MONGODB_URI || 'mongodb://localhost/casesdb',
        USER: process.env.MONGODB_USER,
        PASSWORD: process.env.MONGODB_PASSWORD
    }
}