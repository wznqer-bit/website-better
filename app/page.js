export default function Home() {
  return (
    <main style={{
      fontFamily: "Arial, sans-serif",
      padding: "40px",
      maxWidth: "900px",
      margin: "auto"
    }}>
      <h1 style={{fontSize:"48px"}}>
        CentiCove
      </h1>

      <p style={{fontSize:"20px",color:"#555"}}>
        Simple money tools for students and beginners.
      </p>

      <hr style={{margin:"40px 0"}}/>

      <h2>Products</h2>

      <div style={{marginTop:"20px"}}>
        <h3>Student Budget Tracker — $9</h3>
        <p>
          A clean Google Sheets tracker for income,
          expenses, and monthly spending.
        </p>
      </div>

      <div style={{marginTop:"20px"}}>
        <h3>Savings Goal Planner — $7</h3>
        <p>
          Track savings goals and progress with an easy planner.
        </p>
      </div>

      <div style={{marginTop:"20px"}}>
        <h3>CentiCove Bundle — $25</h3>
        <p>
          Includes the budget tracker, savings planner,
          and debt payoff tracker.
        </p>
      </div>

      <hr style={{margin:"40px 0"}}/>

      <h2>How it works</h2>

      <ol>
        <li>Choose your template</li>
        <li>Download instantly</li>
        <li>Start tracking your money</li>
      </ol>

      <hr style={{margin:"40px 0"}}/>

      <h2>FAQ</h2>

      <p><b>Do I need Excel?</b></p>
      <p>No. Everything works in Google Sheets.</p>

      <p><b>Is this beginner friendly?</b></p>
      <p>Yes — it is designed for people new to budgeting.</p>

    </main>
  )
}
