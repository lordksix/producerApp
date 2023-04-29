import { createElementDefault } from './elementGeneratorMod.js';
import { createImg } from './imgGeneratorMod.js';
import { createButton } from './buttonGeneratorMod.js';
import { works } from './simulateDataBase.js';

export const renderEvents = (e, elem, classes) => {
  const posEvent = works[parseInt(e.target.dataset.eventid, 10)];
  const docFragDiv = document.createDocumentFragment();
  const docFragCard = document.createDocumentFragment();

  const headingEvent = document.createElement('h2');
  headingEvent.classList.add('event-post-card-title');
  headingEvent.textContent = posEvent.name;
  docFragCard.appendChild(headingEvent);

  const docFragUL = document.createDocumentFragment();
  posEvent.cat.forEach((catElem) => docFragUL.appendChild(createElementDefault('li', 'cat-descrip', false, catElem)))
  const eventCat = createElementDefault('ul', 'event-post-card-ul', docFragUL);
  docFragCard.appendChild(eventCat);
  docFragCard.appendChild(createElementDefault('div','event-post-card-descrip', false, posEvent.description));

  const docFragULTag = document.createDocumentFragment();
  posEvent.cat.forEach((catElem) => docFragULTag.appendChild(createElementDefault('li', 'cat-descrip', false, catElem)))
  const eventTag = createElementDefault('ul', 'event-post-card-ul', docFragULTag);
  docFragCard.appendChild(eventTag);

  const docFragBtn = document.createDocumentFragment();
  docFragBtn.appendChild(createElementDefault('span',false, false, 'Buy tickets'));
  docFragBtn.appendChild(createImg('event-post-img', posEvent.connectionsBtn[0], posEvent.connectionstext[0]));
  docFragCard.appendChild(createButton('button', 'event-btn', 'Open event', false, false, false, false, docFragBtn));
  
  const imgEvent = createImg('event-post-img', posEvent.snapshot, `${posEvent.name} Project, ${posEvent.cat[2]}`);
  docFragDiv.appendChild(imgEvent);
  const divEventCard = createElementDefault('div', 'event-post-card', docFragCard);
  docFragDiv.appendChild(divEventCard);

  const eventSec = createElementDefault(elem, classes, docFragDiv);
  return eventSec;
}
