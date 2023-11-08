import { Modal } from "react-responsive-modal";
const Information = (props) => {
  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.onCloseModal}
        center
        classNames={{
          overlayAnimationIn: "customEnterOverlayAnimation",
          overlayAnimationOut: "customLeaveOverlayAnimation",
          modalAnimationIn: "customEnterModalAnimation",
          modalAnimationOut: "customLeaveModalAnimation",
        }}
        animationDuration={800}
      >
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </Modal>
      -
    </div>
  );
};
export default Information;
