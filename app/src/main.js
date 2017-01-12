
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
            <input type="text" value={teamInfo.TeamName} ref={input => input && input.focus()} onBlur={(e)=>this.changeToSpan(e)}></input> : <TeamSkillTags TeamData={teamInfo}/>
          </div>
        );
      } 
      else {
        return (
          <div key={teamInfo.TeamId}>
            <span onClick={ (e)=>this.changeToInput(teamInfo.TeamId, e)}>{teamInfo.TeamName}</span> : <TeamSkillTags TeamData={teamInfo}/>
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
        <Tags data={this.props.TeamData}/>
      </span>
    );
  }
}

class Tags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {tags: props.data.Skills, TeamId: props.data.TeamId, TeamName: props.data.TeamName}
  }
 
  handleChange(newTags) {
    var datasvc = new DataService();
    datasvc.postTeamData({
      "TableName": "TSteam",
      "Item": {"TeamId": this.state.TeamId, "TeamName": this.state.TeamName, "Skills": newTags}
    }, (res)=>{
      console.log(res);
    });
    console.log('old tags : ' + this.state.tags);
    console.log('new tags : ' + newTags);
    console.log('teamId : ' + this.state.TeamId);
    console.log('teamName : ' + this.state.TeamName);
    this.setState({tags : newTags});
  }
 
  render() {
    return <ReactTagsInput value={this.state.tags} onChange={this.handleChange.bind(this)} inputProps={{placeholder:"Add Tech"}}/>
  }
}

ReactDOM.render(
  <TeamBox />,
  document.getElementById('content')
);