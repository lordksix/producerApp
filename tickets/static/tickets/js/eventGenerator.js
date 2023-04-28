import { createElementDefault } from './elementGeneratorMod';
import { createImg } from './imgGeneratorMod';
import { createButton } from './buttonGeneratorMod';
import { works } from './simulateDataBase';

const renderworks = (e) => {
  const posEvent = works[parseInt(e.target.dataset.eventID, 10)];
  const docFragDiv = document.createDocumentFragment();
  const docFragCard = document.createDocumentFragment();

  const headingEvent = document.createElement('h2');
  headingEvent.classList.add('event-post-card-title');
  headingEvent.textContent = posEvent.name;
  docFragCard.appendChild(headingEvent);

  const docFragUL = document.createDocumentFragment();
  posEvent.cat.forEach((catElem) => docFragUL.appendChild(createElementDefault('li', 'cat-descrip', null, catElem)))
  const eventCat = createElementDefault('ul', 'event-post-card-ul', docFragUL);

  
  docFragCard.appendChild(eventCat)
  const divEventCard = createElementDefault('div', 'event-post-card', docFragCard);
  const imgEvent = createImg('event-post-img', posEvent.snapshot, `${posEvent.name} Project, ${posEvent.cat[2]}`);
  docFragDiv.appendChild(imgEvent);
  docFragDiv.appendChild(divEventCard);
  return docFragDiv;
}
