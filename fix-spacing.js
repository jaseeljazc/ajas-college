const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else if (dirPath.endsWith('.tsx')) {
      callback(path.join(dir, f));
    }
  });
}

function processFiles() {
  const dirs = [path.join(__dirname, 'app'), path.join(__dirname, 'components')];
  let updatedFiles = 0;

  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) return;
    
    walkDir(dir, (filePath) => {
      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;

      // 1. Vertical paddings (sections)
      content = content.replace(/(className="[^"]*?\b)py-24 lg:py-32(\b[^"]*?")/g, '$1py-16 md:py-24 lg:py-32$2');
      content = content.replace(/(className="[^"]*?\b)py-24(\b[^"]*?")/g, (match, p1, p2) => {
         if (p1.includes('md:py-24') || p1.includes('lg:py-24')) return match; // Already responsive
         return `${p1}py-16 md:py-24${p2}`;
      });

      // 2. Gaps
      content = content.replace(/(className="[^"]*?\b)gap-16(\b[^"]*?")/g, (match, p1, p2) => {
         if (match.includes('md:gap-') || match.includes('lg:gap-')) return match;
         return `${p1}gap-8 lg:gap-16${p2}`;
      });
      content = content.replace(/(className="[^"]*?\b)gap-12(\b[^"]*?")/g, (match, p1, p2) => {
         if (match.includes('md:gap-') || match.includes('lg:gap-')) return match;
         return `${p1}gap-6 lg:gap-12${p2}`;
      });
      
      // 3. Section inner padding (px-6 md:px-16 lg:px-24 -> standard container px-6)
      // Usually px-6 is enough for mobile.

      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated: ${filePath}`);
        updatedFiles++;
      }
    });
  });

  console.log(`Done. Updated ${updatedFiles} files.`);
}

processFiles();
