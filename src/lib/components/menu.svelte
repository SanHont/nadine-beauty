<script>
	import { PhoneIcon, HamburgerMenu } from '$lib/index.js';
	let navActive = false;
  
	const toggleNav = () => {
	  navActive = !navActive;
	};
  </script>
  
  <header>
	<a href="/">
	  <img src="assets/NadineBeautyLogo.svg" alt="Nadine beauty" width="200" height="200" class="logo"/>
	</a>
	<a href="javascript:void(0)" class="menu-icon" on:click={toggleNav}>
	  <img src={HamburgerMenu} alt="Hamburger Menu" class="hamburgermenu"/>
	</a>
	<nav class:active={navActive}>
	  <ul role="menu">
		<li><a href="/">Home</a></li>
		<li><a href="#aboutMe">About me</a></li>
		<li><a href="#gallery">Gallery</a></li>
		<li><a href="tel:0000000"><img src={PhoneIcon} alt="Phone" width="25" height="25"></a></li>
	  </ul>
	  <a href="javascript:void(0)" class="close-icon" on:click={toggleNav}>
		<img src={HamburgerMenu} alt="Close Menu"/>
	  </a>
	</nav>
  </header>
  
  <style>
	header {
	  position: absolute;
	  z-index: 99;
	  width: 100%;
	  padding: 1em 2.5em 1em 2em;
	  height: 11vh;
	  display: flex;
	  align-items: center;
	  justify-content: space-between;
	  background-color: var(--nav-background);
	}
	.menu-icon img {
	  width: 30px;
	  height: 30px;
	}
	nav {
	  position: fixed;
	  inset: 0;
	  background-color: var(--nav-background);
	  font-size: 1.5em;
	  display: none;
	  opacity: 0;
	  transition: opacity 0.25s ease-in;
	}
	nav.active {
	  display: block;
	  opacity: 1;
	}
	nav .close-icon {
	  background: none;
	  padding: 1em 1.5em;
	  position: absolute;
	  top: 0;
	  right: 0;
	}
	ul {
	  list-style: none;
	  display: flex;
	  gap: 1em;
	  flex-direction: column;
	  padding: 5em 2em;
	}
	a {
	  text-decoration: none;
	  background: radial-gradient(circle farthest-corner at center center, #ffe28e 0%, #c2980f 24%, #eccb66 50%, #d7b23b 78%, #c2980f 100%);
		-webkit-background-clip: text;
		color: transparent;
		display: inline-block;
	}


	@media (min-width: 56.25em) {
	  .menu-icon, .close-icon {
		display: none;
	  }
	  nav {
		display: flex;
		position: absolute;
		flex-wrap: wrap;
		justify-content: flex-end;
		align-content: center;
		background: none;
		padding: 1.5em 2.5em;
		opacity: 1;
		transition: none;
	  }
	  .logo {
		position: relative;
		z-index: 33;
	  }
	  ul {
		flex-direction: row;
		width: max-content;
		gap: 2em;
		padding: 0;
	  }
	  a:hover {
		color: var(--nav-lines);
	  }
	}
	@media (min-width: 87.5em) {
	  nav {
		position: absolute;
		/* font-size: .em; */
	  }
	  nav li{
		padding: 0;
	  }
	  li{
		border-bottom: .1em solid var(--nav-lines);
	}
	li:last-child {
    border-bottom: none;
  }
	}
  </style>
  