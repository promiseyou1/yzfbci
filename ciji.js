
// 获取页面刺激快
const stimulus1 = document.querySelector("#stimulus1")
const stimulus2 = document.querySelector("#stimulus2")
const stimulus3 = document.querySelector("#stimulus3")
const stimulus4 = document.querySelector("#stimulus4")

const flickerInterval = [10, 12, 14, 16] // 闪烁频率
const yellows = ['s1', 's2', 's3', 's4'] // 黄色框框

// 刺激快 闪烁
function toggleStimulus(stim) {
  stim.style.backgroundColor = stim.style.backgroundColor === "transparent" ? "#FFF" : "transparent"
}

// 刺激呈现
function ciji() {
  const tishi = document.createElement('div')   // 创建 ‘+’ 用来提升注意力
  const s = Math.floor(Math.random() * yellows.length)
  const ye = this.document.querySelector(`#${yellows[s]}`)
  ye.classList.add('active')

  this.setTimeout(() => {
    tishi.className = 'active2'
    tishi.innerHTML = '+'
    ye.classList.remove('active')

    const stimulus = this.document.querySelector(`#stimulu${yellows[s]}`)
    stimulus.appendChild(tishi)
    const flickerid = setInterval(() => { toggleStimulus(stimulus) }, 1000 / flickerInterval[s])
    yellows.splice(s, 1)
    setTimeout(() => {
      clearInterval(flickerid);
      stimulus.removeChild(tishi)
    }, 2000)
  }, 2000)
}

// 开始闪烁
// setTimeout(ciji, 2000)
// setTimeout(() => {
//   ciji()
//   setInterval(() => {
//     console.log('222')
//     ciji()
//   }, 5000)
//   console.log('111')
// }, 7000)

window.addEventListener('keydown', function (e) {
  if (e.code === 'Space') {
    ciji()
    setInterval(ciji, 5000)
  }
})


// setInterval(() => { toggleStimulus(stimulus1) }, flickerInterval[0])
// setInterval(() => { toggleStimulus(stimulus2) }, flickerInterval[1])
// setInterval(() => { toggleStimulus(stimulus3) }, flickerInterval[2])
// setInterval(() => { toggleStimulus(stimulus4) }, flickerInterval[3])


const dataToSend = {
  flickerInterval1: 1000 / 10,
  flickerInterval2: 1000 / 11,
  flickerInterval3: 1000 / 12,
  flickerInterval4: 1000 / 13
}

//  打开WebSocket通讯
const socket = new WebSocket('ws://localhost:8765')

if (!socket) console.log("浏览器不支持websocket协议！")

// 打开websocket
socket.addEventListener('open', (event) => {
  console.log('WebSocket连接已打开')
  socket.send(JSON.stringify(dataToSend));
});

// 按下Enter键发送数据
window.addEventListener('keydown', function (e) {
  // if (e.code === 'Enter') socket.send(JSON.stringify(dataToSend));
  if (e.code === 'KeyQ') socket.close(); // 关闭WebSocket连接
})

// 接受后端的数据 返回给前端
// socket.addEventListener('message', (event) => {
//   const data = JSON.parse(event.data);
//   console.log('接收到来自后端的数据:', data);
// });

// 监听websocket通讯是否关闭
socket.addEventListener('close', (event) => {
  console.log('WebSocket连接已关闭')
})

// 获取在线还是离线模式
const mode = localStorage.getItem('mode') // 从LocalStorage中获取值
console.log(mode)
localStorage.removeItem('mode') // 删除数据
localStorage.clear() // 清空所有数据