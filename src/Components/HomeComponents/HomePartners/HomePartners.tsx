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
          <HomepartnersImage src={require('../../../assets/Images/home/partners/partner1.svg')} />
        </HomePartnersItem>

        <HomePartnersItem>
          <HomepartnersImage src={require('../../../assets/Images/home/partners/partner2.svg')} />
        </HomePartnersItem>

        <HomePartnersItem>
          <HomepartnersImage src={require('../../../assets/Images/home/partners/partner3.svg')} />
        </HomePartnersItem>

        <HomePartnersItem>
          <HomepartnersImage src={require('../../../assets/Images/home/partners/partner4.svg')} />
        </HomePartnersItem>

        <HomePartnersItem>
          <HomepartnersImage src={require('../../../assets/Images/home/partners/partner5.svg')} />
        </HomePartnersItem>

        <HomePartnersItem>
          <HomepartnersImage src={require('../../../assets/Images/home/partners/partner6.svg')} />
        </HomePartnersItem>

        <HomePartnersItem>
          <HomepartnersImage src={require('../../../assets/Images/home/partners/partner7.svg')} />
        </HomePartnersItem>

        <HomePartnersItem>
          <HomepartnersImage src={require('../../../assets/Images/home/partners/partner8.svg')} />
        </HomePartnersItem>
      </HomePartnersWrap>
    </Container>
  </HomePartnersSC>
);

export default HomePartners;
