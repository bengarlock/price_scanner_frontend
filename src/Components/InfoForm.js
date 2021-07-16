import React from 'react'
import "../Stylesheets/InfoForm.css"
import {connect} from "react-redux";
import {setFavorites} from "../Actions/Favorites";
import PropTypes from "prop-types";

class InfoForm extends React.Component {

    static propTypes = {
        selected_favorite: PropTypes.object.isRequired,
    }

    renderPrices = () => {
        const onlyUnique = (value, index, self) => {
            return self.indexOf(value) === index;
        }
        let prices = this.props.selected_favorite.prices.map(i => i.price)
        let unique = prices.filter(onlyUnique)
        return unique.map(price => <span key={prices.indexOf[price]}>{price} <br /></span>)
    }

    render() {

        return(
            <div className="info-form-container">
                <div className="image-wrapper-form">
                    <img src={this.props.selected_favorite.image} alt={this.props.selected_favorite.name}/>
                </div>
                <h3>{this.props.selected_favorite.name}</h3>
                <div>
                    {this.renderPrices()}
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    selected_favorite: state.favorites.selected_favorite
})

export default connect(mapStateToProps, { setFavorites })(InfoForm);
