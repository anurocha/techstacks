
ReactDOM.render(
<h1>Tech Stacks</h1>,
document.getElementById('example')
);


var data = [
  {id: 1, name: "EK", skills: ["c++","c#","javascript"]},
  {id: 2, name: "FT", skills: ["c#","wpf"]},
  {id: 3, name: "AS", skills: ["java","javascript","c#","go"]}
];

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