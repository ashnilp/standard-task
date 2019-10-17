import React from 'react';
import ReactDOM from 'react-dom';
import ReactPlayer from 'react-player';

export default class TalentCardDetail extends React.Component {
    render() {
        return (
            <div className="ui items">
                <div className="item">
                    <ReactPlayer
                        url='https://vimeo.com/243556536'
                        className='react-player'
                        playing
                        width='548px'
                        height='450px'
                    />
                </div>
            </div>
        )
    }
}