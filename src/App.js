import React from 'react';

import { CheckOutlined } from '@ant-design/icons';
import BackgroundBlock from './components/BackgroundBlock/index.js';
import HeaderBlock from './components/HeaderBlock/index.js';
import Paragraph from './components/Paragraph/index.js';
import Header from './components/Header/index.js';
import Card from './components/Card/index.js';
import s from './components/Card/CardsBlock.module.scss';

export const wordsList = [
  {
      eng: 'between',
      rus: 'между'
  },
  {
      eng: 'high',
      rus: 'высокий'
  },
  {
      eng: 'really',
      rus: 'действительно'
  },
  {
      eng: 'something',
      rus: 'что-нибудь'
  },
  {
      eng: 'most',
      rus: 'большинство'
  },
  {
      eng: 'another',
      rus: 'другой'
  },
  {
      eng: 'much',
      rus: 'много'
  },
  {
      eng: 'family',
      rus: 'семья'
  },
  {
      eng: 'own',
      rus: 'личный'
  },
  {
      eng: 'out',
      rus: 'из/вне'
  },
  {
      eng: 'leave',
      rus: 'покидать'
  },
];


function App() {
    return(
      <>
        <HeaderBlock>
          <Header>
            Учите слова онлайн
          </Header>
          <Paragraph>
            Воспользуйтесь карточками для запоминания и пополнения словарного запаса
          </Paragraph>
        </HeaderBlock>
        <BackgroundBlock>
          <div
          className={s.cardsBlock}
          >
          {
            wordsList.map(({eng, rus}, index) => (
            <Card key={index} eng={eng} rus={rus} />
            ))
          }
          </div>
        </BackgroundBlock>
        <HeaderBlock hideBackground>
        <Header>
            Учите слова онлайн снова и снова
          </Header>
          <Paragraph>
            Лучший способ начать учить слова <CheckOutlined />
          </Paragraph>
        </HeaderBlock>
      </>
    )
}

export default App;
