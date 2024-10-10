import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
