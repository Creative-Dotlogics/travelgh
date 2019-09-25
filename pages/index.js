import React from 'react'
import Nav from '../components/nav'
import SearchBox from '../components/searchBox'
import TransitCard from '../components/transitCard'
const Home = () => (
  <div className="container">
    <Nav/>
    <div className="container">
      <h1>Book Your Ticket</h1>
      <p>No need for the hustle, make a couple of clicks and you are ready to travel.</p>
      <SearchBox/>
      <style jsx>{`
          .container{
            background: linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)), url('/static/images/root/bg.jpg') center center;
            min-height: 75vh;
            background-size: cover;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            color: #fff;
          }
          .container h1{
            font-size: 36px;
            font-weight: 900;
            text-transform: uppercase;
            margin-bottom: 5px;
          }
      `}</style>
  </div>
  <div className="buses">
    <TransitCard title="STC" text="Intercity Coaches" source="/static/images/buses/stc.jpg" link="/"/>
    <TransitCard title="Metro Mass" text="Metro Mass Transit" source="/static/images/buses/mm.jpg" link="/"/>
    <TransitCard title="VIP" text="Rated high" source="/static/images/buses/vip.jpg" link="/"/>
    <TransitCard title="Imperial" text="Rated high" source="/static/images/buses/imperial.jpg" link="/"/>
    <style>
      {`
          .buses{
            display: flex;
            justify-content: space-around;
            align-items: center;
          }
      `}
    </style>
  </div>
  </div>
)

export default Home
