var PieChart = rd3.PieChart;

var pieData = [
  {label: 'C++', value: 20.0},
  {label: 'JavaScript', value: 55.0},
  {label: 'C#', value: 25.0 },
  {label: 'Java', value: 25.0 }
];

var coloring = function(idx){
  //color setup
  let colorCode;
  switch(idx)
  {
    case 0: colorCode = "#111111";
      break;
    case 1: colorCode = "#333333";
      break;  
    case 2: colorCode = "#555555";
      break;  
    case 3: colorCode = "#777777";
      break;  
  
  }
  return d3.rgb(colorCode);
}

class SkillChart extends React.Component{
    constructor(){
      super();
      this.state = {PieData: pieData}
      this.getSummaryData();
    }
    render() {
        return <PieChart
          data={pieData}
          width={400}
          height={400}
          radius={100}
          innerRadius={20}
          sectorBorderColor="white"
          title="Skills Chart"
          colors={coloring}
        />;
    }
    getSummaryData() {
      var self = this;
      var getRequest = new Request('https://gtyhwdigg9.execute-api.us-west-2.amazonaws.com/prod/TechStacksMicroService?TableName=TSteam&Summary=true', {
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
              console.log('Looks like there was a problem. Status Code: ' +  
                response.status);
              return;  
            }
            response.json().then( (data)=> {
              pieData = data.Items;
              self.setState({pieData});
            });  
          }  
        )  
        .catch(function(err) {  
          console.log('Fetch Error :-S', err);  
        });
    }
};
 
ReactDOM.render(<SkillChart name="World" />, document.getElementById('chart'));
