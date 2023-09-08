import React from 'react'

function Navbar() {
  return (
    <div>
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary bg-green">
        <div class="container-fluid">
          <a class="navbar-brand text-white" href="#">
            HLB BANK
          </a>
          <button
            class="navbar-toggler text-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon color-white"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active text-white" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled text-white" aria-disabled="true" >
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
    </div>
  )
}

export default Navbar
