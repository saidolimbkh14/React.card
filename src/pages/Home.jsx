import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { pizzas } from "../server";
import {Link} from 'react-router-dom'


const Home = () => {
  return (
    <>
      <Nav />
      <Header />
      <div className="parent">
        {pizzas?.map((el) => {
          return (
            <Link to={`/pizza/${el?.id}`} key={el?.id} className="oka">
              <img src={el?.img} alt="" />
              <h3>{el?.name}</h3>
              <p>{el?.desc}</p>
              <b>{el?.narxi}so'm</b>
            </Link>
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default Home;
