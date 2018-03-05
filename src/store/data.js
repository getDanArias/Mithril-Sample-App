// data.js

const CONFERENCES = [{
	name: "auth0 conf",
	location: "Orlando, FL",
	date: "06/30/2018",
	favorite: true,
	CFP: true,
	CFPDate: "04/20/2018",
	CFPCompleted: false
},
	{
		name: "Mithril conf",
		location: "Boston, MA",
		date: "05/10/2018",
		favorite: true,
		CFP: false,
		CFPDate: "",
		CFPCompleted: false
	},
	{
		name: "ngSurf",
		location: "San Diego, CA",
		date: "04/26/2018",
		favorite: true,
		CFP: true,
		CFPDate: "03/15/2018",
		CFPCompleted: true
	},
	{
		name: "MySQL Conf",
		location: "Miami, FL",
		date: "03/17/2018",
		favorite: false,
		CFP: false,
		CFPDate: "",
		CFPCompleted: false
	}
];

exports.getMockData = () => CONFERENCES;
exports.setMockData = (conference) => CONFERENCES.push(conference);