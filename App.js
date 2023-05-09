import React, {Component} from 'react';
import Cardlist from './Cardlist';
import SearchBox from './SearchBox';





class App extends Component {
    constructor(){
        super()
        this.state =  {  
        robots: [],
        searchfield: ''
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users =>this.setState({robots:users}));
    }

    onsearchchange = (event) => {
        this.setState({searchfield: event.target.value})
     
    }

    render(){
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
    return(
        <div className='tc'>
            <h1 className='blue pa2'>RoboFriends</h1>
           <SearchBox searchChange={this.onsearchchange}/>
        <Cardlist robots={filteredRobots} />
        </div>
    );
    }
};

export default App;