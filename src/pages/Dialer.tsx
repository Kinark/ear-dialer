import styled from 'styled-components';

const Dialer = () => {
  return (
    <Wrapper>
      Unfortunately still
      <br />
      in construction :(
    </Wrapper>
  );
};

export default Dialer;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  font-size: ${({ theme }) => theme.font.sizes.smallTitle};
`;
