import React from 'react'
import classes from './Post.module.css'

const MyPosts = (props) => {
    return (
        <div className={classes.item}>
            <img src={'https://www.liveabout.com/thmb/pElYdfgKoydmsrso8fiU1wd-jO0=/1449x1449/smart/filters:no_upscale()/Avatar_12_HR_01-56a00ca93df78cafda9fd17c.jpg'}></img>
            { props.message }
            <div>
                <span>Like </span>
                <span>{ props.likesCount }</span>
            </div>
        </div>
    );
};

export default MyPosts;