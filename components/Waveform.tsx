export function Waveform() {
  return (
    <div className="waveform" aria-hidden="true">
      {Array.from({ length: 20 }, (_, i) => (
        <span key={i} />
      ))}
    </div>
  );
}
