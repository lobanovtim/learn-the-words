import React from 'react';
import s from './BackgroundBlock.module.scss';

const BackgroundBlock = ({children, backgroundImg, fullHeigth = false}) => {
    const styleCover = {backgroundImage: `url(${backgroundImg})`};
    if (fullHeigth) {
        styleCover.heigth = '100vh';
    }
    return (
        <div className={s.cover} style={styleCover}>
            <div className={s.wrap}>
                {children}
            </div>
        </div>
    );
}

export default BackgroundBlock;