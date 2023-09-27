const { User } = require('../models')

module.exports = {

    // Get all users
    async index(req, res) {
        try {
            const users = await User.findAll()
            res.send(users)
        } catch (err) {
            res.status(500).send({
                error: 'The users information was incorrect'
            })
        }
    },
    // Create user
    // res.send('ทำการสร้างผู้ใช้งาน' + JSON.stringify(req.body));
    async create(req, res) {
        try {
            const user = await User.create(req.body)
            res.send(user.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create user incorrect'
            })
        }
    },

    // Edit user
    // res.send('แก้ไขข้อมูลผู้ใช้ ' + req.params.userId + ' : ' + JSON.stringify(req.body.name));
    async put(req, res) {
        try {
            await User.update(req.body, {
                where: {
                    id: req.params.userId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update user incorrect'
            })
        }
    },

    // Delete user
    // res.send('ทำการลบผู้ใช้งาน:' + req.params.userId + ' : ' + JSON.stringify(req.body));
    // delete user
    async remove(req, res) {
        try {
            const user = await User.findOne({
                where: {
                    id: req.params.userId
                }
            })
            if (!user) {
                return res.status(403).send({
                    error: 'The user information was incorrect'
                })
            }
            await user.destroy()
            res.send(user)
        } catch (err) {
            res.status(500).send({
                error: 'The user information was incorrect'
            })
        }
    },

    // Show user by id
    async show(req, res) {
        try {
            const user = await User.findByPk(req.params.userId)
            res.send(user)
        } catch (err) {
            res.status(500).send({
                error: 'The user information was incorrect'
            })
        }
    }
}


