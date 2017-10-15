import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { CardSection, InputField } from './common';
import { employeeUpdate } from '../actions';

class EmployeeForm extends Component {

    render() {
        return (
            <View>
                <CardSection>
                    <InputField
                        label="Name"
                        placeholder="Name"
                        value={this.props.name}
                        onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
                    />
                </CardSection>

                <CardSection>
                    <InputField
                        label="Phone"
                        placeholder="55-5555555"
                        value={this.props.phone}
                        onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
                    />
                </CardSection>

                <CardSection style={{ alignItems: 'center' }}>
                    <Text style={styles.PickerTextStyle}>
                        Shift
                    </Text>
                    <Picker
                        selectedValue={this.props.shift}
                        onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
                        style={{ flex: 2, marginLeft: -58 }}
                    >
                        <Picker.Item label="Sunday" value="Sunday" />
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                    </Picker>
                </CardSection>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    PickerTextStyle: {
        fontSize: 18,
        paddingLeft: 10,
        flex: 1
    },
});

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);