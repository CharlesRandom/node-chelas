const http = require('http')

const server = http.createServer((request, response)=>{
  console.log(request.url)
  switch(request.url){
    case "/perro":
      response.write('Saca las chelas perro')
      break;

    case "/chela":
      response.write('Saca las chelas bien pinches muertas')
      break;
    case "/hola":
      response.write('Saca las chelas y las alas')
      break;
    default:
      response.write('Saca las chelas')
      break;
  }
  response.end()
})

server.listen(3000)