// initialize scrollspy for docs pages
$('body').scrollspy({
  target: '#af-doc-toc',
  offset: 24
});


//anchor.js configuration
anchors.options = {
  icon: ''
}
anchors.add('.af-content > h2, .af-content > h3, .af-content > h4, .af-content > h5');
$('.af-content > h2, .af-content > h3, .af-content > h4, .af-content > h5').wrapInner('<div></div>');

MenuToggle('.af-sidebar', '.navbar-toggler[data-menu="sidebar"]');
MenuToggle('.af-sidebar-toc', '.navbar-toggler[data-menu="sidebar-toc"]');

function MenuToggle(menu, toggler) {
  menu = $(menu);
  toggler = $(toggler);
  var backdrop = $('.af-menu-backdrop');


  toggler.on('click', function () {
    handleTrigger($(this).data('menu-action'), $(this).data('menu-side'));
  });

  $('.af-close-menus').on('click', function () {
    handleTrigger('close-all');
  });

  $(document).keyup(function(e) {
    if (e.keyCode === 27) handleTrigger('close-all');   // esc
  });

  function handleTrigger(action, side) {

    switch (side) {
      case 'left':
        backdrop.addClass('af-menu-left');
        backdrop.removeClass('af-menu-right');
        break;
      case 'right':
        backdrop.removeClass('af-menu-left');
        backdrop.addClass('af-menu-right');
        break;
      case 'clear':
        backdrop.removeClass('af-menu-left');
        backdrop.removeClass('af-menu-right');
        break;
      default:
        backdrop.addClass('af-menu-left');
        backdrop.removeClass('af-menu-right');
    }

    switch (action) {
      case 'open':
        menu.addClass('show-menu');
        backdrop.addClass('menu-is-open');
        break;
      case 'close':
        menu.removeClass('show-menu');
        backdrop.removeClass('menu-is-open');
        break;
      case 'close-all':
        $('.show-menu').removeClass('show-menu');
        backdrop.removeClass('menu-is-open');
        break;
      case 'toggle':
        menu.toggleClass('show-menu');
        backdrop.toggleClass('menu-is-open');
        break;
      default:
        menu.toggleClass('show-menu');
        backdrop.toggleClass('menu-is-open');
    }
  }
}
