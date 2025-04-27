import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Form } from "../components/Form";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const AddContact = () => {
    const path = useLocation()
    const {store,dispatch} = useGlobalReducer()

    const handleClick= ()=>{
        dispatch ({ type: "HIDDEN_MESSAGE", payload: "hidden" })
    }

    return (
        <div className="container">
            <h1 className="text-center mt-5">{path.pathname == "/add-contact" ? "Add New Contact" : "Edit Contact"}</h1>
            <h3 className={`text-center text-success ${store.hiddenMessage}`} >{path.pathname == "/add-contact" ? "Contact Created Successfully" : "Contact Edited Successfully"}</h3>
            <Form pathname={path.pathname}/>
            <Link to={"/"}>
                <span onClick={handleClick}>or get back to contact</span>
            </Link>
        </div>
    )
}