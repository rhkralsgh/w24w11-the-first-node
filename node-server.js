const http = require('http')
//서버한테 보내는게 req 응답하는게 res 
//200은 성공했다는거 ex) 404오류
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' })
  
    const responseData = {
      status: 'success',
      message: '안녕하세요',
    }
    
    res.end(JSON.stringify(responseData))
})

server.listen(3000, () => {
  console.log('서버 실행 (포트: 3000)')
})