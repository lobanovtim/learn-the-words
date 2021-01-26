import React, { Component } from 'react';
import database from "./services/firebase";

import { ClockCircleOutlined, HomeOutlined, SmileOutlined } from '@ant-design/icons';

import BackgroundBlock from './components/BackgroundBlock';
import Button from './components/Button';
import CardList from './components/CardList';
import Footer from './components/Footer';
import Header from './components/Header';
import Paragraph from './components/Paragraph';
import Section from './components/Section';

import { wordsList } from './wordsList';

import firstBackground from './assets/background.jpg';
import secondBackground from './assets/back2.jpg';

import s from './App.module.scss';

class App extends Component {

    state = {
      wordArr: wordsList,
    }

    componentDidMount() {
      database.ref().once('value').then(res => {
        this.setState({
            wordArr: res.val(),
        }, this.setNewWord);
      })
    }

    // setNewWord = () => {
    //     const {wordArr} = this.state;
    //     database.ref().set([...wordArr, {
    //         id: +new Date(),
    //         eng: 'mouse',
    //         rus: 'мышь',
    //     }])
    // }

    handleDeletedItem = (id) => {
      this.setState(({wordArr}) => {
        const idx = wordArr.findIndex(item => item.id === id);
        const newWordArr = [
          ...wordArr.slice(0, idx),
          ...wordArr.slice(idx + 1)
        ];
        return {
          wordArr: newWordArr,
        };
      });
    }
  
    render() {
      const { wordArr } = this.state;
      return(
        <>
            <BackgroundBlock
                backgroundImg={firstBackground}
                fullHeight
            >
                <Header white>
                    Время учить слова онлайн
                </Header>
                <Paragraph white>
                    Используйте карточки для запоминания и пополняйте активный словарный запас.
                </Paragraph>
            </BackgroundBlock>
            <Section className={s.textCenter}>
                <Header size="l">
                    Мы создали уроки, чтобы помочь вам увереннее разговаривать на английском языке
                </Header>
                <div className={s.motivation}>
                    <div className={s.motivationBlock}>
                        <div className={s.icons}>
                            <ClockCircleOutlined /> 
                        </div>
                        <Paragraph small>
                            Учитесь, когда есть свободная минутка
                        </Paragraph>
                    </div>

                    <div className={s.motivationBlock}>
                        <div className={s.icons}>
                            <HomeOutlined />
                        </div>
                        <Paragraph small>
                            Откуда угодно — дома, в&nbsp;офисе, в&nbsp;кафе
                        </Paragraph>
                    </div>

                    <div className={s.motivationBlock}>
                        <div className={s.icons}>
                            <SmileOutlined />
                        </div>
                        <Paragraph small>
                            Разговоры по-английски без&nbsp;неловких пауз и&nbsp;«mmm,&nbsp;how&nbsp;to&nbsp;say…»
                        </Paragraph>
                    </div>
                </div>
            </Section>
            <Section bgColor="#f0f0f0" className={s.textCenter}>
                <Header size='l'>
                    Начать учить английский просто
                </Header>
                <Paragraph>
                    Клика по карточкам и узнавай новые слова, быстро и легко!
                </Paragraph>
                <CardList
                refEngIput={el => this.refInput = el}
                onDeletedItem={this.handleDeletedItem} 
                item={wordArr}
                />
            </Section>
            <BackgroundBlock
                backgroundImg={secondBackground}
            >
                <Header size="l" white>
                    Изучайте английский с персональным сайтом помощником
                </Header>
                <Paragraph white>
                    Начните прямо сейчас
                </Paragraph>
                <Button
                onClick={() => this.refInput.current.focus()}
                >
                    Начать бесплатный урок
                </Button>
            </BackgroundBlock>
            <Footer/>
        </>
        );
    }
}

export default App;
