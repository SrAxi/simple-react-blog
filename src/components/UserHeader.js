import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component {
    render() {
        if (!this.props.user) {
            return null;
        }

        return <div className="header">{this.props.user.name}</div>;
    }
}

const mapStateToProps = ({ users }, props) => ({
    user: users.find(user => user.id === props.userId),
});

export default connect(
    mapStateToProps,
    null
)(UserHeader);
