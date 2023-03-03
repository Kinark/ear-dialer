import styled from 'styled-components';
import { motion } from 'framer-motion';

import commonVariants from '~/utils/commonVariants';

const Separator = ({ children }: { children: string }) => {
  return (
    <SeparatorWrapper
      layout="position"
      initial="groupGone"
      animate="visible"
      exit="removed"
      variants={commonVariants}
    >
      <Line />
      {children}
      <Line />
    </SeparatorWrapper>
  );
};

export default Separator;

const SeparatorWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.font.sizes.smallTitle};
  color: ${({ theme }) => theme.colors.strongDivider};
  gap: 16px;
  margin-bottom: 16px;
`;

const Line = styled.div`
  display: block;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.strongDivider};
  flex: 1;
`;
