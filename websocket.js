const socket = new WebSocket('192.168.1.30:4000')
socket.addEventListener('open', (event) => {
  console.log('WebSocket连接已打开');
})

window.addEventListener('keydown', function (e) {
  if (e.code === 'Enter') console.log('aaaa')
  const dataToSend = {
    key1: "value1",
    key2: "value2"
  }
  socket.send(JSON.stringify(dataToSend));
})

socket.addEventListener('message', (event) => {
  const data = JSON.parse(event.data);
  console.log('接收到来自后端的数据:', data);
});