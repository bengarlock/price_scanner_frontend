import '../Stylesheets/App.css';
import React from 'react'
import { getFavorites } from "../Actions/Favorites";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Favorite from "./Favorite";

class App extends React.Component {

    static propTypes = {
        favorites: PropTypes.array.isRequired,
    }

    componentDidMount = () => {
        this.props.getFavorites()
    }

    renderFavorites = () => {
        return this.props.favorites.map(favorite => <Favorite key={favorite.id} favorite={favorite}/>)
    }

    render() {
        return(
            <div className="favorites-container">
                {this.renderFavorites()}

            </div>
    )
  }
}

const mapStateToProps = (state) => ({
    //state.resyRestaurants calls the reducer and .resyRestaurants calls the action
    favorites: state.favorites.favorites,
})

export default connect(mapStateToProps, { getFavorites })(App);
