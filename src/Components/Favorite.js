import '../Stylesheets/Favorite.css';
import React from 'react'
import { setFavorites } from "../Actions/Favorites";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Favorite extends React.Component {

    static propTypes = {
        selected_favorite: PropTypes.object.isRequired,
    }

    onClickHandler = () => {
        this.props.setFavorites(this.props.favorite)
    }


    render() {
        return(
            <div className="favorite-container" onClick={this.onClickHandler}>
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

const mapStateToProps = (state) => ({
    //state.resyRestaurants calls the reducer and .resyRestaurants calls the action
    selected_favorite: state.favorites.selected_favorite,
})

export default connect(mapStateToProps, { setFavorites })(Favorite);

