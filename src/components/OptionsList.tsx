import styled from 'styled-components';

import Img from '~/components/Img';

interface Option {
  label: string;
  icon: string;
  onClick: () => void;
}

const OptionsList = ({ options }: { options: Option[] }) => {
  return (
    <Wrapper>
      {options.map((option) => (
        <OptionItem key={option.label} onClick={option.onClick}>
          <div>
            <Img src={option.icon} height="16" width="16" />
            {option.label}
          </div>
        </OptionItem>
      ))}
    </Wrapper>
  );
};

export default OptionsList;

const Wrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  & li:last-child {
    border-bottom: none;
  }
`;

const OptionItem = styled.li`
  border-bottom: solid 1px ${({ theme }) => theme.colors.divider};
  & > div {
    margin: 2px 0;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 16px;
    cursor: pointer;
    font-size: ${({ theme }) => theme.font.sizes.body};
    border-radius: 16px;
    transition: background-color 150ms ease-out;
  }
  &:active {
    & > div {
      background-color: ${({ theme }) => theme.colors.placeholder};
    }
  }
`;
