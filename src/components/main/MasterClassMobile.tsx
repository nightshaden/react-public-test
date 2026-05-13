export default function MasterClassMobile({
  ref,
}: {
  ref: React.Ref<HTMLElement>;
}) {
  return (
    <section ref={ref}>
      <div className="mt-40 py-4">
        <h1>마스터클래스 & 테이스팅 세션</h1>
        <h2>Master Class & Tasting Session</h2>
      </div>
    </section>
  );
}
