import React from 'react'
import ReactDOM from 'react-dom'



function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number,index) =>
    <li key={index}>
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);


/*
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      登陆
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      退出
    </button>
  );
}


function UserGreeting(props) {
  return <h1>欢迎你的到来!</h1>;
}

function GuestGreeting(props) {
  return <h1>请登录</h1>;
}


function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    let button = null;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

ReactDOM.render(
  <LoginControl />,
  document.getElementById('root')
);





class Welcome extends React.Component{
  constructor(props){
    super(props)
    console.log(props.name)
    this.name=props.name;
    this.state={date:new Date()};
  }
  componentDidMount(){
    // this.timerID=setInterval(function(){
    //   console.log(this)
    //   this.tick();
    // },1000)

    this.timerID=setInterval(()=>{
      this.tick();
    },1000)

  }

  tick(){
    this.setState({
      date:new Date()
    });
  }
  componentWillUnmount(){
    clearInterval(this.timerID);
  }
  render(){
    return (<div>
              <h1>{this.name}</h1>
              <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div>)
  }
}


const element=<Welcome name="多么美好的世界！"/>
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
*/




