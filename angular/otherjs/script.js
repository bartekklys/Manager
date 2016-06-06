// Define a new module for our app
var app = angular.module("instantSearch", []);

// Create the instant search filter

app.filter('searchFor', function(){

	// All filters must return a function. The first parameter
	// is the data that is to be filtered, and the second is an
	// argument that may be passed with a colon (searchFor:searchString)

	return function(arr, searchString){

		if(!searchString){
			return arr;
		}

		var result = [];

		searchString = searchString.toLowerCase();

		// Using the forEach helper method to loop through the array
		angular.forEach(arr, function(item){

			if(item.title.toLowerCase().indexOf(searchString) !== -1){
				 result.push(item);
			}

		});

		return result;
	};

});

//controller

function InstantSearchController($scope){

	$scope.items = [
		{
			url: 'https://upsa.epam.com/workload/employeeView.do?employeeId=4060741400037765889#emplTab=general',
			title: 'Tomasz Dudzik',
			image: '/img/person.gif'
		},
		{
			url: 'x2',
			title: 'Maciej Kocur',
			image: '/home/bartek/Desktop/project/manager/img/steve-jobs.jpg'
		},
{
			url: 'x3',
			title: 'Ehsan Golesorkhi',
			image: '/home/bartek/Desktop/project/manager/img/steve-jobs.jpg'
		},

{
			url: 'x4',
			title: 'Damian Liwak',
			image: '/home/bartek/Desktop/project/manager/img/steve-jobs.jpg'
		},
{
			url: 'x5',
			title: 'Bartłomiej Łazarski',
			image: '/home/bartek/Desktop/project/manager/img/steve-jobs.jpg'
		},
{
			url: 'x5',
			title: 'Kamil Poprawa',
			image: '/home/bartek/Desktop/project/manager/img/steve-jobs.jpg'
		},
{
			url: 'x5',
			title: 'Daniel Zaucha',
			image: '/home/bartek/Desktop/project/manager/img/steve-jobs.jpg'
		},
{
			url: 'x5',
			title: 'Olga Ermolaeva',
			image: '/home/bartek/Desktop/project/manager/img/steve-jobs.jpg'
		},

	];
}
