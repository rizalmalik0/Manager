import React, { Component } from 'react';
import { View, Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { CardItem, Input } from './common';

class EmployeeForm extends Component {
    render() {
        return (
            <View>
                <CardItem>
                    <Input
                        label="Name"
                        placeholder="name"
                        value={this.props.name}
                        onChangeText={text => this.props
                            .employeeUpdate({ prop: 'name', value: text })}
                    />
                </CardItem>
                <CardItem>
                    <Input
                        label="Phone"
                        placeholder="phone"
                        value={this.props.phone}
                        onChangeText={text => this.props
                            .employeeUpdate({ prop: 'phone', value: text })}
                    />
                </CardItem>
                <CardItem style={{ flexDirection: 'column' }}>
                    <Text style={styles.pickerTextStyle}>Shift</Text>
                    <Picker
                        selectedValue={this.props.shift}
                        onValueChange={day => this.props
                            .employeeUpdate({ prop: 'shift', value: day })}
                    >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
                </CardItem>
            </View>
        );
    }
}


const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
};

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
