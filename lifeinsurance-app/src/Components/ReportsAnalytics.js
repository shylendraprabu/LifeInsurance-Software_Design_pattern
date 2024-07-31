import React, { useState } from 'react';
import '../styles/ReportsAnalytics.css';
import Layout from './Layout';

const ReportsAnalytics = ({ reports, setReports }) => {
  const [selectedReport, setSelectedReport] = useState(null);

  const handleGenerateReport = () => {
    const newReport = `Report generated on ${new Date().toLocaleString()}`;
    setReports([...reports, newReport]);
  };

  const handleExportReports = () => {
    const blob = new Blob([reports.join('\n')], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'reports.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewDetails = (index) => {
    setSelectedReport(selectedReport === index ? null : index);
  };

  return (
    <Layout>

    <div className="reports-analytics-container">
      <h1>Reports & Analytics</h1>
      <div className="reports-analytics">
        <button onClick={handleGenerateReport}>Generate Report</button>
        <button onClick={handleExportReports}>Export Reports</button>
        <ul>
          {reports.map((report, index) => (
            <li key={index}>
              <div className="report-summary">
                {report}
                <button className="view-details" onClick={() => handleViewDetails(index)}>
                  {selectedReport === index ? 'Hide Details' : 'View Details'}
                </button>
              </div>
              {selectedReport === index && (
                <div className="report-details">
                  <p>Details of {report}</p>
                  {/* Add more detailed information here */}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
          </Layout>
  );
};

export default ReportsAnalytics;
