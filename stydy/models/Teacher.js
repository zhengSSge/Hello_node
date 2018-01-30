var User = require('./User');

function Teacher(id, name, age) {
    // this = Teacher继承User
    User.apply(this, [id, name, age]);

    this.teach = function (res) {
        res.write(this.name + "老师讲课");
    }
}

module.exports = Teacher;