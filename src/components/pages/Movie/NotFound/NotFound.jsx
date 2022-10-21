import styled from 'styled-components';

const Box = styled.div`
  color: #0e1721;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.01em;
  & h3 {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 140%;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    margin-bottom: 16px;
  }
  & p {
    margin-bottom: 4px;
  }
  & ul {
    list-style: inside;
    padding-left: 15px;
  }
`;

export const NotFound = ({ query }) => {
  return (
    <Box>
      <h3>Your query "{query}" did not find anything.</h3>
      <p>Proposals:</p>
      <ul>
        <li>Try different keywords</li>
        <li>Try genre ( comedy, melodrama, sports, drama )</li>
        <li>
          Try using the name of a movie or TV series, the name of an actor or
          director
        </li>
      </ul>
    </Box>
  );
};
