import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Food_Main.css";
import { data } from "../../restaurantData";
import Discount from "../Assets/discount.svg";
import CloseIcon from "@mui/icons-material/Close";
import { Drawer, Box } from "@mui/material";
import { Navbar } from "./Navbar";
import ScrollToTop from "react-scroll-to-top";
import { useWindowScroll } from "react-use";
import { useNavigate } from "react-router-dom";
import { PreLoader } from "../PreLoader";
const Img = styled.img`
  cursor: pointer;
  display: block;
  marginright: 20px;
  width: 250px;
  objectfit: contain;
  height: 250px;
  &:hover {
    transform: scale(1.05);
    transition: transform 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
    backface-visibility: visible;
  }
`;

const Wrapper = styled.header`
  max-width: 100vw;
  margin-top: 90px;
  background: #171a29;
`;
const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  lazyLoading: "progressive",
  useCSS: true,
};
function Food_Main() {
  const navigate = useNavigate();
  // Preloader Fake Promise
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      isLoading(false);
    }, 3000);
  }, []);

  
  const handleClick = (id) => {
    localStorage.setItem("foodId", JSON.stringify(data[+id]));
    navigate(`/food/${id}`);
  };

  const [foodItems, setfoodItems] = useState([]);
  const [isDraweropen, setisDraweropen] = useState(false);

  useEffect(() => {
    setfoodItems(data);
  }, []);

  const { x, y } = useWindowScroll();
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrolled((y / height) * 100);
  }, [y]);

  const sortingLinks = (e) => {
    let btns = e.currentTarget.querySelectorAll("p");
    btns.forEach((btn) => {
      if (btn.innerHTML === e.target.innerHTML)
        btn.classList.add("active_link");
      else btn.classList.remove("active_link");
    });
    let newArr = [...foodItems];
    if (e.target.innerHTML === "Delivery Time") {
      newArr.sort((a, b) => a.average_time - b.average_time);
    } else if (e.target.innerHTML === "Cost: Low To High") {
      newArr.sort((a, b) => a.average_cost - b.average_cost);
    } else if (e.target.innerHTML === "Cost: High To Low") {
      newArr.sort((a, b) => b.average_cost - a.average_cost);
    } else if (e.target.innerHTML === "Rating") {
      if (newArr.rating == "N/A") {
        newArr.rating = 0;
      }
      newArr.sort((a, b) => b.rating - a.rating);
    }
    setfoodItems(newArr);
  };

  const clear_btn = () => {
    let inputs = document.querySelectorAll(".check");
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].checked = false;
    }
  };
  window.document.onload = function () {
    window.document.addEventListener("load", clear_btn, true);
  };
  const showRestaurants = () => {
    let foodForm = document.getElementById("foodForm");
    let checkBoxes = foodForm.querySelectorAll('input[type="checkbox"]');
    let result = [];
    checkBoxes.forEach((item) => {
      if (item.checked) {
        result.push(item.value.toLowerCase());
      }
    });
    let array = [],
      resturantId = [];
    for (var i = 0; i < data.length; i++) {
      let cuisines = data[i].cuisines;
      for (var j = 0; j < cuisines.length; j++) {
        if (
          result.includes(cuisines[j].toLowerCase().trim()) &&
          !resturantId.includes(data[i].id)
        ) {
          array.push(data[i]);
          resturantId.push(data[i].id);
        }
      }
    }
    setfoodItems(array);
    setisDraweropen(false);
  };
  return loading ? (
    <PreLoader />
  ) : (
    <>
      <div className="scroll-container">
        <div className="indicator" style={{ width: `${scrolled}%` }}></div>
      </div>{" "}
      <ScrollToTop smooth color="#fc8019" />
      <Navbar />
      <Drawer
        anchor="right"
        open={isDraweropen}
        onClose={() => {
          setisDraweropen(false);
        }}
      >
        <Box role="presentation" p={6} width="500px">
          <CloseIcon
            className="close_icon"
            onClick={() => {
              setisDraweropen(false);
            }}
            style={{ cursor: "pointer" }}
          />
          <span className="h2">&nbsp;Filters</span>
          <div className="cuisines" id="foodForm">
            <div className="cuisine_1">
              <label class="control control-checkbox">
                <input
                  type="checkbox"
                  id="american"
                  value="american"
                  className="check"
                />
                <span className="check_Box">&nbsp;American</span>
                <div class="control_indicator"></div>
              </label>
              <label class="control control-checkbox">
                <input
                  type="checkbox"
                  id="bakery"
                  value="bakery"
                  className="check"
                />
                <span className="check_Box">&nbsp;Bakery</span>
                <div class="control_indicator"></div>
              </label>
            </div>
            <div className="cuisine_2">
              <label class="control control-checkbox">
                <input
                  type="checkbox"
                  id="bengali"
                  value="bengali"
                  className="check"
                />
                <span className="check_Box">&nbsp;Bengali</span>
                <div class="control_indicator"></div>
              </label>
              <label class="control control-checkbox">
                <input
                  type="checkbox"
                  id="beverages"
                  value="beverages"
                  className="check"
                />
                <span className="check_Box">&nbsp;Beverages</span>
                <div class="control_indicator"></div>
              </label>
            </div>
            <div className="cuisine_3">
              <label class="control control-checkbox">
                <input
                  type="checkbox"
                  id="biryani"
                  value="biryani"
                  className="check"
                />
                <span className="check_Box">&nbsp;RO</span>
                <div class="control_indicator"></div>
              </label>
              <label class="control control-checkbox">
                <input
                  type="checkbox"
                  id="chinese"
                  value="chinese"
                  className="check"
                />
                <span className="check_Box">&nbsp;Cane</span>
                <div class="control_indicator"></div>
              </label>
            </div>
            <div className="cuisine_4">
              <label class="control control-checkbox">
                <input
                  type="checkbox"
                  id="combo"
                  value="combo"
                  className="check"
                />
                <span className="check_Box">&nbsp;Notification</span>
                <div class="control_indicator"></div>
              </label>
              <label class="control control-checkbox">
                <input
                  type="checkbox"
                  id="continental"
                  value="continental"
                  className="check"
                />
                <span className="check_Box">&nbsp;Continental</span>
                <div class="control_indicator"></div>
              </label>
            </div>
            <div className="cuisine_5">
              <label class="control control-checkbox">
                <input
                  type="checkbox"
                  id="desserts"
                  value="desserts"
                  className="check"
                />
                <span className="check_Box">&nbsp;Thalis</span>
                <div class="control_indicator"></div>
              </label>
            </div>
          </div>
          <button className="clear_btn" onClick={clear_btn}>
            CLEAR
          </button>
          <button className="show_food_btn" onClick={showRestaurants}>
            SHOW SHOPS
          </button>
        </Box>
      </Drawer>
      <Wrapper>
        <div style={{ background: "#171a29", padding: "30px 180px" }}>
          <div className="container my-3">
            <Slider {...settings}>
              <div className="col">
                <Img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsqXJ_iOKa4wV-vOuK5CzL8hw2KWD0on1tow&s"
                  alt="promotion img"
                />
              </div>
              <div className="col">
                <Img
                  src="data:image/jpeg;base64,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"
                  alt="promotion img"
                />
              </div>
              <div className="col">
                <Img
                  src="data:image/jpeg;base64,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"
                  alt="promotion img"
                />
              </div>
              <div className="col">
                <Img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8BPoV6MzhmwV1G3ujoy1alnDHax6no0Z4Ow&s"
                  alt="promotion img"
                />
              </div>
              
            </Slider>
          </div>
        </div>
      </Wrapper>
      <div className="container_navbar">
        <div className="nav_food">
          <h2 className="restaurantNum">{foodItems.length} Water Services</h2>
          <div className="action_buttons" onClick={sortingLinks}>
            <p className="link">Relevance</p>
            <p className="link">Delivery Time</p>
            <p className="link">Rating</p>
            <p className="link">Cost: Low To High</p>
            <p className="link">Cost: High To Low</p>
            <p
              className="filter_link"
              onClick={() => {
                setisDraweropen(true);
              }}
            >
              Filters&nbsp;<i class="fa fa-filter"></i>
            </p>
          </div>
        </div>
      </div>
      <div className="container_card">
        {foodItems.map((food_data) => (
          <>
            <div
              className="food_card"
              key={food_data.id}
              onClick={() => handleClick(food_data.id)}
            >
              {food_data.promoted && (
                <div className="promoted" id="is_promote">
                  PROMOTED
                </div>
              )}
              <img
                src={food_data.img_url}
                alt="Food_Image"
                className="food_image"
              ></img>
              <h4 className="Header_card">{food_data.name}</h4>
              <p className="para_card">{food_data.cuisines.join(",")}</p>
              <div className="food_details">
                <div
                  className="rating"
                  style={{
                    backgroundColor:
                      food_data.rating < 4 ? "#db7c38" : "#48c479",
                  }}
                >
                  <i class="far fa-star"></i>&nbsp;{food_data.rating}
                </div>
                <div className="average_time">
                  {food_data.average_time}&nbsp;MINS
                </div>
                <div className="average_price">
                  &#8377;{food_data.average_cost} FOR TWO
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export { Food_Main };