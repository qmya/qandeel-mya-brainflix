import { v4 as uuidv4 } from 'uuid';
import video1 from './assets/images/video-list-1.jpg';
import video2 from './assets/images/video-list-2.jpg';
import video3 from './assets/images/video-list-3.jpg';
import video4 from './assets/images/video-list-4.jpg';
import video5 from './assets/images/video-list-5.jpg';
import video6 from './assets/images/video-list-6.jpg';
import video7 from './assets/images/video-list-7.jpg';
import video8 from './assets/images/video-list-8.jpg';


const VideoList = [

    {
      id: uuidv4(),
      img: video1,
      title: 'Become A Travel Pro In Easy Lesson',
      channel: 'Todd Welch'
    },
    {
      id: uuidv4(),
      img: video2,
      title: 'Les Houches The Hidden Gem Of The Chamonix',
      channel: 'Todd Welch'
    },
    {
      id: uuidv4(),
      img: video3,
      title: 'Travel Health Useful Medical Information For',
      channel: 'Glen Harper'
    },
    {
      id: uuidv4(),
      img: video4,
      title: 'Cheap Airline Tickets Great Ways To Save',
      channel: 'Emily Harper'
    },
    {
      id: uuidv4(),
      img: video5,
      title: 'Take A Romantic Break In A Boutique Hotel',
      channel: 'Ethan Owen'
    },
    {
      id: uuidv4(),
      img: video6,
      title: 'Choose The Perfect Accommodations',
      channel: 'Lydia Perez'
    },
    {
      id: uuidv4(),
      img: video7,
      title: 'Cruising Destination Ideas',
      channel: 'Timothy Austin'
    },
    {
      id: uuidv4(),
      img: video8,
      title: 'Tain Travel On Track For Safety',
      channel: 'Scotty Cranmer'
    }
  ]

  export default VideoList;