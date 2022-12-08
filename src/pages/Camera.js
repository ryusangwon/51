import React, { useEffect, useState } from 'react';
import useOpenTok from 'react-use-opentok';
import './css/camera.css';

import { OTSession, OTPublisher, OTStreams, OTSubscriber } from 'opentok-react';

const Camera = () => {
    const [opentokProps, opentokMethods] = useOpenTok();
    const [mystate, setMystate] = useState(true);
    const [otherstate, setOtherstate] = useState(true);

/*
    const async_function = async () => {
    // run asynchronous tasks here
      //OpenTok opentok = new OpenTok(API_KEY, API_SECRET);
      OpenTok opentok = new OpenTok("47574161", "40e3ef638edb4593de4d0f0d91358bfec784d922");

      //Generate a basic session. Or you could use an existing session ID.
      String sessionId = opentok.createSession().getSessionId();

      // Replace with meaningful metadata for the connection.
      String connectionMetadata = "username=Bob,userLevel=4";

      // Generate a token. Use the Role value appropriate for the user.
      TokenOptions tokenOpts = new TokenOptions.Builder()
        .role(Role.MODERATOR)
        .expireTime((System.currentTimeMillis() / 1000) + (7 * 24 * 60 * 60)) // in one week
        .data(connectionMetadata)
        .build());
      String token = opentok.generateToken(sessionId, tokenOpts);
      //System.out.println(token);
      alert('to')
    };

    useEffect(() => {
      async_function();
    });
    */

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
          frameRate : 1000000,
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

    const myDivState = () => {
    };

    const otherDivState = () => {
    };


    return (
      <div>
        <div id="guest"></div>
        <div>
          {mystate ? <button onClick={()=>setMystate(!mystate)}>내 화면 숨기기</button>
           : <button onClick={()=>setMystate(!mystate)}>내 화면 보이기</button>}
           {otherstate ? <button onClick={()=>setOtherstate(!otherstate)}>상대 화면 숨기기</button>
            : <button onClick={()=>setOtherstate(!otherstate)}>상대 화면 보이기</button>}
        </div>


        <OTSession apiKey="47574161"
        sessionId="2_MX40NzU3NDE2MX5-MTY2ODY3MjQ1MjA4MH5ZMHFSRGRoUWs3d2dYeElWbXpOYnlYS1J-fg"
        token="T1==cGFydG5lcl9pZD00NzU3NDE2MSZzaWc9MDY2YzllNjc3YWI0MmEzMWQxZjE2MzBmZTk5NjMyZDQ1NDhkZjE1ZDpzZXNzaW9uX2lkPTJfTVg0ME56VTNOREUyTVg1LU1UWTJPRFkzTWpRMU1qQTRNSDVaTUhGU1JHUm9VV3MzZDJkWWVFbFdiWHBPWW5sWVMxSi1mZyZjcmVhdGVfdGltZT0xNjY4NjcyNDY4Jm5vbmNlPTAuMTc0MzE3NDY3ODE2MTk5ODMmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTY3MTI2NDQ2OSZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==">

        <div className = {mystate ? "my_div" : "my_div_gone"}>
        <OTPublisher
        properties={{width: "300", height: "200", frameRate : 15, preferredFrameRate: 15 }}
         />
        <OTPublisher classname = "my_div_screen"
              properties={{ videoSource: "screen", position: "absolute", width: "300", height: "200", frameRate : 15, preferredFrameRate: 15 }}
            />
        </div>


        <div className = {otherstate ? "other_div" : "other_div_gone"}>
        <OTStreams>
          <OTSubscriber
            properties={{ videoSource: "screen", position: "absolute", width: "100%", height: "100vh", frameRate : 15, preferredFrameRate: 15 }}/>
        </OTStreams>
        </div>



      </OTSession>
      </div>

    );
  }

  export default Camera;
