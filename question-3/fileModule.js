const fs = require('fs');
const path = require('path');

// 1. Remove Log files
function removeLogs() {
    const logsDir = path.join(process.cwd(), 'Logs');

    if (fs.existsSync(logsDir)) {
        const files = fs.readdirSync(logsDir);

        // Remove all the files from the Logs directory
        files.forEach(file => {
            console.log(`Delete files... ${file}`);
            fs.unlinkSync(path.join(logsDir, file));
        });

        // Remove the Logs directory
        fs.rmdirSync(logsDir);
        console.log('Logs directory removed');
    } else {
        console.log('Logs directory does not exist');
    }
}

// 2. Create Log files
function createLogs() {
    const logsDir = path.join(process.cwd(), 'logs');

    // Create a Logs directory if it does not exist
    if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir);
    }

    // Change the current process to the new Logs directory
    process.chdir(logsDir);

    // Create 10 log files and write some text into the file
    for (let i = 1; i <= 9; i++) {
        const fileName = `log${i}.txt`;
        fs.writeFileSync(fileName, `This is log file number ${i}`);
        console.log(`${fileName}`);
    }
}

// Execute the functions
removeLogs();
createLogs();
