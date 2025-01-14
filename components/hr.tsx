import Border from '@/public/images/hex.jpg'

export default function HorizontalRule() {
  return (
    <div className="h-2 bg-cover" style={{ backgroundImage: `url(${Border.src})` }}>
      <div className="bg-black bg-opacity-50 h-full"></div>
    </div>
  );
}
