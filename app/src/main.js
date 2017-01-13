import TeamBox from './teamlist';
import SkillChart from './chart';

ReactDOM.render(
<h1>Tech Stacks</h1>,
document.getElementById('title')
);

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


