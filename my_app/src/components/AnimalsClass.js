import { react, Component } from 'react'

class AnimalsClass extends Component {
    render() {
      const {name, age} = this.props;
    return (
      <div>
        // <h2>Hi, I am a Cat name {this.props.name}</h2>
        // <h3>Hi, I am a Cat age {this.props.age}</h3>
        <h2>Hi, I am a Cat name {name}</h2>
        <h3>Hi, I am a Cat age {age}</h3>
      </div>
    )
  }
}

export default AnimalsClass
