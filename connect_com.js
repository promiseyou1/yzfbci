
window.addEventListener('keydown', function (e) {
  if (e.code === 'Enter') window.location.href = "ciji.html"
})

// 检查浏览器是否支持 WebSerial API
async function serial() {
  if ('serial' in navigator) {
    console.log('浏览器支持WebSerial API')
    try {
      // 请求串口访问
      const port = await navigator.serial.requestPort()// 提示用户选择一个串口
      await port.open({
        // dataBits: 8, // 数据位
        // stopBits: 1, // 停止位
        // parity: "none", // 奇偶校验
        baudRate: 9600
      });
      console.log('串口连接成功', port)
      const writer = port.writable.getWriter()
      setInterval(async () => {
        const commandframe = new Uint8Array([
          0x00,
          0x01 /*...some bytes to be sent*/,
        ]);
        await writer.write(commandframe)
      }, 1000)


    } catch (err) {
      console.error('无法连接串口:', err);
    }

  }
  else {
    console.error('浏览器不支持WebSerial API')
  }
}


// 发送数据
async function sendToSerial(data) {
  const writer = port.writable.getWriter();
  const encoder = new TextEncoder();
  await writer.write(encoder.encode(data));
  // const textEncoder = new TextEncoderStream();
  // const writableStreamClosed = textEncoder.readable.pipeTo(port.writable);
  // const writer = textEncoder.writable.getWriter();
  // await writer.write(data);
  writer.releaseLock();
}

// 接收数据
async function readFromSerial() {
  const reader = port.readable.getReader();
  let result = '';
  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    result += new TextDecoder().decode(value);
  }
  reader.releaseLock();
  return result;
}

// 关闭连接
async function closeSerialConnection() {
  await port.close();
}