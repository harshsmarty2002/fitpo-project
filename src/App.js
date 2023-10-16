// import logo from "./logo.svg";
import React,{useState} from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import ScrollToTop from "react-scroll-to-top";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";
Chart.register(...registerables);
function App() {
  const [Monthlydata, setMonthlydata] = useState(new Date())
  const bar = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Total Earning",
        backgroundColor: [
          "#1d4fd7",
          "#0b1f56",
          "#007bff",
          "#0c225d",
          "#050A30",
          "#3161e4",
        ],
        // borderColor: [
        //   'rgba(255, 99, 132, 1)',
        //   'rgba(54, 162, 235, 1)',
        //   'rgba(255, 206, 86, 1)',
        //   'rgba(75, 192, 192, 1)',
        //   'rgba(153, 102, 255, 1)',
        //   'rgba(255, 159, 64, 1)'
        // ],
        borderRadius: 9,
        borderSkipped: false,
        borderWidth: 1,
        data: [
          "10",
          "12",
          "14",
          "15",
          "12",
          "29",
          "41",
          "09",
          "77",
          "56",
          "45",
          "43",
        ],
      },
    ],
  };
  const docut = {
    labels: ["Income", "Expenses"],
    datasets: [
      {
        label: "Rainfall",
        backgroundColor: [
          "#1d4fd7",
          "#0b1f56",
          "#007bff",
          "#0c225d",
          "#050A30",
          "#3161e4",
        ],
        // borderColor: [
        //   'rgba(255, 99, 132, 1)',
        //   'rgba(54, 162, 235, 1)',
        //   'rgba(255, 206, 86, 1)',
        //   'rgba(75, 192, 192, 1)',
        //   'rgba(153, 102, 255, 1)',
        //   'rgba(255, 159, 64, 1)'
        // ],
        // borderWidth: 1,
        data: ["90", "60"],
      },
    ],
  };
  return (
    <div>
      <div className="sidebar">
        <h2>Dashboard</h2>
        <div className="heading"></div>
        <a className="active" href="#home">
        
        <i class="fa fa-magic icon"></i>
          Dashboard
        </a>
        <a href="#news" className="d-flex justify-content-between">
          <label>
          {/* <i class="fa fa-money" aria-hidden="true"></i> */}
            <i class="fa fa-database icon"></i>Product
          </label>
          <i class="fa fa-angle-right icon"></i>
        </a>
        <a href="#contact" className="d-flex justify-content-between">
          <label>
            <i class="fa fa-users icon"></i>Customers
          </label>
          <i class="fa fa-angle-right icon"></i>
        </a>
        <a href="#about" className="d-flex justify-content-between">
          <label>
            <i class="fa fa-bullseye icon"></i>Income
          </label>
          <i class="fa fa-angle-right icon"></i>
        </a>
        <a href="#about" className="d-flex justify-content-between">
          <label>
            <i class="fa fa-bullhorn icon"></i>Promote
          </label>
          <i class="fa fa-angle-right icon"></i>
        </a>
        <a href="#about" className="d-flex justify-content-between">
          <label>
            <i class="fa fa-question icon"></i>Help
          </label>
          <i class="fa fa-angle-right icon"></i>
        </a>
      </div>
      <div className="content form-group">
        <header className="header">
          <label className="tittle  col-mb-3 col-md-6 "> Hello Harsh 👋</label>
          <div className="input-group col-mb-3 col-md-6  p-3">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i class="fa fa-search" aria-hidden="true"></i>
                {/* <input
                  type="checkbox"
                  aria-label="Checkbox for following text input"
                /> */}
              </div>
            </div>
            <input
              type="text"
              className="form-control"
              aria-label="Text input with checkbox"
              placeholder="Search..."
            />
          </div>
        </header>
        <div className="container">
          <div className="row p-10">
            <div className="col-lg-3 col-md-6 col-sm-6 top-box">
              <div className="shape">
                <i
                  class="fa fa-cubes fa-size circle-icon1"
                  aria-hidden="true"
                ></i>
                <div>
                  <label>Stock</label>
                  <br />
                  <strong>$2.4K</strong>
                  <p>
                    <i class="fa fa-arrow-down" aria-hidden="true">
                      32.5 %
                    </i>
                  </p>
                </div>
              </div>
            </div>
            <div className=" col-lg-3 col-md-6 col-sm-6 top-box">
              <div className="shape">
                <i
                  class="fa fa-university fa-size circle-icon2"
                  aria-hidden="true"
                ></i>
                <div>
                  <label>Earning</label>
                  <br />
                  <strong>$7.1K</strong>
                  <p>
                    <i class="fa fa-arrow-up" aria-hidden="true">
                      32.5 %
                    </i>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 top-box">
              <div className="shape ">
                <i
                  class="fa fa-bookmark fa-size circle-icon3"
                  aria-hidden="true"
                ></i>
                <div>
                  <label>Order</label>
                  <br />
                  <strong>$9.5K</strong>
                  <p>
                    <i class="fa fa-arrow-down" aria-hidden="true">
                      32.5 %
                    </i>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 top-box">
              <div className="shape">
                <i
                  class="fa fa-briefcase fa-size circle-icon4"
                  aria-hidden="true"
                ></i>
                <div>
                  <label>Total Sale</label>
                  <br />
                  <strong>$8.5K</strong>
                  <p>
                    <i class="fa fa-arrow-up" aria-hidden="true">
                      32.5 %
                    </i>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center ">
            <div className="col-lg-8 mt-2 xs-12">
              <div className="chart-body">
                <Bar
                  height={174}
                  data={bar}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      // tooltip:{
                      //    callbacks:{
                      //   afterTitle:function (context){
                      //     return `Sale Price: ${stockAvilable!=undefined && stockAvilable.length>0 && stockAvilable.map((stock) => stock.salesnetprice)[context[0].dataIndex]}`;
                      //   },
                      //   beforeBody:function (context){
                      //     return `Net Value: ${stockAvilable!=undefined && stockAvilable.length>0 && stockAvilable.map((stock) => Math.round(stock.salesnetprice*stock.stockavailable)?.toFixed(3))[context[0].dataIndex]}`;
                      //   }
                      //    }
                      // }
                    },
                    // title: {
                    //     display: true,
                    //     text: 'Average Balance per month',
                    //     fontSize: 20
                    // },
                    // legend: {
                    //     display: true,
                    //     position: 'right'
                    // },
                    scales: {
                      xAxes: [
                        {
                          gridLines: {
                            color: "rgba(0, 0, 0, 0)",
                          },
                        },
                      ],
                      yAxes: [
                        {
                          gridLines: {
                            color: "rgba(0, 0, 0, 0)",
                          },
                        },
                      ],
                      x: {
                        display: true,
                      },
                    },
                  }}
                />
              </div>
            </div>
            <div className="col-lg-4 md-6 xs-12 mt-2">
              <div className="chart-body">
                <Doughnut
                  data={docut}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    elements: {
                      center: {
                        text: "Red is 2/3 the total numbers",
                        // color: '#FF6384', // Default is #000000
                        fontStyle: "Arial", // Default is Arial
                        sidePadding: 20, // Default is 20 (as a percentage)
                        minFontSize: 20, // Default is 20 (in px), set to false and text will not wrap.
                        lineHeight: 25, // Default is 25 (in px), used for when text wraps
                      },
                    },
                    title: {
                      display: true,
                      text: "Average Rainfall per month",
                      fontSize: 20,
                    },
                    legend: {
                      display: true,
                      position: "right",
                    },
                  }}
                />
              </div>
            </div>
          </div>
          
          <div className="row align-items-center box ">
            <div className="col-lg-12">
              <div className="row table-heading">
              <div className="col-lg-6 col-md-6 col-sm-6 ">
              <h6>Product Sell</h6>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 ">
                <input type="text" className="form-control" placeholder="Search.."/>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 ">
                <select class="form-select">
                  <option>last 30 Days</option>
                </select>
              </div>
              </div>
              
            </div>
            <div className="col-lg-12">
              <div className="position-relative table-container">
                 <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col" style={{whiteSpace:"nowrap"}}>Sr no</th>
                    <th scope="col" style={{whiteSpace:"nowrap"}}>Product Name</th>
                    <th scope="col"style={{whiteSpace:"nowrap"}}>Stock</th>
                    <th scope="col"style={{whiteSpace:"nowrap"}}>Price</th>
                    <th  scope="col" style={{whiteSpace:"nowrap"}}>Total Sale</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td scope="col">1</td>
                    <td scope="col" style={{verticalAlign:"middle"}}><img src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vYmlsZSUyMHBob25lfGVufDB8fDB8fHww&w=1000&q=80" style={{width:"35px",height:"40px",borderRadius:"5px",marginRight:"10px"}}/>Mobile</td>
                    <td scope="col"style={{whiteSpace:"nowrap"}}>15 in stock</td>
                    <td scope="col"style={{whiteSpace:"nowrap"}}>$ 45.99</td>
                    <td scope="col">20</td>
                  </tr>
                  <tr>
                    <td scope="col">2</td>
                    <td scope="col" style={{verticalAlign:"middle"}}><img src="https://cdn.thewirecutter.com/wp-content/media/2023/06/bestlaptops-2048px-9765.jpg" style={{width:"45px",height:"40px",borderRadius:"5px",marginRight:"10px"}}/>Laptop</td>
                    <td scope="col"style={{whiteSpace:"nowrap"}}>15 in stock</td>
                    <td scope="col"style={{whiteSpace:"nowrap"}}>$ 45.99</td>
                    <td scope="col">20</td>
                  </tr>
                  <tr>
                    <td scope="col">3</td>
                    <td scope="col" style={{verticalAlign:"middle"}}><img src="https://images.jdmagicbox.com/quickquotes/images_main/apple-ipad-air-2-tablet-16-gb-wi-fi-grey-106619791-idmno.jpg" style={{width:"35px",height:"40px",borderRadius:"5px",marginRight:"10px"}}/>Tablet</td>
                    <td scope="col"style={{whiteSpace:"nowrap"}}>15 in stock</td>
                    <td scope="col"style={{whiteSpace:"nowrap"}}>$ 45.99</td>
                    <td scope="col">20</td>
                  </tr>
                </tbody>
              </table>
              </div>
            </div>
          </div>
        </div>
        <ScrollToTop smooth />
      </div>
    </div>
  );
}
export default App;
