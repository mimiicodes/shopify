/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct, removeSelectedProduct } from "../redux/actions/productActions";
import "./ProductDetails.scss"

  const ProductDetails = () => {
    const { productId } = useParams();
    let product = useSelector((state) => state.product);
    const { image, title, price, category, description } = product;
    const dispatch = useDispatch();
    const fetchProductDetail = async (id) => {
      const response = await axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .catch((err) => {
          console.log("Err: ", err);
        });
      dispatch(selectedProduct(response.data));
    };

    useEffect(() => {
      if (productId && productId !== "") fetchProductDetail(productId);
      return () => {
        dispatch(removeSelectedProduct());
      };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [productId]);
    return (
      <div className="loading-container">
        {Object.keys(product).length === 0 ? (
          <h3 className="loading-text">...Loading</h3>
        ) : (
          <div className="details-container">
            <div className="details-img-container">
              <img className="details-img" src={image} alt=""/>
            </div>
            <div className="details-text-container">
              <h1 className="details-h1">{title}</h1>
              <h2>
                <a className="ui teal tag label" >${price}</a>
              </h2>
              <h3 className="ui brown block header">{category}</h3>
              <p>{description}</p>
              <div className="ui vertical animated button" tabIndex="0">
                <div className="hidden content">
                  <i className="shop icon"></i>
                </div>
                <div className="visible content">Add to Cart</div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

export default ProductDetails;