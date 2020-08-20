import styled, { css } from 'styled-components';
import { GrLinkedin } from 'react-icons/gr';
import { AiFillHome, AiOutlineBell, AiFillCaretDown } from 'react-icons/ai';

export const Container = styled.header`
  background: var(--color-header);

  padding: 0 30px;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  z-index: 2;

  display: none;

  @media (min-width: 1180px) {
    display: block;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;

  max-width: 1128px;
  height: 52px;

  margin: 0 auto;

  .left,
  .right nav {
    display: flex;
    align-items: center;
  }

  .right nav {
    height: 100%;

    button {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      min-width: 90px;
      min-height: 100%;

      color: var(--color-icons);

      cursor: pointer;

      background: none;
      border: 0;
      outline: 0;

      span {
        display: flex;
      }

      &:hover {
        color: var(--color-white);
      }

      &.active {
        border-bottom: 2px solid var(--color-white);
      }
    }
  }
`;

export const LinkedInIcon = styled(GrLinkedin)`
  width: 34px;
  height: 34px;

  color: var(--color-linkedin);
  background: #fff;

  border-radius: 4px;
  flex-shrink: 0;
`;

export const SearchInput = styled.input`
  width: 100%;

  margin-left: 12px;

  padding: 7.5px 8px;

  background: var(--color-input);

  border: none;
  border-radius: 2px;
  outline: none;

  color: var(--color-black);
  font-size: 14px;

  &:focus {
    background: var(--color-white);
  }
`;

const generalIconCSS = css`
  width: 24px;
  height: 24px;
`;

export const HomeIcon = styled(AiFillHome)`
  ${generalIconCSS}
`;

export const NotificationsIcon = styled(AiOutlineBell)`
  ${generalIconCSS}
`;

export const ProfileCircle = styled.img`
  width: 24px;
  height: 24px;

  border-radius: 50%;
  border: 1px solid var(--color-icons);
`;

export const CareDownIcon = styled(AiFillCaretDown)`
  width: 16px;
  height: 16px;
`;
