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
 var config = require ('./config.js');

 var kaltura_conf = new kc.KalturaConfiguration(config.partnerId);
 kaltura_conf.serviceUrl = config.serviceUrl ;

 var client = new kc.KalturaClient(kaltura_conf);
 var userId=null;


 var type = ktypes.KalturaSessionType.USER;

 var expiry = null;
 var privileges = null;
 var ks = client.session.start(cb, config.secret, config.userId, type, config.partnerId, expiry, privileges);

