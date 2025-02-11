const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output: process.stdout
})


const todos = [];

const showMenu = () =>{
    console.log("\n📌 To-Do CLI 📌");
    console.log("1. Add a Task :");
    console.log("2. View Task :");
    console.log("3. Exit");
    rl.question("Choose an Option :", handleInput)
}

const handleInput = (Option) =>{
    if(Option === "1"){
        rl.question ("Enter the Task :", (task)=>{
            todos.push(task);
            console.log("Task Added :", task);
            showMenu()
        });
    }

    else if(Option === "2"){
        console.log("\n Your Todo List :");
        if(todos.length === 0){
            console.log("No tasks yet!");
        }
        else{
            todos.forEach((task,index)=>{
                console.log(`${index+1}. ${task}`);
            })
        }
        showMenu();

    }
    else if(Option === "3"){
        console.log("👋 Goodbye!");
        rl.close();
    }
    else{
        console.log("❌ Invalid Option. Please try again.");
        showMenu()
    }

}
showMenu();