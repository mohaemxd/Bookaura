function showForm(formId){
    document.querySelectorAll(".form-box").forEach(form => form.classList.remove("active"));
    document.getElementById(formId).classList.add("active");
}
var users=[
    {
        username: "mohaemxd",
        password: "Mohamednacer2005",
        name: "Mohamed",
    },
]
function signup(){
    var username = document.getElementById('email');
    var password  = document.getElementById('password');
    var name = document.getElementById('name');
    users.push({username : username, password: password, name: name});
}
console.log(users);