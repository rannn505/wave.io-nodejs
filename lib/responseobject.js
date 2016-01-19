var parser = require('./parser');

function ResObj (method, uri, ws) {
    var resJSON = {method: method, uri: uri, data: null};

    function send (data) {
        resJSON.data = data;
        ws.send(parser.toSTR(resJSON));
    }

    return {
        send: send
    }
}

module.exports = ResObj;