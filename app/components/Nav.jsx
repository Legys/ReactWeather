var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
    return (
        <div>
            <h2>This is a Navbar</h2>
            <IndexLink to="/">Get Weather </IndexLink>
            <Link to="/about">About </Link>
            <Link to="/examples">Examples </Link>

        </div>

    )
}

module.exports = Nav;