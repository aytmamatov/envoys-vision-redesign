import React from 'react';
import { Container } from '../../../uikit/uikit';
import {
  HomepartnersImage, HomePartnersItem, HomePartnersSC, HomePartnersWrap,
} from './HomePartnersSC';

const HomePartners:React.FC = () => (
  <HomePartnersSC>
    <Container>
      <HomePartnersWrap>
        <HomePartnersItem>
          <HomepartnersImage src={require('../../../assets/Images/home/partners/partner1.svg').default} />
        </HomePartnersItem>

        <HomePartnersItem>
          <HomepartnersImage src={require('../../../assets/Images/home/partners/partner2.svg').default} />
        </HomePartnersItem>

        <HomePartnersItem>
          <HomepartnersImage src={require('../../../assets/Images/home/partners/partner3.svg').default} />
        </HomePartnersItem>

        <HomePartnersItem>
          <HomepartnersImage src={require('../../../assets/Images/home/partners/partner4.svg').default} />
        </HomePartnersItem>

        <HomePartnersItem>
          <HomepartnersImage src={require('../../../assets/Images/home/partners/partner5.svg').default} />
        </HomePartnersItem>

        <HomePartnersItem>
          <HomepartnersImage src={require('../../../assets/Images/home/partners/partner6.svg').default} />
        </HomePartnersItem>

        <HomePartnersItem>
          <HomepartnersImage src={require('../../../assets/Images/home/partners/partner7.svg').default} />
        </HomePartnersItem>

        <HomePartnersItem>
          <HomepartnersImage src={require('../../../assets/Images/home/partners/partner8.svg').default} />
        </HomePartnersItem>
      </HomePartnersWrap>
    </Container>
  </HomePartnersSC>
);

export default HomePartners;
