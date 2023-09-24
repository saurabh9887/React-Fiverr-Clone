import React from "react";
import "./Messages.scss";
import { Link } from "react-router-dom";

const Messages = () => {
  const currentUser = {
    id: 1,
    username: "Saurabh Ghodke",
    isSeller: true,
  };

  const message = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quibusdam dignissimos maiores culpa laboriosam. Pariatur sit incidunt consectetur nostrum quibusdam rerum aut quo enim cupiditate nihil perspiciatis earum dolores error iure eum, amet, reiciendis atque, repellendus tempora! Nulla, deleniti modi consequatur explicabo dolor deserunt eligendi sed, repellendus unde et sint illum optio necessitatibus tempore eos a delectus, neque fugiat fuga amet. Pariatur, dolores. Quod atque necessitatibus accusamus similique voluptates consectetur odio expedita maiores eius, aliquam, maxime praesentium officiis aliquid at.`;

  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h1>Messages</h1>
        </div>
        <table>
          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className="active">
            <td>John Doe</td>
            <td>
              <Link to="/message/:125">{message.substring(0, 100)}....</Link>
            </td>
            <td>1 Day ago</td>
            <td>
              <button>Mark as read</button>
            </td>
          </tr>
          <tr className="active">
            <td>John Doe</td>
            <td>
              <Link to="/message/:125">{message.substring(0, 100)}....</Link>
            </td>
            <td>1 Day ago</td>
            <td>
              <button>Mark as read</button>
            </td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>{message.substring(0, 100)}....</td>
            <td>1 Day ago</td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>{message.substring(0, 100)}....</td>
            <td>1 Day ago</td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>{message.substring(0, 100)}....</td>
            <td>1 Day ago</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Messages;
