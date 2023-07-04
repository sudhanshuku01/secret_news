import './Css/Navbar.css';
import './Css/News.css'
import './Css/About.css'
import Navbar from './Components/Navbar';
import News from   './Components/News'
import React, { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'
import {
	BrowserRouter as Router,
	Routes,
	Route ,
} from 'react-router-dom';
import About from './Components/About';
const App=()=> {
  const [progress,setProgress]=useState(0)
  const country='in';
  const pageSize=10;
    return (
       <Router>
         <Navbar />
        <LoadingBar
        color='blue'
        height={2}
        progress={progress}
         />
        <Routes>
        <Route  exact path="/" element={<News   setProgress={setProgress}  key="general" category="general" country={country} pageSize={pageSize}/>}/>
        <Route exact path="/business"   element={<News setProgress={setProgress}  key="business" category="business"  country={country} pageSize={pageSize}/>}/>
        <Route exact path="/entertainment"   element={<News setProgress={setProgress}  key="entertainment" category="entertainment"  country={country} pageSize={pageSize}/>}/>
        <Route exact path="/health"   element={<News setProgress={setProgress}  key="health" category="health"  country={country} pageSize={pageSize}/>}/>
        <Route exact path="/science"  element={<News setProgress={setProgress}  key="science" category="science"  country={country} pageSize={pageSize} />}/>
        <Route exact path="/sports"  element={<News setProgress={setProgress}  key="sports" category="sports"  country={country} pageSize={pageSize} />}/>
        <Route exact path="/technology"   element={<News setProgress={setProgress}  key="technology" category="technology"  country={country} pageSize={pageSize}/>}/>
        <Route exact path='/about' key="about" element={<About/>}/>
        </Routes>
       </Router>
    )
}
export default App