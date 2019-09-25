import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faBus, faMapSigns, faTicketAlt} from '@fortawesome/free-solid-svg-icons'

const SearchBox = () => (
  <div>
    <div className="form">
    <div className="inputBox">
     <FontAwesomeIcon icon={faMapSigns} />
    <input type="text" placeholder="Where are you going?"/>
    </div>
    <div className="inputBox">
     <FontAwesomeIcon icon={faClock} />
    <input type="text" placeholder="When are you traveling?"/>
    </div>
    <div className="inputBox button">GET TICKET</div>
    </div>
    <style jsx>
    {`
      .form{
        display: flex;
      }
      .form .inputBox{
        display: flex;
        padding: 12px 18px;
        background: #fff;
        color: #ccc;
        justify-content: space-between;
        align-items: center;
        border: 1px solid #ccc;
        box-sizing: border-box;
      }
      .form .inputBox input{
        font-weight: 600;
        border: none;
        outline: none;
        margin-left: 5px;
      }
      .form .inputBox.button{
        font-weight: 600;
        color: #fff;
        cursor: pointer;
        background: #00b26a;
        height: 100%;
        border: 1px solid #00b26a;
      }

      `}
    </style>
  </div>
)

export default SearchBox
