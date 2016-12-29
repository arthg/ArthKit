// provides an easy way to switch between mock aoi and prod api
// to get mock api use ?useMockApi=true

export default function getBaseUrl() {
  // include the trailing slash
  return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : 'https://sheltered-caverns-34151.herokuapp.com';
}

// better ways to do this! (with libraries)
// this looks to be case-sensitive
function getQueryStringParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
