import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState(0);
  const [selfLike, setSelfLike] = useState(0);
  const [friendLike, setFriendLike] = useState(0);

  function handleBillInput(amt) {
    setBill(amt);
  }

  function handleSelfLike(likePercent) {
    setSelfLike(likePercent);
  }

  function handleFriendLike(likePercent) {
    setFriendLike(likePercent);
  }

  function handleReset() {
    setBill(0);
    setSelfLike(0);
    setFriendLike(0);
  }

  return (
    <div className="app">
      <div className="box">
        <div className="comp bill">
          <Bill bill={bill} onBillInput={handleBillInput} />
        </div>
        <div className="comp percent">
          <p>How did you like the service?</p>
          <TipPercentage likeBy={selfLike} onLike={handleSelfLike} />
        </div>
        <div className="comp percent">
          <p>How did your friend like the service?</p>
          <TipPercentage likeBy={friendLike} onLike={handleFriendLike} />
        </div>
        <div className="comp output">
          <Output bill={bill} selfLike={selfLike} friendLike={friendLike} />
        </div>

        <div>
          <button className="btn" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

function Bill({ bill, onBillInput }) {
  return (
    <div>
      <p>How much was the bill ? </p>
      <input
        value={bill}
        onChange={(e) => onBillInput(Number(e.target.value))}
      ></input>
    </div>
  );
}

function TipPercentage({ likeBy, onLike }) {
  return (
    <div>
      <select value={likeBy} onChange={(e) => onLike(Number(e.target.value))}>
        <option value={0}>Dissatisfied(0%)</option>
        <option value={5}>It was okay(5%)</option>
        <option value={10}>It was good(10%)</option>
        <option value={20}>Absolutely Amazing!(20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, selfLike, friendLike }) {
  let tip = (Number(selfLike + friendLike) / 2 / 100) * bill;
  let totalAmt = bill + tip;
  return (
    <div>
      <strong>
        You pay ${totalAmt} (${bill} + ${tip} tip)
      </strong>
    </div>
  );
}
