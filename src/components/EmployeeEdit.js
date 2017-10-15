//import liraries
import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';

import { employeeUpdate, employeeSave, employeeDelete } from '../actions/index';
import { Card, CardSection, Button, Confirm } from './common';
import EmployeeForm from './EmployeeForm';

// create a component
class EmployeeEdit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false
        };

        this.onSavePress = this.onSavePress.bind(this);
        this.onTextPress = this.onTextPress.bind(this);
        this.onConfirmAccept = this.onConfirmAccept.bind(this);
        this.onConfirmDecline = this.onConfirmDecline.bind(this);
    }


    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
        });
    }


    onSavePress() {
        const { name, phone, shift } = this.props;
        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
    }

    onTextPress() {
        const { phone, shift } = this.props;
        Communications.text(phone, `Your upcoming shift is.... : ${shift}`);
    }

    onConfirmAccept() {
        // console.log('accept');
        this.props.employeeDelete({ uid: this.props.employee.uid });
    }
    onConfirmDecline() {
        this.setState({ showModal: false });
    }


    render() {
        // console.log(this.props.employee);
        return (
            <Card>
                <EmployeeForm {...this.props} />

                <CardSection>
                    <Button onPress={this.onSavePress}>
                        Save Changes
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onTextPress}>
                        Text
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={() => this.setState({ showModal: true })}>
                        Fire Employee
                    </Button>
                </CardSection>
                <Confirm 
                visible={this.state.showModal}
                onAccept={this.onConfirmAccept}
                OnDecline={this.onConfirmDecline}                
                >
                    Are you sure you want to delete this?
                </Confirm>
            </Card>
        );
    }
}

const mapStateToProp = (state) => {
    const { name, phone, shift, employee } = state.employeeForm;
    return { name, phone, shift, employee };
};

//make this component available to the app
export default connect(mapStateToProp, {
    employeeUpdate, employeeSave, employeeDelete
})(EmployeeEdit);
