/**
 * Created by 795ranc on 7/1/2016.
 */

module.exports = Listener;

function Listener (method,uri,cb){
    return {
        "method": method,
        "uri": uri,
        "cb": cb
    };
}
