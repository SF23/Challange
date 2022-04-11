import './App.css';
import Product from './componants/Product';
import products from './Products.json';
import styled from 'styled-components';
function App() {
  return (
    <AppFrame className="App">
      <h1>hello</h1>
      {products.map((product , index) => <Product product={product} key={index}></Product>)}
    </AppFrame>
  );
}

const AppFrame = styled.div`text-align : center;
display:flex;

`;

export default App;
