import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCity, faBus, faMapSigns, faCommentAlt} from '@fortawesome/free-solid-svg-icons'

const Nav = () => (
  <nav>
    <div className="header">
      <div className="brand">Travel <span className="text-primary">Ghana</span></div>
      <div className="buttons">
        <a href='/'>Register</a>
        <a href='/'>Sign In</a>
      </div>
    </div>

    <div className="links">
      <Link href="/">
        <div className="link"> <FontAwesomeIcon icon={faCity} /> Stations</div>
      </Link>
      <Link href="/">
        <div className="link active"><FontAwesomeIcon icon={faBus} /> Buses</div>
      </Link>
      <Link href="/">
        <div className="link"><FontAwesomeIcon icon={faMapSigns} /> Close to me</div>
      </Link>
      <Link href="/">
        <div className="link"> <FontAwesomeIcon icon={faCommentAlt} /> Reviews</div>
      </Link>
    </div>
    <style jsx>{`
      :global(body) {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      .text-primary{
        color:#000;
      }
      nav {
        text-align: center;
        background: #00b26a;
        // f40000
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .brand{
        font-weight: 900;
      }
      .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #fff;
        padding: 20px 45px;
        width: 70vw;
      }
      .buttons a{
        margin: 0px 10px;
        color: #00b26a;
        text-decoration: none;
        font-size: 12px;
        font-weight: 600;
        border-radius: 2px;
        padding: 10px 15px;
        background: #fff;
      }

      .links{
        margin-top: 5px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        color: #fff;
        width: 70vw;
      }

      .link{
        padding: 15px 20px;
        width: 120px;
        margin-bottom: 1px;
      }
      .link a{
        display: inline-block;
        text-decoration: none;
        color: #fff;
      }
      .link.active{
        border-bottom: 2px solid #fff;
      }

    `}</style>
  </nav>
)

export default Nav
