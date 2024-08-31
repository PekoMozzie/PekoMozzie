'use client'

const TestButton = () => {

  const test = async () => {
    const response = await fetch('/api/test');
    const parsed = await response.json();
    console.log("PARSED", parsed)
  }

  return (
    <button onClick={test}>Test</button>
  );
}

export default TestButton;