import styled, { css } from "styled-components";
import { motion } from 'framer-motion';
import shrinkOnPress from "~/utils/shrinkOnPress";
import { CallTypes } from ".";

export const Button = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: block;
  padding: 12px 16px;
  background-color: ${({ theme }) => theme.colors.button};
  font-size: ${({ theme }) => theme.font.sizes.body};
  color: ${({ theme }) => theme.colors.body};
  border-radius: 100px;
  text-align: center;
  flex: 1;
  ${shrinkOnPress};
`;

export const Wrapper = styled(motion.div)<{ active: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 16px;
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 36px;
  padding: ${({ active }) => (active ? '14px 16px' : '0')};
  padding-right: 24px;
  height: ${({ active }) => (active ? '384.5' : '72')}px;
  transition: ${({
    theme: {
      animation: { easings },
    },
  }) => `padding ${easings.default}, height ${easings.default}, transform ${easings.quick}`};
  overflow: hidden;
  ${({ active }) =>
    !active &&
    css`
      &:active {
        transform: scale(0.97);
      }
    `}
  margin-bottom: 16px;
`;

export const Main = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.font.sizes.tiny};
`;

export const CallIcon = styled.div<{ type: CallTypes; active: boolean }>`
  height: 72px;
  width: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: ${({ active }) => (active ? 0 : 3)}px;
  border-top-left-radius: 100px;
  border-top-right-radius: ${({ active }) => (active ? 100 : 32)}px;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: ${({ active }) => (active ? 100 : 32)}px;
  background-color: ${({ theme, type }) => theme.colors[type]};
  transition: border-radius 300ms ease-out;
`;

export const MainInfo = styled.div`
  display: block;
  font-size: ${({ theme }) => theme.font.sizes.body};
  flex: 1;
  & div:first-child {
    font-size: ${({ theme }) => theme.font.sizes.smallTitle};
    font-weight: 600;
    color: ${({ theme }) => theme.colors.body};
  }
`;

export const EntryContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
`;

export const ButtonsRow = styled.div`
  display: flex;
  gap: 8px;
`;

export const NumberSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 0px;
  gap: 4px;
  color: ${({ theme }) => theme.colors.secondary};
  border: 1px solid ${({ theme }) => theme.colors.divider};
  border-radius: 16px;
  font-size: ${({ theme }) => theme.font.sizes.tiny};
  & div:first-child {
    font-size: ${({ theme }) => theme.font.sizes.body};
    color: ${({ theme }) => theme.colors.body};
  }
`;
