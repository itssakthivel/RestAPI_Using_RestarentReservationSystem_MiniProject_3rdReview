import axios from "axios";
import React, { Component } from "react";


class Products extends Component {
  state = {
  data: []
  }

  componentDidMount() {
  axios.get('http://127.0.0.1:8080/get')
    .then(response => {
      this.setState({ data: response.data });
    })
    .catch(error => {
      console.log(error);
    });
}


  render() {   
    return (
        
      <table border={1}>
      <thead>
        <tr>
          <th>BookingId</th>
          <th>CustomerName</th>
          <th>CustomerEmail</th>
          <th>CustomerMobile</th>
          <th>TotalMembers</th>
          <th>FoodType</th>
        </tr>
      </thead>
      <tbody>
        {this.state.data.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.mobilenumber}</td>
            <td>{user.members}</td>
            <td>{user.foodtype}</td>
          </tr>
        ))}
      </tbody>
    </table>
    );
  }}
  
export default Products;