module.exports = {

    // Show user by id
    show(req, res) {
        res.send('ดูข้อมูลผู้ใช้งาน ' + req.params.userId + ' : ' + JSON.stringify(req.body));
    },
    
    // Get all users
    index(req, res) {
        res.send('ดูข้อมูลผู้ใช้งาน');
    },

    // Create user
    create(req, res) {
        res.send('ทำการสร้างผู้ใช้งาน' + JSON.stringify(req.body));
    },

    // Edit user
    put(req, res) {
        res.send('แก้ไขข้อมูลผู้ใช้ ' + req.params.userId + ' : ' + JSON.stringify(req.body.name));
    },

    // Delete user
    delete(req, res) {
        res.send('ทำการลบผู้ใช้งาน:' + req.params.userId + ' : ' + JSON.stringify(req.body));
    }

};

