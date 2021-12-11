 import Header from './Components/Header';
 import NotesPage from './Pages/NotesPage'; 
 import NotePage from './Pages/NotePage'
 import {
  BrowserRouter as Router, 
  Route, 
  match
} from "react-router-dom";
import './app.css';

function App() {
  return (
       

    <Router> 
      <div className="container dark">
      <div className="app ">
      <Header/>
        <Route path="/" exact component={NotesPage} /> 
        <Route path="/note/:id" component={NotePage} />
        </div>
        </div>
    </Router>
  );
}

export default App;
