import React from 'react'
import Layout from '../Layout'
import { Route, Routes } from 'react-router-dom'
import { EnumRoutePaths } from '../../configs/routes'
import Main from '../../pages/Main'

const Router = () => {
  return (
    <Layout>
      <Routes>
        <Route path={EnumRoutePaths.BASE} element={<Main />} />
        <Route path="*" element={<div>not found</div>} />
      </Routes>
    </Layout>
  )
}

export default Router