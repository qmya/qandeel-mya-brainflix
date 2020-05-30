import React from 'react';
import './UploadPage.scss';
import upload from '../../Assets/Images/Upload-video-preview.jpg';
import Header from '../../components/Header/Header';
import axios from 'axios';
const URL = process.env.REACT_APP_API_URL;
class UploadPage extends React.Component {

 uploadVideo = (event) =>{
   event.preventDefault();
   console.log(URL)
   axios
      .post(URL+ '/videos',{
        title: event.target.addtitle.value,
        description :event.target.adddescription.value,
        image : upload
      }
      
      ).then(results => {
        console.log(results)
      })
      // event.target.reset()
      }



  render () {
    return (
      <div>
       <Header /> 
        <section className='upload'>
          <h1 className='upload__title'>Upload Video</h1>
          
            <section className='upload__desktop'>
              <div>
                <h3 className="upload__subtitle">VIDEO THUMBNAIL</h3> 
                <img src={upload} className="upload__image" alt=" " /> 
              </div>
              <div className="upload__formwrap">
                <form className="upload__form" onSubmit={this.uploadVideo}> 
                  <div className="upload__subtitle">TITLE YOUR VIDEO</div> 
                    <input type="text" name="addtitle" placeholder="Add a title to your video" className="upload__add"/>
                  <div className="upload__subtitle">ADD A VIDEO DESCRIPTION</div> 
                    <textarea type="text" name="adddescription" placeholder="Add a description to your video" className="upload__description"></textarea>
                    <div className="upload__buttons">
                <button type='submit' className="upload__publish">PUBLISH</button>
                <div className="upload__cancel">CANCEL</div>
              </div>
                </form>
              </div>  
            </section>
          
         
        </section>
      </div>
    )
  }
}



export default UploadPage;