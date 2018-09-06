import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div>
                <div className="searchContainer">
                    <h1>Search User</h1>
                    <p className="lead">Enter user name</p>
                    <form onSubmit={this.props.getUser}>
                        <input type="text" name="searchUser" className="form-control col-sm-4" placeholder="Search......" ref="name" />
                        <br></br>
                        <button className='btn btn-primary'>Submit</button>
                    </form>
                </div>
                <br></br>
            </div>
        )
    }
}

export default Form;