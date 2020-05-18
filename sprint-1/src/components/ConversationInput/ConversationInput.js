import React from 'react';
import AvatarMohan from '../Avatar/Avatar';
import './ConversationInput.scss';

function ConversationInput() {
	return (
		<div className="conversation">
			<h1 className="conversation__heading">3 Comments</h1>
			<article className="conversation__article">
				<span>
					<AvatarMohan />
				</span>
				<span className="conversation__container">
					<span className="conversation__title">JOIN THE CONVERSATION</span>
					<form className="conversation__form">
						<textarea className="conversation__box" name="conversation-box" placeholder="Add a new comment" required/>
						<button className="conversation__btn">COMMENT</button>
					</form>
				</span>
			</article>
		</div>
	);
}

export default ConversationInput;
