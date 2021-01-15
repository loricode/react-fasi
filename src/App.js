import './App.css';
import { useEffect, useState } from 'react';
//components 
import Navbar from './components/Navbar';
import Card from './components/Card';

const baseUrl = 'http://localhost:8080/';

function App() {
 
  const [ listProduct, setListProduct ] = useState([]);

   useEffect( () => {
      getProducts();
   },[])

  const getProducts = async() => {
    const response = await fetch(baseUrl+'api/product');
    if(response.ok){  
       const data = await response.json();
       setListProduct(data);
    }
  }

  return (
    <div className="App">
      <Navbar/>   
       <div className="container">

       { listProduct.map((product) => (
              <Card  key={product.id} {...product} />
        ))}

      </div>  
    </div>
  );
}

export default App;
