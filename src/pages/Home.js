import Transition from "../components/Transition"

function Home() {
  const h1 = { color: "yellow" }
  return (
    <div>
      <Transition />
      {/* If you prefer the transition to display an image instead of a block colour add a self closing div with a css image background class  */}
      <div className="home-image home-overlay" />
      {/* ^^^^^^ see global.css for background image class styling */}
      <div className="container">
        <h1 style={h1}>Home Page</h1>
      </div>
    </div>
  )
}

export default Home
