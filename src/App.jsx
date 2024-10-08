import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import MainPage from './pages/MainPage';
import LoginEmailPage from './pages/LoginEmailPage';
import SignUpPage from './pages/SignUpPage';
import MyProfilePage from './pages/MyProfilePage';
import EditProfilePage from './pages/EditProfilePage';
import AddProductPage from './pages/AddProductPage';
import PostUploadPage from './pages/PostUploadPage';
import UserProfilePage from './pages/UserProfilePage';
import FollowerListPage from './pages/FollowerListPage';
import PostListPage from './pages/PostListPage';
import SearchPage from './pages/SearchPage';

import TapNavi from './components/TabMenuComponents/TabNavi';

const GlobalStyle = createGlobalStyle`
    ${reset}
    
    span {
    color: red;
    font-size: 12px;
    }

    a{
        text-decoration : none;
        color : inherit;
    }

    button{
        border : none;
        cursor : pointer;
    }

    * {
    box-sizing: border-box;
    }
`;

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/login" element={<LoginEmailPage />} />
				<Route path="/signup" element={<SignUpPage />} />
				<Route path="/myprofile" element={<MyProfilePage />} />
				<Route path="/editprofile" element={<EditProfilePage />} />
				<Route path="/profile/user" element={<UserProfilePage />} />
				<Route path="/postupload" element={<PostUploadPage />} />
				<Route path="/addproduct" element={<AddProductPage />} />
				<Route path="/follower" element={<FollowerListPage />} />
				<Route path="/post" element={<PostListPage />} />
				<Route path="/search" element={<SearchPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
