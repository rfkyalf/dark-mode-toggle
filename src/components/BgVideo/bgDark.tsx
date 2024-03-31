export default function BgVideoDark() {
  return (
    <video width={1920} height={1080} autoPlay loop muted className="w-screen h-screen object-cover">
      <source src="/videos/bgdark.mp4" type="video/mp4" />
    </video>
  );
}
