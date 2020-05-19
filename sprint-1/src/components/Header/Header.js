import React from 'react';
import Logo from '../Logo/Logo';
import Search from '../SearchBar/SearchBar';
import UploadBtn from '../UploadButton/UploadBtn';
import AvatarMohan from '../Avatar/Avatar';
import '../Header/Header.scss';

function Header() {
	return (
		<span className="header__section mobile-padding">
			<p className="logo">
				<Logo />
			</p>
			<Search />
			<p className='nav'>
				<UploadBtn />
				<AvatarMohan />
			</p>
		</span>
	);
}

export default Header;
