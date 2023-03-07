
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchForm from './SearchForm/SearchForm';


function App() {
  return (
   <>
   <Router>
    <Routes>
      <Route path='/' element={<SearchForm/>}/>
    </Routes>
   </Router>
   </>
  );
}

export default App;
