import React from 'react';
import { Pie, Line, Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import { Table } from 'react-bootstrap';
import Sidebar from './Sidebar';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const pieData = {
    labels: ['Total Policies', 'Active Policies', 'Pending Claims', 'Total Premiums Collected'],
    datasets: [
      {
        data: [1200, 1100, 45, 1200000],
        backgroundColor: ['#3498db', '#2ecc71', '#e74c3c', '#f39c12'],
        hoverBackgroundColor: ['#2980b9', '#27ae60', '#c0392b', '#e67e22']
      }
    ]
  };

  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Policies',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: '#3498db',
        borderColor: '#3498db'
      }
    ]
  };

  const barData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }
    ]
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <h1>Dashboard</h1>
        <div className="metrics">
          <div className="metric">
            <h2>Total Policies</h2>
            <div>1200</div>
          </div>
          <div className="metric">
            <h2>Active Policies</h2>
            <div>1100</div>
          </div>
          <div className="metric">
            <h2>Pending Claims</h2>
            <div>45</div>
          </div>
          <div className="metric">
            <h2>Total Premiums Collected</h2>
            <div>₹1,200,000,000</div>
          </div>
        </div>
        <div className="charts">
          <h2>Policy Trends</h2>
          <div className="chart">
            <Line data={lineData} />
          </div>
          <h2>Claims Statistics</h2>
          <div className="chart">
            <Bar data={barData} />
          </div>
          <h2>Overview</h2>
          <div className="chart pie-chart-container">
            <Pie data={pieData} />
          </div>
        </div>
        <h2>Recent Policies</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Policy Number</th>
              <th>Customer Name</th>
              <th>Status</th>
              <th>Premium</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>POL123456</td>
              <td>Surya S</td>
              <td>Active</td>
              <td>₹5,00,000</td>
            </tr>
            <tr>
              <td>2</td>
              <td>POL654321</td>
              <td>Yaswanth Kumar S</td>
              <td>Pending</td>
              <td>₹3,00,000</td>
            </tr>
            <tr>
              <td>3</td>
              <td>POL789012</td>
              <td>Pranesh</td>
              <td>Active</td>
              <td>₹4,50,000</td>
            </tr>
            <tr>
              <td>4</td>
              <td>POL789456</td>
              <td>Rochit</td>
              <td>Pending</td>
              <td>₹4,50,000</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Dashboard;
