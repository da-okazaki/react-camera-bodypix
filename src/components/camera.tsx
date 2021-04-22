import React from "react";
import Webcam from "react-webcam";
import { Fab, makeStyles, createStyles } from "@material-ui/core";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";

const useStyles = makeStyles((theme) =>
  createStyles({
    buttonStyle: {
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      bottom: 30,
      zIndex: 10
    }
  })
);

const Camera = () => {
  const classes = useStyles();
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);
  const webcamRef = React.useRef(null);
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log("imageSrc", imageSrc);
  }, [webcamRef]);

  React.useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    setWidth(width);
    setHeight(height);
  });

  const videoConstraints = {
    width: 375,
    height: 667,
    facingMode: "user"
  };
  return (
    <>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
      />
      <div className={classes.buttonStyle}>
        <Fab color="primary" onClick={capture}>
          <PhotoCameraIcon />
        </Fab>
      </div>
    </>
  );
};
export default Camera;
