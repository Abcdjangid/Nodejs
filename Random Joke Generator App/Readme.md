# Random Joke Generator

A simple **Node.js** application that fetches and displays a random joke from an API using the `https` module and styles output using `chalk`.

## Features
✅ Fetches a random joke from an API \
✅ Displays the joke in colored text using `chalk` \
✅ Uses `https` for API requests \
✅ Supports ES Modules 

## Prerequisites
- **Node.js** (v14+ recommended)
- **NPM** (comes with Node.js)

## Installation
1. **Clone the repository**
   ```sh
   git clone <repository-url>
   cd Random-Joke-Generator
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```

## Usage
Run the application with the following command:
```sh
node joke.js
```

## File Structure
```
Random-Joke-Generator/
│── joke.js              # Main application file
│── package.json         # Project metadata and dependencies
│── package-lock.json    # Lock file for dependencies
│── .gitignore           # Ignoring node_modules and other files
│── README.md            # Project documentation
```

## Example Output
```
Here is a joke:
Why don't programmers like nature?
It has too many bugs.
```

## Additional Notes
- Ensure `node_modules/` is ignored using `.gitignore`.
- The joke API used: [Official Joke API](https://official-joke-api.appspot.com/random_joke)

