import React, { useState } from 'react';
import './App.css';
import './App.scss';
import Table from './Components/Table';
import Modal from './Components/Modal/Modal';
import backImg from './Images/background.jpg';


const App=()=> {
  const [type,setType] = useState("");
  const [brand,setBrand] = useState("");
  const [price,setPrice] = useState("");
  const [id,setId] =useState(1);
  const [productList,setProductList] = useState([]);
  const [modType,setModType] = useState("");
  const [modBrand,setModBrand] = useState("");
  const [modPrice,setModPrice] = useState("");

  const addProduct = ()=>{
    let valor= id+1;
    setId(valor);
    const clone = [...productList]
    clone.push({
      id,type,brand,price
    });
    setProductList(clone);
    setType("");
    setBrand("");
    setPrice("");
  }

  const editProduct=()=>{
    let index = productList.find(item=>{
      return item.id==id
    });
    index.type=modType;
    index.brand=modBrand;
    index.price=modPrice;
    setModType("");
    setModBrand("");
    setModPrice("");
  }
  const setEditModal = id => {
    let index = productList.find(item=>{
      return item.id==id
    });
    setModType(index.type);
    setModBrand(index.brand);
    setModPrice(index.price);
    setId(index.id);
  }

  const deleteItem = id =>{
    let index = productList.findIndex(item=>{
      return item.id==id
    });
    const clone = [...productList]
    clone.splice(index,1);
    setProductList(clone);
  }

  return (
    <div style={
      { 
          backgroundImage:`url(${backImg})`
      }
  } className="main-section">
      <Table lista={productList} setEditModal={setEditModal} deleteItem={deleteItem}></Table>
      <div className="modal-container">
        <Modal 
          type={type}
          brand={brand}
          price={price}
          prodType={setType}
          prodBrand={setBrand}
          prodPrice={setPrice}
          buttonTitle="Add Product"
          prodAction={addProduct}>
        </Modal>
        <Modal
          type={modType}
          brand={modBrand}
          price={modPrice}
          prodType={setModType}
          prodBrand={setModBrand}
          prodPrice={setModPrice}
          buttonTitle="Edit Product"
          prodAction={editProduct}>
        </Modal>
      </div>
    </div>
  );
}

export default App;
