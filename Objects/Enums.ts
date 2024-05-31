
enum Role {
    user = "user",
    admin = "admin",
}

type User = {
    name: string;
    email: string;
    password: string;
    role : Role;
}

const user1 : User ={
    name : "Nikhil",
    email : "nikhil@gmail.com",
    password : "Nik12345",
    role : Role.user
}


const user2 : User ={
    name : "Ayush",
    email : "Ayush@gmail.com",
    password : "Ayu12345",
    role : Role.admin
}

const information: (user1: User) => void = (user1:User):void => {
    if(user1.role==="admin"){
        console.log(`${user1.name} is allow to edit the website because he is admin right now`);
        
    }else{
        console.log(`${user1.name} is not allowed to edit the website hehe siuuu`);
        
    }
}

information(user1)


