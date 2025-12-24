import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faChartBar } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";


function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 text-center">
          To create a ticket, select a relevant topic
        </h1>
        <div className="col-4 p-5 mt-5 mb-2">
          <h4 className="mb-5 fs-5">
            {" "}
            <FontAwesomeIcon icon={faCirclePlus} /> Account Opening
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "3"}}>
            Online Account Opening
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "3"}}>
            Offline Account Opening
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "3"}}>
            Company, Partnership and HUF Account
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "3"}}>
            Opening
          </a>
          <a href="" style={{ textDecoration: "none", lineHeight: "3"}}>
            NRI Account Opening
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "3"}}>
            Charges at Zerodha
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "3"}}>
            Zerodha IDFC First Bank 3-in-1 Account
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "3"}}>
            Getting Started
          </a>
          <br />
        </div>

        <div className="col-4 p-5 mt-5 mb-2">
          <h4 className="mb-5 fs-5">
            {" "}
            <FontAwesomeIcon icon={faUser} /> Your Zerodha Account
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "3"}}>
            Login Credentials
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "3"}}>
            Account Modifications and Segment Addition
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "3"}}>
            DP ID and bank details
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "3"}}>
            Your Profile
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "3"}}>
            Transfer and conversion of shares
          </a>
          <br />
        </div>

        <div className="col-4 p-5 mt-5 mb-2">
          <h4 className="mb-5 fs-5">
            {" "}
            <FontAwesomeIcon icon={faChartBar} /> Your Zerodha Account
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "3"}}>
            Margin/leverage, Product and Order types
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "3"}}>
            Kite Web and Mobile
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "3"}}>
            Trading FAQs
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "3"}}>
            Corporate Actions
          </a>
          <a href="" style={{ textDecoration: "none", lineHeight: "3"}}>
            Sentinel
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "3"}}>
            Kite API
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "3"}}>
            Pi and other platform
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "3"}}>
            Stockreports
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "3"}}>
            GTT
          </a>
          <br />
        </div>

        <div className="col-4 p-5 mt-5 mb-2">
          <h4 className="mb-5 fs-5">
            {" "}
            <FontAwesomeIcon icon={faMoneyBill} /> Funds
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "3"}}>
            Adding Funds
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "3"}}>
            Fund Withdrawal
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "3"}}>
            eMandates
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "3"}}>
            Adding Bank Accounts
          </a>
        </div>

        <div className="col-4 p-5 mt-5 mb-2">
          <h4 className="mb-5 fs-5">
            {" "}
            <FontAwesomeIcon icon={faCircleNotch} /> Console
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "3"}}>
            Reports
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "3"}}>
            Ledger
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "3"}}>
            Portfolio
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "3"}}>
            60 Day Challenge
          </a>
          <a href="" style={{ textDecoration: "none", lineHeight: "3"}}>
            IPO
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "3"}}>
            Referral Program
          </a>
        </div>

        <div className="col-4 p-5 mt-5 mb-2">
          <h4 className="mb-5 fs-5">
            {" "}
            <FontAwesomeIcon icon={faCircle} /> Coin
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "3"}}>
            Understanding Mutual Funds
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "3"}}>
            About Coin
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "3"}}>
            Buying and Selling through Coin
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "3"}}>
            Starting an SIP
          </a>
          <a href="" style={{ textDecoration: "none", lineHeight: "3"}}>
            Managing your Portfolio
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "3"}}>
            Coin App
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "3"}}>
            Moving to Coin
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "3"}}>
            Government Securities
          </a>
          <br />
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
