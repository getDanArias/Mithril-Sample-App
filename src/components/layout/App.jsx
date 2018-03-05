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
import UIButton from '../../components/ui/UIButton.jsx';

// Mock data
import {getMockData} from '../../store/data';
const CONFERENCES = getMockData();

// Services
import Auth from '../../services/auth.js';
const auth = new Auth();

const WelcomeView = () => [
	<h1 class="app-title">Conference Tracker</h1>,
	<h2 class="app-greeting">Welcome</h2>,
	<span class="app-description">Track conferences and CFP dates.</span>,
	<div class="login-button">
		<UIButton action={() => auth.login()} buttonName="LOGIN" />
	</div>
];

const ConferenceView = (conferences) => [
	<StageBanner action={() => auth.logout()} title="Conferences" />,
	<CardContainer>
		{
			conferences
				.map((conference) => <ConferenceCard conference={conference} />)
		}
	</CardContainer>
];

const CFPView = (conferences) => [
	<StageBanner action={() => auth.logout()} title="Call for Papers" />,
	<CardContainer>
		{
			conferences
				.filter(conference => conference.CFP)
				.map(conferenceWithCFP => <CFPCard cfp={true} conference={conferenceWithCFP} />)
		}
	</CardContainer>
];

const FormView = () => [
	<StageBanner action={() => auth.logout()} title="Add Conference" />,
	<CardContainer>
		<EntryForm />
	</CardContainer>
];

const App = {
	oncreate: (vnode) => {
		const mainStage = vnode.dom.querySelector(".main-stage");

		auth.handleAuthentication();

		m.route(mainStage, "/auth", {
			"/auth": {
				view: () => WelcomeView()
			},
			"/conferences": {
				onmatch: () =>
					auth.isAuthenticated() ?
						({view: () => ConferenceView(CONFERENCES)}) :
						m.route.set("/auth")

			},
			"/cfp": {
				onmatch: () =>
					auth.isAuthenticated() ?
						({view: () => CFPView(CONFERENCES)}) :
						m.route.set("/auth")
			},
			"/entry": {
				onmatch: () =>
					auth.isAuthenticated() ?
						({view: () => FormView()}) :
						m.route.set("/auth")
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