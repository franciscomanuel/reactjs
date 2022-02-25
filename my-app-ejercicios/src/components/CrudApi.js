import React, { useState, useEffect } from 'react';
import { helpHttp } from '../helper/helpHttp';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import Loader from './Loader';
import Message from './Message';

const CrudApi = () => {

  const [db, setDb] = useState(null);
	const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

	let api = helpHttp();
	const url = "http://localhost:5000/santos";

    // Si el objeto es vacío, indica que lo ejecuta solamente la primera vez.
	useEffect(() => {
		setLoading(true);
		helpHttp().get(url).then(res => {
			if(res.err){
				setDb(null);
				setError(res);
			} else {
				setDb(res);
				setError(null)
			}
		}).finally(() => setLoading(false));
	}, []);
    
	const createData = (data) => {
		data.id = Date.now();

		let options = {
			body: data,
			headers: {"content-type": "application/json"}
		};

		api.post(url, options).then(res => {
			if(!res.err) {
				setDb([...db, res]);
			} else {
				setError(res);
			}
		});
	};

	const updateData = (data) => {

		let endpoint = `${url}/${data.id}`;

		let options = {
			body: data,
			headers: {"content-type": "application/json"}
		};

		api.put(endpoint, options).then(res => {
			
			if(!res.err) {
				let newData = db.map((el) => el.id === data.id ? data : el);
				setDb(newData);
			} else {
				setError(res);
			}
		})
		
	};

	const deleteData = (id) => {

		let endpoint = `${url}/${id}`;

		let confirm = window.confirm(`¿Seguro que desea eliminar el registro con id ${id}?`);

		if(confirm) {

			let options = {
				headers: {"content-type": "application/json"}
			};

			api.drop(endpoint, options).then(res => {
				if(!res.err) {
					let elements = db.filter(el => el.id !== id);
					setDb(elements);
				} else {
					setError(res);
				}
			})
		} else {
			return;
		}
		
	};

	return(
		<div>
			<h2>CRUD App</h2>
			<article className='grid-1-2'>
				<CrudForm 
					createData={createData} 
					updateData={updateData} 
					dataToEdit={dataToEdit} 
					setDataToEdit={setDataToEdit} 
				/>
				{loading && <Loader />}
				{error && <Message msg={`Error ${error.status}: ${error.statusText}`} bgColor="#dc3545" />}
				{db && <CrudTable 
								data={db} 
								setDataToEdit={setDataToEdit}
								deleteData={deleteData}
							/>
				}
			</article>
			
		</div>
	)
}

export default CrudApi;