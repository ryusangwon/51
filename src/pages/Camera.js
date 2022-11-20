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

        <OTSession apiKey="47574161" sessionId="2_MX40NzU3NDE2MX5-MTY2ODY3MjQ1MjA4MH5ZMHFSRGRoUWs3d2dYeElWbXpOYnlYS1J-fg"
        token="T1==cGFydG5lcl9pZD00NzU3NDE2MSZzaWc9MDY2YzllNjc3YWI0MmEzMWQxZjE2MzBmZTk5NjMyZDQ1NDhkZjE1ZDpzZXNzaW9uX2lkPTJfTVg0ME56VTNOREUyTVg1LU1UWTJPRFkzTWpRMU1qQTRNSDVaTUhGU1JHUm9VV3MzZDJkWWVFbFdiWHBPWW5sWVMxSi1mZyZjcmVhdGVfdGltZT0xNjY4NjcyNDY4Jm5vbmNlPTAuMTc0MzE3NDY3ODE2MTk5ODMmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTY3MTI2NDQ2OSZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==">
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