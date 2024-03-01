import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Article from "./Pages/Article";
import ArticleList from "./Pages/ArticleList";

function App() {
  return (
    <Router>
      <div className="max-w-screen-md mx-auto pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/article" element={<Article />} />
          <Route path="/article-list" element={<ArticleList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
