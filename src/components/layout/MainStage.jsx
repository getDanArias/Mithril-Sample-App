// MainStage.jsx

const m = require("mithril");

const MainStage = {
	view: (vnode) =>
		<div class="main-stage">
			{vnode.children}
		</div>
};

export default MainStage;