import React, {Component, useEffect,useState} from 'react';
import {useQuery, gql} from '@apollo/client';
import {LOAD_USERS} from '../GraphQL/Queries';
import './card2.css';
import Select from 'react-select';
//to display the details of the vehicles in the card on clicking

function GetVehicles()
{
    const {error, loading, data} = useQuery(LOAD_USERS);
    const [Vehicles, setUsers] = useState([]);
    useEffect(() => {
    if (data) {
      setUsers(data.getAllUsers);
    }
  }, [data]);
  const [selectedOption, setSelectedOption] = useState(null);
  const handleChange = e => {
    setSelectedOption(e);
  }
    return(
        <div>
          {selectedOption && <div style={{ marginTop: 20, lineHeight: '25px' }}>
        <b>Selected Options</b><br />
        <pre>{JSON.stringify(selectedOption, null, 2)}</pre>
      </div>}
          <h1>Choose Your Favorite Car</h1>
          <Select width='50%'
          
            isMulti={true}
            value={selectedOption}
            onChange={handleChange} 
            options={data}
          />
        {Vehicles.map((val)=> {
        return <div className='card-content'>
          <h3>{val.ARAIMileage}</h3>
          <h3>{val.bhp}</h3>
          <h3>{val.TransmissionType}</h3>
        </div>;
        })}
        </div>

    )
}
export default GetVehicles;


//2. add multiselect