
// 获取在线还是离线模式
let mode1 = ''
const mode = document.querySelectorAll('input')
for (let i = 0; i < mode.length; i++) {
  mode[i].addEventListener('click', function () {
    if (mode[0].checked) mode1 = mode[0].value
    else mode1 = mode[1].value
    // 向LocalStorage中存储值
    localStorage.setItem('mode', mode1)
    // console.log(mode1)
  })
}