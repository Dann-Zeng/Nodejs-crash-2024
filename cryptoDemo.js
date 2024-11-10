import crypto from 'crypto';

// createHash()
// const hash = crypto.createHash('sha256');
// hash.update('password1234');
// console.log(hash.digest('hex'));

// // randomBytes()
// crypto.randomBytes(16, (err, buf) => {
//   if (err) throw err;
//   console.log(buf.toString('hex'));
// });

// createCipheriv & createDecipheriv
const algorithm = 'aes-256-cbc'; // 定义加密算法
const key = crypto.randomBytes(32); // 生成32字节的随机密钥
const iv = crypto.randomBytes(16); // 生成16字节的初始化向量

// Encrypt the message
const cipher = crypto.createCipheriv(algorithm, key, iv); // 创建加密器实例
let encrypted = cipher.update('Hello, this is a secret message', 'utf8', 'hex'); // 加密消息内容
encrypted += cipher.final('hex'); // 完成加密过程
console.log('Encrypted:', encrypted); // 输出加密后的内容

// Decrypt the message
const decipher = crypto.createDecipheriv(algorithm, key, iv); // 创建解密器实例
let decrypted = decipher.update(encrypted, 'hex', 'utf8'); // 解密加密的内容
decrypted += decipher.final('utf8'); // 完成解密过程
console.log('Decrypted:', decrypted); // 输出解密后的内容
