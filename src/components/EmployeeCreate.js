//import liraries
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { employeeUpdate, employeeCreate } from '../actions/index';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

// create a component
class EmployeeCreate extends Component {
    constructor(props) {
        super(props);
        this.onButtonPress = this.onButtonPress.bind(this);
    }

    onButtonPress() {
        const { name, phone, shift } = this.props;

        this.props.employeeCreate({ name, phone, shift: shift || 'Sunday' });
    }


    render() {
        // console.log('create form');
        return (
            <Card>
                <EmployeeForm {...this.props} />

                <CardSection>
                    <Button onPress={this.onButtonPress}>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProp = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
};

//make this component available to the app
export default connect(mapStateToProp, { employeeUpdate, employeeCreate })(EmployeeCreate);
