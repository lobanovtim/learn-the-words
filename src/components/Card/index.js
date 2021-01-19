import React from 'react';
import classnames from 'classnames';
import s from './Card.module.scss';

class Card extends React.Component {

    state = {
        done: false,
    }

    onCardClick = () => {
        this.setState({
            done: true,
        });
    }
    render() {
        const {eng, rus} = this.props;
        const {done} = this.state;

        return (
            <div
            className={classnames(s.card, {[s.done]: done})}
            onClick={
                this.onCardClick
            }
            >
                <div className={s.cardInner}>
                    <div className={s.cardFront}>
                        { eng }
                    </div>
                    <div className={s.cardBack}>
                        { rus }
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;