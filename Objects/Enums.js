var Role;
(function (Role) {
    Role["user"] = "user";
    Role["admin"] = "admin";
})(Role || (Role = {}));
var user1 = {
    name: "Nikhil",
    email: "nikhil@gmail.com",
    password: "Nik12345",
    role: Role.user
};
var user2 = {
    name: "Ayush",
    email: "Ayush@gmail.com",
    password: "Ayu12345",
    role: Role.admin
};
var information = function (user1) {
    if (user1.role === "admin") {
        console.log("".concat(user1.name, " is allow to edit the website because he is admin right now"));
    }
    else {
        console.log("".concat(user1.name, " is not allowed to edit the website hehe siuuu"));
    }
};
information(user1);
