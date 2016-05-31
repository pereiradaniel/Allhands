import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './layouts/MainLayout.jsx';
import App from '../App.jsx';
import Search from '../Search.jsx';

if (Meteor.isClient) {
	Accounts.onLogin(function() {
		FlowRouter.go('search');
	});
	Accounts.onLogout(function() {
		FlowRouter.go('home');
	});
}

FlowRouter.route('/', {
	name: 'home',
	action() {
		if(Meteor.userId()) {
			FlowRouter.go('search');
		}
		mount(MainLayout, {
			content: (<App />)
		})
	}
});

FlowRouter.route('/search', {
	name: 'search',
	action() {
		if(!Meteor.userId()) {
			FlowRouter.go('home');
		}
		mount(MainLayout, {
			content: (<Search />)
		})
	}
});