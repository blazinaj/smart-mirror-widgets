/**
 * @class ExampleComponent
 */

import * as React from "react";
import Webcam from "react-webcam"
import {RefObject} from "react";

export type Props = {
    coreAPI: {
        webcamRef: RefObject<Webcam>,
        videoConstraints: object,
        audio: boolean,
        height: number,
        width: number
    }
};

export default class CameraWidget extends React.Component<Props> {
    render() {
        const { coreAPI } = this.props;

        // @ts-ignore
        return  <Webcam
                    audio={coreAPI.audio}
                    height={coreAPI.height}
                    ref={coreAPI.webcamRef}
                    screenshotFormat="image/jpeg"
                    width={coreAPI.width}
                    videoConstraints={coreAPI.videoConstraints}
                />
        ;
    }
}