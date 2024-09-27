import { BrowserRouter, Routes, Route, Link, useLocation, Outlet } from "react-router-dom";
  import Login from "./pages/LoginPage";
  import About from "./pages/AboutPage";
  import Goods from "./pages/GoodsPage";


function App() {
  return (
    <BrowserRouter>
      <Link to="/"> Home </Link>
      <Link to="/Login"> Login </Link>
      <Link to="/About"> About </Link>
      <Link to="/Goods"> Goods </Link>

      <Link to="/Three"> Three </Link>
      {/* 라우트를 감싸줍니다. 차이점을 보기위한 Three*/}


      <Routes>
      
        <Route path="" element={<Index />}/>
        <Route path="/Login" element={<Login name='licat' />}/>
        <Route path="/Goods" element={<Goods />}/>
        <Route path="/About" element={<About />}/>

    {/*이 부분 부터 활용법 주의  */}
        <Route path="/three/*" element={<Outlet />}>
          <Route path="" element={<ThreeIndex />} />
         
          <Route path="hojunone/" element={<ThreeOne />} />
          <Route path="hojuntwo/" element={<ThreeTwo />} />
        </Route>
        {/* 여기까지 */}

        <Route path="/blog/:id" element={<Blog />}/>
      
      </Routes>
    </BrowserRouter>
  );
}

function Index(){
  return <h1>홈페이지</h1>
}


// function One({name}){
//   return <h1>{name} world1</h1>
// }

// function Two(){
//   return <h1>hello world2</h1>
// }

// function Three(){
//   return <h1>hello world3</h1>
// }


function Blog(){
  const location = useLocation()
  console.log(location)
  return <h1>hello Blog</h1>
}


// 이부분 활용법 주의
function ThreeIndex(){
  return <h1>여기가 Outlet을 활용한 app.js의 ThreeIndex 글 적는 부분</h1>
}


function ThreeOne(){
  return <h1>hello ThreeOne</h1>
}

function ThreeTwo(){
  return <h1>hello ThreeTwo</h1>
}

// 동기화 테스트를 위한 주석 잠시 추가 추후 삭제예정  

export default App;