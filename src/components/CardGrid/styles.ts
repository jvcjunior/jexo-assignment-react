import styled from 'styled-components';

export const CardGridContainer = styled.div`
  padding: 0 2em;
  max-width: 1920px;
  margin: 0 auto;
`
export const CardGridContent = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2em;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    grid-template-columns: repeat(2, 1fr);
  }  

  @media (min-width: ${(props) => props.theme.breakpoints.notebook}px) {
    grid-template-columns: repeat(3, 1fr);
  }  

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}px) {
    grid-template-columns: repeat(4, 1fr);
  } 
  
  @media (min-width: ${(props) => props.theme.breakpoints.widescreen}px) {
    grid-template-columns: repeat(5, 1fr);
  } 
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center; 
  align-items:center; 
  height: 100vh; 
  width: 100vw;
`;