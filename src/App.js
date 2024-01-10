import { useState } from "react";

export default function App() {
  return <Tip />;
}

function Tip() {
  const [bill, setBill] = useState(0);
  const [selfLike, setSelfLike] = useState(0);
  const [friendLike, setFriendLike] = useState(0);

  let selfTip = Number((Number(selfLike) / 100) * bill);
  let friendTip = Number((Number(friendLike) / 100) * bill);
  let totalBill = Number(Number(bill) + (selfTip + friendTip) / 2);

  function handleReset() {
    setBill(0);
    setSelfLike(0);
    setFriendLike(0);
  }
  return (
    <div>
      <p>
        How much was the bill?{" "}
        <input value={bill} onChange={(e) => setBill(e.target.value)}></input>
      </p>

      <p>
        How did you like the service?{" "}
        <select value={selfLike} onChange={(e) => setSelfLike(e.target.value)}>
          <option value={0}>Dissatisfied (0%)</option>
          <option value={5}>It was okay (5%)</option>
          <option value={10}>It was good (10%)</option>
          <option value={20}>Absolutely Amazing! (20%)</option>
        </select>
      </p>

      <p>
        How did your friend like the sevice?{" "}
        <select
          value={friendLike}
          onChange={(e) => setFriendLike(e.target.value)}
        >
          <option value={0}>Dissatisfied (0%)</option>
          <option value={5}>It was okay (5%)</option>
          <option value={10}>It was good (10%)</option>
          <option value={20}>Absolutely Amazing! (20%)</option>
        </select>
      </p>

      <b>
        You pay ${totalBill} (${selfTip} + ${friendTip}) tip
      </b>

      <div>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
