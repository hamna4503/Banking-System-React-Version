import React from 'react'
import bank from "../assets/images/bank.jpg"
import person1 from "../assets/images/PERSON1.JPG"

function Profile() {
  return (
      <div class="container mt-5 mb-5 profile-container">
        <h1 className='text-center text-dark pt-5 display-1 fw-bold'>Profile #123</h1>
        <div className='profile-grid'>
          <img className='profile-img img-thumbnail img-fluid p-0 mt-2 mr-0' src={person1}/>
          <div className='profile-info text-dark p-0 mt-2 display-5 ml-0 '>
              <p><span>Name: </span><span> Hamna Aamir</span></p>
              <p><span>Email: </span><span> Hamna@gmail.com</span></p>
              <p><span>Phone: </span><span>03320354435</span></p>
              <p><span>Balance: </span><span>$ 100,00,000</span></p>
        <button className='btn btn-danger p-3'>Transfer Funds</button>
        <button className='btn btn-success p-3'>View Transfer history</button>
        
          </div>
        </div>
      </div>
  )
}

export default Profile
