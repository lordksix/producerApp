import { createP } from './pGeneratorMod';
import { createDiv } from './divGeneratorMod';
import { createImg } from './imgGeneratorMod';
import { createButton } from './buttonGeneratorMod';
import { works } from './simulateDataBase';

const eventGenerator = (e, sectionTag) => {
  const docFragment = document.createDocumentFragment();
  const posEvent = works[parseInt(e.target.dataset.eventID, 10)];

  const projectOverlay = document.createElement('div');
  projectOverlay.classList.add('project-overlay-wrapper');

  const projectCtn = document.createElement('div');
  projectCtn.classList.add('project-overlay', 'work-card');

  const projecHeadingCtn = document.createElement('div');
  projecHeadingCtn.classList.add('work-title-container');

  const projectCloseBtn = document.createElement('span');
  projectCloseBtn.textContent = 'X';
  projectCloseBtn.classList.add('work-clase', 'work-title');

  const projectHeading = document.createElement('h2');
  projectHeading.textContent = workCardInf.name;
  projectHeading.classList.add('work-title');

  projecHeadingCtn.appendChild(projectHeading);
  projecHeadingCtn.appendChild(projectCloseBtn);
  docFragment.appendChild(projecHeadingCtn);

  const workCat = document.createElement('ul');
  workCat.classList.add('work-cat');
  for (let i = 0; i < workCardInf.cat.length; i += 1) {
    const catList = document.createElement('li');
    if (i === 0) catList.classList.add('cat-title');
    else catList.classList.add('cat-descrip');
    catList.textContent = workCardInf.cat[i];
    workCat.appendChild(catList);
  }
  docFragment.appendChild(workCat);

  const workImage = document.createElement('img');
  workImage.classList.add('work-image');
  workImage.src = workCardInf.snapshot;
  workImage.alt = `${workCardInf.name} Project, ${workCardInf.cat[2]}`;
  docFragment.appendChild(workImage);

  const workCardBody = document.createElement('div');
  workCardBody.classList.add('work-card-body');

  const workDescrip = document.createElement('p');
  workDescrip.classList.add('work-descrip');
  workDescrip.textContent = workCardInf.description;
  workCardBody.appendChild(workDescrip);

  docFragment.appendChild(workCardBody);

  const workCardFooter = document.createElement('div');
  workCardFooter.classList.add('work-title-footer');

  const workCardLangs = document.createElement('ul');
  workCardLangs.classList.add('work-langs');
  workCardInf.tags.forEach((tag) => {
    const langList = document.createElement('li');
    langList.classList.add('work-lang');
    langList.textContent = tag;
    workCardLangs.appendChild(langList);
  });

  const workCardBtnsCtn = document.createElement('div');
  workCardBtnsCtn.classList.add('work-btns');
  for (let i = 0; i < 2; i += 1) {
    const workCardBtnsLink = document.createElement('a');
    workCardBtnsLink.href = workCardInf.connectionsURL[i];
    workCardBtnsLink.target = '_blank';
    const workCardBtns = document.createElement('button');
    workCardBtns.classList.add('work-btn');
    const workCardBtnsText = document.createElement('span');
    workCardBtnsText.textContent = workCardInf.connectionstext[i];
    workCardBtns.appendChild(workCardBtnsText);
    const workCardBtnsImg = document.createElement('img');
    workCardBtnsImg.src = workCardInf.connectionsBtn[i];
    workCardBtnsImg.alt = workCardInf.connectionstext[i];
    workCardBtnsImg.classList.add('work-image');
    workCardBtns.appendChild(workCardBtnsImg);

    workCardBtnsLink.append(workCardBtns);
    workCardBtnsCtn.appendChild(workCardBtnsLink);
  }

  workCardFooter.appendChild(workCardLangs);
  workCardFooter.appendChild(workCardBtnsCtn);
  workCardBody.appendChild(workCardFooter);
  docFragment.appendChild(workCardBody);

  projectCtn.appendChild(docFragment);
  projectOverlay.appendChild(projectCtn);
  bodyTag.appendChild(projectOverlay);

  const closeBtn = document.querySelector('.work-clase');
  closeBtn.addEventListener('click', () => sectionTag.removeChild(projectOverlay));
}

