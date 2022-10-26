var http = require('http') 
var url = 'http://static-admin-dashboard-example.netlify.app/'  
//kindly change the url value i used google.com here u can use the some //other url (the website code u want to copy)  
http.get(url,(response) => { 
 
	response.on('data', (chunk) => { 
		console.log(chunk.toString('utf-8')) 
	}) 
	response.on('end', ()=> { 
		console.log('response ended') 
	}) 
}).on('error', (error) =>{ 
	console.error(`error : ${error.message}`) 
})