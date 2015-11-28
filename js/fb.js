// ---------- facebook comment ----------


(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.3&appId=770422699738733";
  fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
  
function init_map1(){
var myOptions = {zoom:15,center:new google.maps.LatLng(26.91955903689468,75.79205897770692),mapTypeId: google.maps.MapTypeId.ROADMAP};map = new google.maps.Map(document.getElementById("gmap_canvas"), myOptions);marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(26.91955903689468, 75.79205897770692)});infowindow = new google.maps.InfoWindow({content:"<b> ITC Rajputana, Jaipur</b><br/>Station Road, 01415100100<br/>302023 jaipur" });google.maps.event.addListener(marker, "click", function(){infowindow.open(map,marker);});infowindow.open(map,marker);
}google.maps.event.addDomListener(window, 'load', init_map1);
  
function init_map(){
var myOptions = {zoom:14,center:new google.maps.LatLng(26.989513,75.865072),mapTypeId: google.maps.MapTypeId.ROADMAP};map = new google.maps.Map(document.getElementById("gmap_canvas1"), myOptions);marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(26.989513,75.865072)});infowindow = new google.maps.InfoWindow({content:"<b>KK Royal Hotel</b><br/>Delhi Road, Amer<br/>302028 jaipur" });google.maps.event.addListener(marker, "click", function(){infowindow.open(map,marker);});infowindow.open(map,marker);} google.maps.event.addDomListener(window, 'resize', init_map);google.maps.event.addDomListener(window, 'load', init_map);
  
  function initialize() {
		var mapOptions = {
        zoom: 15,
        center: new google.maps.LatLng(26.946947,75.773646),
        mapTypeId: google.maps.MapTypeId.TERRAIN
			};
 
     var map = new google.maps.Map(document.getElementById('accommodation1'),
mapOptions);
 
    var marker = new google.maps.Marker({
        map: map,
        draggable: false,
        position: new google.maps.LatLng(26.946947,75.773646)
    });
	infowindow = new google.maps.InfoWindow({content:"<b>Hotel Libra</b>" });google.maps.event.addListener(marker, "click", function(){infowindow.open(map,marker);});infowindow.open(map,marker);}
google.maps.event.addDomListener(window, 'resize', initialize);
google.maps.event.addDomListener(window, 'load', initialize);


