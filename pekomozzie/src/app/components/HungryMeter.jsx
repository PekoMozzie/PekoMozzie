'use client'

import { useState, useEffect } from 'react'



export default function HungryMeter() {
  const [hungerData, setHungerData] = useState([])
  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await fetch('/api/hunger-data');
        const data = await response.json();
        setHungerData(data);
      } catch (error) {
        console.error('Error fetching job history', error);
      }
    }
    fetchHistory().then(() => {
      setHungerData(hungerData);
    })
  }, [])
  useEffect(() => {
    
  }, [hungerData])

  function hungerLevel() {
    return Math.min((hungerData.jobApps? hungerData.jobApps.length : 0 / hungerData.weekly_quota? hungerData.weekly_quota : 1)*100, 100);
  }
  useEffect(() => {
  }, [hungerData])
  return (
    <div className='mx-auto w-3/5 rounded-lg bg-red-700 p-4 text-center text-white shadow-lg'>
      <h3 className='mb-1 text-xl'>Hangryness Level {hungerLevel()} </h3>
    </div>
  )
}