import React, { useState } from "react";
import "../../styles/index.scss";
import Product from "./Product.jsx";

//create your first component
export function Home() {
	const [product, setProduct] = useState({
		productName: "",
		description: "",
		img: "",
		stock: false
	});
	const [productList, setProductList] = useState([]);

	const handelChange = event => {
		if (event.target.name == "stock") {
			setProduct({ ...product, stock: !product.stock });
		} else {
			setProduct({ ...product, [event.target.name]: event.target.value });
		}
	};

	const handelSubmit = event => {
		event.preventDefault();
		setProductList([...productList, product]);
		setProduct({
			productName: "",
			description: "",
			img: "",
			stock: false
		});
	};

	const deleteProduct = id => {
		let list = [...productList];
		list.splice(id, 1);
		setProductList(list);
	};

	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-6 col-sm-12">
					<div className="card form-products">
						<div className="card-body">
							<h2 className="card-title">Crea tus productos</h2>
							<form
								onChange={handelChange}
								onSubmit={handelSubmit}>
								<input
									value={product.productName}
									type="text"
									placeholder="Nombre de producto"
									className="form-control"
									name="productName"
								/>
								<input
									value={product.description}
									type="text"
									placeholder="Descripción del producto"
									className="form-control"
									name="description"
								/>
								<input
									type="text"
									placeholder="Url de la imagen"
									className="form-control"
									name="img"
									value={product.img}
								/>

								<div>
									<label name="stock">Stock</label>
									<input
										type="checkbox"
										name="stock"
										checked={product.stock}
									/>
								</div>

								<button className="btn btn-primary">
									Guardar Producto
								</button>
							</form>
						</div>
					</div>
				</div>

				<div className="col-md-6 col-sm-12">
					<div className="row list-products">
						{productList.map((product, index) => {
							return (
								<Product
									key={index}
									productName={product.productName}
									description={product.description}
									img={product.img}
									stock={product.stock}
									id={index}
									deleteProduct={deleteProduct}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
