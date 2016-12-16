 class DataService {
     constructor(){
         console.log('data service has been craeted...')
     }
     
     getTeamData( callback ){
        var self = this;
        var getRequest = new Request('https://gtyhwdigg9.execute-api.us-west-2.amazonaws.com/prod/TechStacksMicroService?TableName=TSteam', {
            method: "GET",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'X-Api-Key' : 'AXdaESDbtV6d0uqFZ8mFWaCs2axVDI7a5MujwZm7'
            }
        });

        fetch(getRequest)  
            .then((response) => {  
                if (response.status !== 200) {  
                    console.log('Looks like there was a problem. Status Code: ' +  response.status);
                    return;  
                }
                response.json().then( (data)=> {
                    callback(data.Items);
                //self.setState({teamData});
                });  
            })  
            .catch(function(err) {  
                console.log('Fetch Error :-S', err);  
            });
        }
}
