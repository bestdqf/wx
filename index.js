const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('欢迎使用微信云托管！')
})

app.get('/user', (req, res) => {
  res.send('{name:"dqf"}')
})

const port = process.env.PORT || 80
app.listen(port, () => {
  console.log('服务启动成功，端口：', port)
})
