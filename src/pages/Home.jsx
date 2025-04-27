import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Card } from "../components/Card";

export const Home = () => {

  const {store, getContactList, createUser} =useGlobalReducer()

useEffect(() => {
	createUser()
	getContactList()
}, [])

return (
	<div className="container">
		<div className="d-flex flex-row-reverse">
			<Link to="/add-contact">
				<button className="btn btn-primary my-2">Add new Contact</button>
			</Link>
		</div>
		{store.contactList.length > 0 ? store.contactList.map((data) => {
			return (
				<Card key={data.id} address={data.address} email={data.email} name={data.name} phone={data.phone} id={data.id} />
			)
		}) : "NO HAY CONTACTOS CREADOS, POR FAVOR AGREGUE UNO"
		}
	</div>
)
}