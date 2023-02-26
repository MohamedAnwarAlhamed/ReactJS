import { react , Component } from 'react';

class AnimalsClass extends Component
{
    state = {
        count : 0 
    }
    handleIncrement = () => {
        this.setState({count : this.state.count + 1})
    }
    render(){
        return(
                <div>
                {this.state.count}
                <button onClick={this.handleIncrement}>increment</button>
                <button onClick={() => {
                    this.setState({count : this.state.count + 1})
                }}>increment2</button>
                
                </div>
        )
    }
}

export default AnimalsClass;