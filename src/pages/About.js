import PageTitle from "../components/PageTitle";
import Text from "../components/Text"

export default function About() {
  var text = `Phạm Tuyên - ${new Date().getFullYear() - 2008} tuổi`
  return (
    <>
      <PageTitle name="Phạm Tuyên - Về tôi"/>
      <h2><Text text={text}/></h2>
    </>
  );
}