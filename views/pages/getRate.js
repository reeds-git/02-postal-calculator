
function getPrice(type, weight, callback) {

	console.log("I got to gerPrice with type= " + type + " weight = " + weight);
	
	var price = 0.0;

	switch (type) {
		
		case 'ls': {

			price = getLetterStamped(weight);
			break;
		}
		case 'lm': {

			price = getLetterMetered(weight);
			break;
		}
		case 'le': {

			price = getLargeEnvelope(weight);
			break;
		}
		case 'pa': {

			price = getParcel(weight);
			break;
		}
		default:
			price = -1;
			break;
	}
		
		console.log("price = " + price);

	if (price >=  0) {

		var results = { type: type, weight: weight, price: price };

		callback(null, results);

	} else if (price == -1) {

		console.log("too big of number");
		var results = { type: type, weight: weight, price: 0 };

		callback(null, results);
	}
}

function getLetterStamped(weight) {

	if (weight <= 1) {

		price = 0.49;

	} else if (weight <= 2) {

		price = 0.70;

	} else if (weight <= 3) {

		price = 0.91;

	} else if (weight <= 3.5) {

		price = 1.12;
		
	} else {

		return -1;
		
	}

	return price;
}

function getLetterMetered(weight) {
	
	if (weight <= 1) {

		price = 0.46;

	} else if (weight <= 2) {

		price = 0.67;

	} else if (weight <= 3) {

		price = 0.88;

	} else if (weight <= 3.5) {

		price = 1.09;
		
	} else {

		return -1;
		
	}

	return price;
}

function getLargeEnvelope(weight) {

	if (weight <= 1) {

		price = 0.98;
			
	} else if (weight <= 2) {

		price = 1.19;

	} else if (weight <= 3) {

		price = 1.40;

	} else if (weight <= 4) {

		price = 1.61;
		
	} else if (weight <= 5) {

		price = 1.82;
		
	} else if (weight <= 6) {

		price = 2.03;
		
	} else if (weight <= 7) {

		price = 2.24;
		
	} else if (weight <= 8) {

		price = 2.45;
		
	} else if (weight <= 9) {

		price = 2.66;
		
	} else if (weight <= 10) {

		price = 2.87;
		
	} else if (weight <= 11) {

		price = 3.08;
		
	} else if (weight <= 12) {

		price = 3.29;
		
	} else if (weight <= 13) {

		price = 3.50;
		
	} else {
			
		return -1;	
	}

	return price;
}

function getParcel(weight) {

	if (weight <= 4) {

		price = 2.67;
		
	} else if (weight <= 5) {

		price = 2.85;
		
	} else if (weight <= 6) {

		price = 3.03;
		
	} else if (weight <= 7) {

		price = 3.21;
		
	} else if (weight <= 8) {

		price = 3.39;
		
	} else if (weight <= 9) {

		price = 3.57;
		
	} else if (weight <= 10) {

		price = 3.75;
		
	} else if (weight <= 11) {

		price = 3.93;
		
	} else if (weight <= 12) {

		price = 4.11;
		
	} else if (weight <= 13) {

		price = 4.29;
		
	} else {

		return -1;	
	}

	return price;
}