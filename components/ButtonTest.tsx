'use client'

import { useState, useEffect } from 'react'

export default function ButtonTest() {
  useEffect(() => {
    const fetchData = () => {
      fetch('/api/user')
        .then((res) => res.json())
        .then((data) => console.log('data from button', data))
    }

    try {
      fetchData()
    } catch (e) {
      console.log(e)
    }
  }, [])

  return <button>ButtonTest</button>
}
