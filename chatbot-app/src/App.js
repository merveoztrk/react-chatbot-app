import React from 'react'
import { useState, useEffect } from 'react';
import Chatbot from './components/Chatbot';
import AllMessages from './components/AllMessages';
import Information from './components/Information';
import '../src/style/app.css'

const App = () =>
{
  const [ users, setUsers ] = useState( [] );
  const [ selectedId, setSelectedId ] = useState();

  const fetchUsers = async () =>
  {
    await fetch( 'https://jsonplaceholder.typicode.com/users' )
      .then( ( res ) => res.json() )
      .then( ( data ) => setUsers( data ) )
  }
  console.log( users )


  useEffect( () =>
  {
    fetchUsers();
  }, [] )

  useEffect( () =>
  {
    console.log( selectedId )
  }, [ selectedId ] )

  console.log( "selectedId", typeof selectedId )

  const puller = ( userId ) =>
  {
    setSelectedId( userId )
  }

  return (
    <>
      <div className='app'>
        <AllMessages users={ users } puller={ puller } />
        <Chatbot users={ users } selectedId={ selectedId } />
        <Information users={ users } selectedId={ selectedId } />
      </div>
    </>
  )
}

export default App
