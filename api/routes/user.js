var user_model = require('../app/db/model/user.js');

module.exports = function (app, socket) {

    app.get('/get-current-user', function (req, res) {
        var user_id = req.param('user_id');
        //user_model.User.findOne({

        //})

    })

};