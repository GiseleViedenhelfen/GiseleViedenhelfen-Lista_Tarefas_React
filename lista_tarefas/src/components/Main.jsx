import React, {Component} from "react";
import './Main.css';


class Main extends Component {
  state = {
    novaTarefa: '',
  };
  handleChange = (evento) => {
    this.setState({
      novaTarefa: evento.target.value,
    })
  }
  render() {
    const {novaTarefa} = this.state
    return <div className="main">
      <h1>{novaTarefa}</h1>
      <form action="#">
        <input onChange={this.handleChange} type="text" />
        <button type="submit"> Enviar</button>
      </form>
    </div>
  }
}
export default Main;
