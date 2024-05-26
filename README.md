# 🦆 DuckyScript Converter 🚀

This project is a simple web application that converts text input into DuckyScript, a scripting language used with USB Rubber Ducky, a keystroke injection tool. The tool splits input text into lines and handles splitting by punctuation, then formats it into DuckyScript commands.

## Features 🛠️

- **Text Input:** Enter the text you want to convert into the provided text area.
- **Conversion:** Click on the "Convert" button to transform the input text into DuckyScript.
- **Copy to Clipboard:** After conversion, you can easily copy the generated DuckyScript to your clipboard with the "Copy Converted Text" button.

## How to Use 📝

1. Clone or download this repository to your local machine.
2. Open the `index.html` file in a web browser.
3. Enter the text you want to convert into the input text area.
4. Click on the "Convert" button to generate the DuckyScript.
5. Use the "Copy Converted Text" button to copy the DuckyScript to your clipboard for use with USB Rubber Ducky.

## Example 📋

Suppose you have the following text input:

```
Hello! This is a test. How are you?
```

After clicking the "Convert" button, the output will be:

```
STRING Hello!
ENTER
ENTER
STRING This is a test.
ENTER
ENTER
STRING How are you?
ENTER
ENTER
```

## Technologies Used 💻

- HTML
- CSS
- JavaScript

## License 📄

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments 🙏

- This project was inspired by the need to quickly convert text into DuckyScript for use with USB Rubber Ducky.
