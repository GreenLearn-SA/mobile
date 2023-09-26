import React from 'react'
import { FontAwesome } from "@expo/vector-icons";

export default function Icons({name , size , color}) {
  return (
    <FontAwesome 
    name={name}
    size={size || 20}
    color= {color||"#71a42a"}
    />
  )
}