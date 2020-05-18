import React from 'react';
import AvatarMohan from '../Avatar/Avatar';
import './ConversationInput.scss';

function ConversationInput() {
	return (
		<div className="conversation">
			<h1 className="conversation-heading">3 Comments</h1>
			<article className="conversation-article">
				<span>
					<AvatarMohan />
				</span>
				<span className="conversation-container">
					<span className="conversation-title">JOIN THE CONVERSATION</span>
					<form className="conversation-form">
						<textarea className="conversation-box" name="conversation-box" placeholder="Add a new comment" required/>
						<button className="conversation-btn">COMMENT</button>
					</form>
				</span>
			</article>
		</div>
	);
}

export default ConversationInput;
