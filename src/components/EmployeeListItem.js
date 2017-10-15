//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';

import { CardSection } from './common';
import { editEmp } from '../actions';

// create a component
class EmployeeListItem extends Component {
    constructor(props) {
        super(props);

        this.onRowPress = this.onRowPress.bind(this);
    }

    onRowPress() {
        // console.log('row press');
        this.props.editEmp(this.props.employee);
    }

    render() {
        // console.log(`row: ${this.props.employee.name}`);
        return (
            <TouchableWithoutFeedback onPress={this.onRowPress}>
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>
                            {this.props.employee.name}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    },
});

//make this component available to the app
export default connect(null, { editEmp })(EmployeeListItem);
