$(document).ready(function(){

    // MODAL
    var modalText = {
      tajam: {
        title: 'Tajam',
        tag: 'web development.',
        detail: 'PSD-page is converted to HTML. This work includes HTML, CSS, JS (including jQuery).',
        href: 'tajam',
        slides: 5,
      },
      waxom: {
        title: 'Waxom',
        tag: 'web development.',
        detail: 'PSD-page is converted to HTML. This work includes HTML, CSS, JS (including jQuery).',
        href: 'waxom',
        slides: 5,
      },
      alexis: {
        title: 'Alexis',
        tag: 'web development.',
        detail: 'PSD-page is converted to HTML. This work includes HTML, CSS, JS (including jQuery).',
        href: 'alexis',
        slides: 5,
      },
      startup: {
        title: 'Startup',
        tag: 'web development.',
        detail: 'PSD-page is converted to HTML. This work includes HTML, CSS, JS (including jQuery).',
        href: 'startup',
        slides: 5,
      },
      new_providence: {
        title: 'New Providence',
        tag: 'web development.',
        detail: 'PSD-page is converted to HTML. This work includes HTML, CSS, JS (including jQuery).',
        href: 'new_providence',
        slides: 5,
      },
      nba_parser: {
        title: 'NBA Parser',
        tag: 'web development.',
        detail: 'On this site, I integrate the NBA regular season standings with help API from stats.nba.com.',
        href: 'nba_parser',
        slides: 2,
      }
    };
  
    $('.portfolio__item-btn').on('click', function(){
      fillModal(this.id);
      $('.modal-wrap').addClass('visible');
      $('body').addClass('block');
    });
  
    $('.close').on('click', function(){
      $('.modal-wrap, #modal .button').removeClass('visible');
      $('body').removeClass('block');
    });
  
    $('.mask').on('click', function(){
      $('.modal-wrap, #modal .button').removeClass('visible');
      $('body').removeClass('block');
    });
    
    document.body.addEventListener('touchstart', function(e){
      if($('body').hasClass('block')) {
        // e.preventDefault();
      }
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
        if($(window).innerWidth() < 426) {
          slideWidth = $(window).innerWidth() - 20;
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
      if (modalText[id].href) {
        var site_href = './sites/' + modalText[id].href;
        $('#modal .info__href')
              .addClass('visible')
              .attr('href', site_href);
      } 
  
      $.each($('#modal li'), function(index, value ) {
        $(this).text(modalText[id].bullets[index]);
      });

      $('.slide').remove();
      var numberOfSlides = modalText[id].slides-1;

      if(modalText[id].slides-1<3) {
        numberOfSlides = 2;
      }

      for(let i_2 = 0; i_2 <= numberOfSlides; i_2++) {
        let div = document.createElement("div");
        div.classList = 'slide';
        $('#carousel').append(div);
      }

      setDimensions();
      if(modalText[id].slides)
      $.each($('#modal .slide'), function(index, value) {
        $(this).css({
          background: "url('img/slides/" + id + '-' + index + ".png') center center/cover",
          backgroundSize: 'cover'
        });
                
      });
    }
  })