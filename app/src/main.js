
ReactDOM.render(
  <h1>Tech Stacks</h1>,
  document.getElementById('example')
);

var getTeamRequest = new Request('https://ax2nrqdj3b.execute-api.us-west-2.amazonaws.com/prod/techstack?TableName=TeamTable', {
    method: "GET",
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json',
        'X-Api-Key' : 'vxgYTMjGxX9oKx1IMoCsC1WJ9byAAib62DjpVLY8'
    }
});

class TeamBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: [{TeamId: 0, TeamName: "", Skills: ["Loading..."]}]}
  }

  componentDidMount() {
    fetch(getTeamRequest).then((response) => {
      var teamBox = this;
      response.json().then((json) => {
        teamBox.setState({data: json.Items});
      }); 
    });
  }

  render() {
      var teamNodes = this.state.data.map(function(teamInfo) {
        return <div key={teamInfo.TeamId}>{teamInfo.TeamName} : <TeamSkillTags skills={teamInfo.Skills}/></div>;
      });

      return <div className="teamBoxes">{teamNodes}</div>;
  }
}

class TeamSkillTags extends React.Component {
  render() {
    return <span className="teamSkillTags"><Tags data={this.props.skills}/></span>;
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
  <TeamBox/>,
  document.getElementById('content')
);