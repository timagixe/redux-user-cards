import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as AT from '../store/actions';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {
    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onAddAction} />
                {this.props.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onDeleteAction(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        persons: state.persons
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddAction: () => dispatch({type: AT.ADD_PERSON}),
        onDeleteAction: (id) => dispatch({type: AT.DELETE_PERSON, deleteId: id})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);