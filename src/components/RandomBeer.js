import React, { Component } from "react";
import axios from "axios";
import NavBar from "./NavBar"

// READ do cRud

class RandomBeer extends Component {
  state = {
    character: "",
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random');
      console.log(response);
      this.setState({ character: { ...response.data } });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
        <div>
            <NavBar />
            <div className="card w-50" style={{width: "18rem;"}}>
                <div className="text-center">
                    <img src={this.state.character.image_url} className="card-img-top"  alt="Imagem" style={{width: "50px"}} /> 
                </div>
            <div className="card-body">
                <div className="row">
                    <div class="col">
                    <h3>{this.state.character.name}</h3>
                    </div>
                    <div class="col d-flex flex-row-reverse">
                    <h3>{this.state.character.attenuation_level}</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <h5>{this.state.character.tagline}</h5>
                    </div>
                    <div class="col d-flex flex-row-reverse">
                    <h5>{this.state.character.first_brewed}</h5>
                </div>
                </div>               
                    
            <p className="card-text">{this.state.character.description}</p>
            <div>
                <span>{this.state.character.contributed_by}</span>
            </div>
            </div>
        </div>
        </div>
    );
  }
}

export default RandomBeer;