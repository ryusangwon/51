// replace these values with those generated in your Video API account
var apiKey = "47574161";
var sessionId = "1_MX40NzU3NDE2MX5-MTY2NzIxNjkzODE2M350OGpDcEN1eCtmcVBFazF2dFZtb1pQV0V-fg";
var token = "T1==cGFydG5lcl9pZD00NzU3NDE2MSZzaWc9OWM5MjI1ZjM0NTYyYTcwYzY5NzEwNDc3YmNkMWM3YjdhODBhZGFhNTpzZXNzaW9uX2lkPTFfTVg0ME56VTNOREUyTVg1LU1UWTJOekl4Tmprek9ERTJNMzUwT0dwRGNFTjFlQ3RtY1ZCRmF6RjJkRlp0YjFwUVYwVi1mZyZjcmVhdGVfdGltZT0xNjY3MjE2OTYzJm5vbmNlPTAuOTkwNDcxOTYwOTI0ODQzNCZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNjY5ODA4OTYyJmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9";

// (optional) add server code here
initializeSession();

// Handling all of our errors here by alerting them
function handleError(error) {
  if (error) {
    alert(error.message);
  }
}

function initializeSession() {
  var session = OT.initSession(apiKey, sessionId);

  // Subscribe to a newly created stream
  session.on('streamCreated', function(event) {

    var subOptions = {
    appendMode: 'append'
  };

  var parentElementId = event.stream.videoType === 'screen' ?
    'sub-screen-sharing-container' :
    'sub-camera-container';
  subscriber = session.subscribe(event.stream, parentElement, subOptions);

    /*
    var subOptions = {insertMode: 'append'};
  if(event.stream.videoType === 'screen') {
    session.subscribe(event.stream, 'screens', subOptions);
  } else {
    session.subscribe(event.stream, 'people', subOptions);
  }
  */
    /*
  session.subscribe(event.stream, 'subscriber', {
    insertMode: 'append',
    width: '100%',
    height: '100%'
  }, handleError);
  */
});

  // Create a publisher
  /*
  var publisher = OT.initPublisher('publisher', {
    insertMode: 'append',
    width: '100%',
    height: '100%'
  }, handleError);
  */
  /*
  var publisher = OT.initPublisher('some-element',
  {videoSource: 'screen'});

publisher.on('videoDimensionsChanged', function(event) {
  publisher.element.style.width = event.newValue.width + 'px';
  publisher.element.style.height = event.newValue.height + 'px';
});
*/


  // Connect to the session
  session.connect(token, function(error) {
    // If the connection is successful, publish to the session
    if (error) {
      handleError(error);
    } else {
      session.publish(publisher, handleError);
    }
  });

  OT.checkScreenSharingCapability(function(response) {
  if(!response.supported || response.extensionRegistered === false) {
    // This browser does not support screen sharing.
  } else if (response.extensionInstalled === false) {
    // Prompt to install the extension.
  } else {
    // Screen sharing is available. Publish the screen.
    var publisher = OT.initPublisher('screen-preview',
      {videoSource: 'screen'},
      function(error) {
        if (error) {
          // Look at error.message to see what went wrong.
        } else {
          session.publish(publisher, function(error) {
            if (error) {
              // Look error.message to see what went wrong.
            }
          });
        }
      }
    );
  }
});
}
