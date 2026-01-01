# QR Code Generator

A simple Node.js command-line application that generates QR codes from URLs.

## Description

This project allows users to input a URL through an interactive command-line prompt and automatically generates a QR code image (`qr_img.png`) and saves the URL to a text file (`URL.txt`) for future reference.

## Features

- ✨ Interactive CLI prompt for user input
- 🎯 Converts any URL into a QR code image
- 💾 Saves the URL to a text file for record-keeping
- 🚀 Simple and lightweight implementation

## Technologies Used

- **Node.js** - Runtime environment
- **inquirer** - Interactive command-line prompts
- **qr-image** - QR code generation
- **fs** - File system operations for saving files

## Installation

1. Clone or download this project
2. Navigate to the project directory:
   ```bash
   cd QR\ Code\ Project
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

Run the application with:
```bash
node index.js
```

Then follow the prompt:
1. Enter the URL you want to convert into a QR code
2. The application will generate `qr_img.png` with the QR code
3. Your URL will be saved in `URL.txt`

### Example

```
? Enter the URL to generate a QR code: https://sanketkumarkar.netlify.app
The file has been saved!
```

## Output Files

- **qr_img.png** - Generated QR code image in PNG format
- **URL.txt** - Text file containing the entered URL

## How It Works

1. The `inquirer` package prompts the user for a URL
2. The `qr-image` package converts the URL into a QR code
3. The QR code is saved as an image file using the Node.js `fs` module
4. The original URL is also saved to a text file for reference

## Project Structure

```
QR Code Project/
├── index.js          # Main application file
├── package.json      # Project dependencies and metadata
├── URL.txt           # Sample URL reference
├── README.md         # This file
└── qr_img.png        # Generated QR code (created after running)
```

## License

ISC

## Author

Created as a learning project for Node.js and npm package usage.
# QR-Generator
