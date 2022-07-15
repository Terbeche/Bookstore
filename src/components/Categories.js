import React from 'react';
import './Categories.css';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categoties/categories';

function Categories() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  const showStatus = () => {
    dispatch(checkStatus());
  };

  return (
    <div>
      <button type="button" onClick={() => showStatus()}>Check status</button>
      <h2>{categories}</h2>

    </div>
  );
}

export default Categories;
