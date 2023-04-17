/**
 * This JavaScript was automatically generated on 2021-01-14 from a source file.
 * Editing this file directly isn't recommended; if you want to modify the functionality of this module,
 * make a clone, contact the original developer for support, or make an external js file and attach it to the
 * page or module.
 */

Vue.component('thumbnail-link', {
  template: '#thumbnail-link',
  props: ['title', 'summary', 'category', 'url', 'thumbnail', 'extraClasses', 'date', 'day', 'month']
});
Vue.component('filter-dropdown', {
  template: '#filter-dropdown',
  props: ['activeItem', 'filter', 'options'],
  data: function () {
    return {
      open: false
    };
  },
  methods: {
    clearActive: function () {
      this.$emit('clear-active', this.filter.name);
			this.open = false;
    },
    setActive: function (option) {
      this.$emit('set-active', this.filter.name, option);
			this.open = false;
    }
  }
});
var resources = window.resources;
var filters = window.filters;
var defaultSearch = window.themeUtility.getUrlParam('search') ? window.themeUtility.getUrlParam('search') : '';
var defaultFilters = {};

Object.keys(filters).forEach(function (filterName) {
  var queryOption = window.themeUtility.getUrlParam(filterName);
  if (queryOption !== false) {
    var options = filters[filterName].options.filter(function (option) {
      return option.name === queryOption;
    });
    if (options.length > 0) defaultFilters[filterName] = options[0];
  }
});

var resourcesListing = new Vue({
  el: '#resources-listing',
  data: {
    resources: window.resources,
    page: 1,
		rowsPerPage: window.rowsPerPage,
		itemsPerRow: window.itemsPerRow,
    filters: filters,
    activeFilters: defaultFilters,
    search: defaultSearch,
		searchActive: false,
		sortOrder: window.sortOrder
  },
  computed: {
    filteredResources: function () {
      var app = this;
      var filtered = app.resources;

      Object.keys(app.activeFilters).forEach(function (filterName) {
        filtered = app.handleFilter(filtered, filterName);
      });

      if (app.search.length > 0) {
        var fuse = new Fuse(filtered, {
          tokenize: true,
          matchAllTokens: true,
          threshold: 0.3,
          location: 0,
          distance: 100,
          keys: [
            'title',
            'summary',
            'topic.name',
            'additional_search_text'
          ]
        });
        filtered = fuse.search(app.search);
      }
      return filtered;
    },
		perPage: function () {
			return this.rowsPerPage * this.itemsPerRow;
		},
    filteredPage: function () {
      return this.filteredResources.slice(0, this.maxShown);
    },
    maxShown: function () {
      return this.page * this.perPage;
    },
		sort: function () {
			if (sortOrder == "title") {
				return _.sortBy(this.filteredResources, 'title').slice(0, this.maxShown)
			} else if (sortOrder == "title-reverse") {
				return _.sortBy(this.filteredResources, 'title').reverse().slice(0, this.maxShown)
			} else if (sortOrder == "newest") {
				return _.sortBy(this.filteredResources, 'sortable_date').reverse().slice(0, this.maxShown)
			} else if (sortOrder == "oldest") {
				return _.sortBy(this.filteredResources, 'sortable_date').slice(0, this.maxShown)
			} else {
				return this.filteredResources.slice(0, this.maxShown);
			}
		}
  },
  methods: {
	  handleFilter: function (resources, filterName) {
      var app = this;
      var activeFilter = app.activeFilters[filterName];
      if (typeof activeFilter === 'undefined' || activeFilter === null || resources.length === 0) return resources;
      resources = resources.filter(function (resource) {
        return app.resourceMatchesOption(resource, filterName, activeFilter);
      });

      return resources;
    },
    resourceMatchesOption: function (resource, filterName, option) {
      if (typeof resource[filterName] !== 'undefined') {
        var app = this;
        var filter = app.filters[filterName];
        if (filter.advanced === true && option.name.toLowerCase() === 'all products') return true;
        if (filter.type === 'SELECT') return option.name === resource[filterName].name;
        if (filter.type === 'SPLITTEXT') return resource[filterName].indexOf(option.name) !== -1;
        var match = false;
        if (typeof resource[filterName] === 'object' && resource[filterName].length > 0) {
          resource[filterName].forEach(function (resourceOption) {
            if (option.name === resourceOption.name) match = true;
          });
        };
        return match;
      }
      return false;
    },
    setActiveFilter: function (filterName, newActive) {
      Vue.set(this.activeFilters, filterName, newActive);
      window.themeUtility.insertUrlParam(filterName, newActive.name);
    },
    clearActiveFilter: function (filterName) {
      Vue.delete(this.activeFilters, filterName);
      window.themeUtility.insertUrlParam(filterName, false);
      this.page = 1;
    },
    clearAllFilters: function () {
      var app = this;
      Object.keys(app.activeFilters).forEach(function (filterName) {
        app.clearActiveFilter(filterName);
      });
    },
		toggleSearch: function () {
			this.searchActive = !this.searchActive;
		},
    clearSearch: function () {
      this.search = '';
      window.themeUtility.insertUrlParam('search', false);
    },
    resetFilters: function () {
      this.page = 1;
      this.clearAllFilters();
      this.clearSearch();
    },
    optionHasFilteredResources: function (filterName, option) {
      var app = this;
      var filtered = app.resources;
      var match = false;
      Object.keys(app.activeFilters).forEach(function (activeFilterName) {
        if (activeFilterName !== filterName && app.activeFilters[activeFilterName] !== null) filtered = app.handleFilter(filtered, activeFilterName);
      });
      filtered.forEach(function (resource) {
        if (app.resourceMatchesOption(resource, filterName, option)) { match = true; }
      });
      return match;
    },
    filterOptions: function (filterName) {
      var app = this;

      return app.filters[filterName].options.filter(function (option) {
        return app.optionHasFilteredResources(filterName, option);
      }).sort(function (a, b) {
        return a.name.localeCompare(b.name);
      });
    },
    nextPage: function () {
      this.page++;
    },
    handleSearchBlur: function () {
      window.themeUtility.insertUrlParam('search', this.search.length > 0 ? this.search : false);
			if (!this.search.length > 0) this.searchActive = false;
    }
  }
});

(function ($) {
  //Make your content a heroe
  $.fn.transformHeroes = function () {
    //Variables
    var perspective = "500px",
      delta = 20,
      width = this.width(),
      height = this.height(),
      midWidth = width / 2,
      midHeight = height / 2;
    //Events
    this.on({
      mousemove: function (e) {
        var pos = $(this).offset(),
          cursPosX = e.pageX - pos.left,
          cursPosY = e.pageY - pos.top,
          cursCenterX = midWidth - cursPosX,
          cursCenterY = midHeight - cursPosY;

        $(this).css(
          "transform",
          "perspective(" +
            perspective +
            ") rotateX(" +
            cursCenterY / delta +
            "deg) rotateY(" +
            -(cursCenterX / delta) +
            "deg)"
        );
        $(this).removeClass("is-out");
      },
      mouseleave: function () {
        $(this).addClass("is-out");
      }
    });
    //Return
    return this;
  };
})(jQuery);

//Set plugin on cards
$(".vault-blog-posts__post-details").transformHeroes();