const fs = require("fs"); // Module for creating and reading files
const readline = require("readline"); // Module for user input
const path = require("path"); // Path module for handling file paths

// Create interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Main menu function
const main = () => {
    console.log("\nChoose an option:");
    console.log("1. Create file");
    console.log("2. Read a file");
    console.log("3. Exit");
    console.log("4. Delate")

    rl.question("Enter your choice (1, 2,3 or 4): ", (choice) => {
        if (choice === "1") {
            createfile();
        } else if (choice === "2") {
            readfile();
        } else if (choice === "3") {
            exitprogram();
        } else if(choice === "4"){
            delatefile();
        } else {
            console.log("❌ Invalid choice! Please enter 1, 2, or 3.");
            main(); // Show the menu again
        }
    });
};

// Function to create a file
const createfile = () => {
    rl.question("Enter the file name (without extension): ", (fileName) => {
        // Convert filename to .txt format
        const filePath = path.join(__dirname, `${fileName}.txt`);

        rl.question("Enter file content: ", (content) => {
            fs.writeFile(filePath, content, (err) => {
                if (err) {
                    console.log("❌ Error creating file:", err);
                } else {
                    console.log(`✅ ${fileName}.txt created successfully!`);
                }
                main(); // Return to menu
            });
        });
    });
};

// Function to read a file
const readfile = () => {
    rl.question("Enter the file name to read (without extension): ", (fileName) => {
        const filePath = path.join(__dirname, `${fileName}.txt`);

        // Check if file exists
        if (!fs.existsSync(filePath)) {
            console.log("❌ File not found!");
            main(); // Return to menu
            return;
        }

        // Read and display file content
        fs.readFile(filePath, "utf-8", (err, data) => {
            if (err) {
                console.error("❌ Error reading file:", err);
            } else {
                console.log(`📄 Content of ${fileName}.txt:\n${data}`);
            }
            main(); // Return to menu
        });
    });
};

// Function to exit the program
const exitprogram = () => {
    console.log("👋 Exiting program...");
    rl.close();
};

const delatefile = () =>{
    rl.question("Enter the file name to delate :", (fileName)=>{
        const filePath = path.join(__dirname, `${fileName}.txt`);

        // check if file exists.
        if(!fs.existsSync(filePath)){
            console.log("❌ File not found !");
            main();
            return;
        }

        // delate file
        fs.unlink(filePath,(err)=>{
            if(err){
                console.log("❌ Error deleting file:", err);
            }
            else{
                console.log(`✅ ${fileName}.txt deleted successfully!`);
            }
            main();
        });
    });
}

// Call main menu function
main();
