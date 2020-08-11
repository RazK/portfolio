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
  console.log(contentSize);
  if(window.innerWidth > 850){
    scrollEnabled = false;
    document.querySelector('.content').style.transform = '';
  } else{
    scrollEnabled = true;
  }
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
document.querySelector('#viewport').addEventListener('touchstart', e => {
  touchStartX=e.touches[0].clientX;
  touchStartY=e.touches[0].clientY;
  touchStartPosX = scrollPosX;
  touchStartPosY = scrollPosY;
  e.preventDefault();
})

document.querySelector('#viewport').addEventListener('touchmove', e => {
  let dx = e.touches[0].clientX - touchStartX;
  let dy = e.touches[0].clientY - touchStartY;
  scrollPosX = touchStartPosX + dx;
  scrollPosY = touchStartPosY + dy;
  e.preventDefault();
})

window.addEventListener('mouseout', e => {
  scrollingDirectionX = 0;
})
resize();
animateScroll();

const gridCellSize = 50;
const gridCellSpacing = 10;
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
      this.el.style.width = (gridCellSize * blockInfo.size + gridCellSpacing * (blockInfo.size-1)) + 'px';

    this.el.style.backgroundImage = `url(${blockInfo.icon})`;
  }
  bindEvents(){
    this.el.addEventListener('click', e => {
      let rect = this.el.getBoundingClientRect();
      openDialog(rect.x + rect.width/2, rect.y + rect.height/2, this.info.title, this.info.hero, this.info.text);
    })
  }
}

function openDialog(x, y, title, hero, text) {
  canScroll = false;
  let dialog = document.querySelector('#dialog');
  dialog.style.display = 'block';
  dialog.querySelector('article').innerHTML = text;
  dialog.querySelector('header h1').textContent = title;
  dialog.querySelector('header img').src = hero;
  dialog.offsetHeight;
  let fill = dialog.querySelector('.dialog__fill');
  fill.style.left = (x -dialog.offsetLeft)  + 'px';
  fill.style.top = (y-dialog.offsetTop) + 'px';
  dialog.classList.add('dialog--open');
  window.history.pushState({}, 'dialog', '#dialog')
  function close(){
    window.removeEventListener('popstate', close);
    closeDialog();
  }
  function pop(){
    dialog.querySelector('.btnBack').removeEventListener('click', pop);
    window.history.back();
  }
  window.addEventListener('popstate', close);
  dialog.querySelector('.btnBack').addEventListener('click', pop);

}

function closeDialog(){
  let dialog = document.querySelector('#dialog');
  canScroll = true;
  dialog.classList.remove('dialog--open');
  setTimeout(() => {
    dialog.style.display='none';
      dialog.querySelector('header img').src = '';
  }, 1000)
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
