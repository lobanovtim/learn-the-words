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
        console.log(`remember`);
        this.setState(({isRemebered}) => {
            return {
                isRemebered: !isRemebered,
            }
        });
    }

    onDeletedClick = () => {
        console.log(`1 lvl`);
        this.props.onDeleted();
    }

    render() {
        const {eng, rus} = this.props;
        const {done, isRemebered} = this.state;

        return (
            <div className={s.root}>
                <div
                className={classnames(s.card, {
                    [s.done]: done,
                    [s.isRemebered]: isRemebered,
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
