import React ,{Component} from 'react';
import UserInput from './TwoComponents/UserInput'
import UserOutput from './TwoComponents/UserOutput'

class App extends Component {
  state = {
    name1: 'Johnny',
    name2: 'Jackson',
    name3: 'Jessie'
    }
  

  switchNameHandler = (event) => {
    console.log(event)
    console.log(event.target)
    console.log(event.target.value)
    this.setState({
      name1 : event.target.value,
    })
  }


  render () {

    return (
      <div>
        <header>
            <UserOutput username={this.state.name1}/>
            <UserInput  change={this.switchNameHandler} username={this.state.name1} name={this.state.name1}/>
            <br></br>
            <UserOutput username={this.state.name2}/>
            <UserInput  change={this.switchNameHandler} username={this.state.name2} name={this.state.name2}/>
            <br></br>
            <UserOutput username={this.state.name3}/>
            <UserInput  change={this.switchNameHandler} username={this.state.name3} name={this.state.name3}/>
            <br></br>
            
        </header>
      </div>
    );
  }
}

export default App;
//start   