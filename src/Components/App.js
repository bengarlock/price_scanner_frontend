import '../Stylesheets/App.css';
import React from 'react'
import { getFavorites, renderForm, renderOverlay } from "../Actions/Favorites";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Favorite from "./Favorite";
import Overlay from "./Overlay";
import InfoForm from "./InfoForm";
import AddForm from "./AddForm";

class App extends React.Component {

    static propTypes = {
        favorites: PropTypes.array.isRequired,
        selected_favorite: PropTypes.object.isRequired,
        render_form: PropTypes.bool.isRequired,
        render_overlay: PropTypes.bool.isRequired
    }

    componentDidMount = () => {
        this.props.getFavorites()
    }

    onClickHandler = () => {
        this.props.renderOverlay(true)
        this.props.renderForm(!this.props.render_form)
    }

    renderFavorites = () => {
        return this.props.favorites.map(favorite => <Favorite key={favorite.id} favorite={favorite}/>)
        console.log(this.props.favorites)
    }

    render() {
        return(
            <div className="favorites-container">
                <div className="favorite-container" id="add-favorite-button" onClick={this.onClickHandler}>+</div>
                {this.renderFavorites()}

                {this.props.selected_favorite.name ? <InfoForm /> : null}
                {this.props.render_overlay ? <Overlay /> : null}
                {this.props.render_form ? <AddForm /> : null}

            </div>
    )
  }
}

const mapStateToProps = (state) => ({
    favorites: state.favorites.favorites,
    selected_favorite: state.favorites.selected_favorite,
    render_form: state.favorites.render_form,
    render_overlay: state.favorites.render_overlay
})

export default connect(mapStateToProps, { getFavorites, renderForm, renderOverlay })(App);
