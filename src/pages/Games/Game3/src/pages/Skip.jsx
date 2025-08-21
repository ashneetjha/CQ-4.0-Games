import { Link } from "react-router-dom";

export default function Skip() {
  return (
    <section style={{minHeight:"100vh",display:"grid",placeItems:"center",padding:"24px"}}>
      <div style={{textAlign:"center"}}>
        <h1 style={{marginBottom:12}}>Skipped (placeholder)</h1>
        <p>Handle skip logic or cost deduction here.</p>
  <p style={{marginTop:16}}><Link to="/games/game4">→ Skip to Game 4</Link></p>
      </div>
    </section>
  );
}
