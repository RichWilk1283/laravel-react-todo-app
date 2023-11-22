import React from 'react'
import Layout from '../components/Layout'
import { Head } from '@inertiajs/react'
import OverallSummary from '../components/OverallSummary'

const Home = ({ waitingCount, inprogressCount, doneCount }) => {
  return (
    <>    
      <Head>
        <title>Home</title>
        <meta name="description" content="This is the todos home page" />
      </Head>
      <Layout>
        <div className='flex flex-col items-center w-full gap-3 mt-4'>
          <h1 className=" text-3xl font-semibold">Time to do your todos</h1>
          <OverallSummary waitingCount={waitingCount} inprogressCount={inprogressCount} doneCount={doneCount}  />
        </div>
      </Layout>
    </>
  )
}


export default Home