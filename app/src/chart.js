
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
    case 1: colorCode = "#222222";
      break;  
    case 2: colorCode = "#333333";
      break;  
    case 3: colorCode = "#444444";
      break;  
    case 4: colorCode = "#555555";
      break;  
    case 5: colorCode = "#666666";
      break;  
    case 6: colorCode = "#777777";
      break;  
    case 7: colorCode = "#888888";
      break;  
    case 8: colorCode = "#999999";
      break;  
    case 9: colorCode = "#aaaaaa";
      break;  
    case 10: colorCode = "#bbbbbb";
      break;  
    case 11: colorCode = "#cccccc";
      break;  
  
  }
  return d3.rgb(colorCode);
}

export default class SkillChart extends React.Component{
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
          width={600}
          height={600}
          radius={180}
          innerRadius={0}
          cx={0}
          cy={220}
          sectorBorderColor="white"
          colors={coloring}
        />;
    }
};