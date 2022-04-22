const menuoffset = 33;

function click_menu(){
  let x = document.getElementById('sidebar').style.left;
  document.getElementById('sidebar').style.left = (x == '0px' ? '-300px' : '0px');
  if(topleftisInViewport(document.getElementById('content'),menuoffset)){
    document.getElementById('menu').style.color = 'var(--primary)';
  }
  else{
    document.getElementById('menu').style.color = (x == '0px' ? 'var(--secondary)' : 'var(--primary)');
  }
}

function topleftisInViewport(el, offset) {
    const rect = el.getBoundingClientRect();
    let viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    return (
        rect.top >= 0 + offset &&
        rect.left >= 0
    );
}

const menu = document.querySelector('#menu');

document.addEventListener('scroll', function () {

  bannerscroll = document.getElementById('content').getBoundingClientRect().top/(window.innerHeight*0.44);
  document.getElementById('menu').style.color = 
(topleftisInViewport(document.getElementById('sidebar'), 0) ? 'var(--primary)' : 
(topleftisInViewport(document.getElementById('content'), menuoffset) ? 'var(--primary)' : 'var(--secondary)'));
  document.getElementById('banner-background').style.objectPosition = '50% ' + (40+(1-bannerscroll)*20) + '%';
  document.getElementById('it1').style.top = (bannerscroll)*25-25 + '%';
  document.getElementById('itt1').style.top = (bannerscroll)*25+32 + '%';
}, {passive: true});

function hover(num){
document.getElementById('sidebarimg').src = 'icon' + num + '.svg';
}