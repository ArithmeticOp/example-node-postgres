const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: '0.tcp.ngrok.io',
    database: 'api',
    password: 'password',
    port: 13905,
})

const getUsers = async (req, res, next) => {
    let users = await pool.query('SELECT * FROM users ORDER BY id ASC')
    res.send(users.rows)
}

const getUserById = async (req, res, next) => {
    let id = req.query.id || req.params.id
    let users = await pool.query(`SELECT * FROM users WHERE id = ${id} ORDER BY id ASC`)
    res.send(users.rows)
}

const updateUser = async (req, res, next) => {
    let id = req.query.id || req.params.id
    let name = req.query.name || req.params.name
    let email = req.query.email || req.params.email
    let user = await pool.query(`UPDATE users SET name = '${name}', email = '${email}' WHERE id = ${id} RETURNING *;`)
    res.send(user.rows)
}

const createUser = async (req, res, next) => {
    let name = req.query.name || req.params.name
    let email = req.query.email || req.params.email
    let user = await pool.query(`INSERT INTO users (name, email) VALUES ('${name}', '${email}') RETURNING *;`)
    res.send(user.rows)
}

const deleteUser = async (req, res, next) => {
    let id = req.query.id || req.params.id
    let user = await pool.query(`DELETE FROM users WHERE id = ${id} RETURNING *;`)
    res.send(user.rows)
}

module.exports = {
    getUsers,
    getUserById,
    updateUser,
    createUser,
    deleteUser
}