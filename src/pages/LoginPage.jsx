import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo2 from '../icons/logo2.svg';

// 스타일 컴포넌트 정의
const LoginContainer = styled.div`
  width: 100%;
  height: 844px;  /* 화면 전체 높이 */
  background-color: #ff3329;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 20px;
  box-sizing: border-box;
  position: relative;  /* 하단 영역을 위한 상대 위치 */
`;

const Logo = styled.img`
  width: 154px;  /* 원하는 크기로 설정 */
  height: 154px;
`;

// 이메일 로그인 버튼 스타일
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  align-items: center;
  margin-top: 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.6rem;
  padding: 10px 20px;
  border-radius: 20px;
  width: 200px;
  text-align: center;

  &:hover {
    background-color: white;
    color: #ff3329;
  }
`;

// 하단 추가 영역 스타일
const BottomBox = styled.div`
  width: 100%;
  height: 362px;
  position: absolute;
  top: 525px;
  left: 0;
  gap: 0;
  border-radius: 20px;
  background-color: white;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginPage = () => (
  <LoginContainer>
    <Logo src={logo2} alt="Logo2" /> {/* logo2.svg 삽입 */}

    {/* 하단 추가 영역 */}
    <BottomBox>
      <ButtonWrapper>
        <StyledLink to="/LoginEmail" style={{ backgroundColor: '#007bff', color: 'white' }}>
          이메일 로그인
        </StyledLink>
        <StyledLink to="/SignUp" style={{ backgroundColor: '#28a745', color: 'white' }}>
          회원가입
        </StyledLink>
      </ButtonWrapper>
    </BottomBox>
  </LoginContainer>
);

export default LoginPage;
