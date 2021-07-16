import '../Stylesheets/Favorite.css';
import React from 'react'
import { setFavorite, renderOverlay } from "../Actions/Favorites";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Favorite extends React.Component {

    static propTypes = {
        selected_favorite: PropTypes.object.isRequired,
    }

    onClickHandler = () => {
        this.props.renderOverlay(true)
        this.props.setFavorite(this.props.favorite)
    }


    render() {
        return(
            <div className="favorite-container" id={this.props.favorite.id} onClick={this.onClickHandler}>
                <div className="fav-image">
                    <div className="image-wrapper">
                        <img src={this.props.favorite.image} alt={this.props.favorite.name}/>
                    </div>
                    <div>{this.props.favorite.name}</div>
                    <div>{this.props.favorite.prices[0] ? this.props.favorite.prices.slice(-1)[0].price : null}</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    //state.resyRestaurants calls the reducer and .resyRestaurants calls the action
    selected_favorite: state.favorites.selected_favorite,
})

export default connect(mapStateToProps, { setFavorite, renderOverlay })(Favorite);

