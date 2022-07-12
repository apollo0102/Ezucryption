import React from "react";

import styles from "./feeds-activity.module.scss";

function FeedsActivity() {
  const activities = [
    {
      image: "",
      name: "#1234",
      underName: "Alpha Betty Doodle",
      from: "0xdf...okcx",
      to: "0xdf...okcx",
      date: "4 minutes ago",
      amount: "0.879 ETH",
      expiration: "-",
      type: "Transfer",
    },
    {
      image: "",
      name: "#1234",
      underName: "Alpha Betty Doodle",
      from: "0xdf...okcx",
      to: "0xdf...okcx",
      date: "4 minutes ago",
      amount: "0.879 ETH",
      expiration: "-",
      type: "Offer",
    },
    {
      image: "",
      name: "#1234",
      underName: "Alpha Betty Doodle",
      from: "0xdf...okcx",
      to: "0xdf...okcx",
      date: "4 minutes ago",
      amount: "0.879 ETH",
      expiration: "-",
      type: "Sale",
    },
    {
      image: "",
      name: "#1234",
      underName: "Alpha Betty Doodle",
      from: "0xdf...okcx",
      to: "0xdf...okcx",
      date: "4 minutes ago",
      amount: "0.879 ETH",
      expiration: "-",
      type: "List",
    },
    {
      image: "",
      name: "#1234",
      underName: "Alpha Betty Doodle",
      from: "0xdf...okcx",
      to: "0xdf...okcx",
      date: "4 minutes ago",
      amount: "0.879 ETH",
      expiration: "-",
      type: "Transfer",
    },
    {
      image: "",
      name: "#1234",
      underName: "Alpha Betty Doodle",
      from: "0xdf...okcx",
      to: "0xdf...okcx",
      date: "4 minutes ago",
      amount: "0.879 ETH",
      expiration: "-",
      type: "Offer",
    },
    {
      image: "",
      name: "#1234",
      underName: "Alpha Betty Doodle",
      from: "0xdf...okcx",
      to: "0xdf...okcx",
      date: "4 minutes ago",
      amount: "0.879 ETH",
      expiration: "-",
      type: "Sale",
    },
    {
      image: "",
      name: "#1234",
      underName: "Alpha Betty Doodle",
      from: "0xdf...okcx",
      to: "0xdf...okcx",
      date: "4 minutes ago",
      amount: "0.879 ETH",
      expiration: "-",
      type: "List",
    },
  ];
  return (
    <div className={styles.table}>
      <div className={styles["table-headers-wrapper"]}>
        <span className={`g-font-medium ${styles["table-header"]}`}>Item</span>
        <span className="g-font-medium" style={{ width: "15%", fontSize: 14 }}>
          From
        </span>
        <span className="g-font-medium" style={{ width: "15%", fontSize: 14 }}>
          To
        </span>
        <span className="g-font-medium" style={{ width: "10%", fontSize: 14 }}>
          Date
        </span>
        <span className="g-font-medium" style={{ width: "10%", fontSize: 14 }}>
          Amount
        </span>
        <span className="g-font-medium" style={{ width: "10%", fontSize: 14 }}>
          Expiration
        </span>
        <span className="g-font-medium" style={{ width: "10%", fontSize: 14 }}>
          Type
        </span>
        <span className="g-font-medium" style={{ fontSize: 14 }}>
          View
        </span>
      </div>

      {activities.map((activity) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid rgba(196, 196, 196, 0.5)",
            height: 60,
            borderRadius: 8,
            marginBottom: "1rem",
          }}
        >
          <div
            style={{
              width: "20%",
              display: "flex",
              alignItems: "center",
              paddingLeft: 20,
            }}
          >
            <span
              style={{
                width: 40,
                height: 40,
                background: "#eee",
                borderRadius: "100%",
              }}
            ></span>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: 20,
              }}
            >
              <span
                className="g-font-bold"
                style={{ fontSize: 14, marginBottom: 3 }}
              >
                {activity.name}
              </span>
              <small style={{ fontSize: 10 }}>{activity.underName}</small>
            </div>
          </div>
          <span className="g-font-bold" style={{ width: "15%", fontSize: 14 }}>
            {activity.from}
          </span>
          <span className="g-font-bold" style={{ width: "15%", fontSize: 14 }}>
            {activity.to}
          </span>
          <span className="g-font-bold" style={{ width: "10%", fontSize: 14 }}>
            {activity.date}
          </span>
          <span className="g-font-bold" style={{ width: "10%", fontSize: 14 }}>
            {activity.amount}
          </span>
          <span className="g-font-bold" style={{ width: "10%", fontSize: 14 }}>
            {activity.expiration}
          </span>
          <div
            className="g-font-medium"
            style={{
              width: "10%",
              fontSize: 14,
            }}
          >
            <span
              style={{
                backgroundColor:
                  activity.type.toLowerCase() == "transfer"
                    ? "#BAE5F8"
                    : activity.type.toLowerCase() == "offer"
                    ? "#BAF8CF"
                    : activity.type.toLowerCase() == "sale"
                    ? "#E3D4EA"
                    : "#F8BABA",
                width: "70%",
                display: "block",
                textAlign: "center",
                borderRadius: 24,
              }}
            >
              {activity.type}
            </span>
          </div>
          <span></span>
        </div>
      ))}
    </div>
  );
}

export default FeedsActivity;
