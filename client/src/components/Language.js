import React, { Component } from 'react';
import { Divider, Image } from 'semantic-ui-react';
import '../App.css';
import '../style.css';

class Language extends Component {
  render() {
    return (
	<div className='landingPage'>
	  <div className="typewriter-container">
	    <div className="typewriter ">
  	      <h1 id='languageText' style={{ 
          fontFamily: 'Titillium Web' }} >
          {/* margin: 0 auto; width: 80%  test this*/}
          StuddyBuddy is a learning tool based on 21st century flashcard technology.
          Proven study techniques are at work behind the scenes to optimize your learning experience.
          Choose a language and start learning!</h1>
	    </div>

            <div className="lang-container">
              <Image.Group size='small'>
                <a className='btnTopic' href="/javascript"><Image src='/assets/javascript_icon.png'/></a>
                <Image src='/assets/python_icon.png'/>
                <Image src='/assets/html-5_icon.png'/>
                <Image src='/assets/css3_icon.png'/>
              </Image.Group>
            <Divider hidden />

            <Image.Group size='small'>
              <Image src='/assets/react_icon.png'/>
              <Image src='/assets/ruby_on_rails_icon.png'/>
              <Image src='/assets/php_icon.png'/>
              <Image src='/assets/jquery_icon.png'/>
            </Image.Group>

            </div>
            <Divider hidden />
	  </div>
      </div>
    )
  }
};

export default Language;
