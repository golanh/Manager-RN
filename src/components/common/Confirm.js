//import liraries
import React from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native';

import { CardSection } from './CardSection';
import { Button } from './Button';

// create a component
const Confirm = ({ children, onAccept, OnDecline, visible }) => {
    const { CardSectionStyle, textStyle, containerStyle } = styles;

    return (
        <Modal
            animationType="slide"
            onRequestClose={() => { }}
            transparent
            visible={visible}
        >
            <View style={containerStyle}>
                <CardSection style={CardSectionStyle}>
                    <Text style={textStyle}>{children}</Text>
                </CardSection>

                <CardSection>
                    <Button onPress={onAccept}> YES </Button>
                    <Button onPress={OnDecline}> NO </Button>
                </CardSection>
            </View>
        </Modal>
    );
};

// define your styles
const styles = StyleSheet.create({
    CardSectionStyle: {
        justifyContent: 'center'
    },
    textStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40
    },
    containerStyle: {
        backgroundColor: 'rgba(0,0,0,0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    },
});

//make this component available to the app
export { Confirm };
