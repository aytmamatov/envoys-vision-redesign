import React from 'react';
import { Container, Flex } from '../../uikit/uikit';
import {
  NCWrap, NCtitle, NCBody, NCLargeItem,
  NCImage, NCContent, NCContentSubtitle,
  NCContentTitle, NCContentDate, NCContentMore,
  NCItem, NCItemImage, NCItemContent, NCItemSubtitle, NCItemTitle,
} from './NewsComponentsSC';

const NewsComponents: React.FC = () => (
  <NCWrap>
    <Container>
      <NCtitle>Последние новости</NCtitle>
      <NCBody>
        <NCLargeItem>
          <NCContent>
            <NCContentSubtitle color="#ffffff">Кыргызстан</NCContentSubtitle>
            <NCContentTitle color="#ffffff">
              В марте компании привлекли на фондовой бирже 1.3 млрд сомов
            </NCContentTitle>
            <Flex justify="space-between" align="baseline">
              <NCContentDate color="#ffffff">April 21 2022</NCContentDate>
              <NCContentMore href="" color="#ffffff">
                Подробнее
                {' '}
                <img
                  src={
                      require('../../assets/Images/home/news.svg').default
                    }
                  alt="Arrow-right"
                />
              </NCContentMore>
            </Flex>
          </NCContent>
          <NCImage>
            <img
              src={require('../../assets/Images/News/NewsPostsImages/1.jpg')}
              alt="Building"
            />
          </NCImage>
        </NCLargeItem>
        <NCItem>
          <NCItemImage>
            <img
              src={require('../../assets/Images/News/NewsPostsImages/2.jpg')}
              alt="aurum"
            />
          </NCItemImage>
          <NCItemContent>
            <NCItemSubtitle>Кыргызстан</NCItemSubtitle>
            <NCItemTitle>
              За неделю унция золота от НБ КР подорожала почти на $250
            </NCItemTitle>
            <Flex justify="space-between" align="baseline">
              <NCContentDate color="#F48020">April 21 2022</NCContentDate>
              <NCContentMore href="" color="#2C2C2C">
                Подробнее
                {' '}
                <img
                  src={
                      require('../../assets/Images/home/news.svg').default
                    }
                  alt="Arrow-right"
                />
              </NCContentMore>
            </Flex>
          </NCItemContent>
        </NCItem>
        <NCItem>
          <NCItemImage>
            <img
              src={require('../../assets/Images/News/NewsPostsImages/3.jpg')}
              alt="aurum"
            />
          </NCItemImage>
          <NCItemContent>
            <NCItemSubtitle>Кыргызстан</NCItemSubtitle>
            <NCItemTitle>
              За неделю унция золота от НБ КР подорожала почти на $250
            </NCItemTitle>
            <Flex justify="space-between" align="baseline">
              <NCContentDate color="#F48020">April 21 2022</NCContentDate>
              <NCContentMore href="" color="#2C2C2C">
                Подробнее
                {' '}
                <img
                  src={
                      require('../../assets/Images/home/news.svg').default
                    }
                  alt="Arrow-right"
                />
              </NCContentMore>
            </Flex>
          </NCItemContent>
        </NCItem>
        <NCItem>
          <NCItemImage>
            <img
              src={require('../../assets/Images/News/NewsPostsImages/4.jpg')}
              alt="aurum"
            />
          </NCItemImage>
          <NCItemContent>
            <NCItemSubtitle>Кыргызстан</NCItemSubtitle>
            <NCItemTitle>
              За неделю унция золота от НБ КР подорожала почти на $250
            </NCItemTitle>
            <Flex justify="space-between" align="baseline">
              <NCContentDate color="#F48020">April 21 2022</NCContentDate>
              <NCContentMore href="" color="#2C2C2C">
                Подробнее
                {' '}
                <img
                  src={
                      require('../../assets/Images/home/news.svg').default
                    }
                  alt="Arrow-right"
                />
              </NCContentMore>
            </Flex>
          </NCItemContent>
        </NCItem>
        <NCItem>
          <NCItemImage>
            <img
              src={require('../../assets/Images/News/NewsPostsImages/5.jpg')}
              alt="aurum"
            />
          </NCItemImage>
          <NCItemContent>
            <NCItemSubtitle>Кыргызстан</NCItemSubtitle>
            <NCItemTitle>
              За неделю унция золота от НБ КР подорожала почти на $250
            </NCItemTitle>
            <Flex justify="space-between" align="baseline">
              <NCContentDate color="#F48020">April 21 2022</NCContentDate>
              <NCContentMore href="" color="#2C2C2C">
                Подробнее
                {' '}
                <img
                  src={
                      require('../../assets/Images/home/news.svg').default
                    }
                  alt="Arrow-right"
                />
              </NCContentMore>
            </Flex>
          </NCItemContent>
        </NCItem>
      </NCBody>

      <NCBody>
        <NCLargeItem>
          <NCContent>
            <NCContentSubtitle color="#ffffff">Кыргызстан</NCContentSubtitle>
            <NCContentTitle color="#ffffff">
              В марте компании привлекли на фондовой бирже 1.3 млрд сомов
            </NCContentTitle>
            <Flex justify="space-between" align="baseline">
              <NCContentDate color="#ffffff">April 21 2022</NCContentDate>
              <NCContentMore href="" color="#ffffff">
                Подробнее
                {' '}
                <img
                  src={
                      require('../../assets/Images/home/news.svg').default
                    }
                  alt="Arrow-right"
                />
              </NCContentMore>
            </Flex>
          </NCContent>
          <NCImage>
            <img
              src={require('../../assets/Images/News/NewsPostsImages/1.jpg')}
              alt="Building"
            />
          </NCImage>
        </NCLargeItem>
        <NCItem>
          <NCItemImage>
            <img
              src={require('../../assets/Images/News/NewsPostsImages/2.jpg')}
              alt="aurum"
            />
          </NCItemImage>
          <NCItemContent>
            <NCItemSubtitle>Кыргызстан</NCItemSubtitle>
            <NCItemTitle>
              За неделю унция золота от НБ КР подорожала почти на $250
            </NCItemTitle>
            <Flex justify="space-between" align="baseline">
              <NCContentDate color="#F48020">April 21 2022</NCContentDate>
              <NCContentMore href="" color="#2C2C2C">
                Подробнее
                {' '}
                <img
                  src={
                      require('../../assets/Images/home/news.svg').default
                    }
                  alt="Arrow-right"
                />
              </NCContentMore>
            </Flex>
          </NCItemContent>
        </NCItem>
        <NCItem>
          <NCItemImage>
            <img
              src={require('../../assets/Images/News/NewsPostsImages/3.jpg')}
              alt="aurum"
            />
          </NCItemImage>
          <NCItemContent>
            <NCItemSubtitle>Кыргызстан</NCItemSubtitle>
            <NCItemTitle>
              За неделю унция золота от НБ КР подорожала почти на $250
            </NCItemTitle>
            <Flex justify="space-between" align="baseline">
              <NCContentDate color="#F48020">April 21 2022</NCContentDate>
              <NCContentMore href="" color="#2C2C2C">
                Подробнее
                {' '}
                <img
                  src={
                      require('../../assets/Images/home/news.svg').default
                    }
                  alt="Arrow-right"
                />
              </NCContentMore>
            </Flex>
          </NCItemContent>
        </NCItem>
        <NCItem>
          <NCItemImage>
            <img
              src={require('../../assets/Images/News/NewsPostsImages/4.jpg')}
              alt="aurum"
            />
          </NCItemImage>
          <NCItemContent>
            <NCItemSubtitle>Кыргызстан</NCItemSubtitle>
            <NCItemTitle>
              За неделю унция золота от НБ КР подорожала почти на $250
            </NCItemTitle>
            <Flex justify="space-between" align="baseline">
              <NCContentDate color="#F48020">April 21 2022</NCContentDate>
              <NCContentMore href="" color="#2C2C2C">
                Подробнее
                {' '}
                <img
                  src={
                      require('../../assets/Images/home/news.svg').default
                    }
                  alt="Arrow-right"
                />
              </NCContentMore>
            </Flex>
          </NCItemContent>
        </NCItem>
        <NCItem>
          <NCItemImage>
            <img
              src={require('../../assets/Images/News/NewsPostsImages/5.jpg')}
              alt="aurum"
            />
          </NCItemImage>
          <NCItemContent>
            <NCItemSubtitle>Кыргызстан</NCItemSubtitle>
            <NCItemTitle>
              За неделю унция золота от НБ КР подорожала почти на $250
            </NCItemTitle>
            <Flex justify="space-between" align="baseline">
              <NCContentDate color="#F48020">April 21 2022</NCContentDate>
              <NCContentMore href="" color="#2C2C2C">
                Подробнее
                {' '}
                <img
                  src={
                      require('../../assets/Images/home/news.svg').default
                    }
                  alt="Arrow-right"
                />
              </NCContentMore>
            </Flex>
          </NCItemContent>
        </NCItem>
      </NCBody>
    </Container>
  </NCWrap>
);

export default NewsComponents;
