
ReactDOM.render(
<h1>Tech Stacks</h1>,
document.getElementById('example')
);


var teamData = [
  {TeamId: 1, TeamName: "EK", Skills: ["c++","c#","javascript"]},
  {TeamId: 2, TeamName: "FT", Skills: ["c#","wpf"]},
  {TeamId: 3, TeamName: "AS", Skills: ["java","javascript","c#","go"]}
];

class TeamBox extends React.Component {
  constructor() {
    super();
    this.state = {TeamData: teamData}
    this.getTeamData();
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

  getTeamData(){
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
            console.log('Looks like there was a problem. Status Code: ' +  
              response.status);
            return;  
          }
          response.json().then( (data)=> {
            teamData = data.Items;
            self.setState({teamData});
          });  
        }  
      )  
      .catch(function(err) {  
        console.log('Fetch Error :-S', err);  
      });
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


var BarChart = rd3.BarChart;

var barData = [
  {label: 'A', value: 5},
  {label: 'B', value: 6},
  {label: 'F', value: 7}
];

var Hello = React.createClass({
    render: function() {
        return <BarChart
                  data={barData}
                  width={500}
                  height={200}
                  fill={'#3182bd'}
                  title='Bar Chart'
                />;
    }
});
 
React.render(<Hello name="World" />, document.getElementById('chart'));
