import React from 'react';
import './HomePage.css';

export default function HomePage() {
  return (
    <div id="container">
      <div class="product-details">
        <h1>DEV INFORMATION</h1>

        <span class="hint-star star">
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star-half-o" aria-hidden="true"></i>
          <i class="fa fa-star-o" aria-hidden="true"></i>
        </span>
        <p class="information">
          " Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit... "
        </p>

        <div class="control"></div>
      </div>
      <div class="product-image">
        <img
          src="https://haitrieu.com/wp-content/uploads/2021/10/Logo-Hoc-Vien-Ky-Thuat-Mat-Ma-ACTVN.png"
          alt=""
        />

        <div class="info">
          <h2>The Description</h2>
          <ul>
            <li>
              <strong>Name: </strong>Cuong Nguyen
            </li>
            <li>
              <strong>Age: </strong>23
            </li>
            <li>
              <strong>City: </strong>Bac Ninh
            </li>
            <li>
              <strong>School: </strong>ACTVN
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
