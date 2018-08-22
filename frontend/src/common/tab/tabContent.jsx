import React, { Component } from 'react';
import { connect } from 'react-redux';

const  mapStateToProps = state  => ({tab: state.tab});

class TabContent extends Component {
    render() {
        const isSelected = this.props.tab.selected === this.props.id;
        return (
            <div id={this.props.id} className={`tab-pane ${isSelected ? "active" : ""}`}>
                {this.props.children} 
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(TabContent);