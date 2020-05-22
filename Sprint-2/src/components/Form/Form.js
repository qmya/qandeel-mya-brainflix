import React from 'react';
import "./Form.scss";
import Thumbimage from '../../Assets/Images/Mohan-muruge.jpg';
class Form extends React.Component {
   render(){
       return(
        <section className="comments">
        <h2 className="comments__header">3 Comments</h2>
          <article className="comments__form">
            <div>
              <img src={Thumbimage} alt=''className="comments__thumbnail" />
            </div>
            <div className="form-width">
              
                <span className="comments__title">JOIN THE CONVERSATION</span> 
                <form  className="comments__tablet"> 
                <textarea type="text" name ="comments__area" placeholder="Add a comment" className="comments__area"></textarea>
                <button className="comments__button">COMMENT</button>
              </form>
            </div>
          </article>
       
      </section>    
       )
   }     

      };
      
      export default Form;
      