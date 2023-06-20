import QueueAnim from 'rc-queue-anim';
interface IProps {
  title: string;
}
export default function IndexPage({ title }: IProps) {
  return (
    <div
      style={{
        padding: '100px 0 120px',
        textAlign: 'center',
        color: '#fff',
        fontSize: 36,
        height: 320,
      }}
    >
      <QueueAnim
        delay={300}
        className="queue-simple"
        animConfig={[
          { opacity: [1, 0], translateX: [0, 150] },
          { opacity: [0, 0], translateX: [0, -150] },
        ]}
      >
        <div key="title">{title}</div>
      </QueueAnim>
    </div>
  );
}
