const fs = require('fs');
const path = require('path');

const pageTsxPath = path.join(__dirname, 'app', 'page.tsx');
let content = fs.readFileSync(pageTsxPath, 'utf8');

content = content.replace(/py-16 lg:py-16 md:py-24 lg:py-32/g, 'py-16 md:py-24 lg:py-32');

fs.writeFileSync(pageTsxPath, content, 'utf8');
console.log('Fixed page.tsx');
