/**
 * @class ExampleComponent
 */
import * as React from "react";
import Webcam from "react-webcam";
import { RefObject } from "react";
export declare type Props = {
    coreAPI: {
        webcamRef: RefObject<Webcam>;
        videoConstraints: object;
        audio: boolean;
        height: number;
        width: number;
    };
};
export default class CameraWidget extends React.Component<Props> {
    render(): JSX.Element;
}
