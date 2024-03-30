import React from 'react'
import { BsUpcScan } from "react-icons/bs";
import "./title.css"

export default function Title() {
  return (
    <div className='text-container'>
    <BsUpcScan size={66}/>
    <h1 className=''>Barcode/QR code Scanner</h1>
    </div>
  )
}
