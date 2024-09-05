'use client'

import { useState, useEffect } from 'react'

export default function JobHistory() {
  const [historyData, setHistoryData] = useState([])
  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await fetch('/api/job-history')
        const data = await response.json()
        //console.log('data', data)
        setHistoryData(data)
      } catch (error) {
        console.error('Error fetching job history', error)
      }
    }
    fetchHistory()
  }, [])
  return (
    <div className='mx-auto max-w-4xl p-6'>
      <h2 className='mb-6 text-center text-2xl font-bold'>
        Job Application History
      </h2>
      <div className='overflow-x-auto'>
        <table className='min-w-full border border-gray-200 text-left'>
          <thead className='bg-blue-500'>
            <tr>
              <th className='px-6 py-3 text-white'>Date</th>
              <th className='px-6 py-3 text-white'>Company</th>
              <th className='px-6 py-3 text-white'>Role</th>
            </tr>
          </thead>
          <tbody>
            {historyData.length > 0 ? (
              historyData.map(item => (
                <tr
                  key={item.created_at}
                  className='border-b border-gray-200 hover:bg-gray-50'
                >
                  <td className='px-6 py-4'>
                    {new Date(item.created_at).toLocaleDateString()}
                  </td>
                  <td className='px-6 py-4'>{item.company}</td>
                  <td className='px-6 py-4'>{item.role}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan='2' className='px-6 py-4 text-center text-gray-500'>
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
