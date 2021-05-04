# Requirements
- NodeJS v14
- MySQL

# Installation

### Project
1. Clone a project from the repository
2. Go to the folder and run `npm install`
3. Copy `.env.example` file and rename it to `.env`
4. Change `DB_USER` property  and other settings if needed
4. Run `npm start` to start the project

### MySQL
1. Install MySQL
2. Make sure you MySQL is running on port 3306
3. Create an empty database. Use db name from `.env` file
4. Run `npm run migrate` to up a database structure
5. Run `npm run seed` to migrate base data

