import React from 'react';

import LoadingTrendingPanel from '../Shimmer/LoadingTrendingPanel';

import TrendingPanel from './TrendingPanel';

import { Container } from './styles';

interface ILoadingProps {
  isLoading: boolean;
}

const RightColumn: React.FC<ILoadingProps> = ({ isLoading }) => {
  return (
    <Container className="right-column">
      {isLoading ? (
        <LoadingTrendingPanel />
      ) : (
        <>
          <TrendingPanel title="Assuntos mais discutidos" />
          <TrendingPanel title="Os cursos mais visualizados hoje" />
        </>
      )}
    </Container>
  );
};

export default RightColumn;
