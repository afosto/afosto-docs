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
