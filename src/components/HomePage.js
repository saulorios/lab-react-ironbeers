import React from 'react'
import { Link } from 'react-router-dom'
import AllBeers from '../assets/beers.png'
import NewBeer from '../assets/new-beer.png'
import RandomBeer from '../assets/random-beer.png'

const HomePage = () => {
    return (
        <div className="row" style={{backgroundColor: "#eee"}}>

            <div className="card mb-3">
                <img className="card-img-top" src={AllBeers} alt="Card image cap" />
                    <div className="card-body">
                            <Link to="/allbeers" >
                                <h5 className="card-title">All Beers</h5> 
                            </Link>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas accumsan lacus vel facilisis volutpat. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. In eu mi bibendum neque egestas congue quisque egestas diam. Massa sapien faucibus et molestie ac feugiat sed lectus vestibulum.</p>
                    </div>
            </div>  
            <div className="card mb-3">
                <img className="card-img-top" src={RandomBeer} alt="Card image cap" />
                    <div className="card-body">
                            <Link to="/random-beer" >
                                <h5 className="card-title">Random Beer</h5> 
                            </Link>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas accumsan lacus vel facilisis volutpat. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. In eu mi bibendum neque egestas congue quisque egestas diam. Massa sapien faucibus et molestie ac feugiat sed lectus vestibulum.</p>
                    </div>
            </div>  
            <div className="card mb-3">
                <img className="card-img-top" src={NewBeer} alt="Card image cap" />
                    <div className="card-body">
                            <Link to="/newbeer" >
                                <h5 className="card-title">New Beer</h5> 
                            </Link>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas accumsan lacus vel facilisis volutpat. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. In eu mi bibendum neque egestas congue quisque egestas diam. Massa sapien faucibus et molestie ac feugiat sed lectus vestibulum.</p>
                    </div>
            </div>           



        </div>
    )
}
export default HomePage