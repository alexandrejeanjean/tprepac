import React from 'react';

import Theme from '../theme/index';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

import './App.css';

const App = (): JSX.Element => {
    return (
        <Theme>
            <Header />
            <Main />
            <Footer />
        </Theme>
    );
};

export default App;
