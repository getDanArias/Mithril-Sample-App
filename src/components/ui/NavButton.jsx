// NavButton.jsx

const m = require("mithril");

const NavButton = {
	view: ({ attrs }) =>
		<a class="nav-button" href={`#!/${attrs.path}`}>
			{attrs.icon}
		</a>
};

export default NavButton;