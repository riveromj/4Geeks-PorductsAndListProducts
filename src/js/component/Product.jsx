import React from "react";
import PropTypes from "prop-types";
import "../../styles/index.scss";

function Product(props) {
	console.log(props);
	return (
		<div className="card product">
			<img src={props.img} className="card-img-top" alt="imga-product" />
			<div className="card-body">
				<h1 className="card-title"> {props.productName} </h1>
				<p className="card-text"> {props.description} </p>
				{props.stock ? (
					<div className="alert alert-success" role="alert">
						Hay Stock
					</div>
				) : (
					<div className="alert alert-danger" role="alert">
						Sin Stock
					</div>
				)}
				<div className="row">
					<button
						type="button"
						className="btn btn-danger"
						onClick={e => props.deleteProduct(props.id)}>
						Eliminar
					</button>
					<button type="button" className="btn btn-secondary">
						Editar
					</button>
				</div>
			</div>
		</div>
	);
}

Product.propTypes = {
	img: PropTypes.string,
	productName: PropTypes.string,
	description: PropTypes.string,
	stock: PropTypes.bool,
	id: PropTypes.number,
	deleteProduct: PropTypes.func
};

export default Product;
