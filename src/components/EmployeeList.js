//import liraries
import _ from 'lodash';
import React, { Component } from 'react';
import { ListView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { employeesFetch } from '../actions';
import EmployeeListItem from './EmployeeListItem';
// create a component
class EmployeeList extends Component {
     constructor(props) {
        super(props);

        this.renderRow = this.renderRow.bind(this);
        }

    componentWillMount() {
        this.props.employeesFetch();

        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    createDataSource({ employees }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(employees);
    }

    renderRow(employee) {
        return <EmployeeListItem employee={employee} />;
    }

    render() {
        // console.log(this);
        return (
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid };
    });

    return { employees };
};

//make this component available to the app
export default connect(mapStateToProps, { employeesFetch })(EmployeeList);