// CFPCard.jsx

const m = require("mithril");

import ConferenceField from './ConferenceField.jsx';
import CountDownField from "./CountDownField.jsx";

const CFPCard = {
  view: ({ attrs }) =>
    <div class="conference-card">
      <div class="conference-fields">
        <ConferenceField fieldValue={`${attrs.conference.name} @ ${attrs.conference.location}`} />
        <ConferenceField fieldValue={
          <i class="fas fa-check-circle" />
        } />
      </div>
      <div class="conference-fields">
        <ConferenceField fieldValue={attrs.conference.CFPDate} />
        <CountDownField fieldValue={attrs.conference.CFPDate} />
      </div>
    </div>
};

export default CFPCard;