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
  let totalBill = Number(Number(bill) + selfTip + friendTip);

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
        <input
          value={selfLike}
          onChange={(e) => setSelfLike(e.target.value)}
        ></input>
      </p>

      <p>
        How did your friend like the sevice?{" "}
        <input
          value={friendLike}
          onChange={(e) => setFriendLike(e.target.value)}
        ></input>
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
