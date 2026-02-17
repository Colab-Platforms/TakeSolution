const StockInformation = () => {
  return (
    <div className="tab-content active">
      <h3 className="content-title">Stock Information</h3>
      
      {/* Stock Info Cards */}
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '40px'}}>
        <div style={{background: '#f8f9fa', padding: '25px', borderRadius: '8px', borderLeft: '4px solid #ff3c00'}}>
          <h4 style={{marginBottom: '15px', color: '#050a1e', fontFamily: 'Poppins', fontSize: '18px'}}>Stock Exchange Listing</h4>
          <p style={{margin: '8px 0', color: '#7a7a7a', fontFamily: 'Fira Sans'}}>BSE Code: 532890(BSE)</p>
          <p style={{margin: '8px 0', color: '#7a7a7a', fontFamily: 'Fira Sans'}}>NSE Symbol: TAKE</p>
          <p style={{margin: '8px 0', color: '#7a7a7a', fontFamily: 'Fira Sans'}}>ISIN: INE142101023</p>
        </div>
        <div style={{background: '#f8f9fa', padding: '25px', borderRadius: '8px', borderLeft: '4px solid #ff3c00'}}>
          <h4 style={{marginBottom: '15px', color: '#050a1e', fontFamily: 'Poppins', fontSize: '18px'}}>Market Data</h4>
          <p style={{margin: '8px 0', color: '#7a7a7a', fontFamily: 'Fira Sans'}}>Current Price: ₹47.40</p>
          {/* <p style={{margin: '8px 0', color: '#7a7a7a', fontFamily: 'Fira Sans'}}>52 Week High: ₹1,450.00</p>
          <p style={{margin: '8px 0', color: '#7a7a7a', fontFamily: 'Fira Sans'}}>52 Week Low: ₹980.00</p>
          <p style={{margin: '8px 0', color: '#7a7a7a', fontFamily: 'Fira Sans'}}>Market Cap: ₹5,240 Cr</p> */}
        </div>
        <div style={{background: '#f8f9fa', padding: '25px', borderRadius: '8px', borderLeft: '4px solid #ff3c00'}}>
          <h4 style={{marginBottom: '15px', color: '#050a1e', fontFamily: 'Poppins', fontSize: '18px'}}>Share Information</h4>
          <p style={{margin: '8px 0', color: '#7a7a7a', fontFamily: 'Fira Sans'}}>Face Value: ₹10</p>
          {/* <p style={{margin: '8px 0', color: '#7a7a7a', fontFamily: 'Fira Sans'}}>Paid-up Capital: ₹42.10 Cr</p> */}
          {/* <p style={{margin: '8px 0', color: '#7a7a7a', fontFamily: 'Fira Sans'}}>Total Shares: 4.21 Cr</p> */}
        </div>
      </div>

      {/* Stock Performance Table */}
      <div className="stock-performance-section">
        <h3 className="performance-title">Stock Performance Year-on-Year</h3>
        
        <div className="table-responsive">
          <table className="stock-performance-table">
            <thead>
              <tr>
                <th className="row-header"></th>
                <th className="unit-header"></th>
                <th>31 Mar 2014</th>
                <th>31 Mar 2015</th>
                <th>31 Mar 2016</th>
                <th>31 Mar 2017</th>
                <th>31 Mar 2018</th>
                <th>31 Mar 2019</th>
                <th>31 Mar 2020</th>
                <th>31 Mar 2021</th>
                <th>31 Mar 2022</th>
                <th>31 Mar 2023</th>
              </tr>
              <tr className="fy-row">
                <th colSpan="2"></th>
                <th>FY 14</th>
                <th>FY 15</th>
                <th>FY 16</th>
                <th>FY 17</th>
                <th>FY 18</th>
                <th>FY 19</th>
                <th>FY 20</th>
                <th>FY 21</th>
                <th>FY 22</th>
                <th>FY 23</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="row-label">Financial Year-end closing price</td>
                <td className="unit-cell">INR</td>
                <td>32.95</td>
                <td>128.40</td>
                <td>142.40</td>
                <td>126.20</td>
                <td>163.65</td>
                <td>149.75</td>
                <td>92.80</td>
                <td>60.50</td>
                <td>29.00</td>
                <td>13.50</td>
              </tr>
              <tr>
                <td className="row-label">High</td>
                <td className="unit-cell">INR</td>
                <td>42.00</td>
                <td>186.90</td>
                <td>210.50</td>
                <td>186.00</td>
                <td>183.90</td>
                <td>297.65</td>
                <td>159.30</td>
                <td>68.60</td>
                <td>30.60</td>
                <td>34.00</td>
              </tr>
              <tr>
                <td className="row-label">Low</td>
                <td className="unit-cell">INR</td>
                <td>20.00</td>
                <td>30.00</td>
                <td>87.10</td>
                <td>124.10</td>
                <td>118.20</td>
                <td>97.85</td>
                <td>37.15</td>
                <td>37.25</td>
                <td>28.60</td>
                <td>13.25</td>
              </tr>
              <tr>
                <td className="row-label">Number of shares</td>
                <td className="unit-cell">millions</td>
                <td>122.40</td>
                <td>122.40</td>
                <td>122.40</td>
                <td>133.24</td>
                <td>147.93</td>
                <td>147.93</td>
                <td>147.93</td>
                <td>147.93</td>
                <td>147.93</td>
                <td>147.93</td>
              </tr>
              <tr>
                <td className="row-label">Market capitalisation as at 31 March</td>
                <td className="unit-cell">INR mn</td>
                <td>4,021</td>
                <td>15,716</td>
                <td>17,430</td>
                <td>16,814</td>
                <td>24,209</td>
                <td>22,153</td>
                <td>13,728</td>
                <td>8,950</td>
                <td>4,290</td>
                <td>1,997</td>
              </tr>
              <tr>
                <td className="row-label">Average trading volume per day</td>
                <td className="unit-cell">shares</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td className="row-label">Annual performance including dividends</td>
                <td className="unit-cell">%</td>
                <td>55.6%</td>
                <td>293.9%</td>
                <td>11.7%</td>
                <td>-10.7%</td>
                <td>30.5%</td>
                <td>-7.9%</td>
                <td>-38.0%</td>
                <td>-34.8%</td>
                <td>-52.1%</td>
                <td>-53.4%</td>
              </tr>
              <tr>
                <td className="row-label">Annual performance excluding dividends</td>
                <td className="unit-cell">%</td>
                <td>51.0%</td>
                <td>290.0%</td>
                <td>10.9%</td>
                <td>-11.4%</td>
                <td>29.7%</td>
                <td>-8.5%</td>
                <td>-38.0%</td>
                <td>-34.8%</td>
                <td>-52.1%</td>
                <td>-53.4%</td>
              </tr>
              <tr>
                <td className="row-label">Earnings per share</td>
                <td className="unit-cell">INR</td>
                <td>4.83</td>
                <td>5.83</td>
                <td>9.37</td>
                <td>11.22</td>
                <td>12.19</td>
                <td>12.13</td>
                <td>(0.85)</td>
                <td>(30.91)</td>
                <td>(53.50)</td>
                <td>(6.86)</td>
              </tr>
              <tr>
                <td className="row-label">Price-to-earnings ratio¹</td>
                <td className="unit-cell"></td>
                <td>6.8</td>
                <td>22.0</td>
                <td>14.3</td>
                <td>11.2</td>
                <td>13.4</td>
                <td>12.3</td>
                <td>109.2</td>
                <td>2.0</td>
                <td>-0.5</td>
                <td>-2.9</td>
              </tr>
              <tr>
                <td className="row-label">Dividend per share</td>
                <td className="unit-cell">INR</td>
                <td>1.00</td>
                <td>1.00</td>
                <td>1.00</td>
                <td>1.00</td>
                <td>1.60</td>
                <td>1.00</td>
                <td>0.00</td>
                <td>0.00</td>
                <td>0.00</td>
                <td>0.00</td>
              </tr>
              <tr>
                <td className="row-label">Dividend yield</td>
                <td className="unit-cell">%</td>
                <td>3.0%</td>
                <td>0.8%</td>
                <td>0.7%</td>
                <td>0.8%</td>
                <td>1.0%</td>
                <td>0.7%</td>
                <td>0.0%</td>
                <td>0.0%</td>
                <td>0.0%</td>
                <td>0.0%</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="table-note">
          <sup>1</sup> Year-end closing price/earnings per share.
        </p>
      </div>
    </div>
  );
};

export default StockInformation;
