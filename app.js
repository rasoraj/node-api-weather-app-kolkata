var http = require('http');
var url = 'https://api.openweathermap.org/data/2.5/weather?q=Kolkata,IN&appid=6d799598edb2363817ff26d9cd16f8f4&units=metric';

    http.createServer(function(req,res){

       

        var request = require('request');
        request(url, function(err, response, body){
            var data = JSON.parse(body);
            res.write("<html><body><div id='container'>");
            res.write("<h1>" + 'City Name -: ' + data['name'] + '<br>' + "</h1>");
            res.write("<h2>"+ 'Temperature -: '+ data.main['temp']+'<br>' + "</h2>");
            res.write("<h2>"+ 'Sunset time -: '+ new Date(data.sys['sunset']*1000) +'<br>'+"</h2>");
            res.write("</div></body></html>");
            res.end();
        });



    }).listen(3012);