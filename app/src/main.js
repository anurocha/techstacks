
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