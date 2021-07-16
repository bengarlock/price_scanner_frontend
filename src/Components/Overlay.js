import React from 'react'
import '../Stylesheets/Overlay.css'
import {connect} from "react-redux";
import {setFavorites} from "../Actions/Favorites";
import PropTypes from "prop-types";

class Overlay extends React.Component {

    static propTypes = {
        selected_favorite: PropTypes.object.isRequired,
    }

    onClickHandler = () => {
        if (this.props.selected_favorite !== {}) {
            this.props.setFavorites({})
        }
    }

    render() {
        return(
            <div className='overlay-container' onClick={this.onClickHandler}>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    selected_favorite: state.favorites.selected_favorite
})

export default connect(mapStateToProps, { setFavorites })(Overlay);
