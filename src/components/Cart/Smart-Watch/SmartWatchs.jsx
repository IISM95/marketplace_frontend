import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchSmartWatch } from "../../../features/SmartWatchSlice";
import "../../../styles/cart.css";
import SmartWatch from "./SmartWatch";

const SmartWatchs = () => {
  const { id } = useParams();
  const smartWatch = useSelector((state) => state.smartWatchReducer.smartWatch);
  console.log(smartWatch, 'hhh');
  const filtered = smartWatch.filter((item) => {
    if (!id) return true;
    return item.category === id;
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSmartWatch());
  }, [dispatch]);
  return (
    <div className="cart_container">
      {filtered.map((item) => {
        return (
            <SmartWatch
              key={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
				  discount={item.discount}
				  model={item.model}
            />
        );
      })}
    </div>
  );
};

export default SmartWatchs;