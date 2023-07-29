function initMap() {
    // Map options
    const options = {
      zoom: 10,
      center: { lat: 40.7128, lng: -74.0060 }, // Replace with your default map center
    };
  
    // Create a map object
    const map = new google.maps.Map(document.getElementById("map"), options);
  
    // Sample marker for a Taekwondo location
    const marker = new google.maps.Marker({
      position: { lat: 40.7128, lng: -74.0060 }, // Replace with the location coordinates
      map: map,
      title: "Taekwondo Location",
    });
  }
  