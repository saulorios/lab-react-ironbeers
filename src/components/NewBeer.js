import React from 'react'
import axios from 'axios'

class NewBeer extends React.Component {
    state = {
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: '',
        contributed_by: '',
    }
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }
    
    handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const response = await axios.post("https://ih-beers-api2.herokuapp.com/beers/new",this.state);
          //   console.log(response)
          this.state.history.push("/");
          //   const win = window.open("/", "_blank");
          //   win.focus();
        } catch (err) {
          console.error(err);
        }
      };

    render() {
        return (
            <div>
                <form>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                        <label htmlFor="inputName4">Name</label>
                        <input type="text" className="form-control" name="name" id="inputName4" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-md-6">
                        <label htmlFor="inputTaglined4">Tagline</label>
                        <input type="text" className="form-control" name="tagline" id="inputTaglined4" onChange={this.handleChange}  />
                        </div>
                    </div>
                    <div className="form-group">
                        <label fhtmlFr="description">Description</label>
                        <textarea class="form-control" name="description" id="description" rows="3" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                        <label htmlFor="inputFirstBrewed ">First Brewed </label>
                        <input type="text" className="form-control" name="first_brewed" id="inputFirstBrewed"  onChange={this.handleChange}/>
                        </div>
                        <div className="form-group col-md-4">
                        <label htmlFor="inputBrewersTips">Brewers Tips</label>
                        <input type="text" className="form-control" name="brewers_tips" id="inputBrewersTips"  onChange={this.handleChange}/>
                        </div>
                        <div className="form-group col-md-2">
                        <label htmlFor="inputAttenuationLevel">Attenuation Level</label>
                        <input type="text" className="form-control" name="attenuation_level" id="inputAttenuationLevel"  onChange={this.handleChange}/>
                        </div>                    
                        <div className="form-group col-md-2">
                        <label htmlFor="inputContributedBy">Contributed By</label>
                        <input type="text" className="form-control" name="contributed_by" id="inputContributedBy"  onChange={this.handleChange}/>
                        </div>
                        
                    </div>
                    <button
                        onClick={this.handleSubmit}
                        type="submit"
                        className="btn btn-primary"
                    >
                        ADD NEW
                    </button>
                    </form>
            </div>
        )
    }
}
export default NewBeer