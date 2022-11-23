/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const [componentMount, setComponentMont] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("http://fakestoreapi.com/products");
      if (componentMount) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        setComponentMont(false);
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return <>Loading...</>;
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2">All</button>
          <button className="btn btn-outline-dark me-2">Men's Cloting</button>
          <button className="btn btn-outline-dark me-2">Women's Cloting</button>
          <button className="btn btn-outline-dark me-2">Jewelerys</button>
          <button className="btn btn-outline-dark me-2">Eletronics</button>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div className="card h-100 text-center p-4" key={product.id}>
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                    height="250px"
                  />
                  <div className="card-body">
                    <h4 className="card-title mb-0">
                      {product.title.substring(0, 14)}...
                    </h4>
                    <p className="card-text lead fw-bold my-3">
                      ${product.price}
                    </p>
                    <p className="lead fw-semibold">
                      Rating: {product.rating.rate}
                      <i className="fa fa-star"></i>
                    </p>
                    <p className="card-text lead">
                      {product.description.substring(0, 40)}
                    </p>
                    <button className="btn btn-outline-dark px-4 py-2">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
