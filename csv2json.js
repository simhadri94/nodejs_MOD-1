const fs = require('fs')
const path = require('path')
const csv = require('csvtojson')


var csvFile = './data/customer-data.csv'
var json_arr = []

csv()
	.fromFile(csvFile,(error)=>{
		if(error)
		{
		console.log("File not present, verify")
		}
		console.log("Reading the file " + csvFile + " and creating data object.\n")
	})
	.on('json',(jsonObj)=>{

    	json_arr.push(jsonObj)
    	//console.log(jsonObj)
		
		}).on('done',(error)=>{
			
			if (error){
    			console.log(error)	
    		}
    			console.log("Writing to file ./data/customer-data.json" )
    		    fs.writeFile('./data/customer-data.json', JSON.stringify(json_arr, null, 2), (error)=>{
      			if (error) {
        			console.log(error)
      			}
      console.log('done')
    })
		
	})