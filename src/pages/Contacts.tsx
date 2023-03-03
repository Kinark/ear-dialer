import styled from 'styled-components';

const Contacts = () => {
  return (
    <Wrapper>
      Unfortunately still
      <br />
      in construction :(
    </Wrapper>
  );
};

export default Contacts;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  font-size: ${({ theme }) => theme.font.sizes.smallTitle};
`;
