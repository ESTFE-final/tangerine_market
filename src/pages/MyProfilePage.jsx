import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const MyProfilePage = () => (
  <div>
    <h1>내 프로필 페이지입니다</h1>
    <Link to='/editprofile'>프로필 편집 페이지로 이동</Link>
    <div>
      <Link to='/addproduct'>판매 상품 등록 페이지로 이동</Link>
    </div>
    <div>
      <Link to='/follower'>팔로워 리스트 페이지로 이동</Link>
    </div>
  </div>
);

export default MyProfilePage;
