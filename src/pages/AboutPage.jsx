// src/components/About.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => (
  <div>
    <h1>회사소개</h1>
    <Link to="/Three">목표 페이지로 이동</Link>
  </div>
);


export default AboutPage;

