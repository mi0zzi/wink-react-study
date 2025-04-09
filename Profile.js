import React, { useState } from 'react';

function Profile({ name, age, major }) {
  const [foodIndex, setFoodIndex] = useState(0);
  const foods = ['마라탕', '치킨', '떡볶이'];

  const changeFood = () => {
    setFoodIndex((foodIndex + 1) % foods.length);
  }; // 나머지인 0,1,2,0,1,2,..반복

  return (
    <div>
      <h1>자기소개</h1>
      <p>이름: {name}</p>
      <p>나이: {age}</p>
      <p>전공: {major}</p>
      <p>좋아하는 음식: {foods[foodIndex]}</p>
      <button onClick={changeFood}>음식 바꾸기</button>
    </div>
  );
}

export default Profile;