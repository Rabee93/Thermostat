$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#up').click(function() {
    thermostat.up();
    updateTemperature();
  });

  $('#down').click(function() {
    thermostat.down();
    updateTemperature();
  });

  $('#reset').click(function() {
    thermostat.reset();
    updateTemperature();
  });

  $('#on').click(function() {
    thermostat.ispowersavingmodeon();
    $('#power-saving').text('on')
    updateTemperature();
  })

  $('#off').click(function() {
    thermostat.psmoff();
    $('#power-saving').text('off')
    updateTemperature();
  })

  function updateTemperature() {
  $('#temperature').text(thermostat.temperature);
  $('#temperature').attr('class', thermostat.getCurrentEnergyUsage());
}
});
