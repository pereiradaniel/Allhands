import React from 'react';
import AccountsUI from '../../AccountsUI.jsx';

export const MainLayout = ({content}) => (
	<div className="main-layout">
	<header>
		<nav>
			<AccountsUI />
		</nav>
	</header>
		{content}
	</div>
)
