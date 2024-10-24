import { useState } from 'react';
function MyComponent({ message }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>{message}</h2>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
export default MyComponent;