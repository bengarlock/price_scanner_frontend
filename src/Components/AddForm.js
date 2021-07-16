import React from 'react'
import {changeForm, addFavorite} from "../Actions/Favorites";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class AddForm extends React.Component {

    static propTypes = {
        form: PropTypes.object.isRequired,
    }

    onChangeHandler = (e) => {
        e.preventDefault()
        if (e.target.name === "url") {
            this.props.changeForm({
                url: e.target.value,
            })
        } else if(e.target.nodeName === "FORM") {
            this.props.addFavorite(this.props.form)
        }
    }
    render() {
        return(
            <div className='info-form-container'>
                <form onSubmit={this.onChangeHandler}>
                    <input type="text" name="url" placeholder="URL" onChange={this.onChangeHandler} value={this.props.form.url}/>
                    <input type="submit" name="submit" />
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    form: state.favorites.form
})

export default connect(mapStateToProps, { changeForm, addFavorite })(AddForm);