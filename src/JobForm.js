import React from "react"
import {useState} from "react"

const JobForm = () => {

  const [jobNumber, setJobNumber] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (jobNumber) {
      console.log(jobNumber)
    } 
  }

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <label>
        Job Number:
      </label>
      <input 
        name="jobNumber"
        type="text"
        value={jobNumber}
        onChange={e => setJobNumber(e.target.value)}
      />
     <input
      name="submit"
      type="submit"
      value="Submit"
     />
    </form>
  )
}

export default JobForm
