const Header = (props) => {
    return ( <>
    <header>
      <nav>
      <ul>
      <li><a href="#home">{props.user}</a></li>
        
        
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
    </> );
}
 
export default Header;