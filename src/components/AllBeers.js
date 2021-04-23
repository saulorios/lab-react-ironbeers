import React from 'react'
import NavBar from '../components/NavBar'
import axios from 'axios'

class AllBeers extends React.Component{
    state = {
        beers: [],
    }

    componentDidMount = async () => {
        try{
            const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers')
        console.log(response)
        this.setState({ beers: [...response.data]})
        }catch(err){
            console.log(err)
        }
    }

 render(){
     return (
         <div>
             <NavBar />
            <div className="d-flex justify-content-center">
                <div>
                        {this.state.beers.map((beer) => {
                            return (
                                <div key={beer._id} className="card mb-3" style={{maxWidth: '540px'}}>
                                        <div className="row no-gutters">
                                            <div className="col-md-4">
                                            <img src={beer.image_url} alt="Imagem" className="p-2 ml-5" style={{height: "200px"}} />
                                            </div>
                                            <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">{beer.name}</h5>
                                                <p className="card-text">{beer.tagline}</p>
                                                <p className="card-text"><small className="text-muted"><strong>Created by:</strong> {beer.name}</small></p>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                            )
                        })}
                </div>
            </div>
        </div>
     )
 }
}
export default AllBeers