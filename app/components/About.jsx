var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
    return (
            <div>
                <h1 className="text-center">About</h1>
                <p>
                    This application serve to get weather in any country what you type in.
                </p>
                <div className="row">
                    <div className="text-center large-6 small-10">
                        <Link to="/examples"> Look for examples here >></Link>
                    </div>
                </div>
            </div>
    )
};

module.exports = About;