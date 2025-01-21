# 🦆 DuckyScript Converter v2.0 🚀

This project is a modern web application that converts text input into DuckyScript, a scripting language used with USB Rubber Ducky, a keystroke injection tool. With version 2.0, it now offers a rich set of features to make script creation easier and more efficient.

https://modded-soldier-9.github.io/text2ducky/

## Features 🛠️

- **Dark Mode Support:** Toggle between light and dark themes for comfortable viewing
- **Quick Templates:** Pre-built scripts for common operations:
  - Opening Notepad and typing a message
  - Running ipconfig in CMD
  - Opening URLs (Rickroll example)
  - Custom message templates
- **Smart Text Conversion:** Automatically handles text-to-DuckyScript conversion with punctuation awareness
- **Script Formatting:** Format your scripts with proper delays and comments (Ctrl+B)
- **Command Reference:** Interactive command palette with tooltips for:
  - Basic Commands (STRING, ENTER, DELAY, REM)
  - Special Keys (GUI, ALT, SHIFT, CTRL)
  - Common Combinations (Run dialog, Task Manager, etc.)
- **Character & Line Counter:** Track the length of your input and output
- **Toast Notifications:** Visual feedback for actions
- **Modern UI:** Clean, responsive interface built with Tailwind CSS

## Keyboard Shortcuts ⌨️

- **Ctrl+Enter:** Convert text to DuckyScript
- **Ctrl+B:** Format script
- **Ctrl+K:** Clear all text
- **Ctrl+C:** Copy output (when output is focused)

## How to Use 📝

1. Clone or download this repository to your local machine.
2. Open the `index.html` file in a web browser.
3. Either:
   - Enter text in the input area to convert to DuckyScript
   - Choose a template from the Quick Templates section
   - Write DuckyScript commands directly (they'll be recognized automatically)
4. Use the "Convert" button or Ctrl+Enter to generate the DuckyScript.
5. Optionally format your script with the "Format" button or Ctrl+B.
6. Copy the output using the "Copy Output" button or Ctrl+C.

## Example 📋

Input text:
```
Hello! This is a test. How are you?
```

Output DuckyScript:
```
STRING Hello!
ENTER
STRING This is a test.
ENTER
STRING How are you?
ENTER
```

## Technologies Used 💻

- HTML5
- Tailwind CSS
- JavaScript
- Highlight.js for syntax highlighting

## License 📄

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments 🙏

- Inspired by the need for a modern, user-friendly DuckyScript creation tool
- Built with accessibility and ease of use in mind
