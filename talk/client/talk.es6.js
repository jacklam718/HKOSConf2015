Template.talk.onRendered(() => {
  Reveal.initialize();
  Reveal.configure({
    theme: 'default',
    controls: true,
    slideNumber: true,
    keyboard: true,
    center: true,
    transition: 'clude',
    transitionSpeed: 'default',
    help: true,
    touch: true,
    fragments: true,
    overview: true,
    embedded: true
  });

  $('.bg').interactive_bg({
    strength: 30,
    scale: 1.1,
    animationSpeed: '100ms',
    contain: true,
    wrapContent: false
  });

  $(window).resize(() => {
    $('.bg > .ibg-bg').css({
      width: $(window).outerWidth(),
      height: $(window).outerHeight()
    });
  });

  hljs.initHighlightingOnLoad();

  hljs.configure({
    tabReplace: '  ',
    classPrefix: '  '
  });

  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });

  hljs.initHighlighting();
});
