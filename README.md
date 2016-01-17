[<img src="https://raw.githubusercontent.com/rannn505/wave.io/master/assets/wave.io.png">](https://github.com/rannn505/wave.io)<br/>
The Node.JS server-side module to interact with [wave.io](https://github.com/rannn505/wave.io)<br/>
[![Version npm](https://img.shields.io/npm/v/wave.io-server.svg?style=flat-square)](https://www.npmjs.com/package/wave.io-server)[![NPM Downloads](https://img.shields.io/npm/dt/wave.io-server.svg?style=flat-square)](https://www.npmjs.com/package/wave.io-server)[![Dependencies](https://img.shields.io/david/rannn505/wave.io-nodejs.svg?style=flat-square)](https://david-dm.org/rannn505/wave.io-nodejs)

## Installation
- NPM:
```bash
$ npm install wave.io-server
```
- bower:
```bash
bower install wave.io-server
```

## Quick start

At the Client: (using [wave.io](https://github.com/rannn505/wave.io))
```javascript
<script src="/wave.io/wave.io.min.js"></script>
<script>
    http.seturl("localhost:8080");   
    http.post("/postest",{wave:"Is Awesome"},function(data){
        console.log(data);
    });
</script>
```
At yor Node server: (using [wave.io-nodejs](https://github.com/rannn505/wave.io-nodejs)) 
```javascript
var http = require('http');
var server = http.createServer(function(req, res){ }).listen(8080);
var router = require('wave.io-server')(server);
router.post('/postest',function(req,res){
    console.log(req.data);
    res.send('Ya I Know');
});
```
The flow of this example:<br/>
<img src="https://raw.githubusercontent.com/rannn505/wave.io-nodejs/master/assets/wave.io-sequence-example.png">

## Contribute

If you wanna contribute to wave, You can help with server side module like [wave.io-nodejs](https://github.com/rannn505/wave.io-nodejs),
which implements the principles from [here](https://github.com/rannn505/wave.io#Principals), for other languages like (C#, Java, PHP, Ruby, Python, Perl).<br/>
Your more then welcome to email me any time <Rannn505@outlook.com>

## Credits

wave.io-nodejs using the awesome [ws](https://github.com/websockets/ws) of Einar Otto Stangvik.

Don't forget a Star :)
[![GitHub Star](https://img.shields.io/github/stars/rannn505/wave.io-nodejs.svg?style=social&label=Star)](https://github.com/rannn505/wave.io-nodejs)


## License

  [MIT](LICENSE)

