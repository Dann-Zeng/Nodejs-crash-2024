// argv
console.log(process.argv); // 打印命令行参数数组，包含 Node.js 进程的完整命令行
console.log(process.arch); // 打印 CPU 架构信息，arch 是字符串不是数组，删除[3]

// process.env
console.log(process.env.LOGNAME); // 打印当前登录用户名

// pid
console.log(process.pid); // 打印当前进程的进程ID

// cwd()
console.log(process.cwd()); // 打印当前工作目录的绝对路径

// title
console.log(process.title); // 打印进程标题

// memoryUsage()
console.log(process.memoryUsage()); // 打印内存使用情况的对象

// uptime()
console.log(process.uptime()); // 打印进程运行时间(秒)，修正拼写错误

process.on('exit', (code) => {
  console.log(`About to exit with code: ${code}`); // 注册进程退出事件处理程序，修正拼写错误wxit->exit
});

// exit()
process.exit(0); // 退出进程，状态码为0表示正常退出
