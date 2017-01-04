var config = require('./config.json');
var _ = require('lodash');
var market = require('steam-market-pricing');
var array = [];

_.forEach(config.guns, function(gun){
	_.forEach(config.condition, function(con){
		array.push(gun+con)
	});
})

market.getItemsPrice(730, array, function(data) {
    for(var i in array) {
    	if(data[array[i]]['lowest_price'] == null || data[array[i]]['lowest_price'] == ''){
    		console.log('null');
    	}
    	console.log(_.replace(data[array[i]]['lowest_price'], '$', ''));
        //lowestTotal += parseFloat(_.replace(data[array[i]]['lowest_price'], '$', ''));
    }
});