module.exports = Listener;

function Listener (method,uri,cb){
    return {
        "method": method,
        "uri": uri,
        "cb": cb
    };
}
