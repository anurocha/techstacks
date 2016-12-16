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
      var datasvc = new DataService();
      datasvc.getSummaryData((res)=>{
         pieData = res;
         this.setState({pieData});
      });
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
};
 
ReactDOM.render(<SkillChart name="World" />, document.getElementById('chart'));
