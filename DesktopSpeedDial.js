/**
* Banking Assistant 2.0 written by Adam Schaeffer
* http://technologyordie.com
*/
const xapi = require('xapi');
 
//change number / SIP URI below for your requirements

const dial_SALES = '81111@mydomain.ru';
const dial_MARKET = '82222@mydomain.ru';
const dial_HELPDESK = '83333@mydomain.ru';
const dial_BOSS = '84444@mydomain.ru';

function dial(event) {
//console.log(event); //logs the information passed in the "event" variable

// sd8XXXX - button id in UI Extensions configuration
if (event.PanelId === 'sd81111') {
xapi.command('Dial', { Number: dial_SALES });
}

if (event.PanelId === 'sd82222') {
xapi.command('Dial', { Number: dial_MARKET });
}

if (event.PanelId === 'sd83333') {
xapi.command('Dial', { Number: dial_HELPDESK });
}
if (event.PanelId === 'sd84444') {
xapi.command('Dial', { Number: dial_BOSS });
}
 
}
 
//Listen for event to happen.
xapi.event.on('UserInterface Extensions Panel Clicked', dial);
