import React, { useState } from 'react';
// component 폴더에 있는 스타일 컴포넌트를 불러오기
import { Page, TitleWrap, ContentWrap, InputTitle, InputWrap, Input,
	ErrorMessageWrap, BottomButton } from '../components/LoginComponents/loginindex';

const SignupPage = () => {
	// 상태를 관리하기 위한 useState 훅
	const [email, setEmail] = useState(''); // 이메일 상태
	const [password, setPassword] = useState(''); // 비밀번호 상태
	const [confirmPassword, setConfirmPassword] = useState(''); // 비밀번호 확인 상태
	const [emailError, setEmailError] = useState(''); // 이메일 오류 메시지 상태
	const [passwordError, setPasswordError] = useState(''); // 비밀번호 오류 메시지 상태
	const [confirmPasswordError, setConfirmPasswordError] = useState(''); // 비밀번호 확인 오류 메시지 상태
	const [isButtonDisabled, setButtonDisabled] = useState(true); // 버튼 활성화 여부 상태

	// 이메일 입력 변화 처리 함수
	const handleEmailChange = (e) => {
		setEmail(e.target.value); // 이메일 상태 업데이트
		validateForm(e.target.value, password, confirmPassword); // 폼 유효성 검사
	};

	// 비밀번호 입력 변화 처리 함수
	const handlePasswordChange = (e) => {
		setPassword(e.target.value); // 비밀번호 상태 업데이트
		validateForm(email, e.target.value, confirmPassword); // 폼 유효성 검사
	};

	// 비밀번호 확인 입력 변화 처리 함수
	const handleConfirmPasswordChange = (e) => {
		setConfirmPassword(e.target.value); // 비밀번호 확인 상태 업데이트
		validateForm(email, password, e.target.value); // 폼 유효성 검사
	};

	// 폼 유효성 검사 함수
	const validateForm = (email, password, confirmPassword) => {
		let isValid = true; // 초기 유효성 변수

		// 이메일 유효성 검사
		if (!email.includes('@')) {
			setEmailError('올바른 이메일 주소를 입력해주세요'); // 오류 메시지 설정
			isValid = false; // 유효성 플래그 false로 설정
		} else {
			setEmailError(''); // 오류 메시지 초기화
		}

		// 비밀번호 유효성 검사
		if (password.length < 8) {
			setPasswordError('영문, 숫자, 특수문자 포함 8자 이상 입력해주세요'); // 오류 메시지 설정
			isValid = false; // 유효성 플래그 false로 설정
		} else {
			setPasswordError(''); // 오류 메시지 초기화
		}

		// 비밀번호 확인 유효성 검사
		if (password !== confirmPassword) {
			setConfirmPasswordError('비밀번호가 일치하지 않습니다'); // 오류 메시지 설정
			isValid = false; // 유효성 플래그 false로 설정
		} else {
			setConfirmPasswordError(''); // 오류 메시지 초기화
		}

		setButtonDisabled(!isValid); // 버튼 활성화 여부 업데이트
	};

	// 폼 제출 처리 함수
	const handleSubmit = (e) => {
		e.preventDefault(); // 기본 폼 제출 동작 방지
		console.log('회원가입 요청 중...'); // 회원가입 요청 시 메시지 출력
	};

	return (
		<Page>
			<TitleWrap>회원가입</TitleWrap> {/* 제목 영역 */}
			<ContentWrap>
				<InputWrap>
					<Input
						type="email"
						placeholder="이메일을 입력하세요" // 이메일 입력 placeholder
						value={email} // 현재 이메일 상태
						onChange={handleEmailChange} // 입력 변화 처리 함수
					/>
				</InputWrap>
				<ErrorMessageWrap>{emailError}</ErrorMessageWrap> {/* 이메일 오류 메시지 출력 */}
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
				<ErrorMessageWrap>{passwordError}</ErrorMessageWrap> {/* 비밀번호 오류 메시지 출력 */}
			</ContentWrap>

			<ContentWrap>
				<InputWrap>
					<Input
						type="password"
						placeholder="비밀번호를 다시 입력하세요" // 비밀번호 확인 placeholder
						value={confirmPassword} // 현재 비밀번호 확인 상태
						onChange={handleConfirmPasswordChange} // 입력 변화 처리 함수
					/>
				</InputWrap>
				<ErrorMessageWrap>{confirmPasswordError}</ErrorMessageWrap> {/* 비밀번호 확인 오류 메시지 출력 */}
			</ContentWrap>

			<BottomButton onClick={handleSubmit} disabled={isButtonDisabled}>
				가입하기 {/* 회원가입 버튼 */}
			</BottomButton>
		</Page>
	);
};

export default SignupPage; // SignupPage 컴포넌트 내보내기
