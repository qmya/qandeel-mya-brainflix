const express = require('express');

const router = express.Router();
const NextVideos = require('./NextVideos.json');
const videos = require('./videos.json');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

router.use(cors());
router.get('/',(request ,response) => {
    response.json(NextVideos);
} );

router.get('/:id',(request ,response) => {
    const video = videos.find(vid => request.params.id == vid.id)
    response.json(video);
})
 
router.post('/', (request,response) => {
   let newVideo =  {
        "id": uuidv4(),
        "title": request.body.title,
        "channel": "Todd Welch",
        "image": request.body.image,
        "description":request.body.description,
        "views": "2,043,765",
        "likes": "400,058",
        "duration": "7:26",
        "video": "https://project-2-api.herokuapp.com/stream",
        "timestamp": 1537003624000,
        "comments": [{
                "name": "Micheal Lyons",
                "comment": "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
                "id": "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
                "likes": 0,
                "timestamp": 1545162149000
            },
            {
                "name": "Gary Wong",
                "comment": "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
                "id": "cc6f173d-9e9d-4501-918d-bc11f15a8e14",
                "likes": 0,
                "timestamp": 1544595784046
            },
            {
                "name": "Theodore Duncan",
                "comment": "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
                "id": "993f950f-df99-48e7-bd1e-d95003cc98f1",
                "likes": 0,
                "timestamp": 1542262984046
            }
        ]
    }
   videos.push(newVideo);
   NextVideos.push({
       "id": newVideo.id,
       "title": newVideo.title,
       "channel": newVideo.channel,
       "image": newVideo.image
   })
   response.status(200).send("Upload successful");
})



module.exports = router;