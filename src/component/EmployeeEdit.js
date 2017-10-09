import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card, CardItem, Button } from './common';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave } from '../actions';

class EmployeeEdit extends Component {
    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
        });
    }

    onChangePressed() {
        const { name, phone, shift } = this.props;

        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
    }

    render() {
        console.log(this.props.employee);
        return (
            <Card>
                <EmployeeForm {...this.props} />
                <CardItem>
                    <Button onPress={this.onChangePressed.bind(this)}>Save Changes</Button>
                </CardItem>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeSave })(EmployeeEdit);
