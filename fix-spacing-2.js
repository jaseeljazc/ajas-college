const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    if (fs.statSync(dirPath).isDirectory()) {
      walkDir(dirPath, callback);
    } else if (dirPath.endsWith('.tsx')) {
      callback(path.join(dir, f));
    }
  });
}

const dirs = [path.join(__dirname, 'app'), path.join(__dirname, 'components')];
dirs.forEach(dir => {
  if (!fs.existsSync(dir)) return;
  walkDir(dir, (filePath) => {
    let content = fs.readFileSync(filePath, 'utf8');
    let orig = content;
    
    // Fix messed up classes
    content = content.replace(/py-16 md:py-16 md:py-24 lg:py-32/g, 'py-16 lg:py-32'); 
    content = content.replace(/py-16 md:py-16 md:py-24/g, 'py-16 md:py-24');
    
    // Fix isolated py-32
    content = content.replace(/(className="[^"]*?\b)py-32(\b[^"]*?")/g, '$1py-16 md:py-24 lg:py-32$2');

    // Clean up duplicates if any
    content = content.replace(/py-16 md:py-24 lg:py-32 lg:py-32/g, 'py-16 md:py-24 lg:py-32');

    if (content !== orig) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Fixed ' + filePath);
    }
  });
});
