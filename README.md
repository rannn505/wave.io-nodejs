[<img height="50" width="50" src="https://raw.githubusercontent.com/rannn505/wave.io/master/assets/wave.io.png">](http://google.com)
<p> The Node.JS server-side module to interact with [wave.io](https://github.com/rannn505/wave.io) </p>
[![Version npm](https://img.shields.io/npm/v/wave.io.svg?style=flat-square)](https://www.npmjs.com/package/wave.io)[![NPM Downloads](https://img.shields.io/npm/dt/wave.io.svg?style=flat-square)](https://www.npmjs.com/package/wave.io)[![Dependencies](https://img.shields.io/david/rannn505/wave.io.svg?style=flat-square)](https://david-dm.org/rannn505/wave.io)

## Installation

```bash
$ npm install wave.io-server
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
The flow of this example:
```sequence
Client->Server: Lets open a WebSocket connection
Server->Client: Ok, its open now!
Client->Server: { method: 'POST', uri: '/postest', data: {wave:"Is Awesome"}, reswaiter: true }
Note left of Server: The callback has called and the `req arg` has all this data
Server->Client: { method: 'POST', uri: '/postest', data: 'Ya I Know'} via the `res.send function`
Note right of Client: The callback has called and the `data arg` has all this data
```

## Contribute

If you wanna contribute to wave, You can help with server side module like [wave.io-nodejs](https://github.com/rannn505/wave.io-nodejs),
which implements the principles from [here](https://github.com/rannn505/wave.io#Principals), for other languages like (C#, Java, PHP, Ruby, Python, Perl).<br/>
Your more then welcome to email me any time <Rannn505@outlook.com>

## Credits

wave.io-nodejs using the awesome [ws](https://github.com/websockets/ws) of Einar Otto Stangvik.


## License

  [MIT](LICENSE)

