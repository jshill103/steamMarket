var config = require('./config.json');
var _ = require('lodash');
var market = require('steam-market-pricing');
var array = [];
var count = 0;
var medianTotal = 0;
var lowestTotal = 0;

_.forEach(config.guns, function(gun){
	_.forEach(config.condition, function(con){
		array.push(gun+con)
	});
})

market.getItemsPrice(730, array, function(data) {
    for(var i in array) {
        medianTotal += parseFloat(_.replace(data[array[i]]['median_price'], '$', ''));
        lowestTotal += parseFloat(_.replace(data[array[i]]['lowest_price'], '$', ''));
        count++
    }
    var averageMedian = medianTotal/count;
	var averageLowest = lowestTotal/count;
	console.log("average median price: " +averageMedian);
	console.log("average lowest price: " +lowestTotal);
});