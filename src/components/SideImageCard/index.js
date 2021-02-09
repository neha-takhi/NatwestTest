import React from 'react';
import {CardWrapper} from './style';

export default function SideImageCard({image,content,title}) {
    return <CardWrapper>
        <div className="image-wrapper">
        <img className="main-image" src={image}>
        </img>
        <img className="side-image" src="/assets/instagram-btn.png"/>
        </div>
        <div className="content-wrapper">
            <div className="heading">
                {title}
            </div>
            <div className="content">
            {content}
            </div>
        </div>
    </CardWrapper>
}