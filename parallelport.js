import parallelport from 'parallelport';

const port = new parallelport('/dev/parport0'); // 根据你的系统和配置，端口名称可能会有所不同
// const port = parallel.open()

const status = port.getStatus();
console.log("并口设备状态：" + status)
// 发送数据到并口
port.write(0x55, (err) => {
  if (err) {
    console.error('Error writing to parallel port:', err);
  } else {
    console.log('Data sent to parallel port');
  }

  // 关闭并口连接
  port.close();
});
