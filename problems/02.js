// I have day-wise hourly weather data as follow:
// {
//  "sunday": {
//    "0:00": 5,
//    "1:00": 5.5,
//    "2:00": 4.8,
//    "3:00": 5.8,
//    "4:00": 3.2
//  },
//  "monday": {
//    "0:00": 5.4,
//    "1:00": 4.3,
//    "2:00": 3.6,
//    "3:00": 6.1,
//    "4:00": 2.4
//  }
// }

// I want to aggregate it as hour-wise daily data as follow:
// {
//  "0.00": {
//    "sunday": 5,
//    "monday": 5.4
//  },
//  "1:00": {
//    "sunday": 5.5,
//    "monday": 4.3
//  },
//  "2:00": {
//    "sunday": 4.8,
//    "monday": 3.6
//  }
// }

const daywiseData = {
	sunday: {
		"0:00": 5,
		"1:00": 5.5,
		"2:00": 4.8,
		"3:00": 5.8,
		"4:00": 3.2,
	},
	monday: {
		"0:00": 5.4,
		"1:00": 4.3,
		"2:00": 3.6,
		"3:00": 6.1,
		"4:00": 2.4,
	},
};

function getHourlyData() {
	let hourwise = {};
	for (const day in daywiseData) {
		for (const hour in daywiseData[day]) {
			console.log(typeof hour);
			// Initialize the hour object if it doesn't exist
			if (!hourwise[hour]) {
				hourwise[hour] = {};
			}
			hourwise[hour][day] = daywiseData[day][hour];
		}
	}
	return hourwise;
}

const hourlydata = getHourlyData();

console.log(hourlydata);
