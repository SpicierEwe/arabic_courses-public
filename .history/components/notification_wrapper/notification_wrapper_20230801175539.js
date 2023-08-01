export default function NotificationWrapperComponent(props) {
  return (
    <div>
      <div>Notification</div>
      <div>{props.children}</div>
    </div>
  );
}
