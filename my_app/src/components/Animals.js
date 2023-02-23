function Cat(props) {
    const {name, age} = props;
    return (
        <div>
        <h2>Hi, I am a Cat name {name}</h2>
        <h3>Hi, I am a Cat age {age}</h3>
        </div>
    );
  }

export default Cat;