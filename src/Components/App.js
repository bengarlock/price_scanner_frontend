import '../Stylesheets/App.css';
import React from 'react'
import { getFavorites } from "../Actions/Favorites";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class App extends React.Component {

    static propTypes = {
        favorites: PropTypes.array.isRequired,
    }

    componentDidMount = () => {
        this.props.getFavorites()
    }

    renderFavorites = () => {

    }

    render() {
        return(
            <div>

            </div>
    )
  }
}

const mapStateToProps = (state) => ({
    //state.resyRestaurants calls the reducer and .resyRestaurants calls the action
    favorites: state.favorites.favorites,
})

export default connect(mapStateToProps, { getFavorites })(App);
