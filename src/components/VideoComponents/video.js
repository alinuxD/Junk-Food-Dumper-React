import React, { Component } from 'react'
import ReactPlayer from 'react-player'

class Video extends Component {
    render () {
        return (
        <div className='player-wrapper'>
            <ReactPlayer
            url= 'video/TA44_Project_Video_Final_Cut.mp4'
            width='100%'
            height='100%'
            controls = {true}
            />
        </div>
        )
    }
}

export default Video;