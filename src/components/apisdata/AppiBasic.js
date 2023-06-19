import React from 'react'
import useFetch from './useFetch'

const AppiBasic = () => {
  const { data, loading } = useFetch("https://jsonplaceholder.typicode.com/users")

  return (
    <div>
      <h1>Fetch like a pro</h1>
      <div className="card">
        <ul>
          {loading && <li>Loading....</li>}
          {data?.map((user) => (
            <li key={user.id}>hola {user.name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default AppiBasic
