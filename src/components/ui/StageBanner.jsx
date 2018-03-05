// StageBanner.jsx

const m = require('mithril');

import StageTitle from './StageTitle.jsx';
import LogoutButton from './LogoutButton.jsx';

const StageBanner = {
	view: ({ attrs }) =>
		<div class="stage-banner">
			<StageTitle title={attrs.title} />
			<LogoutButton action={attrs.action} />
		</div>
};

export default StageBanner;