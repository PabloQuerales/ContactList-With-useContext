import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";


export const Form = (props) => {
    const params = useParams()
    const {store, editContact, postContact} =useGlobalReducer()
    

    const [inputValue, setInputValue] = useState({
        name: "",
        phone: "",
        email: "",
        address: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        if (props.pathname == '/add-contact') {
            postContact(inputValue)
            setInputValue({
                name: "",
                phone: "",
                email: "",
                address: ""
            })
        } else {
            editContact(params.id, inputValue)
            setInputValue({
                name: "",
                phone: "",
                email: "",
                address: ""
            })
        }
    }
    let contact = store.contactList.find(contact => contact.id == params.id)
    useEffect(() => {
        if (props.pathname != '/add-contact') {
            setInputValue({
                name: `${contact.name}`,
                phone: `${contact.phone}`,
                email: `${contact.email}`,
                address: `${contact.address}`
            })
        }
    }, [])


    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValue({ ...inputValue, [name]: value });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label" >Fullname</label>
                <input type="text" className="form-control" required value={inputValue.name} name="name" onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" value={inputValue.email} name="email" onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Phone</label>
                <input type="text" className="form-control" required value={inputValue.phone} name="phone" onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
                <input type="text" className="form-control" value={inputValue.address} name="address" onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-primary w-100" >Save</button>
        </form>
    )
}