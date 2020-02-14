import React from 'react';
import './Modal.scss';


const Modal = ({prodType,prodBrand,prodPrice,prodAction, type, brand, price,children, buttonTitle}) =>{

    return(
            <form className="modal-form">
                {children}
                <label htmlFor="type">Type</label>
                <input type="text" placeholder="Type" id="type" value={type} onChange={e=>{prodType(e.target.value)}}/>
                <label htmlFor="brand">Brand</label>
                <input type="text" placeholder="Brand" id="brand" value={brand} onChange={e=>{prodBrand(e.target.value)}}/>
                <label htmlFor="price">Price</label>
                <input type="text" placeholder="Price" id="price" value={price} onChange={e=>{prodPrice(e.target.value)}}/>
                <input type="button" value={buttonTitle} onClick={prodAction}/>
            </form>
    )

}

export default Modal;