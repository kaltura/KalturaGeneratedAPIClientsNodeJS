 var cb = function (results){
     if(results){
	 console.log(results);
 	 client.setKs(results);
	 console.log(client);
	 return;
     }

     handleResults(results);
 };

 var kc = require('../KalturaClient');
 var ktypes = require('../KalturaTypes');
// var config = require ('./config.js');

 var partnerId = 101;
 var secret = '6aa758517fc892cf082185208a203116';
 var conf = new kc.KalturaConfiguration(partnerId);
 conf.serviceUrl = 'http://54.159.220.35/' ;

 var client = new kc.KalturaClient(conf);
 var userId=null;


 var type = ktypes.KalturaSessionType.USER;

 var expiry = null;
 var privileges = null;
// var result = client.session.start(cb, config.secret, userId, type, config.partnerId, expiry, privileges);
 var ks = client.session.start(cb, secret, userId, type, partnerId, expiry, privileges);

