
export default class TeamBox extends React.Component {
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
            <input type="text" value={teamInfo.TeamName} ref={input => input && input.focus()} onBlur={(e)=>this.changeToSpan(e)} onChange={(e)=>this.changeTeamHandler(e)}></input> : <br/><TeamSkillTags TeamData={teamInfo}/>
          </div>
        );
      } 
      else {
        return (
          <div key={teamInfo.TeamId}>
            <span onClick={ (e)=>this.changeToInput(teamInfo.TeamId, e)}>{teamInfo.TeamName}</span> : <br/><TeamSkillTags TeamData={teamInfo}/>
          </div>
        );
      }

    }, this);


    const plusButtonStyle = {
        position: 'absolute',
        right : '4px',
        width : '48px'
    }; 
    return (
      <div className="teamBoxes">
        {teamNodes}
        <br/>
        <img src='./img/plusbutton.png' onClick={ (e)=>this.addNewTeam(e)} style={plusButtonStyle}></img>
      </div>
    );
  }

  addNewTeam(id){
      this.state.TeamData.push({'TeamName' : 'New Team', 'Skills' : [], 'TeamId' : this.state.TeamData.length + 1});
      this.forceUpdate();
  }

  changeTeamHandler(event){
      console.log('new input : ' + event.target.value);
      var t = this;
      var teamNodes = this.state.TeamData.map(function(teamInfo) {
      if(teamInfo.TeamId === t.state.EditingItemId){
          teamInfo.TeamName =  event.target.value;
          t.forceUpdate();
          return;
        }
      });
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