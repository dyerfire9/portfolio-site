import React, { Component } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCaretRight} from '@fortawesome/free-solid-svg-icons'
import './style.css'

class EducationItemContainer extends Component {
    state = { open: this.props.item.isExpanded }

    handleClick = () => {
        this.setState({ open: !this.state.open })
    }

    render() {
        return(
            <div className="education-item fade-in">
                <label className={`education-item-title ${this.state.open ? 'education-content-open' : 'education-content-closed'}`} onClick={this.handleClick}>
                    <h3 className="education-item-title-title"><FontAwesomeIcon icon={faCaretRight} className={this.state.open ? 'education-caret-open' : 'education-caret-closed'}/>{this.props.item.degree}, {this.props.item.school}</h3>                    
                    <p className="education-item-title-date">{this.props.item.time}</p>
                </label>
                <div className={`education-item-content ${this.state.open ? 'education-content-open' : 'education-content-closed'}`}>
                    <ul>

                        {this.props.item.descriptionItems.map((item, index) => {

                            if (item.list.length === 0){
                                return (
                                    <li key={index} dangerouslySetInnerHTML={{__html: item.title}}></li>
                                )
                            }

                            else{
                                return(
                                    <div>
                                         <li key={index} dangerouslySetInnerHTML={{__html: item.title}}></li>
                                        <ul>
                                        {item.list.map((value, index) => {
                                            return (<li key={index} dangerouslySetInnerHTML={{__html: value}}></li>)
                                        })
                                        }
                                        </ul>
                                    </div>

                                )
                            }

                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default EducationItemContainer;