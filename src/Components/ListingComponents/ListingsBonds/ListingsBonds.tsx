import React from 'react';
import { Flex } from '../../../uikit/uikit';
import AdaptiveSidebar from '../AdaptiveSidebar/AdaptiveSidebar';

const ListingsBonds:React.FC = () => (
  <Flex justify="space-between" width="100%" margin="50px 0 0">
    <span>ListingsBonds</span>

    <AdaptiveSidebar />
  </Flex>
);

export default ListingsBonds;
