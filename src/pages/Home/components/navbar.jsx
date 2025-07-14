import '../components/home.css'

function Navbar(){
    return(
  <nav className="navbar">
  <div className="logo">
<span class="material-symbols-outlined">badge</span>   
 <p>Hr Assistant</p>
  </div>
  <div className="nav-buttons">

  <button className="login-btn">Login</button>
  <button className="signup-btn">Sign Up</button>
  </div>
</nav>)
}
export default Navbar