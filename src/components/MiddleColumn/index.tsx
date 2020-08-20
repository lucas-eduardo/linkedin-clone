import React from 'react';

import LoadingFeedShare from '../Shimmer/LoadingFeedShare';
import LoadingFeedPost from '../Shimmer/LoadingFeedPost';

import FeedShare from './FeedShare';
import FeedPost from './FeedPost';

import { Container } from './styles';

interface ILoadingProps {
  isLoading: boolean;
}

const MiddleColumn: React.FC<ILoadingProps> = ({ isLoading }) => {
  return (
    <Container className="middle-column">
      {isLoading? (
        <>
          <LoadingFeedShare />
          <LoadingFeedPost />
          <LoadingFeedPost />
          <LoadingFeedPost />
          <LoadingFeedPost />
        </>
      ): (
        <>
          <FeedShare />
          <FeedPost />
          <FeedPost />
          <FeedPost />
          <FeedPost />
        </>
      )}
    </Container>
  );
};

export default MiddleColumn;
