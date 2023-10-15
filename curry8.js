let socket = ''

async function connectToCURRY8() {
  try {
    socket = new WebSocket('ws://:PORT');
    socket.addEventListener('open', (event) => {
      console.log('已连接到CURRY8');
    });
    socket.addEventListener('message', (event) => {
      console.log('收到消息:', event.data);
      // 在这里处理从 CURRY8 接收到的数据
    });
  } catch (err) {
    console.error('无法连接到CURRY8:', err);
  }
}

function sendToCURRY8(data) {
  if (socket.readyState === WebSocket.OPEN) {
    socket.send(data);
    console.log('已发送数据:', data);
  } else {
    console.error('未连接到CURRY8');
  }
}

function closeConnection() {
  if (socket) {
    socket.close();
  }
}

// let port = ''
// async function connectToSerial() {
//   try {
//     port = await navigator.serial.requestPort();
//     await port.open({ baudRate: 9600 });

//     // 假设需要发送一个获取数据的命令
//     await sendToSerial('GET_DATA\r\n');
//   } catch (err) {
//     console.error('无法连接到串口:', err);
//   }
// }

// async function sendToSerial(data) {
//   const writer = port.writable.getWriter();
//   const encoder = new TextEncoder();
//   await writer.write(encoder.encode(data));
//   writer.releaseLock();
// }

// async function readFromSerial() {
//   const reader = port.readable.getReader();
//   let result = '';
//   while (true) {
//     const { value, done } = await reader.read();
//     if (done) break;
//     result += new TextDecoder().decode(value);
//     // 假设数据以换行符结束
//     if (result.includes('\n')) {
//       break;
//     }
//   }
//   reader.releaseLock();
//   return result.trim(); // 去掉末尾的换行符和空格
// }

// async function closeSerialConnection() {
//   await port.close();
// }
