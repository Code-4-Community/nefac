import Member from "../../src/components/leadership-page/Member";

export const LeadershipPersonBlock = ({ attributes }: any) => {
  const name = attributes?.name ?? 'Unnamed';
  const title = attributes?.description ?? '';

  return <Member name={name} title={title} />;
};
