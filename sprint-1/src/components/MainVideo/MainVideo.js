import React from 'react';
import Play from '../../assets/icons/svg/icon-play.svg';
import FullScreen from '../../assets/icons/svg/icon-fullscreen.svg';
import VolumeButton from '../../assets/icons/svg/icon-volume.svg';
import './MainVideo.scss';

function MainVideo() {
	return (
		<span className="currently-playing">
			<div className="currently">
				<button className="play__btn">
					<img src={Play} alt="Click here to play" />
				</button>
				<span className="progress-container">
					<progress min="0" max="100" value="63" />
				</span>
				<span className="container">
					<button>
						<img src={FullScreen} alt="click here for full screen" />
					</button>
					<button>
						<img src={VolumeButton} alt="Volume control" />
					</button>
				</span>
			</div>
		</span>
	);
}
export default MainVideo;
