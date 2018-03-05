// ConferenceField.jsx

const m = require("mithril");

const ConferenceField = {
	view: ({ attrs }) =>
		<div class="conference-field">
			{attrs.fieldValue}
		</div >
};

export default ConferenceField;