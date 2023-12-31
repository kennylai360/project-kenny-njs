import appStyles from './app.module.css';

export default function HomePage(): React.ReactNode {
  return (
    <>
      <h1 className={appStyles.headingAlign}>Kenny Kin Kee Lai</h1>
      <h2 className={appStyles.headingAlign}>
        Frontend Developer & Hobbyist Photographer
      </h2>
    </>
  );
}
