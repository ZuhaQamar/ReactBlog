// import the react and reactDom libraries
import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

//Create a react component
const App = () => {
  const buttonText = "Click me";
  return (
    <div>
      <label className="label" htmlFor="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "pink", color: "white" }}>
        {buttonText}
      </button>

      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>

      <div className="ui container comments">
        <ApprovalCard>
          <CommentDetail
            author="Sam"
            date="Today at 4:35 PM"
            text="Not amused"
            avatar={faker.image.avatar()}
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
            author="Alex"
            date="Yesterday at 5:35 PM"
            text="Good work!"
            avatar={faker.image.avatar()}
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
            author="Taylor"
            date="Today at 1:20 AM"
            text="Impressive"
            avatar={faker.image.avatar()}
          />
        </ApprovalCard>
      </div>
    </div>
  );
};

//Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
