/**
 * Created by RAN on 01/01/2016.
 */

const MODULE_NAME = 'pulse.io';

var Listener = require('./lib/listener');
var ResObj = require('./lib/responseobject');
var parser = require('./lib/parser');

var util = require('util');
var WebSocketServer = require('ws').Server;

function Router (server, opt) {

    if (typeof server === 'undefined' || typeof server !== 'object' || !server)
        throw new Error(util.format('%s::%s', MODULE_NAME, 'Server not defined properly'));

    var _router = {
        get   : function (uri,cb) {_stack.push(new Listener('GET'   , uri, cb))},
        post  : function (uri,cb) {_stack.push(new Listener('POST'  , uri, cb))},
        put   : function (uri,cb) {_stack.push(new Listener('PUT'   , uri, cb))},
        delete: function (uri,cb) {_stack.push(new Listener('DELETE', uri, cb))}
    };
    var _wss = new WebSocketServer({server: server});
    var _stack = [];

    _wss.on('connection', function connection(ws) {
        ws.on('message', function incoming(msg) {
            var _msg = parser.toJSON(msg);
            //console.log(_msg);
            _stack.forEach(function (listener) {
                if(listener.uri == _msg.uri && listener.method == _msg.method){
                    listener.cb(_msg, new ResObj(listener.method, listener.uri, ws));
                }
            });
        });
    });

    return _router;
}

module.exports = Router;