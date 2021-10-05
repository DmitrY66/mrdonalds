/* eslint-disable no-unused-vars */
import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';

const firebaseConfig = {
  apiKey: "AIzaSyAZ9DxvOINVQd6IYlme1RM5FNUzZRaU1KI",
  authDomain: "mrdonalds-df4dd.firebaseapp.com",
  projectId: "mrdonalds-df4dd",
  storageBucket: "mrdonalds-df4dd.appspot.com",
  messagingSenderId: "784305659476",
  appId: "1:784305659476:web:322e8a129785aba322d7c1"
};

firebase.initializeApp(firebaseConfig);

function App() {

  const auth = useAuth(firebase.auth);

  const openItem = useOpenItem();
  const orders = useOrders();

  return (
    <React.Fragment>
      <GlobalStyle />
      <NavBar {...auth} />
      <Order {...orders} {...openItem} {...auth} />
      <Menu {...openItem} />
      {openItem.openItem && <ModalItem {...openItem} {...orders} />}
    </React.Fragment>
  );
}

export default App;
