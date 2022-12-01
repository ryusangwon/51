import React, { useState, useEffect } from 'react';
import Header from './Header';
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';
import './css/review.css';
import axios from 'axios';

const ARRAY = [0, 1, 2, 3, 4];

function Review() {
  const [star, setStar] = useState([false, false, false, false, false]);

  const handleStarClick = index => {
    let clickStates = [...star];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setStar(clickStates);
  };

  //useEffect(() => {
  // sendReview();
  //}, [star]); //컨디마 컨디업

  //const sendReview = () => {
    //let score = star.filter(Boolean).length;
    // fetch('http://52.78.63.175:8000/movie', {
    //   method: 'POST',
    //   Headers: {
    //     Authroization: 'e7f59ef4b4900fe5aa839fcbe7c5ceb7',
    //   },
    //   body: JSON.stringify({
    //     movie_id:1
    //     star: score,
    //   }),
    // });
  //};

  const sendReview = () => {

    console.log(star);

    axios.post('http://localhost:3001/review_star/create', {
      star : star,
      //lecture_id : lecture_id
      }).then((result)=>{
        console.log(result);
        window.location.href = "/mypage_course_list"
      })
  }

  return (
    <div className="height_100_class">
    <Header/>
    <Wrap>
      <RatingText>평가하기</RatingText>
      <Stars>
        {ARRAY.map((el, idx) => {
          return (
            <FaStar
              key={idx}
              size="50"
              onClick={() => handleStarClick(el)}
              className={star[el] && 'yellowStar'}
            />
          );
        })}
      </Stars>
      <button className="rating_finish" onClick={sendReview}>완료</button>
    </Wrap>
    </div>
  );
}

export default Review;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15px;
`;

const RatingText = styled.div`
  color: #787878;
  font-size: 20px;
  font-weight: 400;
`;

const Stars = styled.div`
  display: flex;
  padding-top: 5px;

  & svg {
    color: gray;
    cursor: pointer;
  }

  :hover svg {
    color: #fcc419;
  }

  & svg:hover ~ svg {
    color: gray;
  }

  .yellowStar {
    color: #fcc419;
  }
`;