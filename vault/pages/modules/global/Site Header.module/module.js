var header = $('.site-header');
function testHeaderScroll() {
  if (window.scrollY > 40) {
    header.addClass('site-header--scrolled').removeClass('site-header--not-scrolled');
  } else {
    header.removeClass('site-header--scrolled').addClass('site-header--not-scrolled');
  }
}
testHeaderScroll();
document.addEventListener('scroll', window.themeUtility.throttle(10, testHeaderScroll));
window.addEventListener('resize', window.themeUtility.debounce(50, testHeaderScroll));
if (!document.querySelector('.hero-section')) {
  document.documentElement.classList.add('no-hero');
}

var toggle = header.find('.site-header__toggle--menu');
var nav = header.find('.site-header__navigation');
var menuBreak = 1120;
if (nav) {
  toggle.on('click', function () {
    document.documentElement.classList.toggle('mobile-menu-active');
  });
  window.addEventListener('resize', window.themeUtility.debounce(50, function () {
    if (window.innerWidth >= menuBreak) document.documentElement.classList.remove('mobile-menu-active');
  }));
  nav.children('.hs-menu-wrapper').children('ul').children('.hs-menu-item').each(function (index, menuItem) {
    $(menuItem).toggleClass('active active-branch', menuItem.href === document.location.pathname || $(menuItem).find('.hs-menu-item').filter('.active, .active-branch').length > 0);
    if ($(menuItem).hasClass('hs-item-has-children')) {
      var activeClass = 'hs-menu-item-active-children';

      $(menuItem).find('.hs-menu-wrapper').removeAttr('id');

      // Open menu on keyboard focus
      $(menuItem.children[0]).on('focus', function () {
        menuItem.classList.add(activeClass);
      });

      $(menuItem.children[0]).on('click', function (event) {
        if (window.innerWidth < menuBreak && !$(this).parent().hasClass(activeClass)) {
          event.preventDefault();
          nav.find('.' + activeClass).removeClass(activeClass);
          menuItem.classList.add(activeClass);
        }
      });

      // Close on blur
      $(menuItem).on('blur', '*', function () {
        setTimeout(function () {
          if ($(menuItem).find(document.activeElement).length < 1) menuItem.classList.remove(activeClass);
        }, 1);
      });
    }
  });
}

var itemToggle = ".hs-menu-item__child-toggle";

$(itemToggle).on('click', function() {
  $(this).closest('.hs-item-has-children').toggleClass('hs-menu-item--active-children');
});

var searchActive = 'site-header--search-active';
var form = header.find('.search-form');
var input = form.find('.search-form__input');

var topOfResults = function () {
  // Adjust this to scroll inside the fixed search results window
  $(window).scrollTop($('#search-results').offset().top - haeder.outerHeight());
};
var searchResults = new Vue({
  el: '#search-results',
  data: {
    perPage: 5,
    currentTerm: '',
    query: {},
    loading: false,
    searchActive: false,
    totalPages: 0,
    page: 1,
    results: []
  },
  methods: {
    resultClasses: function (result) {
      return 'search-result';
    },
    getResults: function (term, page, cb) {
      if (!this.loading) {
        var app = this;
        var queryToUse = app.query;
        var url = '/_hcms/search?';
        queryToUse.term = term;
        queryToUse.limit = app.perPage;
        queryToUse.offset = app.perPage * (page - 1);
        Object.keys(queryToUse).forEach(function (query) {
          url += query + '=' + queryToUse[query] + '&';
        });
        url = url.substring(0, url.length - 1);
        app.loading = true;
        app.page = page;
        app.currentTerm = term;

        input.val(term);

        $.get(url, function (result) {
          app.totalPages = Math.ceil(result.total / app.perPage);
          app.loading = false;
          app.results = result.results;

          if (typeof cb === 'function') {
            cb(result);
          }
        });
      }
    },
    setPage: function (page) {
      var newPage = page > 1 ? page : 1;
      newPage = page < this.totalPages ? page : this.totalPages;
      this.getResults(this.currentTerm, newPage, topOfResults);
    },
    viewAll: function (all) {
      this.perPage = all ? 100 : 5;
      this.getResults(this.currentTerm, 1, !all ? topOfResults : null);
    },
    closeSearch: function () {
      header.removeClass(searchActive);
      searchResults.searchActive = false;
    }
  }
});

header.find('.site-header__toggle--search').on('click', function () {
  header.addClass(searchActive);
  searchResults.searchActive = true;
  setTimeout(function () {
    header.find('.search-form__input').focus();
  }, 10);
});

header.find('.search-form__close').on('click', function (event) {
  event.preventDefault();
  header.removeClass(searchActive);
  searchResults.searchActive = false;
});

$(window).on('keyup', function (event) {
  if (event.key === 'Escape') {
    searchResults.searchActive = false;
    header.removeClass(searchActive);
  }
});

form.on('submit', function (e) {
  var input = $(this).find('.search-form__input');
  e.preventDefault();

  if (!input.val()) {
    input.focus();
  } else {
    searchResults.query = {};
    $(this).find('input[type="hidden"]').each(function () {
      Vue.set(searchResults.query, $(this).attr('name'), $(this).val());
    });
    form.find('.search-form__input').val(input.val());
    header.addClass(searchActive);
    searchResults.searchActive = true;
    searchResults.getResults(input.val(), 1);
    if ($(document.documentElement).hasClass('mobile-menu-active')) {
      $(document.documentElement).removeClass('mobile-menu-active');
      input.blur();
    }
  }
});

$(".hs-item-has-children > a").one("keypress keydown keyup", function(event) {
  if (event.which == 13 || event.keyCode == 13) {
    event.preventDefault();

    $(this).siblings('.hs-menu-children-wrapper').toggle();
    $(this).siblings('.hs-menu-children-wrapper li:first-child a').focus();
  }
});