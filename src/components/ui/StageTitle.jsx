// StageTitle.jsx

const m = require("mithril");

const StageTitle = {
	view: ({ attrs }) =>
		<div class="stage-title">{attrs.title}</div>
};

export default StageTitle;