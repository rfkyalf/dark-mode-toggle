export default function BgVideolight() {
  return (
    <video width={1920} height={1080} autoPlay loop muted className="w-screen h-screen object-cover">
      <source src="/videos/bglight.mp4" type="video/mp4" />
    </video>
  );
}
