import './App.css';
import React from 'react';
import { FaRegMessage } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import Profile from '../src/assets/photo.jpg';
import { FaDownload } from "react-icons/fa6";
import Html from "../src/assets/front/html.png";
import Css from "../src/assets/front/css-3.png";
import JavaScript from "../src/assets/front/js.png";
import ReactJs from "../src/assets/front/science.png";
import BootStrap from "../src/assets/front/bootstrap-5-logo-icon.png";
import TailWind from "../src/assets/front/tailwind-css-icon.png";
import Cpp from "../src/assets/back/c-.png";
import Csharp from "../src/assets/back/c-sharp.png";
import NodeJs from "../src/assets/back/nodejs.png";
import Python from "../src/assets/back/python.png";
import AspNet from "../src/assets/back/web.png";
import Data from "../src/assets/data/database.png";
import MySql from "../src/assets/data/mysql.png";
import MongoDb from "../src/assets/data/icons8-mongodb-a-cross-platform-document-oriented-database-program-24.png";
import PostgreSQL from "../src/assets/data/post.png";
import Git from "../src/assets/tools/icons8-git-48.png";
import GitHub from "../src/assets/tools/icons8-github-64.png";
import VisualStudioCode from "../src/assets/tools/icons8-visual-studio-code-96.png";
import Brave from "../src/assets/tools/icons8-brave-96.png";


