// App.jsx

const m = require('mithril');

import MainStage from './MainStage.jsx';
import NavBar from './NavBar.jsx';

// Components
import StageBanner from '../../components/ui/StageBanner.jsx';
import CardContainer from '../../components/layout/CardContainer.jsx';
import ConferenceCard from '../../components/cards/ConferenceCard.jsx';
import CFPCard from '../../components/cards/CFPCard.jsx';
import EntryForm from '../../components/EntryForm.jsx';

// Mock data
import {getMockData} from '../../store/data';
const CONFERENCES = getMockData();

const ConferenceView = (conferences) => [
	<StageBanner action={() => console.log(`Logging out!`)} title="Conferences" />,
	<CardContainer>
		{
			conferences
				.map((conference) => <ConferenceCard conference={conference} />)
		}
	</CardContainer>
];

const CFPView = (conferences) => [
	<StageBanner action={() => console.log(`Logging out!`)} title="Call for Papers" />,
	<CardContainer>
		{
			conferences
				.filter(conference => conference.CFP)
				.map(conferenceWithCFP => <CFPCard cfp={true} conference={conferenceWithCFP} />)
		}
	</CardContainer>
];

const FormView = () => [
	<StageBanner action={() => console.log(`Logging out!`)} title="Add Conference" />,
	<CardContainer>
		<EntryForm />
	</CardContainer>
];

const App = {
	oncreate: (vnode) => {
		const mainStage = vnode.dom.querySelector(".main-stage");

		m.route(mainStage, "/conferences", {
			"/conferences": {
				view: () => ConferenceView(CONFERENCES)
			},
			"/cfp": {
				view: () => CFPView(CONFERENCES)
			},
			"/entry": {
				view: () => FormView()
			}
		});
	},
	view: ({ children }) =>
		<div class="App">
			<MainStage>
				{children}
			</MainStage>
			<NavBar />
		</div>
};

export default App;