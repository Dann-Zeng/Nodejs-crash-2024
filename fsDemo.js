// import fs from 'fs';
import fs from 'fs/promises';

// readFile() - callback
// fs.readFile('./test.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// readFFileSync() - Synchronous version
// const data = fs.readFileSync('./test.txt', 'utf');
// console.log(data);

// readFile() -- Promise .then()
// fs.readFile('./test.txt', 'utf8')
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// readFile() --- async/await
const readFile = async () => {
  try {
    const data = await fs.readFile('./test.txt', 'utf-8');
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const writeFile = async () => {
  try {
    await fs.writeFile('./test.txt', 'Hello, Im nanapig a die pig');
    console.log('Fiel written to...');
  } catch (error) {
    console.log(error);
  }
};

// appenFile()
const appendFile = async () => {
  try {
    await fs.appendFile(
      './test.txt',
      '\nIm nanapigs loverboy and im her boyfriend'
    );
    console.log('File appended to ...');
  } catch (error) {
    console.log(error);
  }
};

writeFile();
appendFile();
readFile();
