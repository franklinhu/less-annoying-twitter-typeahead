var handler = function() {
  var elem = document.getElementById('global-nav-search')
    .getElementsByClassName('typeahead')[0]
    .getElementsByClassName('js-typeahead-results')[0]
    .getElementsByClassName('typeahead-topics')[0];

  // Reorder the topics and accounts sections
  var sibling = elem.nextElementSibling;

  // Make sure this is the element we're reordering
  if (sibling && sibling.className.includes('block3')) {
    elem.parentElement.insertBefore(elem.nextElementSibling, elem);
  } else {
    // Element focused before page scripts, so typeahead isn't loaded
    // properly. Will be caught on next invocation
  }
};

var search_query = document.getElementById('search-query');

// Register events for focus and onkeypress to catch race conditions
search_query.addEventListener('focus', handler);
search_query.addEventListener('onkeypress', handler);

