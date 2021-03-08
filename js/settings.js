const ON_SWITCH = "#on_switch";
const SITE_SWITCH = "#site_switch";

const toggleSwitch = (switch_id, state)=> {
   $(switch_id).prop("checked", state);
}

let whitelist = [];

$(function() {
   chrome.storage.sync.get('whitelist', function(data) {
      // create whitelist array if it doesn't exist yet
      /*for (let key in data) {
            //alert(key);
         }*/
      //alert(data)
      if (data == null)
         chrome.storage.sync.set({whitelist: []});
      else {
         whitelist = data;
      }

      // set site_switch button to be on the correct position
      if (whitelist[location.href] != null)
         toggleSwitch(SITE_SWITCH, whitelist[location.href])
   });

   // set on_switch button to be on the correct position
   chrome.storage.sync.get('is_on', function(data) {
      toggleSwitch(ON_SWITCH, data.is_on);
   });

   // add on change listener to on_switch button
   $("#on_switch").on('change', function() {
      chrome.storage.sync.set({is_on: this.checked});
   });

   // add on change listener to site_switch button
   $("#site_switch").on('change', function() {
      chrome.tabs.query({
         active: true,
         currentWindow: true
      }, ([currentTab]) => {

         let currentTabUrl = currentTab.url;
         whitelist[currentTabUrl] = this.checked;
         chrome.storage.sync.set({whitelist: whitelist});

         /*for (let key in whitelist) {
            console.log(key);
         }*/
      });


   })
});

