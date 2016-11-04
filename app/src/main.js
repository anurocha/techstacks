
ReactDOM.render(
<h1>Tech Stacks</h1>,
document.getElementById('example')
);


var data = [
  {id: 1, name: "EK", skills: ["c++","c#","javascript"]},
  {id: 2, name: "FT", skills: ["c#","wpf"]},
  {id: 3, name: "AS", skills: ["java","javascript","c#","go"]}
];

var getRequest = new Request('https://pbntn752kg.execute-api.us-west-2.amazonaws.com/prod/TechStacksMicroService?TableName=TeamTable', {
    method: "GET",
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json',
        'X-Api-Key' : 'vxgYTMjGxX9oKx1IMoCsC1WJ9byAAib62DjpVLY8'
    }
});

fetch(getRequest)  
  .then(  
    function(response) {  
      if (response.status !== 200) {  
        console.log('Looks like there was a problem. Status Code: ' +  
          response.status);
        return;  
      }

      // Examine the text in the response  
      response.json().then(function(data) {  
        console.log(data);  
      });  
    }  
  )  
  .catch(function(err) {  
    console.log('Fetch Error :-S', err);  
  });

var TeamBox = React.createClass({
  render: function() {
    var teamNodes = data.map(function(teamInfo) {
      return (
        <div key={teamInfo.id}>
          {teamInfo.name} : <TeamSkillTags skills={teamInfo.skills}/>
        </div>
      );
    });
    return (
      <div className="teamBoxes">
        {teamNodes}
      </div>
    );
  }
});

var TeamSkillTags = React.createClass({
  render: function() {
    return (
      <span className="teamSkillTags">
        <Tags data={this.props.skills}/>
      </span>
    );
  }
});

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