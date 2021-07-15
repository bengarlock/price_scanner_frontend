import '../Stylesheets/Favorite.css';
import React from 'react'

class Favorite extends React.Component {

    render() {
        return(
            <div className="favorite-container">
                <div className="fav-image">
                    <img src={this.props.favorite.image} alt={this.props.favorite.name}/>
                    <div>{this.props.favorite.name}</div>
                </div>

            </div>
        )
    }
}

export default Favorite

