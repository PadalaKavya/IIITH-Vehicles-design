import React, { useState } from "react";
import { CREATE_USER_MUTATION } from "../GraphQL/mutations";
import { useMutation } from "@apollo/client";
//to be put at the end of the page to add data and on creation should insert a new card
function Form() {
  const [ARAIMileage, setARAIMileage] = useState("");
  const [TransmissionType, setTransmissionType] = useState("");
  const [bhp, setbhp] = useState("");

  const [createuser, { error }] = useMutation(CREATE_USER_MUTATION);

  const addUser = () => {
    createuser({
      variables: {
        ARAIMileage: ARAIMileage,
        TransmissionType: TransmissionType,
        bhp: bhp,
      },
    });

    if (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="ARAIMileage"
        onChange={(e) => {
        setARAIMileage(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="TransmissionType"
        onChange={(e) => {
        setTransmissionType(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="bhp"
        onChange={(e) => {
        setbhp(e.target.value);
        }}
      />
      <button onClick={addUser}> Create Card</button>
    </div>
  );
}

export default Form;