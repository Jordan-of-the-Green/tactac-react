import React from "react";
import Title from "./Title";
import LikeButton from "./LikeButton";
import './App.css';

import logo from './logo.svg';
import manlogo from './img_avatar.png';
import pugLogo from "./funny_pug.png";

export default function LikePhotoApp(){
    return(
        <div className="container text-center"> 

<div class="header">
<Title text={"TacTac"}/>   
<Title classes={"subtitle"} text={"Posts"}/>  
</div>

<h2>Post 1</h2>
                
<div class="card">
<img src={pugLogo} alt="ima" style={{height: "fit-content"}}/>  
  <div class="container">
    <h4><b>John Doe</b></h4> 
    <p>Architect & Engineer</p> 
    <LikeButton />
  </div>
</div>

<h2>Post 2</h2>
                
<div class="card">
<img src={logo} alt="ima" style={{height: "fit-content"}}/>  
  <div class="container">
    <h4><b>John Doe</b></h4> 
    <p>Architect & Engineer</p> 
    <LikeButton />
  </div>
</div>

<h2>Post 3</h2>
                
<div class="card">
<img src={manlogo} alt="ima" style={{height: "fit-content"}}/>  
  <div class="container">
    <h4><b>John Doe</b></h4> 
    <p>Architect & Engineer</p> 
    <LikeButton />
  </div>
</div>

        </div>   
    );
}