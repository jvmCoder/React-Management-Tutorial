import React from 'react';

class CustomerDelete extends React.Component {
    delteCustomer(id) {
        const url = '/api/customers/' + id;
        fetch(url, {
            method: 'DELETE'
        });
        this.props.stateRefresh();
    }

    render() {
        return (
            <button onClick={(e) => {this.delteCustomer(this.props.id)}}>삭제</button>
        )
    }
}

export default CustomerDelete;