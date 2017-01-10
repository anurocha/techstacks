 class DataService {
    constructor(){
        console.log('data service has been created...')
    }
     
    getTeamData( callback ){
        this.requestTo('https://gtyhwdigg9.execute-api.us-west-2.amazonaws.com/prod/TechStacksMicroService?TableName=TSteam', "GET", null, callback);
    }

    getSummaryData( callback ) {
      this.requestTo('https://gtyhwdigg9.execute-api.us-west-2.amazonaws.com/prod/TechStacksMicroService?TableName=TSteam&Summary=true', "GET", null, callback);
    }

    postTeamData( data, callback ) {
      this.requestTo('https://gtyhwdigg9.execute-api.us-west-2.amazonaws.com/prod/TechStacksMicroService', "POST", data, callback);
    }

    requestTo(url, method, data, callback){

      if(method=="POST") {
        var formData = new FormData( JSON.stringify(data) );
        //formData.append( "json", JSON.stringify( data ) );
      }

      var request = new Request(url, {
        method: method,
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'X-Api-Key' : 'AXdaESDbtV6d0uqFZ8mFWaCs2axVDI7a5MujwZm7'
        },
        body: formData
      });

      fetch(request)  
        .then((response) => {  
            if (response.status !== 200) {  
              console.log('Looks like there was a problem. Status Code: ' +  
                response.status);
              return;  
            }
            response.json().then( (data)=> {
              callback(data.Items);
            });  
          }  
        )  
        .catch(function(err) {  
          console.log('Fetch Error :-S', err);  
        });
    }
}
