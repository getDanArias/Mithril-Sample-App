// ConferenceCard.jsx

const m = require("mithril");

import ConferenceField from './ConferenceField.jsx';
import CountDownField from "./CountDownField.jsx";

const ConferenceCard = {
	view: ({ attrs }) =>
		<div class="conference-card">
			<div class="conference-fields">
				<ConferenceField fieldValue={`${attrs.conference.name} @ ${attrs.conference.location}`} />
				<ConferenceField fieldValue={
					<i class="fas fa-star" />
				} />
			</div>
			<div class="conference-fields">
				<ConferenceField fieldValue={attrs.conference.date} />
				<CountDownField fieldValue={attrs.conference.date} />
			</div>
		</div>
};

export default ConferenceCard;