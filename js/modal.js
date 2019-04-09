$(document).ready(function(){

    // MODAL
    var modalText = {
      tajam: {
        title: 'Tajam',
        tag: 'web development.',
        detail: 'PSD-page is converted to HTML. This work includes HTML, CSS, JS (including jQuery).',
      },
      waxom: {
        title: 'Waxom',
        tag: 'web development.',
        detail: 'PSD-page is converted to HTML. This work includes HTML, CSS, JS (including jQuery).',
      },
      alexis: {
        title: 'Alexis',
        tag: 'web development.',
        detail: 'PSD-page is converted to HTML. This work includes HTML, CSS, JS (including jQuery).',
      },
      startup: {
        title: 'Startup',
        tag: 'web development.',
        detail: 'PSD-page is converted to HTML. This work includes HTML, CSS, JS (including jQuery).',
      },
      new_providence: {
        title: 'New Providence',
        tag: 'web development.',
        detail: 'PSD-page is converted to HTML. This work includes HTML, CSS, JS (including jQuery).',
      },
      agnecy: {
        title: 'Basketlove',
        tag: 'web development.',
        detail: 'Basketball theme site. Includes news pages, articles, NBA standings, playoff tables, list of basketball sneakers. There is an integration of different APIs, including regular season, drafts and more. The site is currently not running.',
      }
    };
  
    $('.portfolio__item-btn').on('click', function(){
      fillModal(this.id);
      $('.modal-wrap').addClass('visible');
    });
  
    $('.close').on('click', function(){
      $('.modal-wrap, #modal .button').removeClass('visible');
    });
  
    $('.mask').on('click', function(){
      $('.modal-wrap, #modal .button').removeClass('visible');
    });
  
    var carousel = $('#carousel'),
        slideWidth = 700,
        threshold = slideWidth/3,
        dragStart, 
        dragEnd;
  
    setDimensions();

    $( window ).resize(function() {
      carousel = $('#carousel'),
      slideWidth = 700,
      threshold = slideWidth/3,
      dragStart, 
      dragEnd;

      setDimensions();
    });
  
    $('#next').click(function(){ shiftSlide(-1) })
    $('#prev').click(function(){ shiftSlide(1) })
  
    carousel.on('mousedown', function(){
      if (carousel.hasClass('transition')) return;
      dragStart = event.pageX;
      $(this).on('mousemove', function(){
        dragEnd = event.pageX;
        $(this).css('transform','translateX('+ dragPos() +'px)');
      });
      $(document).on('mouseup', function(){
        if (dragPos() > threshold) { return shiftSlide(1) }
        if (dragPos() < -threshold) { return shiftSlide(-1) }
        shiftSlide(0);
      });
    });
  
    function setDimensions() {
      if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        slideWidth = $(window).innerWidth() - 100;
        if($(window).innerWidth() > 1280) {
          slideWidth = 700;
        }
      }
      $('.carousel-wrap, .slide').css('width', slideWidth);
      $('.modal').css('max-width', slideWidth);
      $('#carousel').css('left', slideWidth * -1)
    }
  
    function dragPos() {
      return dragEnd - dragStart;
    }
  
    function shiftSlide(direction) {
      if (carousel.hasClass('transition')) return;
      dragEnd = dragStart;
      $(document).off('mouseup')
      carousel.off('mousemove')
              .addClass('transition')
              .css('transform','translateX(' + (direction * slideWidth) + 'px)'); 
      setTimeout(function(){
        if (direction === 1) {
          $('.slide:first').before($('.slide:last'));
        } else if (direction === -1) {
          $('.slide:last').after($('.slide:first'));
        }
        carousel.removeClass('transition')
        carousel.css('transform','translateX(0px)'); 
      },700)
    }
  
    function fillModal(id) {
      $('#modal .info__title').text(modalText[id].title);
      $('#modal .info__detail').text(modalText[id].detail);
      $('#modal .info__tag').text(modalText[id].tag);
      if (modalText[id].link) $('#modal .button').addClass('visible')
                                                 .parent()
                                                 .attr('href', modalText[id].link)
  
      $.each($('#modal li'), function(index, value ) {
        $(this).text(modalText[id].bullets[index]);
      });
      $.each($('#modal .slide'), function(index, value) {
        $(this).css({
          background: "url('img/slides/" + id + '-' + index + ".png') center center/cover",
          backgroundSize: 'cover'
        });
                
      });
    }
  })