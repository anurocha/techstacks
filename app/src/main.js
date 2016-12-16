
ReactDOM.render(
<h1>Tech Stacks</h1>,
document.getElementById('title')
);


var teamData = [
  {TeamId: 1, TeamName: "EK", Skills: ["c++","c#","javascript"]},
  {TeamId: 2, TeamName: "FT", Skills: ["c#","wpf"]},
  {TeamId: 3, TeamName: "AS", Skills: ["java","javascript","c#","go"]}
];

class TeamBox extends React.Component {
  constructor() {
    super();
    var datasvc = new DataService();
    datasvc.getTeamData((res)=>{
      teamData = res;
      this.setState({TeamData : res});
    });
  }

  render(){
    var teamNodes = teamData.map(function(teamInfo) {
      return (
        <div key={teamInfo.TeamId}>
          {teamInfo.TeamName} : <TeamSkillTags skills={teamInfo.Skills}/>
        </div>
      );
    });
    return (
      <div className="teamBoxes">
        {teamNodes}
      </div>
    );
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
 
  handleChange(tags) {
    this.setState({tags});
  }
 
  render() {
    return <ReactTagsInput value={this.state.tags} onChange={this.handleChange.bind(this)} inputProps={{placeholder:"Add Tech"}}/>
  }
}

ReactDOM.render(
  <TeamBox />,
  document.getElementById('content')
);