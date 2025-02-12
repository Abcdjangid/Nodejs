import https from "https";
import chalk from 'chalk';
import { error } from "console";

const getjoke = () =>{
    const api = "https://official-joke-api.appspot.com/random_joke";
    https.get(api,(response)=>{
        let data = "";
        response.on('data', (chunk)=>{
        data += chunk
        });

        response.on('end', ()=>{
            try{
                const joke = JSON.parse(data);
                console.log("Here is joke :");
                console.log(chalk.red(joke.setup));
                console.log(chalk.blue.bgRed.bold(joke.punchline));
            } 
            catch(error){
                console.error(chalk.red("Error parsing JSON response"));
            }
        }).on("error" , (error)=>{
            console.error(chalk.red("Failed to fetch joke :", error.message))
        })
    })
}

getjoke();