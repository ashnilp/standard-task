import React from 'react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types'
import { Popup, Icon } from 'semantic-ui-react'
import TalentDetail from '../TalentFeed/TalentDetail.jsx';
import TalentCardDetail from '../TalentFeed/TalentCardDetail.jsx'

export default class TalentCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showSelection: false
        }

        this.openVideo = this.openVideo.bind(this)
        this.openDisplay = this.openDisplay.bind(this)
    };


    openVideo() {
        this.setState({
            showSelection: false
        })
    }

    openDisplay() {
        this.setState({
            showSelection: true
        })
    }


    render() {
        return (
            this.state.showSelection ? this.renderDisplay() : this.renderVideo()   
        )
    }


    renderVideo() {
        return (
            <div className="ui items">
                <div className="item">
                    <TalentCardDetail
                    />
                </div>
                <div className="item">
                    <div className="ui fluid four item menu">
                        <a className="item">
                            <i className="user icon" onClick={this.openDisplay}></i>
                        </a>
                        <a className="item">
                            <i className="file pdf outline icon"></i>
                        </a>
                        <a className="item">
                            <i className="linkedin icon"></i>
                        </a>
                        <a className="item">
                            <i className="github icon"></i>
                        </a>
                    </div>
                </div>
                <div className="item">
                    <div className="ui segment">
                        C#
                    </div>

                </div>
            </div>

        )
    }
    
    renderDisplay() {

        return (
            <div className="ui items">
                <div className="item">
                    <TalentDetail />
                </div>
                <div className="item">
                    <div className="ui fluid four item menu">
                        <a className="item">
                            <i className="video camera icon" onClick={this.openVideo}></i>
                        </a>
                        <a className="item">
                            <i className="file pdf outline icon"></i>
                        </a>
                        <a className="item">
                            <i className="linkedin icon"></i>
                        </a>
                        <a className="item">
                            <i className="github icon"></i>
                        </a>
                    </div>
                </div>
                <div className="item">
                    <div className="ui segment">
                        C#
                    </div>
                    
                </div>
            </div>
            
        )
    }
}
                    
/*
 * <div className="image">
                        <img classNameName="ui circular image" src="http://semantic-ui.com/images/avatar/small/jenny.jpg" />
                     </div>
                    <div className="content">
                        <a className="header">Header</a>
                        <div className="meta">
                            <span>Description</span>
                        </div>
                        <div className="description">
                            <p></p>
                        </div>
                        <div className="extra">
                            Additional Details
                        </div>
                    </div>
 * 
 * 
 * */