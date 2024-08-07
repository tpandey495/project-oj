const path=require('path');
const fs=require('fs').promises;

exports.createFile=async(directory,file,ext)=>{
     await fs.mkdir(directory, { recursive: true });
    const fileName = file +ext;
    const filePath = path.join(directory, fileName);
    return filePath
}