const fs = require('fs');

const src = './';
const dest = './dist/';
const files = ['LICENSE', 'package.json', 'Readme.md'];

// increment version number
const packageFile = src + 'package.json';
const pC = fs.readFileSync(packageFile, 'ascii');

var re = /"version": "\d.\d.\d"/g;
const res = pC.match(re);
if (res.length === 1) {
    const vStr = res[0];
    const x = vStr.match(/\d.\d.\d/g)[0];
    const nA = x.split('.');
    const nL = nA[nA.length-1];
    let dNL = parseFloat(nL);
    // console.log("TCL: dNL", dNL)
    dNL++;
    nA[nA.length-1] = dNL.toString();
    const y = nA.join('.');
    // console.log("TCL: y", y)
    const vNStr = vStr.replace(x, y);
    const newFileContent = pC.replace(vStr, vNStr);
    // console.log("TCL: newFileContent", newFileContent)
    
    fs.writeFileSync(packageFile, newFileContent, 'ascii');
}

files.forEach(file => {
    fs.copyFileSync(src + file, dest + file);
})