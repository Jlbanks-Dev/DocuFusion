# DocuFusion
This open-source project allows you to convert images and documents into PDF files using JavaScript.

## Features
- Convert images to PDF
- Merge multiple images into a single PDF

## Installation
Clone the repository and install the dependencies:
```bash
git clone https://github.com/Jlbanks-Dev/DocuFusion
cd DocuFusion
npm install
```

## Usage
1. Open `src/index.html` in your browser.
2. Select images to convert using the file input.
3. Click the "Convert to PDF" button.

## Development
### Prerequisites
- [Node.js](https://nodejs.org/) installed
- [npm](https://www.npmjs.com/) installed

### Running the Project Locally
To run the project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/Jlbanks-Dev/DocuFusion
    cd DocuFusion
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Serve the project:
    ```bash
    npx serve
    ```

4. Open your browser and navigate to `http://localhost:{port}` (the port should be indicated by the serve command).

### Building for Production
To build the project for production, you can use a static server to serve the files:

1. Install a static server (if you don't have one):
    ```bash
    npm install -g serve
    ```

2. Serve the project:
    ```bash
    serve -s .
    ```

## Project Structure
```plaintext
DocuFusion/
├── src/
│   ├── app.js
│   ├── index.html
│   └── styles.css
├── .gitignore
├── LICENSE
├── package-lock.json
├── package.json
├── README.md
└── node_modules/
    ├── (various libraries and their dependencies)
```

## Contributing
### Contribution Guidelines
We welcome contributions! Please follow these guidelines:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

### Code of Conduct
By participating in this project, you agree to abide by the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/).

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
- [jsPDF](https://github.com/parallax/jsPDF)
- [html2canvas](https://github.com/niklasvh/html2canvas)
- [pdf-lib](https://github.com/Hopding/pdf-lib)

## Contact
For any inquiries, please contact [jlbanks.dev@gmail.com](mailto:jlbanks.dev@gmail.com).
