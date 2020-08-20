import React from 'react';

import LoadingProfilePanel from '../Shimmer/LoadingProfilePanel';

import ProfilePanel from './ProfilePanel';
import HashtagPanel from './HashtagPanel';

import { Container } from './styles';

interface ILoadingProps {
  isLoading: boolean;
}

const LeftColumn: React.FC<ILoadingProps> = ({ isLoading }) => {
  return (
    <Container className="left-column">
      {isLoading ? (
        <LoadingProfilePanel />
      ) : (
        <>
          <ProfilePanel />
          <HashtagPanel />
        </>
      )}
    </Container>
  );
};

export default LeftColumn;