function App() {
  return (
  <>
    <nav className='navbar  mx-auto flex items-center justify-between px-4 py-5'>
      <h1 className='p-2 font-bold text-2xl text-white'><span>Nabhan </span>Nisham K M</h1>
      <ul className='flex items-center'>
        <li><a href="#home" className="p-3 font-bold text-white hover:text-gray-300">Home</a></li>
        <li><a href="#about" className="p-3 font-bold text-white hover:text-gray-300">About</a></li>
        <li><a href="#skills" className="p-3 font-bold text-white hover:text-gray-300">Skills</a></li>
        <li><a href="#project" className="p-3 font-bold text-white hover:text-gray-300">Projects</a></li>
      </ul>
      <a href="#contact" className="a-btn text-white font-bold py-2 px-4 rounded-full hover:bg-red-500 "><span className='icon'><FaRegMessage /></span> Contact Me </a>
    </nav>

    <section id="home" className="home">
      <div className='container mx-auto flex items-center justify-center px-4 py-6'>
        <div className='social font-bold text-xl'>
          <a href="https://github.com/NabhanNisham" className='block my-4'><FaGithub /></a>
          <a href="https://www.linkedin.com/in/nabhan-nisham-k-m-267027230/" className=''><FaLinkedinIn /></a>
        </div>
        <img src={Profile} alt="" className='img py-4 px-8 h-1/4 w-96'/>
        <div className="w-fit px-8">
                <h1 className="head font-normal text-white font-bold">Hi,i'm</h1>
                <h1 className="name font-extrabold text-5xl py-2">Nabhan Nisham K M</h1>
                <h2 className="font-bold text-2xl text-white py-1">Frontend Developer</h2>
                <p className="text-white py-1 text-base">Graduated from University of Calicut, <span className="text-cyan-500">ready to get in action.</span></p>
        </div>
      </div>
      <div className='flex items-center justify-center'>
          <a href="https://drive.google.com/uc?export=download&id=16VTU6yQhO-dM3erXd3D9DJ-FnyAdF9Ww" className="btnd py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">Resume <span className='icon'><FaDownload /></span></a> 
      </div>
    </section>

    <section id="about" className="about">
      <h1 className="font-bold text-3xl text-center text-sky-600 py-4">About <span className='text-white'>Me</span></h1>
      <p className="mt-4 text-base text-white text-center py-8 px-6">Hey there! I'm Nabhan Nisham K M a web developer whos passionate, about creating captivating and interactive online experiences. I've been in the world of web development for 1 years. Its been a journey turning ideas into functional websites that users love. I specialize in both end and back end development, which allows me to create visually stunning sites. I strongly believe in writing code designing layouts and keeping up with the latest web technologies. When I'm not coding you can find me exploring trends in web design and working on projects. Thanks, for checking out my portfolio. I'm really looking forward to connecting with you regarding your web development needs or any opportunities that may arise!

</p>
      <div className='flex justify-between py-12 mx-10 my-12'>
          <div className='w-96'>
            <div className='text-2xl text-white font-bold text-center'>Education</div>
            <ul className='px-6 py-4 text-white list-disc'>
            <li className='py-2'>Bachelor of Science in Computer Science,<br /> University of Calicut, <br /> 09/2020 - 05/2023.</li>
            <li className='py-2'>Computer Science,<br />GBHSS Manjeri,<br />05/2018 - 03/2020. </li>
            </ul>
          </div>
          <div className='w-96'>
            <div className='text-2xl text-sky-600 font-bold text-center'>Experience</div>
            <ul className='px-6 py-4 text-white list-disc'>
            <li className='py-2'>Software Developer,<br />DDU-GKY.<br /></li>
            </ul>
          </div>
          <div className='w-96'>
            <div className='text-2xl text-white font-bold text-center'>Interests</div>
            <ul className='px-6 py-4 text-white list-disc'>
            <li className='py-2'>Gaming</li>
            <li className='py-2'>Listen to Music</li>
            <li className='py-2'>Travel</li>
            </ul>
          </div>
      </div>
    </section>

    <section id="skills" className="skills">
          <h1 className="font-bold text-3xl text-white text-center py-6">Skills</h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 justify-items-center py-20 px-4 text-cyan-500'>
            <div className='sk'>
              <h1>FrontEnd</h1>
              <div className='grid grid-cols-4 gap-4 px-2 py-4 justify-items-center'>
                <img src={Html} alt="" />
                <img src={Css} alt="" />
                <img src={JavaScript} alt="" />
                <img src={ReactJs} alt="" />
                <img src={BootStrap} alt="" />
                <img src={TailWind} alt="" />
              </div>
            </div>
            <div className='sk'>
              <h1>BackEnd</h1>
              <div className='grid grid-cols-4 gap-4 justify-items-center px-2 py-4'>
                <img src={Cpp} alt="" />
                <img src={Csharp} alt="" />
                <img src={NodeJs} alt="" />
                <img src={Python} alt="" />
                <img src={AspNet} alt="" />
              </div>
            </div>
            <div className='sk'>
              <h1>DataBase</h1>
              <div className='grid grid-cols-4 gap-4 justify-items-center px-2 py-4'>
                <img src={MySql} alt="" />
                <img src={MongoDb} alt="" />
                <img src={Data} alt="" />
                <img src={PostgreSQL} alt="" />
              </div>
            </div>
            <div className='sk'>
              <h1>Tools</h1>
              <div className='grid grid-cols-4 gap-4 justify-items-center px-2 py-4'>
                <img src={Git} alt="" />
                <img src={VisualStudioCode} alt="" />
                <img src={GitHub} alt="" />
                <img src={Brave} alt="" />
              </div>
            </div>
          </div>
          <h1 className='text-center text-white font-bold text-xl'>OTHERS</h1>
          <div className='flex items-center justify-center'>
            <ul className='text-base list-disc py-4 text-white'>
              <li>Easily Integrate and work in any team.</li>
              <li>Attention to detail.</li>
            </ul>
          </div>
    </section>

    <section id="project" className="project">
      <h1 className="font-bold text-3xl text-sky-600 text-center py-6">Projects</h1>
      <div className='flex items-center justify-between mx-6 my-4'>
      <div class="card px-8 py-8">
        <div class="card-body">
          <h5 class="card-title text-center">Sex-Edu & Counseling</h5>
          <p class="card-text">Sex edu and counseling applications provide comprehensive guidance on sexual health and wellness. They feature tailored resources to help users build a better understanding of reproductive health, healthy relationships, and sexual identity. Some applications provide online forums for users to ask questions and discuss their experiences in an anonymous, judgement-free environment. Others include interactive modules, videos and articles from professional sex educators. These applications also allow users to schedule trained counselors for private in-person or video consultations.</p>
          <div className='flex items-center justify-around py-4'>
          <a href="#" class="btnd py-2 px-4 text-white font-bold rounded">Preview</a>
          <a href="#" class="btnd py-2 px-4 text-white font-bold rounded">Source Code</a>
          </div>
        </div>
      </div>
      <div class="card px-8 py-8">
        <div class="card-body">
          <h5 class="card-title text-center">Artes Marciales</h5>
          <p class="card-text">Kerala is very famous for its various martial arts form and sports.The students come at a very young age for getting trained in various martial arts forms.In this  website the  martial arts enthusiasts can easily access their nearby martial arts centers in Kerala.This site provides information about different type of martial arts and user can learn more about martial arts. Institutes that provide martial arts can register in our website and in that way the students who are interested in martial arts can enroll and be a part of that respective institution.</p>
          <div className='flex items-center justify-around py-4'>
          <a href="#" class="btnd py-2 px-2  hover:bg-purple-600 text-white font-bold rounded">Preview</a>
          <a href="https://github.com/NabhanNisham/Artes-Marciales" class="btnd py-2 px-2 text-white font-bold rounded">Source Code</a>
          </div>
        </div>
      </div>
      </div>
      
    </section>

    <section id="contact" className="contact">
      <h1 className="font-bold text-3xl text-sky-600 text-center py-6">Contact Me</h1>
      <div className="px-8 py-4 flex items-center justify-center h-4/5">
        <form className="form-main">
          <input type="text" className="form" id="name" placeholder="Your Name"/>
          <input type="email" className="form" id="email" placeholder="Your Email"/>
          <input type="text" className="form" id="subject" placeholder="Subject"/>
          <textarea className="form"  rows="5" placeholder="Message"></textarea>
          <div class="text-center"><button type="submit" className='btnd py-2 px-2 text-white font-bold rounded bg-purple-900'>Send Message</button></div>
      </form>
    </div>
    </section>
    


  </>
  );
}

export default App;
