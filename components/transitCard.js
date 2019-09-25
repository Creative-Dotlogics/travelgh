import React from 'react';
import Link from 'next/link';
class TransitCard extends React.Component{
  render(){
    return(
      <div className="container">
        <div className="image">
          <img src={this.props.source}/>
          <div className="footer">
            <div className="button">
              <Link href={this.props.link}>
               <span> BOOK NOW</span>
              </Link>
            </div>
            <div className="description">
            <h3>{this.props.title}</h3>
            <p> {this.props.text} </p>
            </div>
          </div>
        </div>
    
        <style jsx>
        {`
          .container{
            cursor:pointer;
            display: inline-block;
            width: 360px;
            height: 290px;
            overflow: hidden;
            margin: 10px;
            border-radius: 15px;
          }
          .container .image{
            position: relative;
            width: 360px;
            height: 290px;
            overflow: hidden;
            transition: all 0.5s;
          }
          .container .image img{
            height: 100%;
          }
          .container .image .footer{
            transition: all 0.5s;
          }
          .container .image:hover .footer{
            position: absolute;
            bottom: 10px;
            right: 10px;
          }
          .container .image::before{
            content:"";
            position: absolute;
            height: 60px;
            width: 60px;
            background: rgba(0,0,0,0.5);
            border-radius: 50%;
            opacity: 0;
            transition: all 0.5s;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
          }
          .container .image:hover::before{
            content:"";
            position: absolute;
            height: 100%;
            width: 100%;
            border-radius: 0%;
            background: rgba(0,0,0,0.5);
            opacity: 1;
          }
    
          .container .image .footer{
            display: grid;
            grid-template-columns: auto auto;
            grid-gap: 10px;
          }
          .container .image .footer p,
          .container .image .footer h3{
            margin: 0;
            color: #fff;
          }
          
          .container .image .footer .button{
            background: #00b26a;
            color: #fff;
            padding: 10px 15px;,
            margin-right: 50px;
            display: flex;
            justify-content:center;
            align-items: center;
          }
          .container .image .footer .button span{
            text-decoration: none;
            color: #fff;
          }
          `}
        </style>
      </div>
    )
  }
}


export default TransitCard
