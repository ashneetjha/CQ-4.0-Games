import { Link } from "react-router-dom";

export default function Start() {
  return (
    <section style={{minHeight:"100vh",display:"grid",placeItems:"center",padding:"24px"}}>
      <div style={{textAlign:"center"}}>
        <h1 style={{marginBottom:12}}>Start Page (placeholder)</h1>
        <p>Wire this route to your round/game screen later.</p>
        <p style={{marginTop:16}}><Link to="/">← Back to Water Jug</Link></p>
      </div>
    </section>
  );
}
