import React, { Component } from 'react'
import { PropTypes } from 'prop-types';

class VisitorDetail extends Component {
    render() {
        const visitor = this.props.data
        return (
            <li>
                <div class="collapsible-header">
                    <i class="material-icons">person</i>
                    {visitor.firstName + " " + visitor.lastName}
                    <span class="new badge" data-badge-caption={visitor.IdNumber}>ID Number: </span>
                </div>
                <div class="collapsible-body">
                    <div className="row">
                        <div className="col s3"><b>ID Type:</b> {visitor.typeId}</div>
                        <div className="col s3"><b>ID Number:</b> {visitor.IdNumber}</div>
                        <div className="col s3"><b>Gender:</b> {visitor.gender}</div>
                        <div className="col s3"><b>Nationality:</b> {visitor.nationality}</div>
                    </div>
                    <div className="row">
                        <div className="col s3"><b>Agency:</b> {visitor.agency}</div>
                        <div className="col s3"><b>Mobile:</b> {visitor.mobile}</div>
                        <div className="col s6"><b>Comments:</b> {visitor.comments}</div>
                    </div>
                </div>
            </li>
        )
    }
}
VisitorDetail.propTypes = {
    data: PropTypes.isRequired
};
export default VisitorDetail