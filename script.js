// Template definitions
const templates = {
    notepad: `REM Open Notepad
GUI r
DELAY 500
STRING notepad
ENTER
DELAY 1000
STRING Hello from DuckyScript!
ENTER`,
    ipconfig: `REM Open CMD and run ipconfig
GUI r
DELAY 500
STRING cmd
ENTER
DELAY 1000
STRING ipconfig /all
ENTER`,
    rickroll: `REM Open Rick Roll video
GUI r
DELAY 500
STRING https://www.youtube.com/watch?v=dQw4w9WgXcQ
ENTER`,
    custom: `REM Custom message example
DELAY 1000
STRING Hello, this is a custom message!
ENTER
DELAY 500
STRING How are you today?
ENTER`
};

function formatScript() {
    const input = document.getElementById('inputText');
    const lines = input.value.split('\n');
    
    // Format each line
    const formattedLines = lines
        .map(line => line.trim()) // Remove extra whitespace
        .filter(line => line) // Remove empty lines
        .map(line => {
            // Add standard delays after special commands
            if (line.startsWith('GUI') || line.startsWith('ALT') || line.startsWith('CTRL')) {
                return `${line}\nDELAY 500`;
            }
            // Add comments before string commands if not already a comment
            if (line.startsWith('STRING') && !lines.includes(`REM ${line}`)) {
                return `REM Input text\n${line}`;
            }
            return line;
        });

    input.value = formattedLines.join('\n');
    showToast('Script formatted!');
}

function loadTemplate(type) {
    if (templates[type]) {
        document.getElementById('inputText').value = templates[type];
        showToast('Template loaded!');
    }
}

function toggleTheme() {
    document.documentElement.classList.toggle('dark');
    // Store theme preference
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `fixed bottom-4 right-4 px-6 py-3 rounded-lg transform transition-all duration-300 ${
        type === 'error' ? 'bg-red-500' : 'bg-green-500'
    } text-white`;
    
    // Show toast
    setTimeout(() => {
        toast.classList.add('toast-enter');
    }, 1);

    // Hide toast
    setTimeout(() => {
        toast.classList.remove('toast-enter');
        toast.classList.add('toast-exit');
    }, 3000);
}

function convertToDuckyScript() {
    const inputText = document.getElementById('inputText').value;
    
    if (!inputText.trim()) {
        showToast('Please enter some text first', 'error');
        return;
    }

    // If the input already contains DuckyScript commands, use it as is
    if (inputText.includes('STRING') || inputText.includes('DELAY') || inputText.includes('GUI')) {
        document.getElementById('outputText').value = inputText;
        showToast('Script ready!');
        return;
    }

    // Otherwise, convert normal text to DuckyScript
    const lines = inputText.split('\n').flatMap(line =>
        line.split(/(?<=\.)\s+|(?<=\?)\s+|(?<=!)\s+/)
    );

    const duckyLines = lines.map(line => {
        const trimmedLine = line.trim();
        if (trimmedLine) {
            return `STRING ${trimmedLine}\nENTER`;
        }
        return '';
    }).filter(line => line !== '');

    const duckyScript = duckyLines.join('\n');
    document.getElementById('outputText').value = duckyScript;
    showToast('Conversion complete!');
}

async function copyOutput() {
    const outputText = document.getElementById('outputText').value;
    if (!outputText.trim()) {
        showToast('Nothing to copy', 'error');
        return;
    }
    try {
        await navigator.clipboard.writeText(outputText);
        showToast('Copied to clipboard!');
    } catch (err) {
        showToast('Failed to copy text', 'error');
    }
}

function clearAll() {
    document.getElementById('inputText').value = '';
    document.getElementById('outputText').value = '';
    const previewSection = document.getElementById('previewSection');
    if (previewSection) {
        previewSection.classList.add('hidden');
    }
    showToast('Cleared all text');
}

function updateCounts(inputId, counterId) {
    const element = document.getElementById(inputId);
    const counter = document.getElementById(counterId);
    const text = element.value;
    const charCount = text.length;
    const lineCount = text.split('\n').length;
    counter.textContent = `${charCount} characters, ${lineCount} lines`;
}

function insertCommand(command) {
    const inputText = document.getElementById('inputText');
    const cursorPos = inputText.selectionStart;
    const currentText = inputText.value;
    
    const newText = currentText.slice(0, cursorPos) + command + currentText.slice(cursorPos);
    inputText.value = newText;
    inputText.focus();
    inputText.setSelectionRange(cursorPos + command.length, cursorPos + command.length);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Set up keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey || e.metaKey) {
            switch(e.key.toLowerCase()) {
                case 'enter':
                    e.preventDefault();
                    convertToDuckyScript();
                    break;
                case 'b':
                    e.preventDefault();
                    formatScript();
                    break;
                case 'k':
                    e.preventDefault();
                    clearAll();
                    break;
                case 'c':
                    if (document.activeElement === document.getElementById('outputText')) {
                        e.preventDefault();
                        copyOutput();
                    }
                    break;
            }
        }
    });

    // Set up input listeners for character counting
    ['inputText', 'outputText'].forEach(id => {
        const element = document.getElementById(id);
        element.addEventListener('input', () => {
            updateCounts(id, id + 'Count');
        });
    });

    // Restore theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
    }
});