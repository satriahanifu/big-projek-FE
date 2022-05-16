import React from "react";
import { Link } from "react-router-dom";

function Topbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm mb-4">
        <div class="container-fluid">
          <Link to="/admin" className="nav-link">
            Admin
          </Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to="/admin/payment" className="nav-link">
                  Payment
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/admin/products" className="nav-link">
                  Products
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/admin/shipping" className="nav-link">
                  Shipping
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/admin/users" className="nav-link">
                  Users
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Topbar;
