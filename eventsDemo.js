import { EventEmitter } from 'events';

const myEmitter = new EventEmitter(); // 创建一个事件发射器实例

// Create event handlers // 创建事件处理程序
const greetHandler = (name) => {
  console.log('Hello ' + name); // 打印问候语
};

const goodbyeHandler = (name) => {
  console.log('Goodbye ' + name); // 打印告别语
};

// Register event handlers // 注册事件处理程序
myEmitter.on('greet', greetHandler); // 监听greet事件
myEmitter.on('goodbye', goodbyeHandler); // 监听goodbye事件

// Emit events // 触发事件
myEmitter.emit('greet', 'John'); // 触发greet事件，传入参数'John'
myEmitter.emit('goodbye', 'John'); // 触发goodbye事件，传入参数'John'

// Error handling // 错误处理
myEmitter.on('error', (err) => {
  console.error('An error occurred:', err.message); // 打印错误信息
});

// Simulate error // 模拟错误
myEmitter.emit('error', new Error('Something went wrong!')); // 触发error事件，传入一个错误对象
