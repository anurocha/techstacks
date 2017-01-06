ReactDOM.render(
<h1>Tech Stacks</h1>,
document.getElementById('title')
);

class TeamBox extends React.Component {
  constructor() {
    super();
    this.state = {EditingItemId : -1, TeamData : [] };
  }

  componentDidMount() {
    var datasvc = new DataService();
    datasvc.getTeamData((res)=>{
      this.setState({TeamData : res});
    });
  }

  render(){
    var teamNodes = this.state.TeamData.map(function(teamInfo) {
      if(teamInfo.TeamId === this.state.EditingItemId){
        return (
          <div key={teamInfo.TeamId}>
            <input type="text" value={teamInfo.TeamName} ref={input => input && input.focus()} onBlur={(e)=>this.changeToSpan(e)}></input> : <TeamSkillTags skills={teamInfo.Skills}/>
          </div>
        );
      } 
      else {
        return (
          <div key={teamInfo.TeamId}>
            <span onClick={ (e)=>this.changeToInput(teamInfo.TeamId, e)}>{teamInfo.TeamName}</span> : <TeamSkillTags skills={teamInfo.Skills}/>
          </div>
        );
      }

    }, this);
    return (
      <div className="teamBoxes">
        {teamNodes}
      </div>
    );
  }

  changeToInput(id){
    this.setState({EditingItemId : id});
  }

  changeToSpan(){
    this.setState({EditingItemId : -1});
  }
}

class TeamSkillTags extends React.Component{
  render(){
    return (
      <span className="teamSkillTags">
        <Tags data={this.props.skills}/>
      </span>
    );
  }
}

class Tags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {tags: props.data}
  }
 
  handleChange(newTags) {
    console.log('old tags : ' + this.state.tags);
    console.log('new tags : ' + newTags);
    this.setState({tags : newTags});
  }
 
  render() {
    return <ReactTagsInput value={this.state.tags} onChange={this.handleChange.bind(this)} inputProps={{placeholder:"Add Tech"}}/>
  }
}


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

class App extends React.Component {

render(){
    return (
     <div>
        <p>
          <ReactRouter.IndexLink  to="/">Home</ReactRouter.IndexLink > | <ReactRouter.Link  to="/chart">Chart</ReactRouter.Link >
        </p>
        <hr/>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    )
}

}

ReactDOM.render(
 <ReactRouter.Router>
      <ReactRouter.Route path="/" component={App}>
      <ReactRouter.IndexRoute component={TeamBox}/>
      <ReactRouter.Route path="Chart" component={SkillChart} />
    </ReactRouter.Route>
  </ReactRouter.Router>,
  document.getElementById('container')
);


