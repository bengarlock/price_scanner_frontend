import '../Stylesheets/App.css';
import React from 'react'
import { getFavorites } from "../Actions/Favorites";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Favorite from "./Favorite";
import Overlay from "./Overlay";
import InfoForm from "./InfoForm";

class App extends React.Component {

    static propTypes = {
        favorites: PropTypes.array.isRequired,
        selected_favorite: PropTypes.object.isRequired,
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
                {this.props.selected_favorite.name ? <Overlay /> : null}
                {this.props.selected_favorite.name ? <InfoForm /> : null}

            </div>
    )
  }
}

const mapStateToProps = (state) => ({
    favorites: state.favorites.favorites,
    selected_favorite: state.favorites.selected_favorite
})

export default connect(mapStateToProps, { getFavorites })(App);
