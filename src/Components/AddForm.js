import React from 'react'

class AddForm extends React.Component {


    render() {
        return(
            <div className='info-form-container'>
                <form>
                    <input type="text" name="URL" placeholder="URL" onChange={this.onChangeHandler} />
                    <input type="submit" />

                </form>
            </div>
        )
    }
}

export default AddForm