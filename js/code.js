let scrollPosX=0, scrollPosY=0;
let scrollingDirectionX = 0, scrollingDirectionY=0;
const scrollMargin=50;
const scrollAnimationSpeed = 10;
const headerSize = 100;
let canScroll = true;
let scrollEnabled = true;
let contentSize = 0;
function resize(){
  contentSize = document.querySelector('.content').offsetHeight;
  console.log(document.querySelector('#viewport').scrollWidth);
  /*if(document.querySelector('#viewport').scrollWidth < window.innerWidth){
    scrollEnabled = false;
    document.querySelector('.content').style.transform = '';
  } else{
    scrollEnabled = true;
  }*/
}
window.addEventListener('resize', resize);
function animateScroll(){
  if(canScroll && scrollEnabled){
    scrollPosX += scrollingDirectionX * scrollAnimationSpeed;
    let scrollLimit = contentSize/2 - window.innerWidth / 2;
    if(scrollPosX > scrollLimit){
      scrollPosX = scrollLimit;
    }
    if(scrollPosX < -scrollLimit){
      scrollPosX = -scrollLimit;
    }
    scrollPosY += scrollingDirectionY * scrollAnimationSpeed;
    scrollLimit = contentSize/2 - window.innerHeight / 2 + headerSize / 2;
    if(scrollPosY > scrollLimit){
      scrollPosY = scrollLimit;
    }
    if(scrollPosY < -scrollLimit){
      scrollPosY = -scrollLimit;
    }
    document.querySelector('.content').style.transform = `translate(${scrollPosX}px, ${scrollPosY}px)`;
  }
  requestAnimationFrame(animateScroll);
}
document.querySelector('#viewport').addEventListener('mousemove', e => {
  let scrollXClass='';
  let scrollYClass='';
  if(e.clientX < scrollMargin){
    scrollingDirectionX = 1;
    scrollXClass="left";
  }
  else if(e.clientX > window.innerWidth - scrollMargin){
    scrollingDirectionX = -1;
    scrollXClass="right";
  }
  else {
    scrollXClass=""
    scrollingDirectionX = 0;
  }

  if(e.clientY < scrollMargin + headerSize){
    scrollingDirectionY = 1;
    scrollYClass="up";
  }
  else if(e.clientY > window.innerHeight - scrollMargin){
    scrollingDirectionY = -1;
    scrollYClass="down";
  }
  else {
    scrollYClass=""
    scrollingDirectionY = 0;
  }
  document.querySelector('#viewport').className = ['viewport', scrollXClass, scrollYClass].join(' ');
})

let touchStartX, touchStartY;
let touchStartPosX, touchStartPosY;
let touchIsClick;
let touchDx, touchDy;
document.querySelector('#viewport').addEventListener('touchstart', e => {
  touchStartX=e.touches[0].clientX;
  touchStartY=e.touches[0].clientY;
  touchStartPosX = scrollPosX;
  touchStartPosY = scrollPosY;
  touchDx = 0;
  touchDy = 0;
  e.preventDefault();
})

document.querySelector('#viewport').addEventListener('touchmove', e => {
  touchDx = e.touches[0].clientX - touchStartX;
  touchDy = e.touches[0].clientY - touchStartY;
  scrollPosX = touchStartPosX + touchDx;
  scrollPosY = touchStartPosY + touchDy;
  e.preventDefault();
})

document.querySelector('#viewport').addEventListener('touchend', e => {
  if(Math.abs(touchDx) < 10 && Math.abs(touchDy) < 10){
    e.target.click();
  }
  e.preventDefault();
})

document.querySelector('#viewport').addEventListener('mouseout', e => {
  scrollingDirectionX = 0;
  scrollingDirectionY = 0;
})
resize();
animateScroll();

const gridCellSize = 5;
const gridCellSpacing = 1;
const gridSize = 16;

let blocksContainer = document.querySelector('#viewport .content .grid');

class Block{
  constructor(blockInfo){
    this.info = blockInfo;
    this.createDOM(blockInfo)
    this.bindEvents();
  }
  createDOM(blockInfo){
    this.el = document.createElement('div');
    this.el.className = 'block block--'+blockInfo.type;
    let gridStartX = gridSize / 2 + blockInfo.location.x;
    let gridEndX = gridStartX + blockInfo.size - 1; // inclusive

    let gridStartY = gridSize / 2 + blockInfo.location.y;
    let gridEndY = gridStartY + blockInfo.size - 1; // inclusive
    this.el.style.gridColumn = [gridStartX, gridEndX].join(' / ')
    this.el.style.gridRow = [gridStartY, gridEndY].join(' / ')

    this.size =
      this.el.style.height =
      this.el.style.width = (gridCellSize * blockInfo.size + gridCellSpacing * (blockInfo.size-1)) + 'em';

    this.el.style.backgroundImage = `url(${blockInfo.icon})`;
  }
  bindEvents(){
    this.el.addEventListener('click', e => this.open());
  }
  open(){
    let rect = this.el.getBoundingClientRect();
    openDialog(rect.x + rect.width/2, rect.y + rect.height/2, this.info.title, this.info.hero, this.info.text);
  }
}

function openDialog(x, y, title, hero, text) {
  canScroll = false;
  let dialog = document.querySelector('#dialog');
  let blackout = document.querySelector('#blackout');
  dialog.style.display = 'block';
  blackout.style.display = 'block';
  dialog.querySelector('.dialog__content').scrollTop = 0;
  dialog.querySelector('article').innerHTML = text;
  dialog.querySelector('header h1').textContent = title;
  dialog.querySelector('header img').src = hero;
  dialog.offsetHeight;
  let fill = dialog.querySelector('.dialog__fill');
  fill.style.left = (x -dialog.offsetLeft)  + 'px';
  fill.style.top = (y-dialog.offsetTop) + 'px';
  dialog.classList.add('dialog--open');
  blackout.classList.add('blackout--open');
  window.history.pushState({}, 'dialog', '#dialog')
  function close(){
    window.removeEventListener('popstate', close);
    dialog.querySelector('.btnBack').removeEventListener('click', pop);
    blackout.removeEventListener('click', pop);
    closeDialog();
  }
  function pop(){
    window.history.back();
  }
  window.addEventListener('popstate', close);
  dialog.querySelector('.btnBack').addEventListener('click', pop);
  blackout.addEventListener('click', pop);

}

function closeDialog(){
  let dialog = document.querySelector('#dialog');
  let blackout = document.querySelector('#blackout');
  canScroll = true;
  dialog.classList.remove('dialog--open');
  blackout.classList.remove('blackout--open');
  setTimeout(() => {
      blackout.style.display='none'
      dialog.style.display='none';
      dialog.querySelector('header img').src = '';
  }, 600)
}

const App = {
  init: function(){

  },
  load: function(data){
    for(let blockInfo of data){
      let block = new Block(blockInfo);
      blocksContainer.appendChild(block.el)
    }
  }
}

App.load(blocks)
