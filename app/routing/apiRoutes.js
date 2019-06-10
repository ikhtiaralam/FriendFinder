// Routes
var friendsList = require('../data/friends');

var bodyParser = require('body-parser');

var path = require('path');


// Create Routes
module.exports = function(app) {

	app.get('/api/friends', function(req, res){
		res.json(friendsList);
	});

	app.post('/api/friends', function(req, res){

		var bestMatch = {
			'name': 'none',
			'photo': 'none'
		};

		//Compare
		var userTotal = sum(req.body.scores);
        // Confirm Sums
        
		var friendTotal = 0;
    
        
			var closest = 50;
            
            // Find Best Match
            
			for (var i = 0; i < friendsList.length; i++) {
				friendTotal = sum(friendsList[i].scores);
				var difference = Math.abs(friendTotal - userTotal);
				if ( difference <= closest ){
					closest = difference;
					bestMatch.name = friendsList[i].name;
					bestMatch.photo = friendsList[i].photo;
				};
			};
		// };

		// Function to add Sums
		function sum (array) {
			var total = 0;
			for (var n = 0; n < array.length; n++) {
				total += parseInt(array[n]);
			}
			return total;
		}

		// Test
		console.log(bestMatch);
		//  Return
		res.json(bestMatch);

	});

};