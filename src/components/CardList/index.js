import React, { Component } from 'react';
import getTranslateWord from '../../services/dictionary';
import Card from '../Card/index.js';
import s from './CardList.module.scss'
import { Input, Form, Button } from 'antd';

const { Search } = Input;

class CardList extends Component {
    state = {
        isBusy: false,
        value: '',
        label: '',
    }

    // formRef = React.createRef();
    // inputEngRef = React.createRef();

    // constructor(props) {
    //     super(props);

    //     props.refEngInput && props.refEngInput(this.inputEngRef);
    // }

    onInputChange = (evt) => {
        this.setState({
            value: evt.target.value
        })
    }

    getTheWord = async () => {
        const value = this.state;
        const getWord = await getTranslateWord(this.state.value);
        console.log(getWord);
        this.setState(({value}) => {
            return {
                value: '',
                label: `${value} - ${getWord.translate}`,
                isBusy: false,
            }
        })
    }

    onSubmitForm = async () => {
        this.setState({
            isBusy: true,
        }, this.getTheWord) 
    }
    // onSubmitForm = (values) => {
    //     const {onSubmit} = this.props;
    //     console.log('values')

    //     onSubmit && onSubmit(values);
    //     this.formRef.current.resetFields();
    // };

    renderWordForm = () => {
        const {value, label, isBusy} = this.state;
        return (

        <div className={s.form}>
            {/* <Form
                ref={this.formRef}
                name="basic"
                layout="inline"
                onFinish={this.onSubmitForm}
            >
                <Form.Item
                    label="English word"
                    name="eng"
                >
                    <Input 
                        ref={this.inputEngRef}
                        placeholder="input"
                    />
                </Form.Item>
                <Form.Item
                    label="Русское слово"
                    name="rus"
                >
                    <Input 
                        placeholder="input"
                    />
                </Form.Item>
                <Form.Item>
                    <Button
                    type="primary"
                    htmlType="submit"
                    >
                        Добавить
                    </Button>
                </Form.Item>
            </Form> */}
                <div>
                    {this.state.label}
                </div>
            <Search
                placeholder='Добавь новое слово для изучения'
                allowClear
                enterButton="Добавить"
                size="large"
                value={value}
                loading={isBusy}
                onChange={this.onInputChange}
                onSearch={this.onSubmitForm}
            />
        </div>
        )
    }
   
    render() {
        const {item = [], onDeletedItem} = this.props;
        return (
            <>
                {this.renderWordForm()}
                <div className={s.root}>
                {
                    item.map(({eng, rus, id}, index) => (
                    <Card
                        onDeleted={()=> {
                            console.log(`2 lvl`);
                            onDeletedItem(id);
                        }}
                        key={id}
                        eng={eng}
                        rus={rus}
                    />
                    ))
                }
                </div>
            </>
        );
    }
} 
export default CardList
