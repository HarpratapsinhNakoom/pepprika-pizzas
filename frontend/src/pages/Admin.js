import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import '../styles/Admin.css'

function Admin() {
    return (
        <>
            <table>
                <tr>
                    <tc>Name</tc>
                    <tc>Address</tc>
                    <tc>Order</tc>
                    <tc>Status</tc>
                </tr>
                <tr>
                    <tc>Yash</tc>
                    <tc>Surat</tc>
                    <tc>1-&gt;Cheese Pizza</tc>
                    <tc>
                        <select name="cars" id="cars">
                            <option value="volvo">Preparing Order</option>
                            <option value="saab">Delivering Order</option>
                            <option value="mercedes">Order Delivered</option>
                        </select>
                    </tc>
                </tr>
                <tr>
                    <tc>Yash</tc>
                    <tc>Surat</tc>
                    <tc>1-&gt;Cheese Pizza</tc>
                    <tc>
                        <select name="cars" id="cars">
                            <option value="volvo">Preparing Order</option>
                            <option value="saab">Delivering Order</option>
                            <option value="mercedes">Order Delivered</option>
                        </select>
                    </tc>
                </tr>
            </table>
        </>
    )
}

export default Admin