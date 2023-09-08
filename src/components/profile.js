import React from 'react'
import bank from "../assets/images/bank.jpg"
import person1 from "../assets/images/PERSON1.JPG"

function Profile() {
  return (
      <div class="container mt-5 mb-5">
        <h1 className='text-center text-white '>Profile #123</h1>
        <div className='profile-grid'>
          <img className='profile-img' src={person1}/>
          <div className='profile-info text-white p-5'>
              
              <p><span>Name: </span><span> Hamna Aamir</span></p>
              <p><span>Email: </span><span> Hamna@gmail.com</span></p>
              <p><span>DOB: </span><span> 4th May,2003</span></p>
          </div>
        </div>
      </div>
  )
}

export default Profile
