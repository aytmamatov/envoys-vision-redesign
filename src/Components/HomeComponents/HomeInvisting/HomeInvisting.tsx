import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Container } from '../../../uikit/uikit';
import HomeInvistingAdaptive from '../HomeInvistingAdaptive/HomeInvisting';
import {
  HomeInvisting2Text, HomeInvisting2Title, HomeInvistingItem,
  HomeInvistingOption, HomeInvistingOptionText, HomeInvistingSC,
  HomeInvistingText, HomeInvistingTitle, HomeInvistingWrap,
} from './HomeInvistingSC';

const HomeInvisting:React.FC = () => {
  const [options, setOptions] = React.useState(0);

  const { t } = useTranslation();

  function checkItem() {
    if (options === 0) {
      // eslint-disable-next-line react/jsx-no-useless-fragment
      return (<></>);
    } if (options === 1) {
      return (
        <>
          <HomeInvisting2Title>
            {t('home.InfoBlock.option1.titl2')}
          </HomeInvisting2Title>
          <HomeInvisting2Text>
            {t('home.InfoBlock.option1.text')}
          </HomeInvisting2Text>
        </>
      );
    }
    return (
      <>
        <HomeInvisting2Title>
          {t('home.InfoBlock.option2.titl2')}
        </HomeInvisting2Title>
        <HomeInvisting2Text>
          {t('home.InfoBlock.option2.text')}
        </HomeInvisting2Text>
      </>
    );
  }

  return (
    <HomeInvistingSC>
      <Container>
        <HomeInvistingTitle>
          {t('home.InfoBlock.title')}
        </HomeInvistingTitle>

        <HomeInvistingText>
          {t('home.InfoBlock.text')}
        </HomeInvistingText>

        <Button>
          {t('home.InfoBlock.btn')}
        </Button>

        <HomeInvistingWrap>
          <HomeInvistingItem>
            <HomeInvistingOption
              className={options === 1 ? 'active' : ''}
              onMouseEnter={() => setOptions(1)}
              onMouseLeave={() => setOptions(0)}
            >

              <HomeInvistingOptionText>
                {t('home.InfoBlock.option1.title')}
              </HomeInvistingOptionText>
            </HomeInvistingOption>
            <HomeInvistingOption
              className={options === 2 ? 'active' : ''}
              onMouseEnter={() => setOptions(2)}
              onMouseLeave={() => setOptions(0)}
            >

              <HomeInvistingOptionText>
                {t('home.InfoBlock.option2.title')}
              </HomeInvistingOptionText>
            </HomeInvistingOption>
          </HomeInvistingItem>

          <HomeInvistingItem className={options === 0 ? 'bg-none' : ''}>
            {checkItem()}
          </HomeInvistingItem>
        </HomeInvistingWrap>

        <HomeInvistingAdaptive />
      </Container>
    </HomeInvistingSC>
  );
};

export default HomeInvisting;
