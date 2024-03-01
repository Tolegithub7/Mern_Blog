import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Article from "./Pages/Article";
import ArticleList from "./Pages/ArticleList";

//components
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="max-w-screen-md mx-auto pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/article" element={<Article />} />
          <Route path="/articles-list" element={<ArticleList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
