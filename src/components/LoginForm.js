//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passChanged, loginUser } from '../actions';

import { Card, CardSection, InputField, Button, Spinner } from './common';

// create a component
class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPassChange = this.onPassChange.bind(this);
        this.onButtonPress = this.onButtonPress.bind(this);
        this.renderButton = this.renderButton.bind(this);
    }

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPassChange(text) {
        // console.log(this.props.pass);
        this.props.passChanged(text);
    }

    onButtonPress() {
        Keyboard.dismiss();
        const { email, pass } = this.props;
        this.props.loginUser({ email, pass });
    }

    renderButton() {
        // console.log(this.props.loading);
        if (this.props.loading) {
            return <Spinner />;
        }
        return (
            <Button onPress={this.onButtonPress}>
                login
            </Button>
        );
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.containerStyle}>
                    <Card>
                        <CardSection>
                            <InputField
                                label="Email"
                                placeholder="user@example.com"
                                onChangeText={this.onEmailChange}
                                value={this.props.email}
                            />
                        </CardSection>

                        <CardSection>
                            <InputField
                                secureTextEntry
                                label="Password"
                                placeholder="password"
                                onChangeText={this.onPassChange}
                                value={this.props.pass}
                            />
                        </CardSection>

                        <Text style={styles.errorTextStyle}>
                            {this.props.error}
                        </Text>

                        <CardSection>
                            {this.renderButton()}
                        </CardSection>

                    </Card>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        justifyContent: 'space-between',
        flex: 1
    },
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    },

});

const mapStateToProps = ({ auth }) => {
    const { email, pass, error, loading } = auth;
    return { email, pass, error, loading };
};

//make this component available to the app
export default connect(mapStateToProps, {
    emailChanged, passChanged, loginUser
})(LoginForm);
