import React, { useEffect, useRef, useState } from 'react';
import './CommonComponents.css';

// Navigation Bar 컴포넌트
export const NavigationBar = ({ title, rightButton }) => {
	return (
		<nav className="common-nav">
			<div className="nav-left-group">
				<button
					type="button"
					className="nav-left-button"
					aria-label="뒤로가기"
				></button>
				<h1 className="nav-title">{title}</h1>
			</div>
			{rightButton && <div className="nav-right-button">{rightButton}</div>}
		</nav>
	);
};

// Input 컴포넌트
export const Input = ({ type, placeholder, value, onChange }) => {
	return (
		<input
			type={type}
			className="common-input"
			placeholder={placeholder}
			value={value}
			onChange={onChange}
		/>
	);
};

// Alert Modal 컴포넌트
export const AlertModal = ({
	modalShow,
	alertText,
	modalClose,
	buttonText,
}) => {
	const dialogRef = useRef();

	useEffect(() => {
		if (modalShow) {
			dialogRef.current.showModal();
		} else {
			dialogRef.current.close();
		}
	}, [modalShow]);

	return (
		<dialog ref={dialogRef} className="common-alert-modal">
			<form method="dialog" className="modal-wrap">
				<p>{alertText}</p>
				<div className="alert-buttons">
					<button
						type="button"
						className="alert-button-left"
						onClick={modalClose}
					>
						취소
					</button>
					<button type="button" className="alert-button-right">
						{buttonText}
					</button>
				</div>
			</form>
		</dialog>
	);
};

// Post Modal 컴포넌트
export const PostModal = ({ isOpen, onClose, options = [] }) => {
	const [isVisible, setIsVisible] = useState(isOpen);
	const [isDragging, setIsDragging] = useState(false);
	const [startY, setStartY] = useState(0);

	useEffect(() => {
		setIsVisible(isOpen);
	}, [isOpen]);

	// 모달 닫기
	const handleClose = () => {
		setIsVisible(false);
		onClose();
	};

	// 옵션 선택 -> 모달에 있는 옵션을 클릭했을 때 함수를 실행하고 모달을 닫음
	const handleOptionClick = (option) => {
		if (option.onClick) {
			option.onClick();
		}
		handleClose();
	};

	// 스와이프로 모달 닫기 -> 터치/마우스 시작 시 실행
	const handleStart = (clientY) => {
		setIsDragging(true);
		setStartY(clientY);
	};

	// 스와이프로 모달 닫기 -> 터치/마우스 이동 시 실행
	const handleMove = (clientY) => {
		if (!isDragging) return;
		const deltaY = clientY - startY;
		if (deltaY > 50) {
			handleClose();
			setIsDragging(false);
		}
	};

	// 드레그 또는 스와이프 동작 종료
	const handleEnd = () => {
		setIsDragging(false);
	};

	// 터치 이벤트 핸들러 -> 터치 스크린에서 처리 (모바일 등)
	const handleTouchStart = (e) => handleStart(e.touches[0].clientY);
	const handleTouchMove = (e) => handleMove(e.touches[0].clientY);
	const handleTouchEnd = handleEnd;

	// 마우스 이벤트 핸들러 -> 마우스를 사용하는 기기에서 처리 (데스크톱 등)
	const handleMouseDown = (e) => handleStart(e.clientY);
	const handleMouseMove = (e) => handleMove(e.clientY);
	const handleMouseUp = handleEnd;

	return (
		<aside
			className={`common-post-modal ${isVisible ? 'visible' : ''}`}
			onTouchStart={handleTouchStart}
			onTouchMove={handleTouchMove}
			onTouchEnd={handleTouchEnd}
			onMouseDown={handleMouseDown}
			onMouseMove={handleMouseMove}
			onMouseUp={handleMouseUp}
			onMouseLeave={handleMouseUp}
		>
			<div className="post-modal-content" role="dialog" aria-modal="true">
				<button
					type="button"
					className="post-modal-handle"
					onClick={handleClose}
					aria-label="닫기"
				></button>
				<ul>
					{options.map((option, index) => (
						<li key={index}>
							<button
								type="button"
								className="post-modal-option"
								onClick={() => handleOptionClick(option)}
							>
								{option.text}
							</button>
						</li>
					))}
				</ul>
			</div>
		</aside>
	);
};
