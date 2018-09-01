import React, { Component } from 'react';

class User extends Component {

    render() {

        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">{this.props.user.name}</h3>
                        <span className="label label-info">ID: {this.props.user.serial}</span><br></br>
                        <span className="label label-info">Git Score: {this.props.user.score}</span><br></br>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-md-3">
                                <img style={{ width: "100%" }} className="thunmbnail" src={this.props.user.avatar} />
                                <a target="_blank" className="btn btn-primary btn-block" href={this.props.user.view}>View Profile</a>
                            </div>
                            <div className="col-md-9">

                                <br></br>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}

export default User;