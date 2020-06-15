import React from 'react'
import './ProgressBar.css'


export default class ProgressBar extends React.Component {
 
    render() {
        return (
            <div class="progress">
                <div class="progress-bar" role="progressbar" >5%</div>
            </div>
        );
    }
}