// simple file creation applicatoin .


import readline from "readline"
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

// define __dirname
const __dirname = path.dirname(fileURLToPath(import.meta.url))

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const fileCreation = () => {
    rl.question("Enter the file Name :", (fileName) => {
        rl.question(`Enter the content for ${fileName} :`, (content) => {
            const filePath = path.join(__dirname, `${fileName}.txt`);

            fs.writeFile(filePath, content, (err) => {
                if (err) {
                    console.error(`Error while writing the file :, ${err.message}`)
                } else {
                    console.log(`file ${fileName}.txt Created successfully !`)
                }
                rl.close();
            })
        })
    })
}
fileCreation();