import React, { Component } from 'react';
import { connect } from 'react-redux';

import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardItem, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
    onCreatePressed() {
        const { name, phone, shift } = this.props;

        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    }

    render() {
        console.log(this.props.employee);
        return (
            <Card>
                <EmployeeForm {...this.props} />
                <CardItem>
                    <Button onPress={this.onCreatePressed.bind(this)}>Create</Button>
                </CardItem>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return (
        {
            name, phone, shift
        }
    );
};

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);