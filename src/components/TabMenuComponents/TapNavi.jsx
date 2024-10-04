import React from 'react';
import { Link } from 'react-router-dom';

// SVG 이미지 import
import iconMain from '../../icons/icon-home.svg';
import iconAbout from '../../icons/icon-user.svg';
import iconServices from '../../icons/icon-user.svg';
import iconContact from '../../icons/icon-user.svg';
import iconHelp from '../../icons/icon_edit 2.svg';

// 탭 정보를 담은 배열
const tabs = [
	{ path: '/', label: '홈', icon: iconMain },
	{ path: '/about', label: '채팅', icon: iconAbout },
	{ path: '/services', label: '게시물 목록', icon: iconServices },
	{ path: '/contact', label: '게시물 작성', icon: iconContact },
	{ path: '/help', label: '프로필', icon: iconHelp },
];

function TapNavi() {
	return (
		<div className="tap-navi">
			{tabs.map((tab, index) => (
				<Link key={index} to={tab.path}>
					<button>
						<img src={tab.icon} alt={`${tab.label} icon`} /> {tab.label}
					</button>
				</Link>
			))}
		</div>
	);
}

export default TapNavi;
