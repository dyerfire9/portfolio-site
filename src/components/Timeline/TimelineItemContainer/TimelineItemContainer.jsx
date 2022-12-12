import React, { Component } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCaretRight} from '@fortawesome/free-solid-svg-icons'
import './style.css'

class TimelineItemContainer extends Component {
    state = { open: this.props.item.isExpanded }

    handleClick = () => {
        this.setState({ open: !this.state.open })
    }

    render() {
        return(
            <div className="timeline-item fade-in">
                <label className={`timeline-item-title ${this.state.open ? 'timeline-content-open' : 'timeline-content-closed'}`} onClick={this.handleClick}>
                    <h3 className="timeline-item-title-title"><FontAwesomeIcon icon={faCaretRight} className={this.state.open ? 'timeline-caret-open' : 'timeline-caret-closed'}/>{this.props.item.position}, {this.props.item.company}</h3>                    
                    <p className="timeline-item-title-date">{this.props.item.time}</p>
                </label>
                <div className={`timeline-item-content ${this.state.open ? 'timeline-content-open' : 'timeline-content-closed'}`}>
                    <ul>
                        {this.props.item.descriptionItems.map((item, index) => {
                            return (
                                <li key={index} dangerouslySetInnerHTML={{__html: item}}></li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default TimelineItemContainer;