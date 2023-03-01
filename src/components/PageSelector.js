import React from 'react'

const PageSelector = ({pages, handleSelectChange }) => {



  return (
    <div>
        <select onChange={handleSelectChange}>

        { pages.map(page => {

            return <option key={page.name} value={page.url}>{page.name}</option>
        })}

        </select>
    </div>
  )
};

export default PageSelector