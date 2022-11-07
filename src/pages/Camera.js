import React, { useEffect } from 'react';
import useOpenTok from 'react-use-opentok';

import { OTSession, OTPublisher, OTStreams, OTSubscriber } from 'opentok-react';

const Camera = () => {
    const [opentokProps, opentokMethods] = useOpenTok();
  
    const {
      initPublisher,
      publishPublisher,
      removePublisher,
    } = opentokMethods;
  
    // ...
  
    const onInitPublisher = () => {
      initPublisher({
        name: 'guest',
        element: 'guest',
        options: {
          insertMode: 'append',
          width: '480px',
          height: '360px',
        },
      });
    };
    const onPublishPublisher = () => {
      publishPublisher({
        name: 'guest',
      });
    };
    const onRemovePublisher = () => {
      removePublisher({
        name: 'guest',
      });
    };
  
    return (
      <div>
        <div id="guest"></div>
        <div>
          <button onClick={onInitPublisher}>Init Publisher without publish</button>
          <button onClick={onRemovePublisher}>Remove Publisher before publish</button>
          <button onClick={onPublishPublisher}>Publish Publisher</button>
        </div>

        <OTSession apiKey="47574161" sessionId="1_MX40NzU3NDE2MX5-MTY2NzIxNjkzODE2M350OGpDcEN1eCtmcVBFazF2dFZtb1pQV0V-fg" token="T1==cGFydG5lcl9pZD00NzU3NDE2MSZzaWc9OWM5MjI1ZjM0NTYyYTcwYzY5NzEwNDc3YmNkMWM3YjdhODBhZGFhNTpzZXNzaW9uX2lkPTFfTVg0ME56VTNOREUyTVg1LU1UWTJOekl4Tmprek9ERTJNMzUwT0dwRGNFTjFlQ3RtY1ZCRmF6RjJkRlp0YjFwUVYwVi1mZyZjcmVhdGVfdGltZT0xNjY3MjE2OTYzJm5vbmNlPTAuOTkwNDcxOTYwOTI0ODQzNCZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNjY5ODA4OTYyJmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9">
        <OTPublisher />
        <OTPublisher
              properties={{ videoSource: "screen", width: 200, height: 200 }}
            />
        <OTStreams>
          <OTSubscriber />
        </OTStreams>
      </OTSession>
      </div>
      
    );
  }

  export default Camera;