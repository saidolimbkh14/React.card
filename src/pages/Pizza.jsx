import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { pizzas } from "../server";

const Pizza = () => {

const {id} = useParams ();

const paramsFind = pizzas?.find((el) => {
  return el?.id === +id
})
 

  return (
    <>
      <Nav />
      <div className="fchyu">
      <img src={paramsFind?.img} alt="" />
      <div className="fchyuu">
      <h1>{paramsFind?.name}</h1>
      <p>{paramsFind?.desc}</p>
       <button>Savatga qoshish</button>
       <br/>
       <br/>
      <b>{paramsFind?.narxi}so`m</b>
      
     
      </div>
      
      </div>
      <Footer />
    </>
  );
};

export default Pizza;
