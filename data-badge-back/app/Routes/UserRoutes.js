const User = require("../Models/User.js");

module.exports = app => {
    const customers = require("../Controllers/UserController.js");

    // Create a new User
    app.post("/AddUser", User.create);

    // Retrieve all Users
    app.get("/GellAllUsers", User.getAll);

    // Retrieve a single User with userID
    app.get("/GetUser/:userID", User.findById);

    // Update a user with customerId
    app.put("/UpdateUser/:userId", User.updateById);

    // Delete a user with userID
    app.delete("/DeleteUser/:userId", User.remove);

    // Delete All Users 
    app.delete("/DeleteAllUser", User.removeAll);
};