import React from 'react'
import '../Stylesheets/Overlay.css'
import {connect} from "react-redux";
import { setFavorites, renderForm, renderOverlay} from "../Actions/Favorites";

class Overlay extends React.Component {

    onClickHandler = () => {
        this.props.renderOverlay(false)
        this.props.renderForm(false)
        this.props.setFavorites({})
    }

    render() {
        return(
            <div className='overlay-container' onClick={this.onClickHandler}>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps, { setFavorites, renderForm, renderOverlay })(Overlay);
