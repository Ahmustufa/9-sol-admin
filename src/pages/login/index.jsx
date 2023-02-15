import Login from '@/components/form/Login'
import Head from 'next/head'
import React from 'react'
import styled from 'styled-components'

const Index =()=> {
  return (
    <>
    <Head>
      <title>Login</title>
    </Head>
    <Div>
      <Login/>
    </Div>
    </>
  )
}

export default Index
const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;