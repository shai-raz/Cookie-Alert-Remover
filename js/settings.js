const toggleSwitch = (state)=> {
   $("#on_switch").prop("checked", state);
}

$(function() {
   chrome.storage.sync.get('is_on', function(data) {
      toggleSwitch(data.is_on);
   });

   $("#on_switch").on('change', function() {
      chrome.storage.sync.set({is_on: this.checked});
   })
});

