const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, '..', 'build', 'static', 'js');
const files = fs.readdirSync(buildDir);

// JavaScriptファイルをフィルタリングして、目的のファイルを見つけます
const mainJsFile = files.find(file => file.endsWith('.js'));

if (mainJsFile) {
    // ファイルをコピーして名前変更します
    const sourcePath = path.join(buildDir, mainJsFile);
    const destPathCreate = path.join(buildDir, 'enqueteCreate.bundle.js');
    const destPathResult = path.join(buildDir, 'enqueteResult.bundle.js');

    fs.copyFileSync(sourcePath, destPathCreate);
    fs.copyFileSync(sourcePath, destPathResult);

    console.log('Bundles copied and renamed successfully.');
} else {
    console.error('JavaScript bundle not found.');
}