const renderworks = (e, sectionTag) => {
  const posEvent = works[parseInt(e.target.dataset.eventID, 10)];
  const docFragDiv = document.createDocumentFragment();
  const docFragCard = document.createDocumentFragment();

  const divEvent = createDiv('event-post');

  const imgEvent = createImg('event-post-img', posEvent.snapshot, `${posEvent.name} Project, ${posEvent.cat[2]}`);
  docFragSection.appendChild(imgEvent);

  const divEventCard = createDiv('event-post-card');

  const docFragmentSd = document.createDocumentFragment();
  const docFragment = document.createDocumentFragment();
  const docFragementFinal = document.createDocumentFragment();

  const projectOverlay = document.createElement('ul');
  projectOverlay.classList.add('works');
  const introSection = document.querySelector('#intro');
  const workSection = document.createElement('section');
  workSection.classList.add('scroll', 'modal-bg');
  workSection.setAttribute('id', 'works');

  for (let i = 0; i < works2.length; i += 1) {
    const workCardInf = works2[i];
    const projectCtn = document.createElement('li');
    projectCtn.classList.add('work');

    const workImage = document.createElement('img');
    workImage.classList.add('work-image');
    workImage.src = workCardInf.snapshot;
    workImage.alt = `${workCardInf.name} Project, ${workCardInf.cat[2]}`;
    docFragmentSd.appendChild(workImage);

    const workCard = document.createElement('div');
    workCard.classList.add('work-card');

    const projectHeading = document.createElement('h2');
    projectHeading.textContent = workCardInf.name;
    projectHeading.classList.add('work-title');
    docFragment.appendChild(projectHeading);

    const workCat = document.createElement('ul');
    workCat.classList.add('work-cat');
    for (let i = 0; i < workCardInf.cat.length; i += 1) {
      const catList = document.createElement('li');
      if (i === 0) catList.classList.add('cat-title');
      else catList.classList.add('cat-descrip');
      catList.textContent = workCardInf.cat[i];
      workCat.appendChild(catList);
    }
    docFragment.appendChild(workCat);

    const workDescrip = document.createElement('p');
    workDescrip.classList.add('work-descrip');
    workDescrip.textContent = workCardInf.description;
    docFragment.appendChild(workDescrip);

    const workCardLangs = document.createElement('ul');
    workCardLangs.classList.add('work-langs');
    workCardInf.tags.forEach((tag) => {
      const langList = document.createElement('li');
      langList.classList.add('work-lang');
      langList.textContent = tag;
      workCardLangs.appendChild(langList);
    });
    docFragment.appendChild(workCardLangs);

    const workCardBtnsCtn = document.createElement('div');
    workCardBtnsCtn.classList.add('work-btns');
    const workCardBtns = document.createElement('button');
    workCardBtns.classList.add('work-btn');
    workCardBtns.textContent = 'See project';
    workCardBtns.setAttribute('data-workBtn', `${i}`);
    workCardBtnsCtn.append(workCardBtns);
    docFragment.appendChild(workCardBtnsCtn);
    workCard.append(docFragment);
    docFragmentSd.appendChild(workCard);
    projectCtn.appendChild(docFragmentSd);
    docFragementFinal.appendChild(projectCtn);
  }

  projectOverlay.appendChild(docFragementFinal);
  workSection.appendChild(projectOverlay);
  introSection.parentNode.insertBefore(workSection, introSection.nextSibling);
  const projectBtns = document.querySelectorAll('.work .work-btn');
  projectBtns.forEach((btn) => btn.addEventListener('click', projectModal));
}
