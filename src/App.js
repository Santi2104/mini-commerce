import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import { HeaderApp } from './components/headerApp';
import { ListProduct } from './components/listProduct';

function App() {
  return (
    <Container>
        <div className="App">
            <HeaderApp/>
            <ListProduct/>
        </div>
    </Container>
  );
}

export default App;
