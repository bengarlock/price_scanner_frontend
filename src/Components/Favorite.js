import '../Stylesheets/Favorite.css';
import React from 'react'

class Favorite extends React.Component {

    render() {
        return(
            <div className="favorite-container">
                <div className="fav-image">
                    <div className="image-wrapper">
                        <img src={this.props.favorite.image} alt={this.props.favorite.name}/>
                    </div>
                    <div>{this.props.favorite.name}</div>
                    <div>{this.props.favorite.prices.slice(-1)[0].price}</div>
                </div>
            </div>
        )
    }
}

export default Favorite

