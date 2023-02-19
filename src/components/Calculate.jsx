function Calculate() {
  return (
    <div className="calculate-form">
      <form>
        <input type="text" placeholder="Initial Year" required />
        <input type="text" placeholder="Initial Amount" required />
        <br />
        <input type="text" placeholder="Final Year" required />
        <input type="text" placeholder="Final Amount" disabled />
        <br />
        <button>Calculate</button>
      </form>
    </div>
  );
}

export default Calculate;
