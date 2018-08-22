import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectedTab } from '../tab/tabActions';

class TabHeader extends Component {
    render() {
        const isSelected = this.props.tab.selected === this.props.target;
        return (
            <li className={isSelected ? "active" : ""}>
                <a
                    href="javascript:;"
                    data-toggle="tab"
                    onClick={() => this.props.selectedTab(this.props.target)}
                    data-target={this.props.target}>
                    <i className={`fa fa-${this.props.icon}`}></i> {this.props.label}
                </a>
            </li>
        )
    }
}

const mapStateToProps = state => ({ tab: state.tab });
const mapDispatchToProps = dispatch => bindActionCreators({ selectedTab }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TabHeader);