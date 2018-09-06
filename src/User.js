import React, { Component } from 'react';

class User extends Component {

    render() {

        let info = this.props.user.map((prof, index) => {
            return (

                <div key={index} className="col-md-3">

                    {
                        prof.login && <h3 className="panel-title">{prof.login}</h3>
                    }
                    {
                        prof.id && <span className="label label-info">ID: {prof.id}</span>
                    }
                    <br></br>
                    {
                        prof.score && <span className="label label-info">
                            Git Score: {prof.score}</span>
                    }
                    <br></br>




                    <img style={{ width: "100%" }} className="thunmbnail"
                        src={prof.avatar_url} />
                    {
                        prof.html_url && <a target="_blank"
                            className="btn btn-primary btn-block" href={prof.html_url}>
                            View Profile</a>
                    }




                </div>
            )
        })

        return (
            <div id='profile'>
                <div className="panel panel-default row">
                    {info}
                </div>
            </div>

        )
    }

}

export default User;