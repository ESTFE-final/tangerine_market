import React, { useState } from 'react';
// component 폴더에 있는 스타일 컴포넌트를 불러오기
import { Page, TitleWrap, ContentWrap, InputWrap, Input, BottomButton } from '../components/LoginComponents/loginindex';

const LoginPage = () => {
  // 상태를 관리하기 위한 useState 훅
  const [email, setEmail] = useState(''); // 이메일 상태
  const [password, setPassword] = useState(''); // 비밀번호 상태
  const [isButtonDisabled, setButtonDisabled] = useState(true); // 버튼 활성화 여부 상태

  // 이메일 입력 변화 처리 함수
  const handleEmailChange = (e) => {
    setEmail(e.target.value); // 이메일 상태 업데이트
    toggleButtonState(e.target.value, password); // 버튼 활성화 여부 업데이트
  };

  // 비밀번호 입력 변화 처리 함수
  const handlePasswordChange = (e) => {
    setPassword(e.target.value); // 비밀번호 상태 업데이트
    toggleButtonState(email, e.target.value); // 버튼 활성화 여부 업데이트
  };

  // 버튼 활성화 여부 업데이트 함수
  const toggleButtonState = (email, password) => {
    // 이메일과 비밀번호 모두 입력된 경우에만 버튼 활성화
    setButtonDisabled(!(email && password));
  };

  // 폼 제출 처리 함수
  const handleSubmit = (e) => {
    e.preventDefault(); // 기본 폼 제출 동작 방지
    console.log('로그인 요청 중...'); // 로그인 요청 시 메시지 출력
  };

  return (
    <Page>
      <TitleWrap>로그인</TitleWrap> {/* 제목 영역 */}
      <ContentWrap>
        <InputWrap>
          <Input
            type="email"
            placeholder="이메일을 입력하세요" // 이메일 입력 placeholder
            value={email} // 현재 이메일 상태
            onChange={handleEmailChange} // 입력 변화 처리 함수
          />
        </InputWrap>
      </ContentWrap>

      <ContentWrap>
        <InputWrap>
          <Input
            type="password"
            placeholder="비밀번호를 입력하세요" // 비밀번호 입력 placeholder
            value={password} // 현재 비밀번호 상태
            onChange={handlePasswordChange} // 입력 변화 처리 함수
          />
        </InputWrap>
      </ContentWrap>

      <BottomButton onClick={handleSubmit} disabled={isButtonDisabled}>
        확인 {/* 로그인 버튼 */}
      </BottomButton>
    </Page>
  );
};

export default LoginPage; // LoginPage 컴포넌트 내보내기
