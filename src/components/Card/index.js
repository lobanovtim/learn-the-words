import React from 'react';
import classnames from 'classnames';
import { CheckSquareOutlined, DeleteOutlined } from '@ant-design/icons';
import s from './Card.module.scss';

class Card extends React.Component {

    state = {
        done: false,
        isRemebered: false,
    }

    onCardClick = () => {
        this.setState(({done}) => {
            return {
                done: !done,
            }
        });
    }

    onIsRememberClick = () => {
        this.setState(({isRemembered, done}) => {
            return {
                isRemembered: true,
                done: true,
            }
        });
    }

    onDeletedClick = () => {
        console.log(`1 lvl`);
        this.props.onDeleted();
    }

    render() {
        const {eng, rus} = this.props;
        const {done, isRemembered} = this.state;

        return (
            <div className={s.root}>
                <div
                className={classnames(s.card, {
                    [s.done]: done,
                    [s.isRemembered]: isRemembered,
                })}
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
                <div
                className={s.icons}
                onClick={
                    this.onIsRememberClick
                }
                >
                    <CheckSquareOutlined />
                </div>
                <div
                className={s.icons}
                onClick={
                    this.onDeletedClick
                }
                >
                    <DeleteOutlined />
                </div>
            </div>
        )
    }
}

export default Card;
