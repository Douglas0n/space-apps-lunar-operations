import React from 'react';
import { mount } from 'react-mounter';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import BasicLayout from './components/BasicLayout';
import 'antd/dist/antd.css';

export const App = () => <></>;

/** Routes */
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';

FlowRouter.route('/', {
    name: 'login',
    action() {
        mount(BasicLayout, {
            content: () => <Login />
        });
    },
});

FlowRouter.route('/signup', {
    name: 'signup',
    action() {
        mount(BasicLayout, {
            content: () => <Signup />
        });
    },
});

FlowRouter.route('/home', {
    name: 'home',
    // waitOn: () => Meteor.user(),
    action() {
        mount(BasicLayout, {
            content: () => <Home />
        });
    },
});


